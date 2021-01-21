<?php

namespace App\View\Components;

use App\Http\Helpers\BlockDistributionsHelper;
use Illuminate\View\Component;
use Illuminate\View\View;

class DivisasWidget extends Component
{
    public $content;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(BlockDistributionsHelper $blockDistributionsHelper)
    {
        $this->content = $blockDistributionsHelper->getDivisas();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.divisas-widget');
    }

    public function dolar_solidario()
    {
        $dolar_oficial = $this->content['oficial']['value_sell'];
        $percent = (65 * $dolar_oficial) / 100;
        $total = $dolar_oficial + $percent;

        return $this->format_number($total);
    }

    /**
     * @param $number
     * @return string
     */
    public function format_number($number)
    {
        return number_format($number, 2, '.', ',');
    }
}
