<?php
/**
 * Created by PhpStorm.
 * User: edgarsand
 * Date: 20/12/18
 * Time: 10:55
 */

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\BloquesHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Routing\Route;

class MostViewedController extends Controller
{
    /**
     * @var \Illuminate\Contracts\Filesystem\Filesystem
     */
    protected $diskSrc;

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
            
        $this->diskSrc = Storage::disk('rsc');
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
    }

    /**
     * @param Route $route
     * @param BloquesHelper $bloquesHelper
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function show( Route $route, BloquesHelper $bloquesHelper, Request $request )
    {
        $channel = "mas-leidas";
        $payload = $this->_getMostViewed();

        if (is_null($payload) || count($payload) < 1)
            abort(404);

        $sectionTitle = __('most viewed of') ." ". env('APP_ALTER_NAME','APP_NAME');
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $noticias = [];
        foreach ($payload as $key => $new) {
            $new['hat'] = '#'.($key+1);
            $new['bloque'] = 'middle';
            //dd($new);
            array_push($noticias, $new);
        }

        $homedata = $bloquesHelper->generateHomedata(['sidebar']);
        $sidebar_content = $bloquesHelper->generateContent($homedata)['sidebar'];

        $amphtml = route('mostviewed.amp');

        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'channel' => $channel,
            'section' => "sitios.$site.canal",
        ];

        return view('channels.index', compact('channel', 'noticias', 'sectionTitle', 'sidebar_content', 'page_description', 'analytics_data', 'amphtml'));
    }


    public function amp( Route $route, BloquesHelper $bloquesHelper, Request $request )
    {
        $channel = "mas-leidas";
        $payload = $this->_getMostViewed();

        if (is_null($payload) || count($payload) < 1)
            abort(404);

        $sectionTitle = __('most viewed of') ." ". env('APP_ALTER_NAME','APP_NAME');
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $noticias = [];
        foreach ($payload as $key => $new) {
            $new['hat'] = '#'.($key+1);
            $new['bloque'] = 'middle';
            //dd($new);
            array_push($noticias, $new);
        }

        $site = strtolower(env('APP_NAME', ''));

        $canonical = "https://".strtolower( env('APP_NAME') ).".perfil.com/".$channel;
        $canonical = route("mostviewed.show");

        $analytics_data = [
            'client'  => env('ANALYTICS_CLIENT_ID','UA-4879118-1'),
            'channel' => $channel,
            'section' => "sitios.$site.canal",
            'url' => env('ANALYTICS_PATH_NAME', '') . 'amp/' . $channel
        ];

        return view('amp.lists', compact('channel', 'noticias', 'sectionTitle', 'page_description', 'analytics_data', 'canonical'));
    }



    /**
     * @param String $site
     * @return array|object
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function _getMostViewed()
    {
        $site =  strtolower(env('SITE_CODE', ''));

        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $pathMostViewed = str_replace('-sitecode-', $site, env('MOST_VIEWED_COMPLETE_FILE', ''));
            $content = ($this->diskSrc->exists($pathMostViewed)) ? json_decode($this->diskSrc->get($pathMostViewed), true) : [];
        } else {
            $content = Cache::remember("most-viewed-complete-$site", 1, function () use ($site) {
                $path = str_replace('-sitecode-', $site, env('MOST_VIEWED_COMPLETE_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
            });
        }

        //dd($content);

        $articles = [];
        foreach ($content as $article)
            array_push($articles, $this->_parseMostViewedArticle($article, $site));

        //dd($articles);
        return $articles;
    }

    /**
     * @param array $item
     * @param String $site
     * @return array
     */
    protected function _parseMostViewedArticle(Array $item, String $site = 'weekend')
    {
        // Sites URLS
        $sites_urls = [
            'perfil' => 'https://www.perfil.com',
            strtolower( env('SITE_CODE', '') ) => 'https://'.strtolower( env('APP_NAME', '') ).'.perfil.com'
        ];

        // Imagen
        if (isset($item['imgSrc']) && $item['imgSrc'] != '')
            $imagen = $item['imgSrc'];
        else
            $imagen = 'http://fotos.perfil.com/2016/07/26/default.jpg';

        // Url
        $url = ($site == strtolower(env('APP_NAME', 'www'))) ? asset(ltrim($item['pagePath']?? '')) : $sites_urls[$site] . $item['pagePath']?? '';

        return [
            'title' => $item['pageTitle']?? '',
            'permalink' => $url,
            'main_image' => [ 'srcs' => ['small-wide' => $imagen],'src' => $imagen, 'title' => '', 'caption'=> $item['pageTitle']?? '' ],
            'hat'=> '',
            'home_title' => $item['pageTitle']?? '',
            'headline' => '',
            'credit' => '',
            'author' => ['fullname'=>''],
            'date_available' => '',
            'signed' => 'N'
        ];
    }
}
