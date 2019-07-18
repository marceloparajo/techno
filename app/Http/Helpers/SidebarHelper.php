<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 5/8/18
 * Time: 19:48
 */

namespace App\Http\Helpers;


use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class SidebarHelper
{
    /**
     * @var \Illuminate\Contracts\Filesystem\Filesystem
     */
    protected $diskSrc;

    /**
     * SidebarHelper constructor.
     */
    public function __construct()
    {
        $this->diskSrc = Storage::disk('rsc');
    }

    public function setZone(Array $bloques, Array $news = [])
    {
        $homedata = collect($bloques);

        $sidebarBloques = $homedata->filter(function ($value) {
            return $value['zone'] == 'sidebar';
        });

        dd($sidebarBloques);

        return [];
    }

    /**
     * @param String $site
     * @param Int $cantidad
     * @return array|object
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function getMostViewed(String $site = null, Int $cantidad = 0)
    {
        $site = (! is_null($site)) ? $site : strtolower(env('SITE_CODE', ''));

        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $pathMostViewed = str_replace('-sitecode-', $site, env('MOST_VIEWED_FILE', ''));
            $content = ($this->diskSrc->exists($pathMostViewed)) ? json_decode($this->diskSrc->get($pathMostViewed), true) : [];
        } else {
            $content = Cache::remember("most-viewed-$site", 1, function () use ($site) {
                $path = str_replace('-sitecode-', $site, env('MOST_VIEWED_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
            });
        }

        $articles = [];
        foreach ($content as $article)
            array_push($articles, $this->_parseMostViewedArticle($article, $site));

        return ($cantidad > 0) ? array_slice($articles, 0, $cantidad) : $articles;
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
            'perfil' => 'https://www.perfil.com'
        ];

        // Imagen
        if (isset($item['imgSrc']) && $item['imgSrc'] != '')
            $imagen = $item['imgSrc'];
        else
            $imagen = 'http://fotos.perfil.com/2016/07/26/default.jpg';

        // Url
        $url = ($site == strtolower(env('APP_NAME', 'perfil'))) ? asset(ltrim($item['pagePath']?? '')) : $sites_urls[$site] . $item['pagePath']?? '';

        return [
            'title' => $item['pageTitle']?? '',
            'url' => $url,
            'image' => $imagen
        ];
    }


}