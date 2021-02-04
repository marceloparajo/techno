<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 10/10/2018
 * Time: 01:27
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
use Illuminate\View\View;

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
     * @return Application|ResponseFactory|Response
     */
    public function show(Route $route)
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

        $tag_title = str_replace("-", " ", $tag) ;
        $sectionTitle = __('news of') ." ". $tag_title;
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        share([
            'eplanning' => [
                'client' => env('ADS_CLIENT', ''),
                'sec' => 'seccion_tag'
            ]
        ]);

        $view_content = view('tags.index', compact('noticias', 'tag', 'tag_title', 'sectionTitle', 'page_description'));
        return response($view_content)->header('Cache-Control', 'max-age=300, public');
    }

    /**
     * @param string $key
     * @param string $format
     * @return string
     */
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

    /**
     * @param Route $route
     * @return Application|Factory|View
     */
    public function amp(Route $route)
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
