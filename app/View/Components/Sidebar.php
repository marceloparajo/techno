<?php

namespace App\View\Components;

use App\Http\Helpers\BlockDistributionsHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\View\Component;
use Illuminate\View\View;

class Sidebar extends Component
{
    public $content;

    /**
     * Create a new component instance.
     *
     * @param BlockDistributionsHelper $blockDistributionsHelper
     * @throws FileNotFoundException
     */
    public function __construct(BlockDistributionsHelper $blockDistributionsHelper)
    {
        $this->content = $blockDistributionsHelper->getSidebar();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.sidebar');
    }
}
