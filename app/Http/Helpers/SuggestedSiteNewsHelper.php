<?php
/**
 * Created by SublimeText.
 * User: esand
 * Date: 09/04/2019
 * Time: 11:31
 */

namespace App\Http\Helpers;


use Illuminate\Support\Facades\Storage;

class SuggestedSiteNewsHelper
{
	/**
     * @var array
     */
    protected $siteItems = [];

    protected $quantity;

    protected $order;


    public function __construct()
    {
    }


    public function getSitesInfo( Int $pQuantity = 0, String $pOrder = '' ){
    	$items = [];
    	$this->quantity = ($pQuantity != 0)? $pQuantity: env('RELATED_SITES_NEWS_QUANTITY',1);
    	$this->order 	= ($pOrder != "")? $pOrder: env('RELATED_SITES_NEWS_ORDER','all');
    	if( env('RELATED_SITES',"") ){
    		$sites = explode(",", env('RELATED_SITES') );
    		if( count($sites) ){
    			foreach ($sites as $key => $site) {
    				$items[$site] = $this->_getSiteNews( $site, $this->quantity, $this->order );
    			}
    			
    		}
    	}
    	$this->siteItems = $items;
    	//dd($this->siteItems);
    	return $this->siteItems;
    }

    protected function _getSiteNews( String $siteCode = 'perfil', Int $quantity = 1, String $order = "all" ){
        $disk 	= Storage::disk('rsc');
        $news 	= [];
        $items 	= [];
        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $path = str_replace('-sitecode-', $siteCode, env('MOST_VIEWED_FILE', ''));
            $news = ($disk->exists($path)) ? json_decode($disk->get($path), true) : [];
        } else {
            $url = str_replace('-sitecode-', $siteCode, env('MOST_VIEWED_URL', ''));
            $news = json_decode(file_get_contents($url), true);
        }
        if ( count($news) ){
        	switch ( $order ) {
        	 	case 'top':
        	 		$items = array_slice ( $news, 0, $quantity );
        	 		break;
        	 	case 'random':
        	 		$index = array_rand ( $news, $quantity );
        	 		$items = $news[$index];
        	 		break;
        	 	default:
        	 		$items = $news;
        	 		break;
        	}

        	$path = $this->addSiteDomain( $items['pagePath'], $siteCode );
        	//dd($path);
        	$items['pagePath'] = $path;

        }
        return $items;
    }

    public function addSiteDomain( String $path = '', String $site = ''){
    	$retValue = "http://".$site.".perfil.com".$path;
    	if ( strpos($path, 'http') !== false ){
    		$retValue = $path;
    	}
    	return $retValue;
    }
}