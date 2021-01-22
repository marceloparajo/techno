<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 31/7/18
 * Time: 19:49
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\BlockDistributionsHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class HomeController extends Controller
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
     * HomeController constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
    }

    /**
     * @param BlockDistributionsHelper $blockDistributionsHelper
     * @return Application|ResponseFactory|Response
     */
    public function index(BlockDistributionsHelper $blockDistributionsHelper)
    {
        $home_content = $blockDistributionsHelper->getHomedata();

        $amphtml = route('home.amp');

        // Analytics
        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'section' => "sitios.$site.home"
        ];

        $view_content = view('home.index', compact('home_content', 'analytics_data', 'amphtml'));
        return response($view_content)->header('Cache-Control', 'max-age=120, public');
    }

    /*public function amp()
    {
        $site = strtolower(env('SITE_CODE', ''));

        // Obtengo datos de homedata
        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $diskRsc = Storage::disk('rsc');
            $pathHomeData = str_replace('-sitecode-', $site, env('HOMEDATA_FILE', ''));
            $homedata = ($diskRsc->exists($pathHomeData)) ? collect(json_decode($diskRsc->get($pathHomeData), true)) : [];
        } else {
            $pathHomeData = str_replace('-sitecode-', $site, env('HOMEDATA_URL', ''));
            $content = file_get_contents($pathHomeData);
            $homedata = collect(json_decode($content, true));
        }

        // Obtengo las noticias
        $home_content = $bloquesHelper->generateContent( $homedata );

        $noticias = $bloquesHelper->getHomeList( $home_content );
        //dd($noticias);
        $canonical = route('home.index');
        $sectionTitle = __('Home');
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        // Analytics
        $site = strtolower(env('APP_NAME', ''));
        $channel = "home";

        $analytics_data = [
            'client'  => env('ANALYTICS_CLIENT_ID','UA-4879118-1'),
            'channel' => $channel,
            'section' => "sitios.$site.home",
            'url' => env('ANALYTICS_PATH_NAME', '') . 'amp/' . $channel
        ];

        return view('amp.lists', compact('channel', 'noticias','sectionTitle', 'page_description', 'analytics_data', 'canonical'));
    }*/
}
