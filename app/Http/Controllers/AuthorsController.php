<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 01/10/2018
 * Time: 15:45
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\ParseHelper;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Routing\Route;
use Illuminate\View\View;
use PHPHtmlParser\Exceptions\ChildNotFoundException;
use PHPHtmlParser\Exceptions\CircularException;
use PHPHtmlParser\Exceptions\ContentLengthException;
use PHPHtmlParser\Exceptions\LogicalException;
use PHPHtmlParser\Exceptions\NotLoadedException;
use PHPHtmlParser\Exceptions\StrictException;

class AuthorsController extends Controller
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
     * AuthorsController constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
    }

    /**
     * @return Application|Factory|View
     */
    public function index()
    {
        abort(404);
        $authors = $this->apiHelper->getAllAuthors();

        return view('authors.index', compact('authors'));
    }

    /**
     * @param Route $route
     * @return Factory|View
     * @throws ChildNotFoundException
     * @throws CircularException
     * @throws ContentLengthException
     * @throws LogicalException
     * @throws NotLoadedException
     * @throws StrictException
     */
    public function show(Route $route)
    {
        $username = $route->parameter('username');
        $payload = $this->apiHelper->getPostsFromAuthor($username);

        if (is_null($payload) || is_null($payload->DATA) || count($payload->DATA) <= 0)
            abort(404);

        $author = $payload->DATA['author'];
        if( isset($author['image']['100']) )
            $author['image'] = $author['image']['100'];

        $author['blog'] = $author['blogsite'];
        $author['fullname'] = $author['firstname']." ". $author['lastname'];

        unset($payload->DATA['author']);
        $noticias = [];
        foreach ($payload->DATA as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            $new['bloque'] = 'middle';
            array_push($noticias, $new);
        }

        $sectionTitle = __('news of') ." ". $author['firstname']." ". $author['lastname'];

        return view('authors.show', compact('noticias', 'author', 'sectionTitle'));
    }

    /*public function amp(Route $route, BloquesHelper $bloquesHelper)
    {
        $username = $route->parameter('username');
        $payload = $this->apiHelper->getPostsFromAuthor($username);

        if (is_null($payload->DATA))
            abort(404);

        $author = $payload->DATA['author'];

        unset($payload->DATA['author']);

        $posts = $payload->DATA;
        $noticias = [];
        foreach ($posts as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            array_push($noticias, $new);
        }

        //dd($noticias);

        $sectionTitle = __('news of') ." ". $author['firstname']." ". $author['lastname'];
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $canonical = route("authors.show", $author);

        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'client'  => env('ANALYTICS_CLIENT_ID','UA-4879118-1'),
            'author_username' => $username,
            'section' => "sitios.$site.autor",
            'author_name' => $author['fullname'],
            'url' => env('ANALYTICS_PATH_NAME', '') . 'amp/autor/' . $username
        ];

        return view('amp.lists', compact('noticias', 'author', 'sectionTitle', 'page_description', 'analytics_data', 'canonical'));
    }*/
}
