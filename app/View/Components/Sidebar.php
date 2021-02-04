<?php

namespace App\View\Components;

use App\Http\Helpers\BlockDistributionsHelper;
use Illuminate\View\Component;
use Illuminate\View\View;

class Sidebar extends Component
{
    public $content;

    /**
     * Create a new component instance.
     *
     * @param BlockDistributionsHelper $blockDistributionsHelper
     */
    public function __construct(BlockDistributionsHelper $blockDistributionsHelper)
    {
        $sidebar = $blockDistributionsHelper->getSidebar();
        $this->_getSidebar($sidebar);
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

    /**
     * @param array $sidebar
     */
    protected function _getSidebar(array $sidebar)
    {
        $this->content = [];

        foreach ($sidebar as $item) {
            if ($item['id'] == 'divisas') continue;

            if ($item['id'] == 'perform' && ! env('PERFORM_ENABLE', false)) continue;

            if (! $item['widget'] && count($item['news']) <= 0) continue;

            array_push($this->content, $item);
        }
    }
}
