<?php
/**
 * Created by PhpStorm.
 * User: esand
 * Date: 20/12/2018
 * Time: 9:42
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;

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
     * @param Request $request
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {
        $sectionTitle = __('news search')." ". env('APP_ALTER_NAME', '');
        $search_term = $request->get('q') ?? '';

        if(isset($request->q) && !empty($request->q)){
            $sectionTitle = __('search result of') ." '". str_replace("-", " ", $search_term) ."'";
        }

        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        return view('search.index', compact('sectionTitle', 'page_description', 'search_term'));
    }

}
