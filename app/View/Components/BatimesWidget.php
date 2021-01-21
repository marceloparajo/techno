<?php

namespace App\View\Components;

use App\Http\Helpers\BlockDistributionsHelper;
use Illuminate\View\Component;
use Illuminate\View\View;

class BatimesWidget extends Component
{
    /**
     * @var array
     */
    public $news;

    /**
     * Create a new component instance.
     *
     * @param BlockDistributionsHelper $blockDistributionsHelper
     */
    public function __construct(BlockDistributionsHelper $blockDistributionsHelper)
    {
        $this->news = $blockDistributionsHelper->getLastsPosts('batimes');
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.batimes-widget');
    }
}
