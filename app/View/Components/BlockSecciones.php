<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class BlockSecciones extends Component
{
    /**
     * @var string
     */
    public $id_seccion;

    /**
     * @var array
     */
    public $news;

    /**
     * Create a new component instance.
     *
     * @param string $id
     * @param array $news
     */
    public function __construct(string $id, array $news)
    {
        $this->id_seccion = $id;
        $this->news = $news;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.block-secciones');
    }
}
