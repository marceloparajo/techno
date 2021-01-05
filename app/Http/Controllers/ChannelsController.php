<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 8/8/18
 * Time: 10:55
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\BloquesHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\View\Factory;
use Illuminate\Routing\Route;
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
     * @var BloquesHelper
     */
    protected $bloquesHelper;

    /**
     * ChannelsController constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     * @param BloquesHelper $bloquesHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper, BloquesHelper $bloquesHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
        $this->bloquesHelper = $bloquesHelper;
    }

    /**
     * @param Route $route
     * @return Factory|View
     */
    public function show(Route $route)
    {
        $channel = $route->parameter('channel');
        $payload = $this->apiHelper->getNewsFromChannel($channel);

        //dd($payload);
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

        //dd($noticias);

        $homedata = $this->bloquesHelper->generateHomedata(['sidebar']);
        $sidebar_content = $this->bloquesHelper->generateContent($homedata)['sidebar'];

        $amphtml = route('channels.amp', $channel);

        $site = strtolower(env('SITE_CODE', ''));
        $analytics_data = [
            'channel' => $channel,
            'section' => "sitios.$site.canal",
        ];

        return view('channels.index', compact('channel', 'noticias', 'sectionTitle', 'sidebar_content', 'page_description', 'analytics_data', 'amphtml'));
    }

    public function amp(Route $route, BloquesHelper $bloquesHelper){
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
    }

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
                return view("home.$channel", compact('page_title', 'subchannels_list', 'destaque_posts', 'subchannel_posts'));

            default:

                if (! $this->_channelExists($page)) abort(404);
                $payload = $this->apiHelper->getNewsFromMainChannel($channel, $page);
                $posts = [];

                foreach ($payload->DATA as $post)
                    array_push($posts, $this->parseHelper->parseNoticia($post));

                $page_title = str_replace('{canal}', ' | ' . ucfirst($page), $page_title);
                return view("channels.$channel", compact('posts', 'page_title', 'page', 'subchannels_list'));
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
