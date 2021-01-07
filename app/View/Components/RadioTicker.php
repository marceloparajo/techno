<?php

namespace App\View\Components;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\Component;
use Illuminate\View\View;

class RadioTicker extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.radio-ticker');
    }

    /**
     * @return mixed
     */
    public function news()
    {
        return Cache::remember('radio-ticker-news', 5, function () {
            $disk = Storage::disk('rsc');

            if (env('RESOURCES_SOURCE', 'file') == 'file') {
                $path = str_replace('-sitecode-', 'radioperfil', env('LAST_POSTS_FILE', ''));
                $news = ($disk->exists($path)) ? json_decode($disk->get($path), true) : [];
            } else {
                $url = str_replace('-sitecode-', 'radioperfil', env('LAST_POSTS_URL', ''));
                $news = json_decode(file_get_contents($url), true);
            }

            return $news;
        });
    }
}
