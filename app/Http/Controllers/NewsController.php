<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 4/8/18
 * Time: 14:51
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\BloquesHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\View as ViewFacade;
use Illuminate\View\View;
use Sunra\PhpSimple\HtmlDomParser;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    /**
     * @var ApiHelper
     */
    protected $apiHelper;

    /**
     * @var ParseHelper
     */
    protected $parseHelper;

    /**
     * NewsController constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
    }

    /**
     * @param Route $route
     * @param BloquesHelper $bloquesHelper
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function show(Route $route, BloquesHelper $bloquesHelper)
    {
        $slug = Str::slug($route->parameter('slug') ?? '');

        if ($slug == '')
            abort(404);

        $payload = $this->apiHelper->getNoticia($slug);
        if (is_null($payload->DATA))
            abort(404);

        if ($payload->DATA['published'] != 1 && !env('APP_MODE_PREVIEW', false))
            abort(404);

        $homedata = $bloquesHelper->generateHomedata(['sidebar']);
        $content = $bloquesHelper->generateContent($homedata);
        $sidebar_content = (isset($content['sidebar'])) ? $content['sidebar'] : [];

        $noticia = $this->parseHelper->parseNoticia($payload->DATA);
        $jsonStructured = $this->parseHelper->parseNoticiaStructuredData($noticia);

        $page_title = env('APP_ALTER_NAME', '') . ' | ' . $noticia['home_title'];
        $page_description = (isset($noticia['headline']) && !empty($noticia['headline']))? $noticia['home_title']. ". ". $noticia['headline']: $noticia['home_title'];

        // Si el embed code tiene Video de ePlanning, Youtube y Maps de Google lo seteo como featured content
        if (Str::contains($noticia['embed_code_original'], ['epvideo', 'eplanning', 'youtubelive', 'googlemaps', 'youtube', 'rudovideo']))
            $noticia['featured_content'] = 'embed_code';
        else
            $noticia['featured_content'] = 'image';

        $body = $this->_insertContentMiddle($noticia);

        $site = strtolower(env('APP_NAME', ''));

        $displayAuthor = ($noticia['signed']) ? "block":"none";
        $analytics_data = [
            'slug' => $noticia['slug'],
            'section' => "sitios.$site.nota",
            'author' => $noticia['author']['fullname'],
            'date' => $noticia['date_available']->format('F, d Y H:i:s O'),
            'id' => $noticia['id']
        ];

        // ----- PAYWALL -----
        $has_edition = isset($noticia['issue']) && !is_null( $noticia['issue']);
        $noticia['paywall_type'] = ($has_edition) || (!isset($noticia['paywall_type']) || is_null( $noticia['paywall_type']))
            ? 'poroso'
            : $noticia['paywall_type'];

        switch ($noticia['paywall_type']) {
            case 'abierto':
            case 'poroso':
            case 'magico':
                $paywall_type = 'metered';
                break;

            case 'cerrada':
                $paywall_type = 'premium';
                break;

            default:
                $paywall_type = 'metered';
        }
        // ------ /PAYWALL -----

        share([
            'light_gallery_images' => $noticia['gallery_lightbox'],
            'paywall' => [
                'type' => $paywall_type,
                'content_id' => $noticia['id'],
                'content_canal' => $noticia['channel']['slug'],
                'content_title' => $noticia['title'],
                'content_date' => $noticia['date_available']->toIso8601String(),
                'content_length' => strlen($noticia['body']),
                'show_metered_modal' => $has_edition || $noticia['paywall_type'] == 'magico',
                'author_id' => $noticia['author']['id'],
                'author_username' => $noticia['author']['username'],
                'author_fullname' => $noticia['author']['fullname']
            ]
        ]);

        # Reviso que la noticia pertenezca a un canal con vista personalizada. De lo contrario, muestro vista general.
        switch ($noticia['channel']['slug']) {
            case 'reperfilar':
                $view = 'news.show.reperfilar';
                break;

            default:
                $view = 'news.show.index';
        }

        $view_content = view($view, compact('noticia', 'jsonStructured', 'sidebar_content', 'page_title', 'page_description', 'analytics_data', 'body', 'displayAuthor'));
        return response($view_content)->header('Cache-Control', 'public');


    }

    /**
     * @param Route $route
     * @return Factory|View
     */
    public function amp(Route $route)
    {
        $slug = $route->parameter('slug') ?? '';

        if ($slug == '')
            abort(404);

        $payload = $this->apiHelper->getNoticia($slug, 'amp');
        if (is_null($payload->DATA))
            abort(404);

        $noticia = $this->parseHelper->parseNoticia($payload->DATA);
        $jsonStructured = $this->parseHelper->parseNoticiaStructuredData($noticia);

        $analytics_data = [
            'client' => env('ANALYTICS_CLIENT_ID', ''),
            'url' => env('ANALYTICS_PATH_NAME', '') . '/amp' . $noticia['source_url']
        ];

        // Publicidad en el medio del body
        $body = str_replace('-eplanning_client_id-', env('ADS_CLIENT', ''), $noticia['body']);
        $body = str_replace('-eplanning_ads_id-', '300x250x2', $body);
        $body = str_replace('-eplanning_sec-', 'new_amp', $body);

        return view('amp.news', compact('noticia', 'analytics_data', 'jsonStructured', 'body'));

    }

    /**
     * @param array $noticia
     * @param String $type
     * @return mixed|string
     */
    protected function _insertContentMiddle(Array $noticia, String $type = '')
    {
        $body = $noticia['body'];
        $cursor_pos = 0;

        // Busco <p> que sean hijos de ROOT (para agregar contenido dinámico luego)
        $paragraphs = $this->_getParagraphs($body, 0, 2);

        if (count($paragraphs) >= 2) {

            $relacionadas = $noticia['relacionadas'];

            // Inline (ads)
            $paragraphs = $this->_getParagraphs($body, $cursor_pos);
            $html = '<div id="" class="ads-space text-center d-md-none" data-id="inline" data-w="1" data-h="1" data-loaded="false" data-reload="false"></div>';
            $pos = $this->_getLastPosOfParagraph($body, $paragraphs[0]);
            $body = substr_replace($body, $html, $pos, 0);
            $cursor_pos = $pos + strlen($html);

            // Ubico las demás relacionadas entre N párrafos
            $destacadas_sin_ubicar = [];
            foreach (array_slice($relacionadas, 1) as $item) {
                $paragraphs = $this->_getParagraphs($body, $cursor_pos, env('JUMP_PARAGRAPHS_RELATED', 0));

                if ($this->_checkAppropiateParagraphs($body, $paragraphs)) {
                    $pos = $this->_getLastPosOfParagraph($body, $paragraphs[0]);
                    $view = ViewFacade::make('news.show.partials.noticia-relacionada', ['image' => $item['image']['srcs']['thumb'], 'title' => $item['title'], 'url' => $item['permalink'], 'type' => $type]);
                    $html = $view->render();
                    $body = substr_replace($body, $html, $pos, 0);
                    $cursor_pos = $pos + strlen($html);
                } else
                    array_push($destacadas_sin_ubicar, $item);
            }

            // Ubico destacadas que restan al final del cuerpo
            if (count($destacadas_sin_ubicar)) {
                $view = ViewFacade::make('news.show.partials.noticias-relacionadas', ['noticias' => $destacadas_sin_ubicar]);
                $html = $view->render();
                $body .= $html;
            }
        }

        return $body;
    }

    /**
     * @param String $body
     * @param array $paragraphs
     * @return bool
     */
    protected function _checkAppropiateParagraphs(String $body, Array $paragraphs)
    {
        if (count($paragraphs) < 2) return false;

        for ($i = 0; $i<=1; $i++) {
            $pos_start = $paragraphs[$i];
            $pos_end = $this->_getLastPosOfParagraph($body, $pos_start);

            if (($pos_end - $pos_start) < 25) return false;
        }

        return true;
    }

    /**
     * @param String $body
     * @param Int $from
     * @param Int $jump
     * @return array
     */
    protected function _getParagraphs(String $body, Int $from = 0, Int $jump = 0)
    {
        $htmlDomParser = new HtmlDomParser;

        $paragraphs = [];
        $dom = $htmlDomParser::str_get_html($body);
        $elements = $dom->find('p');

        foreach ($elements as $element) {
            if ($element->parent->tag == 'root' && $element->tag_start >= $from)
                array_push($paragraphs, $element->tag_start);
        }

        return array_slice($paragraphs, $jump);
    }

    /**
     * @param String $body
     * @param Int $pos_start
     * @return bool|int|null
     */
    protected function _getLastPosOfParagraph(String $body, Int $pos_start)
    {
        if ($pos_start > strlen($body)) return strlen($body);

        $pos = strpos($body, '</p>', $pos_start);

        return ($pos === false) ? null : $pos+4;
    }
}
