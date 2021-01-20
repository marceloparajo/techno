<?php


namespace App\Http\Helpers;


use Illuminate\Support\Str;
use PHPHtmlParser\Dom;
use PHPHtmlParser\Exceptions\ChildNotFoundException;
use PHPHtmlParser\Exceptions\CircularException;
use PHPHtmlParser\Exceptions\ContentLengthException;
use PHPHtmlParser\Exceptions\LogicalException;
use PHPHtmlParser\Exceptions\NotLoadedException;
use PHPHtmlParser\Exceptions\StrictException;

class PostBodyHelper
{
    /**
     * @var ImageHelper
     */
    protected $imageHelper;

    /**
     * PostBodyHelper constructor.
     * @param ImageHelper $imageHelper
     */
    public function __construct(ImageHelper $imageHelper)
    {
        $this->imageHelper = $imageHelper;
    }

    /**
     * @param string $text
     * @return string
     */
    public function process(string $text): string
    {
        $text = $this->_replaceImages($text);

        return $text;
    }

    /**
     * @param string $text
     * @return string
     * @throws ChildNotFoundException
     * @throws CircularException
     * @throws ContentLengthException
     * @throws LogicalException
     * @throws NotLoadedException
     * @throws StrictException
     */
    protected function _replaceImages(string $text): string
    {
        $to_edit = [];

        $pos_img = strpos($text, '<img');

        while ($pos_img != false) {
            $pos_start = $pos_img;
            $pos_end = strpos($text, '>', $pos_start);
            $image_element = substr($text, $pos_start, ($pos_end +1) - $pos_start);

            $dom = new Dom;
            $dom->loadStr($image_element);
            $img = $dom->find('img')[0];

            if (is_null($img)) {
                $pos_img = strpos($text, '<img', $pos_start + 4);
                continue;
            }

            $src = $img->getAttribute('src');

            if (is_null($src)) {
                $pos_img = strpos($text, '<img', $pos_start + 4);
                continue;
            }

            $alt = $img->getAttribute('alt') ?? '';

            if (Str::contains($src, 'fotos.perfil.com')) {
                $src = $this->_fixImageSrc($src);
                $html = $this->_generateSrcsetImages($src, $alt);
            } else
                $html = $this->_generateBasicImage($src, $alt);

            array_push($to_edit, [
                'search' => $image_element,
                'replace' => $html
            ]);

            $pos_img = strpos($text, '<img', $pos_start + 4);
            continue;
        }

        // Reemplazo
        foreach ($to_edit as $row) {
            $text = str_replace($row['search'], $row['replace'], $text);
        }

        return $text;
    }

    /**
     * @param string $src
     * @param string $alt
     * @return string
     */
    protected function _generateSrcsetImages(string $src, string $alt = '')
    {
        $html = '<picture>';

        $image = $this->imageHelper->generateUrlImage($src, '/300/0/');
        $html .= '<source media="(max-width: 350px)" data-srcset="' . $image . '" />';

        $image = $this->imageHelper->generateUrlImage($src, '/540/0/');
        $html .= '<source media="(max-width: 600px)" data-srcset="' . $image . '" />';

        $image = $this->imageHelper->generateUrlImage($src, '/720/0/');
        $html .= '<source media="(max-width: 800px)" data-srcset="' . $image . '" />';

        $image = $this->imageHelper->generateUrlImage($src, '/960/0/');
        $html .= '<img alt="' . $alt . '" class="lazyload" src="' . $image . '">';

        $html .= '</picture>';

        return $html;
    }

    /**
     * @param string $src
     * @param string $alt
     * @return string
     */
    protected function _generateBasicImage(string $src, string $alt = '')
    {
        return '<img src="' . $src . '" alt="' . $alt . '" class="lazyload">';
    }

    /**
     * @param string $src
     * @return string
     */
    protected function _fixImageSrc(string $src): string
    {
        $pos = strpos($src, 'fotos.perfil.com');
        $src = substr($src, $pos);

        $src = str_replace('//', '/', $src);

        $explode_src = explode('/', $src);
        $src = 'https://' . $explode_src[0] . '/' . $explode_src[1] . '/' . $explode_src[2] . '/' . $explode_src[3] . '/' . end($explode_src);

        return $src;
    }
}
