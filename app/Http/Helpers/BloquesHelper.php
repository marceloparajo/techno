<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 03/10/2018
 * Time: 15:28
 */

namespace App\Http\Helpers;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class BloquesHelper
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
     * @var array
     */
    protected $newsIDs;

    /**
     * @var array
     */
    protected $content;

    /**
     * BloquesHelper constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;

        $this->newsIDs = [];
        $this->content = [];
    }

    /**
     * @param array|null $only
     * @return array|Collection
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function generateHomedata(Array $only = null)
    {
        $site = strtolower(env('SITE_CODE', 'perfil'));

        // Obtengo datos de homedata
        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $diskRsc = Storage::disk('rsc');
            $pathHomeData = str_replace('-sitecode-', $site, env('HOMEDATA_FILE', ''));
            $homedata = ($diskRsc->exists($pathHomeData)) ? collect(json_decode($diskRsc->get($pathHomeData), true)) : collect([]);
        } else {
            $homedata = Cache::remember('homedata', 1, function () use ($site) {
                $url = env('HOMEDATA_URL', '');
                $path= str_replace('-sitecode-', $site, $url);
                $content = file_get_contents($path);

                return (is_null($content)) ? null : collect(json_decode($content, true));
            });

        }

        if (! is_null($only) && count($only) > 0) {
            $homedata = $homedata->filter(function ($value) use ($only) {
                return in_array($value['zone'], $only);
            });
        }

        return $homedata;
    }

    /**
     * @param Collection $homedata
     * @param array $news
     * @return array
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function generateContent(Collection $homedata, Array $news = [])
    {
        $bloqueInferiorTypeBlog = false;
        $bloques = collect(config('zonas'));
        $sidebarContent = [];
        $lastPostsContent = [];

        foreach ($homedata as $item) {
            $bloque = (object) $bloques->where('id', $item['id'])->first();

            if ($item['zone'] == '') continue;

            if ($item['zone'] == 'sidebar') {
                if (count($sidebarContent) <= 0)
                    $sidebarContent = $this->_getSidebarNewsFromJson();
                $bloque_news = Arr::where($sidebarContent, function ($value, $key) use ($item) {
                    return $value['zone'] == $item['id'];
                });
            } else {

                if ( $item['id'] == 'ultimas-noticias' ) {
                    if (count($lastPostsContent) <= 0) {
                        $qry_last_posts = $this->apiHelper->getLastPost(50);
                        $last_news = (count($qry_last_posts->DATA) > 0) ? collect($qry_last_posts->DATA) : collect([]);
                        $lastPostsContent = $last_news->whereNotIn('id', $this->newsIDs)->take(20);
                    }
                    $bloque_news = $lastPostsContent;

                }elseif ($item['id'] == 'editoriales') {
                    $payload = $this->apiHelper->getNewsFromChannel('op-ed');
                    $posts = $payload->DATA;
                    $bloque_news = array_slice($posts, 0, env("HOME_EDITORIAL_MAX_ITEMS",20));

                } else {
                    if (count($news) <= 0)
                        $news = $this->_getHomeNews();
                    $bloque_news = $news->where('zone', $item['id']);
                }

            }

            $zona = $item['zone'];
            $item_news = [];

            // Parse news
            foreach ($bloque_news as $new) {
                array_push($this->newsIDs, $new['id']);
                array_push($item_news, $this->parseHelper->parseNoticia($new));
            }

            if (! array_key_exists($zona, $this->content))
                $this->content[$zona] = [];

            array_push($this->content[$zona], [
                'id' => $item['id'],
                'template' => $bloque->template ?? 'bloque-inferior',
                'news' => $item_news
            ]);
        }

        return $this->content;
    }

    /**
     * Transforma el listado de bloques a lista de noticias
     * @param  Array|array $bloques Notas en formato array de zonas/bloques
     * @return Array               Lista de notas si tener en cuenta los bloques asignados
     */
    public function getHomeList( Array $bloques = [] ):Array
    {
        $result = [];
        foreach ($bloques as $keyZonas => $valueZonas) {
            if ( count($valueZonas) > 0 ){
                foreach ($valueZonas as $key => $value) {
                    if( count($value['news']) > 0 )
                        $result = array_merge($result, $value['news']);
                }
            }
        }
        return $result;
    }

    /**
     * @return Collection
     */
    protected function _getHomeNews()
    {
        $news = $this->apiHelper->getHomeNews()->DATA;
        return (count($news) > 0) ? collect($news) : collect([]);
    }

    /**
     * @return array|mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function _getSidebarNewsFromJson()
    {
        $site = strtolower(env('SITE_CODE', 'perfil'));

        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $diskRsc = Storage::disk('rsc');
            $pathSidebarNews = str_replace('-sitecode-', $site, env('SIDEBAR_NEWS_FILE', ''));
            $content = ($diskRsc->exists($pathSidebarNews)) ? json_decode($diskRsc->get($pathSidebarNews), true) : [];
        } else {
            $content = Cache::remember('sidebar-news', 1, function () use ($site) {
                $path = str_replace('-sitecode-', $site, env('SIDEBAR_NEWS_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
            });
        }

        return $content;
    }
}
