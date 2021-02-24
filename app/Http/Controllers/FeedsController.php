<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 2019-01-01
 * Time: 11:52
 */

namespace App\Http\Controllers;


use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\FacebookIAHelper;
use App\Http\Helpers\ParseHelper;
use App\Http\Helpers\SimpleXMLExtended;
use App\Http\Helpers\UtilsHelper;
use Carbon\Carbon;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;

class FeedsController extends Controller
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
     * FeedsController constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
    }

    /**
     * @param string $channel
     * @param UtilsHelper|null $utilsHelper
     * @return mixed
     * @throws FileNotFoundException
     */
    public function index(string $channel = '', UtilsHelper $utilsHelper)
    {
        if ($channel == '') {
            $data = $this->apiHelper->getLastPost(50, true);
            $title = env('APP_ALTER_NAME', 'Perfil');
        } else {
            if (! $utilsHelper->_channelExists($channel)) abort(404);
            $data = $this->apiHelper->getNewsFromChannel($channel);
            $title = ucwords($channel) . ' | ' . env('APP_ALTER_NAME', 'Perfil');
        }

        $posts = $data->DATA;

        $xml = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"></rss>');

        $channel = $xml->addChild('channel');
        $channel->addChild('title', $title);
        $channel->addChild('link', env('APP_URL', ''));
        $channel->addChild('description', 'Periodismo Puro: breaking news, análisis y los mejores columnistas cubriendo los temas más importantes de la Argentina y el mundo');
        $channel->addChild('language', config('app.locale'));
        $channel->addChild('copyright', 'Copyright (c) ' . date('Y') . ' Perfil.com');

        $logo = $channel->addChild('image');
        $logo->addChild('url', asset('img/favicon/apple-icon-114x114.png'));
        $logo->addChild('title', env('APP_ALTER_NAME', ''));
        $logo->addChild('link', env('APP_URL', ''));


        foreach ($posts as $post) {
            $article = $this->parseHelper->parseNoticia($post);

            $item = $channel->addChild('item');
            $item->addChild('title', $article['title']);
            $item->addChild('link', $article['permalink']);
            $item->addChild('pubDate', $article['date_available']->toRfc7231String());

            $guid = $item->addChild('guid', $article['id']);
            $guid->addAttribute('isPermaLink', 'false');

            $image = $item->addChild('media:content', '', 'http://search.yahoo.com/mrss/');
            $image->addAttribute('url', $article['main_image']['srcs']['small-wide']);
            $image->addAttribute('medium', 'image');
            $image->addAttribute('type', 'image/jpeg');
            $image->addAttribute('width', '540');
            $image->addAttribute('height', '304');

            // Description (Add main image to top of headline)
            $el_image = '<p><img src="' . $article['main_image']['srcs']['small-wide'] . '" alt="' . $article['main_image']['title'] . '" /></p>';
            $description = $el_image . $article['headline'] . ' <a href="' . $article['permalink'] . '">Leer más</a>';
            $item->addChildWithCDATA('description', $description);

            // Author
            if ($article['credit'] != '')
                $author = $article['credit'];
            else
                $author = $article['author']['fullname'];

            $item->addChildWithCDATA('author', $author);

            // Categories
            if (count($article['tags_list']) > 0) {
                foreach ($article['tags_list'] as $tag) {
                    $category = $item->addChild('category', $tag['name']);
                    $category->addAttribute('domain', $tag['route']);
                }
            }
        }

        return response($xml->asXML())->withHeaders(['Cache-Control' => 'max-age=300, public', 'Content-Type' => 'text/xml']);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function msn(Request $request)
    {
        $key = env('FEED_MSN_KEY', '1234');
        if (! $request->has('key') || $key != $request->get('key'))
            abort(404, 'Not found');

        $validator = Validator::make($request->all(), [
            'canal' => 'required'
        ]);

        if ($validator->fails())
            abort(400, $validator->errors()->first());

        if ($request->get('canal') == 'ultimo-momento')
            $data = $this->apiHelper->getLastNewsWithBody();
        else
            $data = $this->apiHelper->getNewsFromChannelWithBody($request->get('canal'));

        $posts = $data['DATA'];

        if (count($posts) <= 0) abort(404, 'Not Found');

        if ($request->get('canal') == 'ultimo-momento') {
            $channel_name = 'Último Momento';
            $channel_slug = 'ultimo-momento';
        } else {
            $channel_name = ucwords($posts[0]['channel_name']);
            $channel_slug = $posts[0]['channel_slug'];
        }

        $rss = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0" xmlns:atom="https://www.w3.org/2005/Atom" xmlns:media="https://search.yahoo.com/mrss/" xmlns:mi="https://schemas.ingestion.microsoft.com/common/" xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:dcterms="https://purl.org/dc/terms/"></rss>');
        $channel = $rss->addChild('channel');
        $channel->addChild('title', $channel_name);
        $channel->addChild('language', 'es-es');
        $channel->addChild('link', route('channels.show', $channel_slug));

        foreach ($posts as $post) {
            $article = $this->parseHelper->parseNoticia($post);

            $item = $channel->addChild('item');

            $guid = $item->addChild('guid', $article['id']);
            $guid->addAttribute('isPermaLink', 'false');

            $item->addChildWithCDATA('title', $article['title']);
            $item->addChild('pubDate', $article['date_available']->toIso8601String());

            $item->addChild('link', $article['permalink']);

            $item->addChildWithCDATA('dcterms:alternative', $article['home_title'], 'https://purl.org/dc/terms/');
            $item->addChildWithCDATA('mi:shortTitle', $article['short_title'], 'https://schemas.ingestion.microsoft.com/common/');

            $item->addChild('mi:dateTimeWritten', $article['date_available']->toIso8601String(), 'https://schemas.ingestion.microsoft.com/common/');
            $item->addChildWithCDATA('media:keywords', $post['tags'], 'https://search.yahoo.com/mrss/');

            $item->addChildWithCDATA('description', $post['headline']);

            $body = preg_replace('/[\x00-\x1F\x7F]/', '', $post['body']);
            $item->addChildWithCDATA('content:encoded', $body, 'https://purl.org/rss/1.0/modules/content/');

            $main_image = $item->addChild('media:content', '', 'https://search.yahoo.com/mrss/');
            $main_image->addAttribute('url', $article['main_image']['srcs']['big-wide']);
            $main_image->addAttribute('type', 'image/jpeg');
            $main_image->addAttribute('medium', 'image');
            $main_image->addChildWithCDATA('media:credit', $article['main_image']['credit']);
        }

        return response($rss->asXML())->withHeaders(['Cache-Control' => 'max-age=300, public', 'Content-Type' => 'text/xml']);

    }

    /**
     * @param Request $request
     * @return ResponseFactory|Response
     */
    public function googlenews(Request $request)
    {
        $key = env('FEED_GOOGLE_NEWS_KEY', '1234');
        if (! $request->has('key') || $key != $request->get('key'))
            abort(404, 'Not found');

        $validator = Validator::make($request->all(), [
            'canal' => 'required'
        ]);

        if ($validator->fails())
            abort(400, $validator->errors()->first());

        if ($request->get('canal') == 'ultimo-momento')
            $data = $this->apiHelper->getLastNewsWithBody('googlenews');
        else
            $data = $this->apiHelper->getNewsFromChannelWithBody($request->get('canal'), 'googlenews');

        $posts = $data['DATA'];

        if (count($posts) <= 0) abort(404, 'Not Found');

        $current_date = Carbon::now();
        $site = strtolower(env('APP_NAME', ''));
        $channel_slug = strtolower($request->get('canal'));

        $rss = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/"></feed>');
        $rss->addChild('id', "tag:$site,1999:$channel_slug");
        $rss->addChild('updated', $current_date->toIso8601String());
        $title = $rss->addChild('title', env('APP_ALTER_NAME', ''));
        $title->addAttribute('type', 'text');
        $subtitle = $rss->addChild('subtitle', env('SITE_DESCRIPTION', ''));
        $subtitle->addAttribute('type', 'text');

        foreach ($posts as $post) {
            $article = $this->parseHelper->parseNoticia($post);

            $date_update = (is_null($article['date_update'])) ? $article['date_available'] : $article['date_update'];

            $entry = $rss->addChild('entry');
            $entry->addChild('id', $article['permalink']);
            $entry->addChild('published', $article['date_available']->toIso8601String());
            $entry->addChild('updated', $date_update->toIso8601String());
            $title = $entry->addChild('title', $article['title']);
            $title->addAttribute('type', 'text');

            // Imagenes o Galeria
            if (count($article['gallery']) > 1) {
                $html_image = '<section class="type:slideshow">-html_gallery-</section>';
                $html = '';
                foreach ($article['gallery'] as $key => $image) {
                    $class = ($key == 0) ? 'type:primaryImage' : '';
                    $html .= '<figure><img src="' . $image['srcs']['large-wide'] . '" class="' . $class . '"><figcaption>' . $image['caption'] . ' <span class="copyright">' . $image['credit'] . '</span></figcaption></figure>';
                }
                $html_image = str_replace('-html_gallery-', $html, $html_image);
            } else {
                $html_image = '<figure><img class="type:primaryImage" src="' . $article['main_image']['srcs']['large-wide'] . '"><figcaption>' . $article['main_image']['caption'] . ' <span class="copyright">' . $article['main_image']['credit'] . '</span></figcaption></figure>';
            }

            $content = preg_replace('/[\x00-\x1F\x7F]/', '', $post['body']);
            $body = $html_image . $content;
            $content = $entry->addChildWithCDATA('content', $body);
            $content->addAttribute('type', 'html');

            // Author
            if ($article['credit'] != '')
                $author_name = $article['credit'];
            else
                $author_name = $article['author']['fullname'];

            $author = $entry->addChildWithCDATA('author');
            $author->addChild('name', $author_name);
        }

        return response($rss->asXML(), 200)->header('Content-Type', 'text/xml');
    }

    /**
     * @param Request $request
     * @param FacebookIAHelper $facebookIA
     * @return Application|ResponseFactory|Response
     */
    public function facebook(Request $request, FacebookIAHelper $facebookIA)
    {
        $key = env('FEED_FACEBOOK_KEY', '1234');
        if (! $request->has('key') || $key != $request->get('key'))
            abort(404, 'Not found');

        $data = $this->apiHelper->getLastNewsWithFacebookFlag();

        $posts = $data['DATA'];

        $site_title = env('APP_ALTER_NAME', '');
        $site_description = env('SITE_DESCRIPTION', '');
        $currentDate = Carbon::now();

        $rss = new SimpleXMLExtended('<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"></rss>');
        $channel = $rss->addChild('channel');
        $channel->addChild('title', $site_title);
        $channel->addChild('link', asset(''));
        $channel->addChild('description', $site_description);
        $channel->addChild('language', config('app.locale'));
        $channel->addChild('lastBuildDate', $currentDate->toIso8601String());

        foreach ($posts as $post) {
            $article = $this->parseHelper->parseNoticia($post, false);
            $item = $channel->addChild('item');

            $item->addChildWithCDATA('title', $article['title']);
            $item->addChild('link', $article['permalink']);
            $item->addChild('guid', $article['id']);
            $item->addChild('pubDate', $article['date_available']->toIso8601String());

            if ($article['credit'] != '')
                $author_name = $article['credit'];
            else
                $author_name = $article['author']['fullname'];
            $item->addChild('author', htmlspecialchars($author_name));
            $item->addChildWithCDATA('description', $article['headline']);

            $article['body'] = $facebookIA::fixBody($article['body']);
            $bodyView = View::make('news.show.instant-article', ['noticia' => $article]);
            $body = $bodyView->render();

            $item->addChildWithCDATA('content:encoded', $body, 'http://purl.org/rss/1.0/modules/content/');

        }

        return response($rss->asXML(), 200)->header('Content-Type', 'text/xml');

    }
}
