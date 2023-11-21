<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class Comscore extends Component
{
    /** @var bool */
    protected $enable;

    /** @var string */
    public $client_id;

    /** @var string  */
    public $format;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(string $format = 'web')
    {
        $this->enable = config('services.comscore.enable');
        $this->client_id = config('services.comscore.client_id');
        $this->format = $format;
    }

    /**
     * @return bool
     */
    public function is_enable(): bool
    {
        return $this->enable && $this->client_id != '';
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View
     */
    public function render(): View
    {
        return view('components.comscore');
    }
}
