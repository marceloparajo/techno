<?php
namespace App\Http\Helpers;

use Illuminate\Support\Str;

/**
 * Convirte los shortcodes definidos en el codigo html que se necesita
 * 
 * @example -> Shortcodes de video:
 * [youtube]xxxxxx[/youtube] donde xxxxxx es la ID del video en youtube -> ejemplo: [youtube]K_IjoAdYIco[/youtube]
 * [youtubelive]xxxxxx[/youtubelive] donde xxxxxx es la ID del video en youtube -> ejemplo: [youtubelive]DDU-rZs-Ic4[/youtubelive]
 * [rudovideo]xxxxxx[/rudovideo] donde xxxxxx es la url del video en rudo -> ejemplo: [rudovideo]https://rudo.video/vod/bJGFdB[/rudovideo]
 * [rudovideolive]xxxxxx[/rudovideolive] donde xxxxxx es la url del video en rudo (hace autoplay del video) -> ejemplo: [rudovideolive]https://rudo.video/vod/bJGFdB[/rudovideolive]
 * [fbvideo]xxxxxx[/fbvideo] donde xxxxxx es la url del video en facebook -> ejemplo: [fbvideo]https://www.facebook.com/facebook/videos/10153231379946729/[/fbvideo]
 * [fblive]xxxxxx[/fblive] donde xxxxxx es la url del video en facebook (hace autoplay del video) -> ejemplo: [fblive]https://www.facebook.com/facebook/videos/10153231379946729/[/fblive]
 */
class ShortCodeConverter
{
   const ALL        = 'all';
   const VIDEOS     = 'videos';
   const CLEAN      = 'clean';
   const NO_VIDEO   = 'no-videos';
   
    /**
     * @var String
     */
    protected $originalText = '';

    /**
     * @var String
     */
    protected $resultText = '';

    public static $videoFinded = false;

    /**
     * ShortCodeConverter constructor.
     */
    public function __construct()
    {
        // code here
    }

    /**
     * convierte los Shortcodes de un texto
     *
     * @param String $text texto al que se quiere limpiar/reemplazar los shortcodes
     * @param String $filter filtros que se quieren aplicar
     * @return String
     */
    public function convert( String $text, String $filter = 'all' ): String
    {
        $this->originalText = $text;
        switch ( $filter ){
            case self::VIDEOS :
                $text = $this->_searchShortVideoCodes( $text );
                break;
            case self::NO_VIDEO :
                $text = $this->_searchShortCodes( $text );
                break;
            case self::ALL :
                $text = $this->_searchShortCodes( $text );
                $text = $this->_searchShortVideoCodes( $text );
                break;
            case self::CLEAN :
            default:
                $text = '';
                break;
        }
        $this->resultText = $text;
        return $text;
    }

    public function hasShortCode( String $text, Array $list = [] ): Bool
    {
        if(count($list) == 0){
            $list = ['youtube', 'youtubelive', 'rudovideo', 'rudovideolive', 'fbvideo', 'fblive', 'videogenerico', 'epvideo', 'iframegenerico', 'googlemaps'];
        }
        return (Str::contains( $text, $list ))? true:false;
    }

    public function hasVideoCode( String $text ): Bool
    {
        $result = $this->hasShortCode( $text, ['epvideo', 'youtubelive', 'youtube', 'rudovideo', 'rudovideolive', 'fbvideo', 'fblive', 'videogenerico'] );
            if($result){ self::$videoFinded = true; }
        return $result;
    }

    public function hasMapsCode( String $text ): Bool
    {
        return $this->hasShortCode( $text, ['googlemaps'] );
    }

