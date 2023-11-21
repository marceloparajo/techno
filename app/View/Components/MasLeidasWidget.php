<?php

namespace App\View\Components;

use App\Http\Helpers\BlockDistributionsHelper;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\View\Component;
use Illuminate\View\View;

class MasLeidasWidget extends Component
{
    /**
     * @var array
     */
    public $news;

    /**
     * @var int
     */
    public $rows;

    /**
     * Create a new component instance.
     *
     * @param BlockDistributionsHelper $blockDistributionsHelper
     * @param int $rows
     * @throws FileNotFoundException
     */
    public function __construct(BlockDistributionsHelper $blockDistributionsHelper, int $rows = 5)
    {
        $this->news = $blockDistributionsHelper->getMostViewed('442');

        $this->rows = $rows;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return '';
        return view('components.mas-leidas-widget');
    }
}
