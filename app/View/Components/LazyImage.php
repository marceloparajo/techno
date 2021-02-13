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
     * @var false|string[]
     */
    public $request_sizes;

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
     * Create a new component instance.
     *
     * @param string $src
     * @param string $alt
     * @param string $class
     * @param bool $playButton
     * @param bool $cameraButton
     * @param int|null $maxWidth
     * @param bool $cleanSource
     * @param string $sizes
     * @param bool $externalImage
     */
    public function __construct(string $src, string $alt = '', string $class = '', bool $playButton = false, bool $cameraButton = false, int $maxWidth = null, bool $cleanSource = false, string $sizes = '', bool $externalImage = false)
    {
        $this->src = ($cleanSource) ? $this->_cleanSource($src) : $src;
        $this->alt = $alt;
        $this->class = $class;
        $this->play_button = $playButton;
        $this->camera_button = $cameraButton;
        $this->max_width = $maxWidth;
        $this->request_sizes = ($sizes != '') ? explode(',', $sizes) : [];
        $this->external_image = $externalImage;

        $this->sizes = [
            ['size' => 200, 'version' => '/trim/200/113/', 'width' => '200px'],
            ['size' => 300, 'version' => '/trim/300/180/', 'width' => '300px'],
            ['size' => 500, 'version' => '/trim/540/304/', 'width' => '540px'],
            ['size' => 700, 'version' => '/trim/720/405/', 'width' => '720px'],
            ['size' => 900, 'version' => '/trim/960/540/', 'width' => '960px'],
            ['size' => 1200, 'version' => '/trim/1280/720/', 'width' => '1280px'],
            ['size' => 1500, 'version' => '/trim/1920/1080/', 'width' => '1500px'],
        ];
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

            if (count($this->request_sizes) > 0)
                $include = in_array($element['size'], $this->request_sizes);
            else
                $include = (is_null($this->max_width) || $this->max_width >= $element['size']);

            if ($include)
                array_push($images, [
                    'src' => $imagesHelper->generateUrlImage($this->src, $element['version']),
                    'width' => $element['width']
                ]);
        }

        return $images;
    }

    /**
     * @return bool
     */
    public function internalImage()
    {
        return ! $this->external_image || Str::contains($this->src, env('IMAGES_SERVER', 'https://fotos.perfil.com'));
    }

    /**
     * @return string
     */
    public function loadingImage()
    {
        return 'data:image/jpeg;base64,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';

        #return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAQAAAAHDYbIAAAADklEQVR42mNkQAKMxHEAALYABYctLdIAAAAASUVORK5CYII=';
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
