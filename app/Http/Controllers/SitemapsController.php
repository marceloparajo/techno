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
     * El índice mostrará los sitemaps disponibles
     *
     * /lastposts.xml - Listado de las últimas 100 notas subidas
     * /google-news-lastposts.xml - Listado de las últimas 1000 noticias (o las que sean de las últimas 48 horas) con el markup de Google News
     * /channels.xml - Listado de secciones del sitio
     * /authors.xml - Listado de autores del sitio
     * /videos.xml - Listado de videos con markup de Google
     */
    public function index()
    {
        $current_date = Carbon::now();

        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>');

        // /lastposts
        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.lastposts'));
        $sitemap->addChild('lastmod', $current_date->toIso8601String());

        // Google News Lastposts
        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.googlenews.lastposts'));
        $sitemap->addChild('lastmod', $current_date->toIso8601String());

        // Channels
        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.channels'));

        // Authors
        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.authors'));

        // Videos
        $sitemap = $xml->addChild('sitemap');
        $sitemap->addChild('loc', route('sitemaps.videos'));

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=300, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     */
    public function showLastPosts()
    {
        $xml = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        $posts = $this->apiHelper->getLastPost(100, true);

        foreach ($posts->DATA as $post) {
            $noticia = $this->parseHelper->parseNoticia($post);

            $date_update = (! is_null($noticia['date_update'])) ? $noticia['date_update']->toIso8601String() : $noticia['date_available']->toIso8601String();

            $url = $xml->addChild('url');
            $url->addChild('loc', $noticia['permalink']);
            $url->addChild('lastmod', $date_update);
            $url->addChild('changefreq', 'always');
            $url->addChild('priority', 0.5);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=120, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     */
    public function showGoogleNewsLastPosts()
    {
        $xml = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml"></urlset>');

        $posts = $this->apiHelper->getLastPost(100, true);

        foreach ($posts->DATA as $post) {
            $noticia = $this->parseHelper->parseNoticia($post);

            $date_update = (! is_null($noticia['date_update'])) ? $noticia['date_update']->toIso8601String() : $noticia['date_available']->toIso8601String();

            $url = $xml->addChild('url');
            $url->addChild('loc', $noticia['permalink']);

            $image = $url->addChild('image:image', '', 'http://www.google.com/schemas/sitemap-image/1.1');
            $image->addChild('image:loc', $noticia['main_image']['srcs']['full-wide']);
            $image->addChildWithCDATA('image:title', $noticia['main_image']['title']);
            $image->addChildWithCDATA('image:caption', $noticia['main_image']['caption']);

            $news = $url->addChild('news:news', '', 'http://www.google.com/schemas/sitemap-news/0.9');
            $publication = $news->addChild('news:publication');
            $publication->addChild('news:name', env('APP_ALTER_NAME', ''));
            $publication->addChild('news:language', config('app.locale'));

            $news->addChild('news:genres', 'UserGenerated');

            $news->addChild('news:publication_date', $date_update);

            $news->addChild('news:title', $noticia['title']);
            $news->addChild('news:keywords', $noticia['tags']);

        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=120, public']);

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
        $current_date = Carbon::now();

        $xml = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        foreach ($items as $item) {
            $loc = route('channels.show', $item);

            $url = $xml->addChild('url');
            $url->addChild('loc', $loc);
            $url->addChild('lastmod', $current_date->toIso8601String());
            $url->addChild('changefreq', 'always');
            $url->addChild('priority', 0.5);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=600, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     */
    public function showAuthors()
    {
        $authors = $this->apiHelper->getAllAuthors();
        $current_date = Carbon::now();

        $xml = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        foreach ($authors->DATA as $author) {
            $loc = route('authors.show', $author['username']);

            $url = $xml->addChild('url');
            $url->addChild('loc', $loc);
            $url->addChild('lastmod', $current_date->toIso8601String());
            $url->addChild('changefreq', 'always');
            $url->addChild('priority', 0.5);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=600, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function showVideos()
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

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=120, public']);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function indexArchive()
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

            $loc = route('sitemaps.archive.period', [$date_parts[0], $date_parts[1]]);

            $sitemap = $xml->addChild('sitemap');
            $sitemap->addChild('loc', $loc);
            $sitemap->addChild('lastmod', $last_mod);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=300, public']);
    }

    /**
     * @param int $year
     * @param int $month
     * @return Application|ResponseFactory|Response
     * @throws FileNotFoundException
     */
    public function showArchivePeriod(int $year, int $month)
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
            $url->addChild('changefreq', 'always');
            $url->addChild('priority', $item['priority']);
        }

        return response($xml->asXML())->withHeaders(['Content-Type' => 'text/xml', 'Cache-Control' => 'max-age=300, public']);
    }
}
