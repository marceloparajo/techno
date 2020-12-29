<?php

namespace App\View\Components;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\Component;

class SuggestedSiteNews extends Component
{
    /**
     * @var int
     */
    protected $quantity;

    /**
     * @var string
     */
    protected $order;

    /**
     * @var mixed|string
     */
    protected $related_sites;

    /**
     * @var false|string[]
     */
    protected $sites;

    /**
     * @var mixed
     */
    protected $resources_source;

    /**
     * @var mixed
     */
    protected $most_viewed_file;

    /**
     * @var mixed
     */
    protected $most_viewed_url;

    /**
     * @var array
     */
    public $news;

    /**
     * Create a new component instance.
     *
     * @param int $quantity
     * @param string $order
     * @param string $related_sites
     */
    public function __construct(int $quantity = 0, string $order = '', string $related_sites = '')
    {
        $this->quantity = ($quantity > 0) ? $quantity : env('RELATED_SITES_NEWS_QUANTITY',1);
        $this->order = ($order != '') ? $order : env('RELATED_SITES_NEWS_ORDER','all');
        $this->related_sites = ($related_sites != '') ? $related_sites : env('RELATED_SITES','');
        $this->sites = explode(",", $this->related_sites);
        $this->resources_source = env('RESOURCES_SOURCE', 'file');
        $this->most_viewed_file = env('MOST_VIEWED_FILE', '');
        $this->most_viewed_url = env('MOST_VIEWED_URL', '');
        $this->news = [];

        if (count($this->sites) > 0) {
            foreach ($this->sites as $key => $site) {
                $this->news[$site] = $this->_getSiteNews($site);
            }
        }
    }

    /**
     * @param string $site
     * @return array|mixed
     */
    protected function _getSiteNews(string $site = 'perfil') {
        $cache_name = md5('site_' . $site . '_most_viewed');
        $items = [];

        $news = Cache::remember($cache_name, 10, function () use ($site) {
            $disk 	= Storage::disk('rsc');

            if ($this->resources_source == 'file') {
                $path = str_replace('-sitecode-', $site, $this->most_viewed_file);
                $news = ($disk->exists($path)) ? json_decode($disk->get($path), true) : [];
            } else {
                $url = str_replace('-sitecode-', $site, $this->most_viewed_url);
                $news = json_decode(file_get_contents($url), true);
            }

            return $news;
        });

        if ( count($news) > 0 ){
            switch ( $this->order ) {
                case 'top':
                    $items = array_slice ($news, 0, $this->quantity);
                    break;
                case 'random':
                    $index = array_rand ($news, $this->quantity);
                    $items = $news[$index];
                    break;
                default:
                    $items = $news;
            }

            $path = $this->getPath($items['pagePath'], $site);
            $items['pagePath'] = $path;
        }

        return $items;
    }

    /**
     * @param string $path
     * @param string $site
     * @return string
     */
    public function getPath(string $path = '', string $site = '') {
        $retValue = "https://".$site.".perfil.com".$path;
        if ( strpos($path, 'http') !== false ){
            $retValue = $path;
        }
        return $retValue;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.suggested-site-news');
    }
}
