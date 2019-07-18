<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 10/10/2018
 * Time: 01:27
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\BloquesHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Routing\Route;

class TagsController extends Controller
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
     * TagsController constructor.
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
        $tag = $route->parameter('tag');
        $payload = $this->apiHelper->getNewsFromTag($tag);

        if (count($payload) <= 0)
            abort(404);

        $noticias = [];
        foreach ($payload['DATA'] as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);

            /**
            if ($key == 0)
                $new['bloque'] = 'first';
            else if (($key % 5) == 0 )
                $new['bloque'] = 'big';
            else
            **/
                $new['bloque'] = 'middle';

            array_push($noticias, $new);
        }

        $homedata = $bloquesHelper->generateHomedata(['sidebar']);
        $sidebar_content = $bloquesHelper->generateContent($homedata)['sidebar'];

        $tag_title = str_replace("-", " ", $tag) ;
        $sectionTitle = __('news of') ." ". $tag_title;
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $type = explode("/",$route->uri)[0];
        $amphtml = route($this->_getRouteName($type,'amp'), $tag);

        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'tag' => $tag,
            'section' => "sitios.$site.tag",
        ];

        return view('tags.index', compact('noticias', 'sidebar_content', 'tag', 'tag_title', 'sectionTitle', 'page_description', 'analytics_data','amphtml'));
    }

    protected function _getRouteName( $key ='', $format = "show" ):string
    {
        $retValue = '';
        switch ($key) {
            case 'tags':
                $retValue = "tags.".$format;
                break;
            case 'cine':
                $retValue = "tags.movies.".$format;
                break;
            case 'eventos':
                $retValue = "tags.events.".$format;
                break;
            case 'lugares':
                $retValue = "tags.locations.".$format;
                break;
            case 'temas':
            //case 'topics':
                $retValue = "tags.themes.".$format;
                break;
            
            default:
                $retValue = "tags.".$key.".".$format;
                break;
        }
        return $retValue;
    }

    public function amp(Route $route, BloquesHelper $bloquesHelper)
    {
        $tag = $route->parameter('tag');
        $payload = $this->apiHelper->getNewsFromTag($tag);

        $type = explode("/",$route->uri)[0];

        if (count($payload) <= 0)
            abort(404);

        $channel = $tag;
        $posts = $payload['DATA'];

        $noticias = [];
        foreach ($posts as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            array_push($noticias, $new);
        }

        $tag_title = str_replace("-", " ", $channel) ;
        $sectionTitle = __('news of') ." ". $tag_title;
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $canonical = route($this->_getRouteName($type,'show'), $tag);

        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'client'  => env('ANALYTICS_CLIENT_ID','UA-4879118-1'),
            'tag' => $channel,
            'section' => "sitios.$site.tag",
            'url' => env('ANALYTICS_PATH_NAME', '') . 'amp/'.$type.'/' . $channel
        ];

        return view('amp.lists', compact('noticias', 'channel', 'tag_title', 'sectionTitle', 'page_description', 'analytics_data', 'canonical'));
    }
}