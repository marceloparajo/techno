<?php

namespace App\View\Components;

use App\Http\Helpers\ImageHelper;
use App\Http\Helpers\ShortCodeConverter;
use Illuminate\View\Component;
use Illuminate\View\View;

class ArticleFeaturedContent extends Component
{
    /**
     * @var array
     */
    public $noticia;

    /**
     * @var array
     */
    public $gallery;

    /**
     * Create a new component instance.
     *
     * @param array $noticia
     */
    public function __construct(array $noticia)
    {
        $this->noticia = $noticia;
        $this->gallery = $noticia['gallery'];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.article-featured-content');
    }

    /**
     * @return bool
     */
    public function showEmbedCode()
    {
        return $this->noticia['embed_code'] != '' && $this->noticia['main_content'] != 'embed_code' && (STRPOS($this->noticia['embed_code'], 'rudo') || STRPOS($this->noticia['embed_code'], 'tube'));
    }

    /**
     * @return String
     */
    public function embedCode()
    {
        $shortCodeConverter = new ShortCodeConverter();

        return $shortCodeConverter->convert($this->noticia['embed_code']);
    }

    /**
     * @return String
     */
    public function mainImage()
    {
        $imageHelper = new ImageHelper();
        return $imageHelper->getLazyImages($this->gallery[0]['srcs']['medium-wide'], 1140, $this->gallery[0]['caption'], 'figure-img img-fluid', '1140x641');
    }
}
