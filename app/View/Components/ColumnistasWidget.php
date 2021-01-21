<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class ColumnistasWidget extends Component
{
    /**
     * @var int
     */
    public $items_by_slice;

    /**
     * @var array
     */
    public $news;

    /**
     * Create a new component instance.
     *
     * @param array $news
     * @param int $itemsBySlice
     */
    public function __construct(array $news, int $itemsBySlice = 5)
    {
        $this->news = $news;
        $this->items_by_slice = $itemsBySlice;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.columnistas-widget');
    }

    /**
     * @return array
     */
    public function content()
    {
        return array_chunk($this->news, $this->items_by_slice);
    }
}
