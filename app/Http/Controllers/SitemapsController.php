<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 09/10/2018
 * Time: 15:42
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\ParseHelper;
use App\Http\Helpers\SimpleXMLExtended;
use Carbon\Carbon;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use SimpleXMLElement;

class SitemapsController extends Controller
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
     * @return Application|ResponseFactory|Response
     */
    public function showGoogleNewsIndex()
    {
        $dates = $this->apiHelper->getLastDatesAvailables();
        $sitemaps = [];

        if (count($dates['DATA']) <= 0) abort(404);

        foreach ($dates['DATA'] as $item) {
            $date = Carbon::createFromFormat('Y-m-d', $item['date']);

            $response = $this->apiHelper->getLastDateAvailableFromDay($date->year, $date->month, $date->day);

            if (count($response) <= 0 || $response['DATA']['date'] == '') continue;

            $date = Carbon::createFromFormat('F, d Y G:i:s P', $response['DATA']['date']);
            array_push($sitemaps, [
                'loc' => route('sitemaps.googlenews.day', [$date->year, $date->month, $date->day]),
                'lastmod' => $date->format('c')
            ]);
        }

        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>');

        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.googlenews.videos'));

        foreach ($sitemaps as $item) {
            $sitemap = $xml->addChild('sitemap');
            $sitemap->addChild('loc', $item['loc']);
            $sitemap->addChild('lastmod', $item['lastmod']);
        }


        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=300, public']);
    }

    /**
     * @param Int $year
     * @param Int $month
     * @param Int $day
     * @return Application|ResponseFactory|Response
     */
    public function showGoogleNewsDay(Int $year, Int $month, Int $day)
    {
        $response = $this->apiHelper->getNewsFromDay($year, $month, $day);

        if (count($response) <= 0) abort(404);

        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml"></urlset>');

        foreach ($response['DATA'] as $item) {
            $post = $this->parseHelper->parseNoticia($item);

            $url = $xml->addChild('url');
            $url->addChild('loc', $post['permalink']);

            $image = $url->addChild('image:image', '', 'http://www.google.com/schemas/sitemap-image/1.1');
            $image->addChild('image:loc', $post['main_image']['srcs']['big-wide']);
            $image->addChild('image:title', $post['main_image']['title']);
            $image->addChild('image:caption', $post['main_image']['caption']);

            $news = $url->addChild('news:news', '', 'http://www.google.com/schemas/sitemap-news/0.9');
            $publication = $news->addChild('news:publication');
            $publication->addChild('news:name', env('APP_ALTER_NAME', ''));
            $publication->addChild('news:language', config('app.locale'));

            $news->addChild('news:genres', 'UserGenerated');

            $news->addChild('news:publication_date', $post['date_available']->toIso8601String());

            $news->addChild('news:title', $post['title']);
            $news->addChild('news:keywords', $post['tags']);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=60, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function showGoogleNewsVideos()
    {
        $disk = Storage::disk('rsc');
        $path = 'resources/sitemaps/' . strtolower(env('APP_NAME', '')) . '/videos.json';

        if (! $disk->exists($path))
            abort(404);

        $content = $disk->get($path);
        $posts = json_decode($content, true);

        $xml = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"></urlset>');

        foreach ($posts as $post) {
            $url = $xml->addChild('url');
            $url->addChild('loc', $post['permalink']);

            foreach ($post['videos'] as $video) {
                $xml_video = $url->addChild('video:video', '', 'http://www.google.com/schemas/sitemap-video/1.1');
                $xml_video->addChild('video:thumbnail_loc', $video['thumbnail']);
                $xml_video->addChildWithCDATA('video:title', $video['title']);
                if ($video['description'] != '') $xml_video->addChildWithCDATA('video:description', $video['description']);
                $xml_video->addChild('video:player_loc', $video['url']);
                $xml_video->addChild('video:duration', $video['duration']);
                $xml_video->addChild('video:publication_date', $video['publication']);

                if ($video['plays'] > 0)
                    $xml_video->addChild('video:view_count', $video['plays']);
            }
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=60, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function showIndex()
    {
        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>');

        // Articles
        $disk = Storage::disk('rsc');
        $dir_path = 'resources/sitemaps/' . strtolower(env('SITE_CODE', '')) . '/articles';

        $files = $disk->files($dir_path);

        foreach (array_reverse($files) as $file) {
            // Obtengo fecha último articulo
            $sitemap_file = json_decode($disk->get($file), true);
            $last_mod = $sitemap_file[0]['lastmod'];

            $elements = explode('/', $file);
            $filename = end($elements);

            $filename = str_replace('.json', '', $filename);
            $date_parts = explode('-', $filename);

            $year = $date_parts[0] ?? 0;
            $month = $date_parts[1] ?? 0;

            if ($year <= 0 || $month <= 0)
                continue;

            $loc = route('sitemaps.show.month', [$date_parts[0], $date_parts[1]]);

            $sitemap = $xml->addChild('sitemap');
            $sitemap->addChild('loc', $loc);
            $sitemap->addChild('lastmod', $last_mod);
        }

        // Channels
        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.channels'));

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=60, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function showChannels()
    {
        $disk = Storage::disk('rsc');
        $path = 'resources/others/' . strtolower(env('APP_NAME', '')) . '/channels.json';

        if (! $disk->exists($path))
            abort(404);

        $content = $disk->get($path);
        $items = json_decode($content, true);

        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        foreach ($items as $item) {
            $loc = route('channels.show', $item);

            $url = $xml->addChild('url');
            $url->addChild('loc', $loc);
            $url->addChild('changefreq', 'weekly');
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=60, public']);
    }

    /**
     * @param Int $year
     * @param Int $month
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function showMonth(Int $year, Int $month)
    {
        $disk = Storage::disk('rsc');
        $month = str_pad($month, 2, '0', STR_PAD_LEFT);
        $path = 'resources/sitemaps/' . strtolower(env('SITE_CODE', '')) . "/articles/$year-$month.json";

        if (! $disk->exists($path))
            abort(404);

        $content = $disk->get($path);
        $items = json_decode($content, true);

        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        foreach ($items as $item) {
            $src = str_replace('/noticias/', '/noticias/', $item['url']);
            $url = $xml->addChild('url');
            $url->addChild('loc', $src);
            $url->addChild('lastmod', $item['lastmod']);
            $url->addChild('priority', $item['priority']);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=300, public']);
    }
}