    public function hasChanges( ): Bool
    {
        return ($this->originalText != $this->resultText);
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchShortVideoCodes( String $text ): String
    {
        $text = $this->_searchEpVideo($text);
        $text = $this->_searchRudoVideo($text);
        $text = $this->_searchRudoVideoLive($text);
        $text = $this->_searchFbVideo($text);
        $text = $this->_searchFbLiveVideo($text);
        $text = $this->_searchYT($text);
        $text = $this->_searchYTLive($text);
        $text = $this->_searchVideoGenerico($text);

        return $text;
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchShortCodes( String $text ): String
    {
        $text = $this->_searchIframeGenerico($text);
        $text = $this->_searchEmbed($text);
        $text = $this->_searchMarcador($text);
        $text = $this->_searchGoogleMaps($text);

        return $text;
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchGoogleMaps( String $text ): String
    {
        return $this->_searchIframeGenerico($text, 'googlemaps');
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchEmbed( String $text ): String
    {
        $pos = strpos($text, '[embed]');

        while ($pos !== false) {
            $pos_start = $pos;
            $pos_end = strpos($text, '[/embed]', $pos_start) + 5;
            $text_to_replace = substr($text, $pos_start, $pos_end);
            $domain = $this->_fixUrls(str_replace(['[embed]', '[/embed]'], '', $text_to_replace));

            $html = "<div class='iframe-container text-center'><iframe src='$domain' class='' width='100%' height='450' frameborder='0' style='border:0' scrolling='no' allowfullscreen></iframe></div>";

            $text = str_replace($text_to_replace, $html, $text);

            $pos = strpos($text, '[embed]', $pos);
        }

        return $text;
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchMarcador( String $text ): String
    {
        $pos = strpos($text, '[marcador]');

        while ($pos !== false) {
            $pos_start = $pos;
            $pos_end = strpos($text, '[/marcador]', $pos_start) + 11;
            $text_to_replace = substr($text, $pos_start, $pos_end);
            $domain = $this->_fixUrls(str_replace(['[marcador]', '[/marcador]'], '', $text_to_replace));

            $html = "<div class='marcador-container'><iframe src='$domain' class='' width='100%' height='100%' frameborder='0' style='border:0' scrolling='no' allowfullscreen></iframe></div>";

            $text = str_replace($text_to_replace, $html, $text);

            $pos = strpos($text, '[marcador]', $pos);
        }

        return $text;
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _fixUrls( String $url ): String
    {
        // Youtube con dominio youtu.be
        if (Str::contains($url, 'youtu.be'))
            return str_replace('youtu.be', 'youtube.com/embed', $url);

        return $url;
    }

    /**
     * @param String $text
     * @param String $embedcode
     * @return String
     */
    protected function _searchIframeGenerico( String $text, String $embedcode = 'iframegenerico'): String
    {
        $embedCodeOpen = "[$embedcode]";
        $embedCodeClose = "[/$embedcode]";

        $pos = strpos($text, $embedCodeOpen);

        while ($pos !== false) {
            $pos_start = $pos;
            $pos_end = strpos($text, $embedCodeClose, $pos_start) + 17;
            $text_to_replace = substr($text, $pos_start, $pos_end);
            $domain = str_replace([$embedCodeOpen, $embedCodeClose], '', $text_to_replace);

            $html = "<div class='iframe-container text-center'><iframe src='$domain' class='' width='100%' height='450' frameborder='0' style='border:0' scrolling='no' allowfullscreen></iframe></div>";

            $text = str_replace($text_to_replace, $html, $text);

            $pos = strpos($text, $embedCodeOpen, $pos);
        }

        return $text;
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchEpVideo( String $text ): String
    {
        $pos = strpos($text, '[epvideo]');

        while ($pos !== false) {
            $pos_start = $pos;
            $pos_end = strpos($text, '[/epvideo]', $pos_start) + 17;
            $text_to_replace = substr($text, $pos_start, $pos_end);
            $code = str_replace(['[epvideo]', '[/epvideo]'], '', $text_to_replace);

            $html = '<div id="vc_' . $code . '" class="embed-responsive embed-responsive-16by9 videoContainer eplvideo" data-code="'. $code . '"></div>';

            $text = str_replace($text_to_replace, $html, $text);

            $pos = strpos($text, '[epvideo]', $pos);
        }

        return $text;
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchRudoVideo( String $text ) : String
    {
        $pattern = "#\[rudovideo\](.*?)\[/rudovideo\]#";
        $code = '<div class="embed-responsive embed-responsive-16by9 videoContainer"><iframe id="vrudo" class="embed-responsive-item" src="$1"frameborder="0" scrolling="no" allow="autoplay; fullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start"]></span></iframe></div>';
        return preg_replace($pattern, $code, $text);
    }

    /**
     * @param String $text
     * @return String
     */
    protected function _searchRudoVideoLive( String $text ) : String
    {
        $pattern = "#\[rudovideolive\](.*?)\[/rudovideolive\]#";
        $code = '<div class="embed-responsive embed-responsive-16by9 videoContainer"><iframe id="vrudo" class="embed-responsive-item vrudo" src="$1/autostart/true" allowfullscreen="true" frameborder="0" scrolling="no" allow="autoplay; fullscreen"></iframe></div>';
        return preg_replace($pattern, $code, $text);
    }

    /**
     * @param String $target
     * @return String
     */
    protected function _searchFbVideo( String $target ): String 
    {
        $pattern = "#\[fbvideo\](.*?)\[/fbvideo\]#";
        $code = '<div class="fb-video" data-href="$1" data-width="auto" data-allowfullscreen="true" data-autoplay="false" data-show-captions="true"></div>';
        return preg_replace($pattern, $code, $target);  
    }
    
    /**
     * @param String $target
     * @return String
     */
    protected function _searchFbLiveVideo( String $target ): String 
    {
        $pattern = "#\[fblive\](.*?)\[/fblive\]#";
        $code = '<div class="fb-video" data-href="$1" data-width="auto" data-allowfullscreen="true" data-autoplay="true" data-show-captions="true"></div>';
        return preg_replace($pattern, $code, $target);  
    }
    
    /**
     * @param String $target
     * @return String
     */
    protected function _searchYT( String $target ): String
    {
        $pattern = "#\[youtube\](.*?)\[/youtube\]#";
        $code = '<div class="embed-responsive embed-responsive-16by9 videoContainer"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/$1" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe></div>';
        return preg_replace($pattern, $code, $target);
    }

    /**
     * @param String $target
     * @return String
     */
    protected function _searchYTLive( String $target ): String
    {
        $pattern = "#\[youtubelive\](.*?)\[/youtubelive\]#";
        $code = '<div class="embed-responsive embed-responsive-16by9 videoContainer"><iframe id="yt-frame" src="https://www.youtube.com/embed/$1?autoplay=1&mute=1&enablejsapi=1"
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
        return preg_replace($pattern, $code, $target);
    }
    
    /**
     * @param String $target
     * @return String
     */
    protected function _searchVideoGenerico( string $target ): string 
    {
        $pattern = "#\[videogenerico\](.*?)\[/videogenerico\]#";
        $code = '<div class="embed-responsive embed-responsive-16by9 videoContainer"><iframe class="embed-responsive-item" src="$1" allowfullscreen></iframe></div>';
        return preg_replace($pattern, $code, $target);
    }

}
