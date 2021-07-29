<?php


namespace App\Http\Helpers;


use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlockDistributionsHelper
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
     * @var string
     */
    protected $site;

    /**
     * @var string
     */
    protected $source;

    /**
     * @var Filesystem
     */
    protected $disk;

    /**
     * BlockDistributionsHelper constructor.
     * @param ApiHelper $apiHelper
     * @param ParseHelper $parseHelper
     */
    public function __construct(ApiHelper $apiHelper, ParseHelper $parseHelper)
    {
        $this->apiHelper = $apiHelper;
        $this->parseHelper = $parseHelper;
        $this->site = strtolower(env('SITE_CODE', 'perfil'));
        $this->source = env('RESOURCES_SOURCE', 'file');
        $this->disk = Storage::disk('rsc');
    }

    /**
     * @return mixed
     */
    public function getDivisas()
    {
        return Cache::remember('block-distributions-divisas', 5, function () {
            return $this->_getDivisas();
        });
    }

    /**
     * @param string $site_code
     * @return array
     * @throws FileNotFoundException
     */
    public function getLastsPosts(string $site_code)
    {
        $news = $this->_getLastPostsOfSite($site_code);

        $payload = [];
        if (! is_null($news))
            foreach ($news as $new)
                array_push($payload, $this->parseHelper->parseNoticia($new));

        return $payload;
    }

    /**
     * @param string $site_code
     * @return array
     */
    public function getMostViewed(string $site_code)
    {
        return Cache::remember("block-distributions-most-viewed-$site_code", 0.30, function () use ($site_code) {
            $news = $this->_getMostViewedOfSite($site_code);

            $payload = [];
            foreach ($news as $article) {
                if (Str::contains($article['pagePath'], '/sitios/')) continue;
                array_push($payload, $this->parseHelper->_parseMostViewedArticle($article, $site_code));
            }


            return $payload;
        });
    }

    /**
     * @return mixed
     */
    public function getSidebar()
    {
        return Cache::remember('block-distributions-sidebar', 0.30, function () {
            $homedata = $this->_getHomedata();
            $sidebarContent = $this->_getSidebarNewsFromJson();
            $bloques = $this->_getBloquesTemplates();

            $payload = [];
            foreach ($homedata as $item) {
                if ($item['zone'] != 'sidebar') continue;

                $bloque = (object) $bloques->where('id', $item['id'])->first();

                if (! is_null($sidebarContent))
                    $bloque_news = Arr::where($sidebarContent, function ($value) use ($item) {
                        return $value['zone'] == $item['id'];
                    });
                else $bloque_news = [];

                $item_news = [];
                foreach ($bloque_news as $new)
                    array_push($item_news, $this->parseHelper->parseNoticia($new));

                array_push($payload, [
                    'id' => $item['id'],
                    'template' => $bloque->template ?? $item['id'],
                    'news' => $item_news,
                    'widget' => $item['maxNews'] <= 0
                ]);
            }

            return $payload;
        });
    }

    /**
     * @return mixed
     */
    public function getHomedata()
    {
        return Cache::remember('block-distributions-homedata', 0.30, function () {
            $bloques = $this->_getBloquesTemplates();
            $lastPostsContent = [];
            $newsIDs = [];
            $news = [];
            $content = [];

            $homedata = $this->_getHomedata();

            foreach ($homedata as $item) {
                $bloque = (object) $bloques->where('id', $item['id'])->first();

                if (in_array($item['zone'], ['sidebar', ''])) continue;

                if ( $item['id'] == 'ultimas-noticias' ) {
                    if (count($lastPostsContent) <= 0) {
                        $qry_last_posts = $this->apiHelper->getLastPost(50);
                        $last_news = (count($qry_last_posts->DATA) > 0) ? collect($qry_last_posts->DATA) : collect([]);
                        $lastPostsContent = $last_news->whereNotIn('id', $newsIDs)->take(20);
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

                $zona = $item['zone'];
                $item_news = [];

                // Parse news
                foreach ($bloque_news as $new) {
                    array_push($newsIDs, $new['id']);
                    array_push($item_news, $this->parseHelper->parseNoticia($new));
                }

                if (! array_key_exists($zona, $content))
                    $content[$zona] = [];

                array_push($content[$zona], [
                    'id' => $item['id'],
                    'template' => $bloque->template ?? $item['id'],
                    'news' => $item_news
                ]);
            }

            return $content;
        });
    }

    /**
     * @return array|Collection
     * @throws FileNotFoundException
     */
    protected function _getDivisas()
    {
        switch ($this->source) {
            case 'file':
                $pathHomeData = env('DIVISAS_FILE', '');
                return ($this->disk->exists($pathHomeData)) ? collect(json_decode($this->disk->get($pathHomeData), true)) : [];

            default:
                $pathHomeData = env('DIVISAS_URL', '');
                $content = file_get_contents($pathHomeData);
                return collect(json_decode($content, true));
        }
    }

    /**
     * @return mixed
     */
    protected function _getHomeNews()
    {
        $news = $this->apiHelper->getHomeNews()->DATA;
        return (count($news) > 0) ? collect($news) : collect([]);
    }

    /**
     * @return mixed
     * @throws FileNotFoundException
     */
    protected function _getHomedata()
    {
        switch ($this->source) {
            case 'file':
                $path = str_replace('-sitecode-', $this->site, env('HOMEDATA_FILE', ''));
                return ($this->disk->exists($path)) ? collect(json_decode($this->disk->get($path), true)) : [];

            default:
                $path = str_replace('-sitecode-', $this->site, env('HOMEDATA_URL', ''));
                $content = file_get_contents($path);
                return collect(json_decode($content, true));
        }
    }

    /**
     * @return array|mixed
     * @throws FileNotFoundException
     */
    protected function _getSidebarNewsFromJson()
    {
        switch ($this->source) {
            case 'file':
                $path = str_replace('-sitecode-', $this->site, env('SIDEBAR_NEWS_FILE', ''));
                return ($this->disk->exists($path)) ? json_decode($this->disk->get($path), true) : [];

            default:
                $path = str_replace('-sitecode-', $this->site, env('SIDEBAR_NEWS_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? [] : json_decode($content, true);
        }
    }

    /**
     * @param string $site
     * @return array|mixed|null
     * @throws FileNotFoundException
     */
    protected function _getLastPostsOfSite(string $site)
    {
        switch ($this->source) {
            case 'file':
                $path = str_replace('-sitecode-', $site, env('ALL_LAST_POSTS_FILE', ''));
                return ($this->disk->exists($path)) ? json_decode($this->disk->get($path), true) : [];

            default:
                $path = str_replace('-sitecode-', $site, env('ALL_LAST_POSTS_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
        }
    }

    /**
     * @param string $site
     * @return array|mixed|null
     * @throws FileNotFoundException
     */
    protected function _getMostViewedOfSite(string $site)
    {
        switch ($this->source) {
            case 'file':
                $path = str_replace('-sitecode-', $site, env('MOST_VIEWED_COMPLETE_FILE', ''));
                return ($this->disk->exists($path)) ? json_decode($this->disk->get($path), true) : [];

            default:
                $path = str_replace('-sitecode-', $site, env('MOST_VIEWED_COMPLETE_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
        }
    }

    /**
     * @return Collection
     */
    protected function _getBloquesTemplates()
    {
        return collect([
            [
                'id' => 'cobertura-casacaras',
                'template' => 'cobertura'
            ],
            [
                'id' => 'coronavirus-contador',
                'template' => 'coronavirus'
            ],
            [
                'id' => 'destacada-superior',
                'template' => 'destacada'
            ],
            [
                'id' => 'bloque-superior',
                'template' => 'bloque'
            ],
            [
                'id' => 'bloque-medio',
                'template' => 'bloque-con-widget'
            ],
            [
                'id' => 'bloque-inferior',
                'template' => 'bloque'
            ],
            [
                'id' => 'destacada-medio',
                'template' => 'destacada'
            ],
            [
                'id' => 'destacada-inferior',
                'template' => 'destacada'
            ],
            [
                'id' => 'destacada-extra',
                'template' => 'destacada'
            ],
            [
                'id' => 'bloque-extra',
                'template' => 'bloque'
            ],
            [
                'id' => 'especiales',
                'template' => 'especial'
            ],
            [
                'id' => 'cobertura-yelmo',
                'template' => 'cobertura'
            ],
            [
                'id' => 'cobertura-extra',
                'template' => 'cobertura'
            ],
            [
                'id' => 'cobertura-moderada',
                'template' => 'cobertura'
            ],
            [
                'id' => 'cobertura-general',
                'template' => 'cobertura'
            ],
            [
                'id' => 'ultimas-noticias',
                'template' => 'bloque'
            ]
        ]);
    }

}
