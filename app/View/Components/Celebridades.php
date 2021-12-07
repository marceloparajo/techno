<?php

namespace App\View\Components;

use App\Http\Helpers\MenuHelper;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\Component;
use Illuminate\View\View;

class Celebridades extends Component
{
    /**
     * @var array
     */
    public $news;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(array $news)
    {
        $this->news = $news;
    }

    /**
     * @return array
     */
    public function getMenu(): array
    {
        $menuHelper = new MenuHelper();

        return $menuHelper->getMenuItems('personajes');
    }

    /**
     * @return array
     */
    public function getNews(): array
    {
        $cant = (count($this->news) < 6) ? 3 : 6;

        return array_slice($this->news, 0, $cant);
    }

    /**
     * @return bool
     */
    public function showBlock(): bool
    {
        return count($this->news) > 2;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return Application|Factory|View|string
     */
    public function render()
    {
        return ($this->showBlock())
            ? view('components.celebridades')
            : '';

    }
}
