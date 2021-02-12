<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class BlockRevistas extends Component
{
    /**
     * @var string
     */
    public $id_revista;

    /**
     * @var array
     */
    public $news;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(string $id, array $news)
    {
        $this->id_revista = $id;
        $this->news = $news;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.block-revistas');
    }

    /**
     * @return string
     */
    public function title()
    {
        switch ($this->id_revista) {
            case 'rev-caras':
                return 'Caras';

            case 'rev-marieclaire':
                return 'Marie Claire';

            case 'rev-fortuna':
                return 'Fortuna';

            case 'rev-luz':
                return 'Luz';

            case 'rev-hombre':
                return 'Hombre';

            case 'rev-mia':
                return 'Mia';

            case 'rev-lunateen':
                return 'Lunateen';

            default:
                return $this->id_revista;
        }
    }


    public function enlace()
    {
        switch ($this->id_revista) {
            case 'rev-caras':
                return 'https://caras.perfil.com';

            case 'rev-marieclaire':
                return 'https://marieclaire.perfil.com';

            case 'rev-fortuna':
                return 'https://fortuna.perfil.com';

            case 'rev-luz':
                return 'https://luz.perfil.com';

            case 'rev-hombre':
                return 'https://hombre.perfil.com';

            case 'rev-mia':
                return 'https://mia.perfil.com';

            case 'rev-lunateen':
                return 'https://lunateen.perfil.com';

            case 'rev-supercampo':
                return 'https://supercampo.perfil.com';

            case 'rev-weekend':
                return 'https://weekend.perfil.com';

            case 'rev-parabrisas':
                return 'https://parabrisas.perfil.com';

            case 'rev-noticias':
                return 'https://noticias.perfil.com';

            default:
                return 'https://www.perfil.com';
        }
    }



}
