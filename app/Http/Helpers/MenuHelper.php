<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 21/11/2018
 * Time: 15:31
 */

namespace App\Http\Helpers;


use Illuminate\Support\Facades\Storage;

class MenuHelper
{
    /**
     * @var array
     */
    protected $menuitems = [];

    /**
     * MenuHelper constructor.
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function __construct()
    {
        $this->_load_menu();
    }

    /**
     * @param String $type
     * @return mixed
     */
    public function getMenuItems(String $type)
    {
        return (isset($this->menuitems[$type])) ? $this->menuitems[$type] : [];
    }

    /**
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function _load_menu()
    {
        $site = strtolower(env('SITE_CODE', 'perfil'));
        $disk = Storage::disk('rsc');

        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $path = str_replace('-sitecode-', $site, env('MENU_FILE', ''));
            $this->menuitems = ($disk->exists($path)) ? json_decode($disk->get($path), true) : [];
        } else {
            $url = str_replace('-sitecode-', $site, env('MENU_URL', ''));
            $this->menuitems = json_decode(file_get_contents($url), true);
        }
    }
}