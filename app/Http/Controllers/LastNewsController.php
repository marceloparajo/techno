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
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\View\View;

class LastNewsController extends Controller
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
     * @param BloquesHelper $bloquesHelper
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function show(BloquesHelper $bloquesHelper)
    {
        $channel = "ultimas-noticias";
        $payload = $this->apiHelper->getLastPost();

        if (is_null($payload->DATA))
            abort(404);

        $sectionTitle = __('last news of') ." ". env('APP_ALTER_NAME','APP_NAME');
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $noticias = [];
        foreach ($payload->DATA as $key => $item) {
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

        $amphtml = route('lastnews.amp');

        $site = strtolower(env('APP_NAME', ''));
        $analytics_data = [
            'channel' => $channel,
            'section' => "sitios.$site.canal",
        ];

        $view_content = view('channels.index', compact('channel', 'noticias', 'sectionTitle', 'sidebar_content', 'page_description', 'analytics_data', 'amphtml'));
        return response($view_content)->header('Cache-Control', 'max-age=120, public');
    }

    /**
     * @return Application|Factory|View
     */
    public function amp()
    {
        $channel = "ultimas-noticias";
        $payload = $this->apiHelper->getLastPost();

        if (is_null($payload->DATA))
            abort(404);

        $posts = $payload->DATA;
        $sectionTitle = __('last news of') ." ". env('APP_ALTER_NAME','APP_NAME');
        $page_description = $sectionTitle.". ". env('SITE_DESCRIPTION','');

        $noticias = [];
        foreach ($posts as $key => $item) {
            $new = $this->parseHelper->parseNoticia($item);
            array_push($noticias, $new);
        }

        $site = strtolower(env('APP_NAME', ''));

        $canonical = route("lastnews.show", $channel);

        $analytics_data = [
            'client'  => env('ANALYTICS_CLIENT_ID','UA-4879118-1'),
            'channel' => $channel,
            'section' => "sitios.$site.canal",
            'url' => env('ANALYTICS_PATH_NAME', '') . 'amp/' . $channel
        ];

        return view('amp.lists', compact('channel', 'noticias', 'sectionTitle', 'page_description', 'analytics_data', 'canonical'));
    }
}
