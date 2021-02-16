<?php
/**
 * Created by PhpStorm.
 * User: esand
 * Date: 2/4/19
 * Time: 00:15
 */

namespace App\Http\Helpers;

use Illuminate\Support\Str;

class ImageHelper
{
    const ORIGINAL      = 1300;
    const FULL_WIDTH    = 1920;
    const BIG_WIDTH     = 1140;
    const LARGE_WIDTH   = 960;
    const MEDIUM_WIDTH  = 720;
    const SMALL_WIDTH   = 540;
    const XS_WIDTH      = 270;
    const BIG_SQUARE    = 800;
    const MEDIUM_SQUARE = 400;
    const SMALL_SQUARE  = 200;
    const XS_SQUARE     = 100;

    /**
     * ParseHelper constructor.
     * @param shortCodeConverter $shortCodeConverter
     */
    public function __construct()
    {
        //code here
    }


    /**
     * @param String $image
     * @return array
     */
    public function parseVersionImages( String $image ):Array
    {
        return [
            'original'          => $this->generateUrlImage($image),
            'full-wide'         => $this->generateUrlImage($image, '/trim/1920/1080/'),
            'big-wide'          => $this->generateUrlImage($image, '/trim/1140/641/'),
            'large-wide'        => $this->generateUrlImage($image, '/trim/960/540/'),
            'medium-wide'       => $this->generateUrlImage($image, '/trim/720/405/'),
            'small-wide'        => $this->generateUrlImage($image, '/trim/540/304/'),
            'extra-big-wide'    => $this->generateUrlImage($image, '/trim/1140/540/'),
            'extra-medium-wide' => $this->generateUrlImage($image, '/trim/720/355/'),
            'extra-small-wide'  => $this->generateUrlImage($image, '/trim/270/152/'),
            'big-square'        => $this->generateUrlImage($image, '/trim/800/800/'),
            'medium-square'     => $this->generateUrlImage($image, '/trim/400/400/'),
            'small-square'      => $this->generateUrlImage($image, '/trim/200/200/'),
            'extra-small-square'=> $this->generateUrlImage($image, '/trim/100/100/'),
            'thumb' => [
                '100' => $this->generateUrlImage($image, '/cropped/100/100/center/'),
                '250' => $this->generateUrlImage($image, '/cropped/250/250/center/'),
            ],
            'cropped' => [
                '1x1' => $this->generateUrlImage($image, '/cropped/696/696/center/'),
                '4x3' => $this->generateUrlImage($image, '/cropped/696/522/center/'),
                '16x9' => $this->generateUrlImage($image, '/cropped/696/392/center/')
            ],
            'tapa' =>  $this->generateUrlImage($image, '/trim/300/390/')
        ];
    }

    public function getLazyImages( String $image, Int $maxWidth = 1300, String $alt="", String $class = "", String $defautSize = "1140x641"):String
    {

        $defaultImg = "https://via.placeholder.com/".$defautSize."?text=". strtoupper(env('APP_NAME',''));
        //$defaultImg = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==, ';

        if( strpos($image, 'fotos.perfil.com') !== false ){
            $original = $this->cleanImagePath( $image );
            $srcs = $this->parseVersionImages( $original );

            $dataSrcset =   $srcs['extra-small-wide'].' 270w,';
            if ($maxWidth >= 300)   $dataSrcset .=  $srcs['tapa'].' 300w,';
            if ($maxWidth >= 540)   $dataSrcset .=  $srcs['small-wide'].' 540w,';
            if ($maxWidth >= 720)   $dataSrcset .=  $srcs['medium-wide'].' 720w,';
            if ($maxWidth >= 720)   $dataSrcset .=  $srcs['extra-medium-wide'].' 720w,';
            if ($maxWidth >= 960)   $dataSrcset .=  $srcs['large-wide'].' 960w,';
            if ($maxWidth >= 1140)  $dataSrcset .=  $srcs['big-wide'].' 1140w,';
            if ($maxWidth >= 1140)  $dataSrcset .=  $srcs['extra-big-wide'].' 1140w,';
            if ($maxWidth >= 1300)  $dataSrcset .=  $srcs['original'].' 1300w,';
            if ($maxWidth >= 1920)  $dataSrcset .=  $srcs['full-wide'].' 1920w';

            return '<img alt="'.$alt.'" class="'.$class.' lazyload" src="'.$defaultImg.'" data-srcset="'.$dataSrcset.'" data-sizes="'.$maxWidth.'">';
        }else{
            return '<img alt="'.$alt.'" class="'.$class.' lazyload" src="'.$defaultImg.'" data-src="'.$image.'" data-sizes="'.$maxWidth.'">';
        }
    }

    public function replaceContentImagesWithLaizyImages( String $content = ""):String
    {
        return $content;
    }

    /**
     * @param String $username
     * @param int $size
     * @return string
     */
    public function generateUrlImageAuthor(string $username, int $size = 100): String
    {
        return rtrim(env('IMAGES_SERVER', 'https://fotos.perfil.com'), '/') . "/autores/default/$username" . "_$size.jpg";
    }

    /**
     * @param String $src
     * @param String $format
     * @return string
     */
    public function generateUrlImage(String $src, String $format = ''):String
    {
        $pos = strrpos($src, '/');
        $filename = substr($src, $pos +1);
        $domain = substr($src, 0, $pos);

        $valuesToReplace = [
            'media',
            'images',
            'raw',
            'large',
            'mobile',
            'small',
            'orinoco-files',
            'original'
        ];

        foreach ($valuesToReplace as $value) {
            if (strpos($domain, $value) !== false)
                $domain = str_replace($value, '', $domain);
        }

        if ($format != '') {
            $format = ltrim($format, '/');
            $format = rtrim($format, '/');
            $domain .= "/$format";
        }

        if (! Str::contains($domain, env('IMAGES_SERVER', 'https://fotos.perfil.com')))
            $domain = rtrim(env('IMAGES_SERVER', 'https://fotos.perfil.com'), '/') . '/' . ltrim($domain, '/');

        return "$domain/$filename";
    }

    public function cleanImagePath(String $src ):String
    {
        $retValue = $src;
        if( strpos( $src, 'trim') > 0 ){
            $retValue =  $this->_cleanTrimedImage($src);
        }elseif ( strpos( $src, 'cropped') > 0) {
            $retValue =  $this->_cleanCroppedImage($src);
        }else{
            $retValue = $this->_cleanDomainImage($src);
        }
        return $retValue;
    }

    protected function _cleanTrimedImage( String $src ):String
    {
        $re = $re = '/^(http|https):\/\/(fotos\.perfil\.com)\/(.*)\/(trim)\/(.*)\/(.*)/m';
        $subst = '/$3/$6';
        return preg_replace($re, $subst, $src);
    }

    protected function _cleanCroppedImage( String $src ):String
    {
        $re = $re = '/^(http|https):\/\/(fotos\.perfil\.com)\/(.*)\/(cropped)\/(.*)\/(.*)/m';
        $subst = '/$3/$6';
        return preg_replace($re, $subst, $src);
    }

    protected function _cleanDomainImage( String $src ):String
    {
        $re = '/^(http|https):\/\/(fotos\.perfil\.com)\/(.*)/m';
        $subst = '/$3';
        return preg_replace($re, $subst, $src);
    }

    protected function _getRatioHeight (Int $width = 1300, Int $ratioWidth = 16, Int $ratioHeight = 9 ):Int
    {
        return ceil( ($width * $ratioHeight) / $ratioWidth );
    }
}
