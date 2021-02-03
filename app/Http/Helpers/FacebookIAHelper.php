<?php


namespace App\Http\Helpers;


class FacebookIAHelper
{
    /**
     * @param String $body
     * @return mixed|String
     */
    public static function fixBody(String $body)
    {
        $body = self::_deleteJumpSpace($body);
        $body = self::_fixFigures($body);
        $body = self::_fixListElements($body);

        return $body;
    }

    /**
     * @param String $body
     * @return mixed|String
     */
    protected static function _fixListElements(String $body)
    {
        $pos = strpos($body, '<li>');
        while ($pos !== false) {
            $pos_end = strpos($body, '</li>', $pos) + 5;
            $content = substr($body, $pos, $pos_end - $pos);

            $content = str_replace('<p>', '', $content);
            $content = str_replace('</p>', '', $content);

            $content = substr_replace($content, '<p>', 4, 0);
            $content = substr_replace($content, '</p>', strlen($content) - 5, 0);

            $body = substr_replace($body, $content, $pos, $pos_end - $pos);

            $pos_end = strpos($body, '</li>', $pos);
            $pos = strpos($body, '<li>', $pos_end);
        }

        return  $body;
    }

    /**
     * @param String $body
     * @return mixed|String
     */
    protected static function _deleteJumpSpace(String $body)
    {
        $body = str_replace('<p>&nbsp;</p>', '', $body);
        return $body;
    }

    /**
     * @param String $body
     * @return mixed|String
     */
    protected static function _fixFigures (String $body)
    {
        $pos = strpos($body, '<figure>');
        while ($pos !== false) {
            $paragraph_pos = strripos($body, '<p', (strlen($body) - $pos) * -1);
            if ($paragraph_pos === false) {
                $pos = strpos($body, '<figure>', $pos + 8);
                continue;
            }
            $paragraph_pos_end = strpos($body, '>', $paragraph_pos) +1;
            $body = substr_replace($body, '', $paragraph_pos, $paragraph_pos_end - $paragraph_pos);

            $pos_end = strpos($body, '</p>', $paragraph_pos);
            if ($pos_end === false) {
                $pos = strpos($body, '<figure>', $paragraph_pos + 8);
                continue;
            }

            $body = substr_replace($body, '', $pos_end, 4);

            $pos = strpos($body, '<figure>', $pos_end);
        }

        return $body;
    }
}