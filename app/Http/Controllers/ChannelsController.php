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
    public function show(Route $route)
    {
        $channel = $route->parameter('channel');
        $payload = $this->apiHelper->getNewsFromChannel($channel);

        if (is_null($payload->DATA))
            abort(404);

        $posts = $payload->DATA;
        $sectionTitle = $posts[0]['channel_name'];
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $noticias = [];
        foreach ($posts as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            $new['bloque'] = 'middle';
            array_push($noticias, $new);
        }

        share([
            'eplanning' => [
                'client' => env('ADS_CLIENT', ''),
                'sec' => 'seccion_' . $channel
            ]
        ]);

        $view_content = view('channels.index', compact('channel', 'noticias', 'sectionTitle', 'page_description'));
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

        $author_piority_order = ['jfontevecchia', 'ncastro', 'jduranbarba', 'ggonzalez', 'jcalvo', 'qquintin', 'jpetrarca'];

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
     * @return Application|Factory|View
     * @throws FileNotFoundException
     */
    public function showCustomizable(Route $route)
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
        $page_title = 'Reperfilar{canal}';
        $page = $route->parameter('channel') ?? 'home';
        $channel = str_replace('/{channel}', '', $route->uri);

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

                $page_title = str_replace('{canal}', '', $page_title);

                $view_content = view("home.$channel", compact('page_title', 'subchannels_list', 'destaque_posts', 'subchannel_posts'));
                return response($view_content)->header('Cache-Control', 'max-age=300, public');

            default:

                if (! $this->_channelExists($page)) abort(404);
                $payload = $this->apiHelper->getNewsFromMainChannel($channel, $page, 40);
                $posts = [];

                foreach ($payload->DATA as $post)
                    array_push($posts, $this->parseHelper->parseNoticia($post));

                $page_title = str_replace('{canal}', ' | ' . ucfirst($page), $page_title);

                $view_content = view("channels.$channel", compact('posts', 'page_title', 'page', 'subchannels_list'));
                return response($view_content)->header('Cache-Control', 'max-age=300, public');
        }
    }

    /**
     * @param string $channel
     * @return bool
     * @throws FileNotFoundException
     */
    protected function _channelExists(string $channel)
    {
        $site = strtolower(env('SITE_CODE', 'perfil'));

        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $diskRsc = Storage::disk('rsc');
            $path_channels = str_replace('-sitecode-', $site, env('CHANNELS_FILE', ''));
            $channels = ($diskRsc->exists($path_channels)) ? json_decode($diskRsc->get($path_channels), true) : [];
        } else {
            $channels = Cache::remember('channels-list', 1, function () use ($site) {
                $path = str_replace('-sitecode-', $site, env('CHANNELS_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
            });
        }

        return in_array($channel, $channels);
    }
}
