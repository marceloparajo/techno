<?php

namespace App\View\Components;

use App\Http\Helpers\ImageHelper;
use Illuminate\Support\Str;
use Illuminate\View\Component;
use Illuminate\View\View;

class LazyImage extends Component
{
    /**
     * @var string
     */
    public $src;

    /**
     * @var string
     */
    public $alt;

    /**
     * @var string
     */
    public $class;

    /**
     * @var array[]
     */
    public $sizes;

    /**
     * @var bool
     */
    public $play_button;

    /**
     * @var bool
     */
    public $camera_button;

    /**
     * @var int|null
     */
    public $max_width;

    /**
     * @var bool
     */
    public $external_image;

    /**
     * @var bool
     */
    public $lazy_load;

    public $picture_class;

    /**
     * Create a new component instance.
     *
     * @param string $src
     * @param string $alt
     * @param string $class
     * @param bool $playButton
     * @param bool $cameraButton
     * @param int|null $maxWidth
     * @param bool $cleanSource
     * @param array $sizes
     * @param bool $externalImage
     * @param bool $vertical
     * @param bool $lazyLoad
     * @param string $pictureClass
     */
    public function __construct(string $src, string $alt = '', string $class = '', bool $playButton = false, bool $cameraButton = false, int $maxWidth = null, bool $cleanSource = false, array $sizes = [['v' => 260, 'w' => 360, 'h' => 205], ['v' => 414, 'w' => 414, 'h' => 236]], bool $externalImage = false, bool $vertical = false, bool $lazyLoad = true, string $pictureClass = 'cls-optimized')
    {
        $this->external_image = $externalImage;
        $this->src = $src;
        $this->src = ($cleanSource) ? $this->_cleanSource($src) : $src;
        $this->alt = $alt;
        $this->class = $class;
        $this->play_button = $playButton;
        $this->camera_button = $cameraButton;
        $this->max_width = $maxWidth;
        $this->lazy_load = $lazyLoad;
        $this->sizes = $sizes;
        $this->picture_class = $pictureClass;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.lazy-image');
    }

    /**
     * @return array[]
     */
    public function images()
    {
        $imagesHelper = new ImageHelper();
        $images = [];

        foreach ($this->sizes as $element) {
            $version = '/trim/' . $element['w'] . '/' . $element['h'] . '/';

            $image_url = $imagesHelper->generateUrlImage($this->src, $version);

            array_push($images, [
                'src' => $image_url,
                'src_webp' => $image_url . '?webp',
                'viewport' => $element['v'],
                'width' => $element['w'],
                'height' => $element['h']
            ]);
        }

        return $images;
    }

    /**
     * @return bool
     */
    public function internalImage()
    {
        if ($this->external_image)
            return false;

        return Str::contains($this->src, 'fotos.perfil.com');
    }

    /**
     * @param string $source
     * @return string|string[]
     */
    protected function _cleanSource(string $source): string
    {
        if (! $this->internalImage()) return $source;

        $source_work = str_replace('https://', '', $source);
        $source_work = str_replace('http://', '', $source_work);
        $source_work = rtrim($source_work, '/');

        $array_source_work = explode('/', $source_work);

        if (count($array_source_work) > 5)
            $source = 'https://' . $array_source_work[0] . '/' . $array_source_work[1] . '/' . $array_source_work[2] . '/' . $array_source_work[3] . '/' . end($array_source_work);

        return $source;
    }
}
