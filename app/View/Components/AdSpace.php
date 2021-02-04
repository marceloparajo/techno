<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class AdSpace extends Component
{
    /**
     * @var int
     */
    public $width;

    /**
     * @var int
     */
    public $height;

    /**
     * @var bool
     */
    public $reload;

    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $class;

    /**
     * @var int
     */
    public $margin_top;

    /**
     * @var int
     */
    public $margin_bottom;

    /**
     * @var string
     */
    public $style_width;

    /**
     * Create a new component instance.
     *
     * @param int $width
     * @param int $height
     * @param bool $reload
     * @param string $id
     * @param string $class
     * @param int $marginTop
     * @param int $marginBottom
     * @param string $styleWidth
     */
    public function __construct(int $width = 1, int $height = 1, bool $reload = false, string $id = '', string $class = '', int $marginTop = 10, int $marginBottom = 10, string $styleWidth = '100%')
    {
        $this->width = $width;
        $this->height = $height;
        $this->reload = $reload;
        $this->class = $class;
        $this->margin_bottom = $marginBottom;
        $this->margin_top = $marginTop;
        $this->style_width = ($styleWidth == 'auto') ? $width . 'px' : $styleWidth;
        $this->id = $this->_generateId($id);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.ad-space');
    }

    /**
     * @param string $id
     * @return string
     */
    protected function _generateId(string $id): string
    {
        return ($id != '') ? $id : $this->width . 'x' . $this->height . 'x-pos-';
    }
}
