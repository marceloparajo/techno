<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 24/10/2018
 * Time: 10:41
 */

namespace App\Http\Helpers;


class WidgetsHelper
{
    /**
     * @var string
     */
    protected $minuto_de_noticias_content;

    /**
     * WidgetsHelper constructor.
     */
    public function __construct()
    {
        $this->minuto_de_noticias_content = '';
    }

    /**
     * @return array|null
     */
    public function getMinutoDeNoticiasInfo()
    {
        $content = $this->_loadMinutoDeNoticias();

        if (! $content)
            return null;

        $videoId = $this->_parseVideoMinutoDeNoticias($content);
        $hat = $this->_parseHatMinutoDeNoticias($content);
        $title = $this->_parseTitleMinutoDeNoticias($content);
        $headline = $this->_parseHeadlineMinutoDeNoticias($content);
        $domain = $this->_parseDomainMinutoDeNoticias($content);

        return [
            'video_id' => $videoId,
            'embed_code' => '[epvideo]' . $videoId . '[/epvideo]',
            'hat' => $hat,
            'title' => $title,
            'headline' => $headline,
            'domain' => $domain
        ];
    }

    /**
     * @param String $content
     * @return bool|null|string
     */
    protected function _parseDomainMinutoDeNoticias(String $content)
    {
        $pos = strpos($content, 'href="');

        if ($pos !== false) {
            $pos += 6;
            $endPos = strpos($content, '"', $pos);
            return substr($content, $pos, $endPos - $pos);
        } else
            return null;
    }

    /**
     * @param String $content
     * @return bool|null|string
     */
    protected function _parseHeadlineMinutoDeNoticias(String $content)
    {
        $pos = strpos($content, '<p>');

        if ($pos !== false) {
            $pos += 3;
            $endPos = strpos($content, '</p>', $pos);
            return substr($content, $pos, $endPos - $pos);
        } else
            return null;
    }

    /**
     * @param String $content
     * @return bool|null|string
     */
    protected function _parseVideoMinutoDeNoticias(String $content)
    {
        $pos = strpos($content, 'video:"');

        if ($pos !== false) {
            $pos += 7;
            $endPos = strpos($content, '"', $pos);
            return substr($content, $pos, $endPos - $pos);
        } else
            return null;
    }

    /**
     * @param String $content
     * @return bool|null|string
     */
    protected function _parseHatMinutoDeNoticias(String $content)
    {
        $pos = strpos($content, '<h4');

        if ($pos !== false) {
            $pos = strpos($content, '>', $pos) + 1;
            $endPos = strpos($content, '</h4>', $pos);
            return substr($content, $pos, $endPos - $pos);
        } else
            return null;
    }

    /**
     * @param String $content
     * @return bool|null|string
     */
    protected function _parseTitleMinutoDeNoticias(String $content)
    {
        $pos = strpos($content, '<h2>');

        if ($pos !== false) {
            $pos += 4;
            $endPos = strpos($content, '</h2>', $pos);
            return substr($content, $pos, $endPos - $pos);
        } else
            return null;
    }

    /**
     * @return null|string
     */
    protected function _loadMinutoDeNoticias()
    {
        if (!is_null($this->minuto_de_noticias_content) && $this->minuto_de_noticias_content != '') return $this->minuto_de_noticias_content;

        $url = "http://cdn-perfil.perfil.com/widgets/sidebar-video-widget";
        $this->minuto_de_noticias_content = $this->_getFileContent($url);
        return $this->minuto_de_noticias_content;
    }

    /**
     * @param String $url
     * @return bool|mixed
     */
    protected function _getFileContent(String $url)
    {
        $ch = curl_init();
        $timeout = 5;
        $userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)';
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_USERAGENT, $userAgent);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FAILONERROR, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_AUTOREFERER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $data = curl_exec($ch);
        curl_close($ch);

        return ($data)? $data: FALSE;
    }
}