<?php

namespace App\View\Components;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\Component;
use Illuminate\View\View;

class Header extends Component
{
    /**
     * @var Carbon
     */
    public $current_date;

    /**
     * @var mixed
     */
    protected $menu_items;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        setlocale(LC_TIME, env('APP_TIME_LOCALE'));
        $this->current_date = Carbon::now();

        $this->menu_items = $this->_load_menu();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.header');
    }

    /**
     * @return array
     */
    public function topics(): array
    {
        return $this->_get_menu('temas');
    }

    /**
     * @return array
     */
    public function main_menu(): array
    {
        return $this->_get_menu('principal');
    }

    /**
     * @return array
     */
    public function revistas(): array
    {
        return $this->_get_menu('revistas');
    }

    /**
     * @param string $type
     * @return array
     */
    protected function _get_menu(string $type): array
    {
        return (isset($this->menu_items[$type])) ? $this->menu_items[$type] : [];
    }

    /**
     * @return array
     */
    protected function _load_menu(): array
    {
        return Cache::remember('header-menu', 1, function () {
            $site = strtolower(env('SITE_CODE', 'perfil'));
            $disk = Storage::disk('rsc');

            if (env('RESOURCES_SOURCE', 'file') == 'file') {
                $path = str_replace('-sitecode-', $site, env('MENU_FILE', ''));
                return ($disk->exists($path)) ? json_decode($disk->get($path), true) : [];
            } else {
                $url = str_replace('-sitecode-', $site, env('MENU_URL', ''));
                return json_decode(file_get_contents($url), true);
            }
        });

    }
}
