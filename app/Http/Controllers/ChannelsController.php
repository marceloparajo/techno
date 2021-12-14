<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 8/8/18
 * Time: 10:55
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\ImageHelper;
use App\Http\Helpers\ParseHelper;
use App\Http\Helpers\UtilsHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;
use PHPHtmlParser\Exceptions\ContentLengthException;

class ChannelsController extends Controller
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
     * ChannelsController constructor.
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
    public function show(Route $route, UtilsHelper $utilsHelper)
    {
        $channel = $route->parameter('channel');

        if (! $utilsHelper->_channelExists($channel)) abort(404);

        $payload = $this->apiHelper->getNewsFromChannel($channel);

        if (is_null($payload->DATA) || count($payload->DATA) <= 0)
            abort(404);

        $posts = $payload->DATA;
        $sectionTitle = $posts[0]['channel_name'];

        $noticias = [];
        foreach ($posts as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            $new['bloque'] = 'middle';
            array_push($noticias, $new);
        }

        share([
            'eplanning' => [
                'client' => env('ADS_CLIENT', ''),
                'sec' => 'seccion'
            ]
        ]);

        $view_content = view('channels.index', compact('channel', 'noticias', 'sectionTitle'));
        return response($view_content)->header('Cache-Control', 'max-age=300, public');
    }

    /**
     * @param ImageHelper $imageHelper
     * @return Application|ResponseFactory|Response
     */
    public function showColumnistas(ImageHelper $imageHelper)
    {
        $payload = $this->apiHelper->getColumnistas();
        $content = [];

        $author_piority_order = ['jfontevecchia', 'ncastro', 'jduranbarba', 'ggonzalez', 'jcalvo', 'qquintin', 'jpetrarca', 'rlloret'];

        // Recorro el contenido y lo agrupo por autor.
        foreach ($payload->DATA as $item) {
            if (! isset($content[$item['author_username']])) {
                $position = array_search($item['author_username'], $author_piority_order);

                $content[$item['author_username']] = [
                    'username' => $item['author_username'],
                    'first_name' => $item['author_firstname'],
                    'last_name' => $item['author_lastname'],
                    'slug' => $item['author_slug'],
                    'twitter' => $item['author_twitter'],
                    'facebook' => $item['author_facebook'],
                    'instagram' => $item['author_instagram'],
                    'google_plus' => $item['author_googleplus'],
                    'site' => $item['author_blogsite'],
                    'about' => $item['author_about'],
                    'image' => $imageHelper->generateUrlImageAuthor($item['author_username']),
                    'position' => ($position !== false) ? $position + 1 : 999,
                    'count_show_posts' => ($item['author_username'] == 'jfontevecchia') ? 2 : 1,
                    'posts' => []
                ];
            }

            array_push($content[$item['author_username']]['posts'], $this->parseHelper->parseNoticia($item));
        }

        $authors = array_values(Arr::sort($content, function($value) {
            return $value['position'];
        }));

        $view_content = view('channels.columnistas', compact('authors'));
        return response($view_content)->header('Cache-Control', 'max-age=600, public');
    }


    /*public function amp(Route $route)
    {
        $channel = $route->parameter('channel');
        $payload = $this->apiHelper->getNewsFromChannel($channel);

        if (is_null($payload->DATA))
            abort(404);

        $posts = $payload->DATA;
        $sectionTitle = __('news of') ." ". $posts[0]['channel_name'];
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $noticias = [];
        foreach ($posts as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            array_push($noticias, $new);
        }

        $site = strtolower(env('SITE_CODE', ''));

        $canonical = route('channels.show', $channel);

        $analytics_data = [
            'client'  => env('ANALYTICS_CLIENT_ID','UA-4879118-1'),
            'channel' => $channel,
            'section' => "sitios.$site.canal",
            'url' => env('ANALYTICS_PATH_NAME', '') . 'amp/seccion/' . $channel
        ];

        return view('amp.lists', compact('channel', 'noticias', 'sectionTitle', 'page_description', 'analytics_data', 'canonical'));
    }*/

    /**
     * @param Route $route
     * @param UtilsHelper $utilsHelper
     * @return Application|Factory|View
     * @throws FileNotFoundException
     * @throws \PHPHtmlParser\Exceptions\ChildNotFoundException
     * @throws \PHPHtmlParser\Exceptions\CircularException
     * @throws ContentLengthException
     * @throws \PHPHtmlParser\Exceptions\LogicalException
     * @throws \PHPHtmlParser\Exceptions\NotLoadedException
     * @throws \PHPHtmlParser\Exceptions\StrictException
     */
    public function showCustomizable(Route $route, UtilsHelper $utilsHelper)
    {
        $subchannels_list = [
            [
                'slug' => 'actualidad',
                'name' => 'Actualidad'
            ],
            [
                'slug' => 'politica',
                'name' => 'Política'
            ],
            [
                'slug' => 'economia',
                'name' => 'Economía'
            ],
            [
                'slug' => 'columnistas',
                'name' => 'Columnistas'
            ],
            [
                'slug' => 'programas',
                'name' => 'Programas'
            ]
        ];

        $page = $route->parameter('channel') ?? 'home';
        $channel = str_replace('/{channel?}', '', $route->uri);

        share([
            'eplanning' => [
                'client' => env('ADS_CLIENT', ''),
                'sec' => 'seccion_reperfilar'
            ]
        ]);

        switch ($page) {
            case 'home':
                $destaque_posts = [];
                $subchannel_posts = [];
                $destaquePosts = $this->apiHelper->getNewsWithDestaqueFromChannel($channel);

                foreach ($destaquePosts->DATA as $post)
                    array_push($destaque_posts, $this->parseHelper->parseNoticia($post));

                foreach ($subchannels_list as $subchannel) {
                    $item = $subchannel;
                    $item['posts'] = [];
                    $payload = $this->apiHelper->getNewsFromMainChannel($channel, $subchannel['slug']);
                    foreach ($payload->DATA as $post)
                        array_push($item['posts'], $this->parseHelper->parseNoticia($post));

                    array_push($subchannel_posts, $item);
                }

                $view_content = view("home.$channel", compact('subchannels_list', 'destaque_posts', 'subchannel_posts'));
                return response($view_content)->header('Cache-Control', 'max-age=300, public');

            default:

                if (! $utilsHelper->_channelExists($page)) abort(404);
                $payload = $this->apiHelper->getNewsFromMainChannel($channel, $page, 40);
                $posts = [];

                foreach ($payload->DATA as $post)
                    array_push($posts, $this->parseHelper->parseNoticia($post));

                $view_content = view("channels.$channel", compact('posts', 'page', 'subchannels_list'));
                return response($view_content)->header('Cache-Control', 'max-age=300, public');
        }
    }
}
