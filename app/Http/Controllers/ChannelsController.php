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
use Illuminate\Routing\Route;

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
     * @param BloquesHelper $bloquesHelper
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function show(Route $route, BloquesHelper $bloquesHelper)
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

        $homedata = $bloquesHelper->generateHomedata(['sidebar']);
        $sidebar_content = $bloquesHelper->generateContent($homedata)['sidebar'];

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
}