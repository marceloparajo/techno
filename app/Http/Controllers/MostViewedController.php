<?php
/**
 * Created by PhpStorm.
 * User: edgarsand
 * Date: 20/12/18
 * Time: 10:55
 */

namespace App\Http\Controllers;

use App\Http\Helpers\BlockDistributionsHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\View\View;

class MostViewedController extends Controller
{
    /**
     * @var Filesystem
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
     * @param BlockDistributionsHelper $blockDistributionsHelper
     * @return Application|ResponseFactory|Response
     */
    public function show(BlockDistributionsHelper $blockDistributionsHelper)
    {
        $channel = "mas-leidas";
        $noticias = $blockDistributionsHelper->getMostViewed(env('SITE_CODE', 'perfil'));

        share([
            'eplanning' => [
                'client' => env('ADS_CLIENT', ''),
                'sec' => 'seccion_ultimo-momento'
            ]
        ]);

        $view_content = view('channels.most-viewed', compact('channel', 'noticias'));
        return response($view_content)->header('Cache-Control', 'max-age=1800, public');//300
    }

    /**
     * @return Application|Factory|View
     * @throws FileNotFoundException
     */
    public function amp()
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
     * @return array|object
     * @throws FileNotFoundException
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
