<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 6/8/18
 * Time: 00:00
 */

namespace App\Http\Helpers;


use Illuminate\Support\Facades\Cache;

class ApiHelper
{
    /**
     * @var string
     */
    protected $api_server;

    /**
     * @var mixed
     */
    protected $site_code;

    /**
     * ApiHelper constructor.
     */
    public function __construct()
    {
        $this->setInstanceConfig( env('SITE_CODE', 'perfil') );
    }

    /**
     * @return mixed
     */
    public function getAllAuthors()
    {
        $cache_name = md5('api-get-all-authors');

        return Cache::remember($cache_name, 0.3, function () {
            $call = $this->api_server . "&metodo=getAllAuthors";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @param int $limit
     * @return object
     */
    public function getColumnistas(int $limit = 50)
    {
        $cache_name = md5("api-get-columnistas-$limit");

        return Cache::remember($cache_name, 0.3, function () use ($limit) {
            $call = $this->api_server . "&metodo=getColumnistas&maxrows=$limit";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @param string $canal
     * @param int $limit
     * @return object
     */
    public function getNewsWithDestaqueFromChannel(string $canal, int $limit = 5)
    {
        $cache_name = md5("api-get-news-with-destaque-from-channel-$canal-$limit");

        return Cache::remember($cache_name, 0.3, function () use ($canal, $limit) {
            $call = $this->api_server . "&metodo=getNewsWithDestaqueFromChannel&canal=$canal&maxrows=$limit";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @param string $canal
     * @param string $subcanales
     * @param int $limit
     * @return object
     */
    public function getNewsFromMainChannel(string $canal, string $subcanales, int $limit = 5)
    {
        $cache_name = md5("api-get-news-from-main-channel-$canal-$subcanales-$limit");

        return Cache::remember($cache_name, 0.3, function ($canal, $subcanales, $limit) {
            $call = $this->api_server . "&metodo=getNewsFromMainChannel&canal=$canal&subcanales=$subcanales&maxrows=$limit";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });

    }

    /**
     * Setea el apiHelper para hacer llamadas a cualquier api de las habilitadas
     * @param String|string $siteCode Código de sitio del cual se quieren hacer las llamadas
     */
    public function setInstanceConfig( String $siteCode = "")
    {
        $this->site_code = (!empty($siteCode))? $siteCode :  env('SITE_CODE', 'perfil');
        $this->api_server = ltrim(env('API_SERVER', 'http://api.perfil.com'), '/') . '?sitecode=' . $this->site_code;
        if (env('APP_MODE_PREVIEW', 'false'))
            $this->api_server .= '&clearcache=1';
    }

    /**
     * @param String $slug
     * @param String $type
     * @return bool|string
     */
    public function getNoticia(String $slug, String $type = '')
    {
        $cache_name = md5("api-get-noticia-$slug-$type");

        return Cache::remember($cache_name, 0.3, function () use ($slug, $type) {
            $call = $this->api_server . "&metodo=getnoticia&slugpage=$slug&type=$type&optimize";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @param String $channel_slug
     * @return object
     */
    public function getNewsFromChannel(String $channel_slug)
    {
        $cache_name = md5("api-get-news-from-channel-$channel_slug");

        return Cache::remember($cache_name, 0.30, function () use ($channel_slug) {
            $call = $this->api_server . "&metodo=getnewsfromchannel&canal=$channel_slug&maxrows=70";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @return object
     */
    public function getHomeNews()
    {
        $cache_name = md5('api-helper-homenews');

        return Cache::remember($cache_name, 0.30, function () {
            $call = $this->api_server . "&metodo=gethomenews&maxrows=200";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @param Int $cant
     * @param bool $withoutlinks
     * @return object
     */
    public function getLastPost(Int $cant = 100, Bool $withoutlinks = false)
    {
        $cache_name = md5("api-get-last-post-$cant-$withoutlinks");

        return Cache::remember($cache_name, 0.30, function () use ($cant, $withoutlinks) {
            $withoutlinks = ($withoutlinks) ? 1 : 0;
            $call = $this->api_server . "&metodo=getlastpost&maxrows=$cant&withoutlinks=$withoutlinks";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @param String $username
     * @return object
     */
    public function getPostsFromAuthor(String $username)
    {
        $cache_name = md5("api-get-posts-from-author-$username");

        return Cache::remember($cache_name, 0.3, function () use ($username) {
            $call = $this->api_server . "&metodo=getnewsfromauthor&maxrows=50&codeauthor=$username";
            $payload = file_get_contents($call);
            return (object) json_decode($payload, true);
        });
    }

    /**
     * @return object
     */
    public function getLastNewPublished()
    {
        $call = $this->api_server . "&metodo=getlastnewpublished";
        $payload = file_get_contents($call);
        return (object) json_decode($payload, true);
    }

    /**
     * @param Int $days
     * @return mixed
     */
    public function getLastDatesAvailables(Int $days = 5)
    {
        $cache_name = md5("api-get-last-dates-availables-$days");

        return Cache::remember($cache_name, 0.3, function () use ($days) {
            $call = $this->api_server . "&metodo=getlastdatesavailables&days=$days";
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }

    /**
     * @param Int $year
     * @param Int $month
     * @param Int $day
     * @return mixed
     */
    public function getLastDateAvailableFromDay(Int $year, Int $month, Int $day)
    {
        $cache_name = md5("api-get-last-date-available-from-day-$year-$month-$day");

        return Cache::remember($cache_name, 0.3, function () use ($year, $month, $day) {
            $call = $this->api_server . "&metodo=getlastdateavailablefromday&year=$year&month=$month&day=$day";
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }

    /**
     * @param Int $year
     * @param Int $month
     * @param Int $day
     * @return mixed
     */
    public function getNewsFromDay(Int $year, Int $month, Int $day)
    {
        $cache_name = md5("api-get-news-from-day-$year-$month-$day");

        return Cache::remember($cache_name, 0.3, function () use ($year, $month, $day) {
            $call = $this->api_server . "&metodo=getnewsfromday&year=$year&month=$month&day=$day";
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }

    /**
     * @param String $tag
     * @return mixed
     */
    public function getNewsFromTag(String $tag)
    {
        $cache_name = md5("api-get-news-from-tag-$tag");

        return Cache::remember($cache_name, 0.3, function () use ($tag) {
            $tag = urlencode($tag);
            $call = $this->api_server . "&metodo=getnewfromtag&tag=$tag";
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }

    /**
     * @param String $channel
     * @param Int $rows
     * @return mixed
     */
    public function getNewsFromChannelWithBody(String $channel, Int $rows = 20)
    {
        $cache_name = md5("api-get-news-from-channel-with-body-$channel-$rows");

        return Cache::remember($cache_name, 0.3, function () use ($channel, $rows) {
            $call = $this->api_server . "&metodo=getnewsfromchannelwithbody&canal=$channel&maxrows=$rows";
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }

    /**
     * @param String $type
     * @param Int $rows
     * @return mixed
     */
    public function getLastNewsWithBody(String $type = '', Int $rows = 50)
    {
        $cache_name = md5("api-get-last-news-with-body-$type-$rows");

        return Cache::remember($cache_name, 0.3, function () use ($type, $rows) {
            $call = $this->api_server . "&metodo=getlastnewswithbody&maxrows=$rows&type=$type";
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }

    /**
     * @return mixed
     */
    public function getLastNewsWithFacebookFlag()
    {
        $cache_name = md5('api-get-last-news-with-facebook-flag');

        return Cache::remember($cache_name, 0.3, function () {
            $call = $this->api_server . '&metodo=getlastnewswithfacebookflag';
            $payload = file_get_contents($call);
            return json_decode($payload, true);
        });
    }


}
