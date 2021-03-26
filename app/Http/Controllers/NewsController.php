<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 4/8/18
 * Time: 14:51
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\View as ViewFacade;
use Illuminate\View\View;
use PHPHtmlParser\Exceptions\ChildNotFoundException;
use PHPHtmlParser\Exceptions\CircularException;
use PHPHtmlParser\Exceptions\ContentLengthException;
use PHPHtmlParser\Exceptions\LogicalException;
use PHPHtmlParser\Exceptions\NotLoadedException;
use PHPHtmlParser\Exceptions\StrictException;
use simplehtmldom_1_5\simple_html_dom;
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
     * @return Application|ResponseFactory|Response
     */
    public function show(Route $route)
    {
        $slug = Str::slug($route->parameter('slug') ?? '');

        if ($slug == '')
            abort(404);

        $payload = $this->apiHelper->getNoticia($slug);
        if (is_null($payload->DATA))
            abort(404);

        if ($payload->DATA['published'] != 1 && !env('APP_MODE_PREVIEW', false))
            abort(404);

        $noticia = $this->parseHelper->parseNoticia($payload->DATA);
        $jsonStructured = $this->parseHelper->parseNoticiaStructuredData($noticia);

        // Si el embed code tiene Video de ePlanning, Youtube y Maps de Google lo seteo como featured content
        if (Str::contains($noticia['embed_code_original'], ['epvideo', 'eplanning', 'youtubelive', 'googlemaps', 'youtube', 'rudovideo']))
            $noticia['featured_content'] = 'embed_code';
        else
            $noticia['featured_content'] = 'image';

        $body = $noticia['body'];#$this->_insertAdsMiddleBody($noticia['body']);

        $displayAuthor = ($noticia['signed']) ? "block":"none";

        // ----- PAYWALL -----
        $has_edition = isset($noticia['issue']) && !is_null( $noticia['issue']);

        if ($has_edition)
            $noticia['paywall_type'] = 'magico';
        else if (! isset($noticia['paywall_type']) || $noticia['paywall_type'] == '')
            $noticia['paywall_type'] = 'poroso';

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
            ],
            'eplanning' => [
                'client' => env('ADS_CLIENT', ''),
                'sec' => $noticia['channel']['slug'] . '_articulo'
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

        $view_content = view($view, compact('noticia', 'jsonStructured', 'body', 'displayAuthor'));
        return response($view_content)->header('Cache-Control', 'max-age=300, public');
    }

    /**
     * @param string $body
     * @return string
     */
    protected function _insertAdsMiddleBody(string $body): string
    {
        $ad_html = '<div style="width: 100%; max-height: 250px; height: 250px; display: flex; flex-direction: column; align-items: center; margin: 10px 0; overflow: hidden;" class="d-lg-none">
    <div id="" class="ads-space d-lg-none" data-id="central_300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
</div>';

        return $this->_insertContentBetweenParagraphs($body, 2, $ad_html);
    }

    /**
     * @param Route $route
     * @return Application|ResponseFactory|Response
     * @throws ChildNotFoundException
     * @throws CircularException
     * @throws ContentLengthException
     * @throws LogicalException
     * @throws NotLoadedException
     * @throws StrictException
     */
    public function amp(Route $route)
    {
        $slug = trim($route->parameter('slug') ?? '');

        if ($slug == '')
            abort(404);

        $payload = $this->apiHelper->getNoticia($slug, 'amp');

        if (is_null($payload) || is_null($payload->DATA))
            abort(404);

        $noticia = $this->parseHelper->parseNoticia($payload->DATA);
        $jsonStructured = $this->parseHelper->parseNoticiaStructuredData($noticia);

        // Publicidad en el medio del body
        $body = str_replace('-eplanning_client_id-', '24A92', $noticia['body']);
        $body = str_replace('-eplanning_ads_id-', '300x250x2', $body);
        $body = str_replace('-eplanning_sec-', 'new_amp', $body);

        $view_content = view('amp.news', compact('noticia', 'jsonStructured', 'body'));
        return response($view_content)->header('Cache-Control', 'max-age=300, public');

    }

    /**
     * @param string $text
     * @param int $position
     * @param string $content
     * @return simple_html_dom|string
     */
    protected function _insertContentBetweenParagraphs(string $text, int $position, string $content): string
    {
        if ($text == '') return $text;

        $htmlDomParser = new HtmlDomParser;
        $dom = $htmlDomParser::str_get_html($text);
        $dom->find('p', $position)->innertext = $content;
        $dom->save();

        return $dom;
    }
}
