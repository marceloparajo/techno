<?php
/**
 * Created by PhpStorm.
 * User: esand
 * Date: 20/12/2018
 * Time: 9:42
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\BloquesHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Routing\Route;
use Illuminate\Http\Request;

class SearchController extends Controller
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
     * SitemapsController constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
    }

    /**
     * [index description]
     * @param  Route         $route         [description]
     * @param  BloquesHelper $bloquesHelper [description]
     * @return [type]                       [description]
     */
    public function index(Route $route, BloquesHelper $bloquesHelper, Request $request)
    {
        $sectionTitle = __('news search')." ". env('APP_ALTER_NAME', '');

        if(isset($request->q) && !empty($request->q)){
            $sectionTitle = __('search result of') ." '". str_replace("-", " ", $request->q) ."'";
        }

        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $homedata = $bloquesHelper->generateHomedata(['sidebar']);
        $sidebar_content = $bloquesHelper->generateContent($homedata)['sidebar'];

        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'channel' => 'buscador',
            'section' => "sitios.$site.canal",
        ];

        return view('search.index', compact('sectionTitle', 'page_description', 'sidebar_content', 'analytics_data'));
    }

}