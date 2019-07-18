<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 02/10/2018
 * Time: 14:51
 */

namespace App\Http\Helpers;


class shortCodeConverter
{
    /**
     * @var string
     */
    protected $originalText;

    /**
     * shortCodeConverter constructor.
     */
    public function __construct()
    {
        $this->originalText = '';
        $this->resultText = '';
    }

    /**
     * @param String $text
     * @return mixed|String
     */
    public function convert(String $text)
    {
        $this->originalText = $text;

        $text = $this->_searchShortcodes($text);

        return $text;
    }

    /**
     * @param String $text
     * @return mixed|String
     */
    protected function _searchShortcodes(String $text)
    {
        $text = $this->_searchIframeGenerico($text);
        $text = $this->_searchEpVideo($text);
        $text = $this->_searchRudoVideo($text);
        $text = $this->_searchEmbed($text);
        $text = $this->_searchGoogleMaps($text);

        return $text;
    }

    /**
     * @param String $text
     * @return mixed|String
     */
    protected function _searchGoogleMaps(String $text)
    {
        return $this->_searchIframeGenerico($text, 'googlemaps');
    }

    /**
     * @param String $text
     * @return mixed|String
     */
    protected function _searchEmbed(String $text)
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

    protected function _fixUrls(String $url)
    {
        // Youtube con dominio youtu.be
        if (str_contains($url, 'youtu.be'))
            return str_replace('youtu.be', 'youtube.com/embed', $url);

        return $url;
    }

    /**
     * @param String $text
     * @param String $embedcode
     * @return mixed|String
     */
    protected function _searchIframeGenerico(String $text, String $embedcode = 'iframegenerico')
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
     * @return mixed|String
     */
    protected function _searchEpVideo(String $text)
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
     * @return null|string|string[]
     */
    protected function _searchRudoVideo(String $text)
    {
        $pattern = "#\[rudovideo\](.*?)\[/rudovideo\]#";
        $code = '<div class="embed-responsive embed-responsive-16by9 videoContainer"><iframe id="vrudo" class="embed-responsive-item" src="$1"frameborder="0" scrolling="no" allow="autoplay; fullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start"]></span></iframe></div>';
        return preg_replace($pattern, $code, $text);
    }




}