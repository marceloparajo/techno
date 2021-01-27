<?php

namespace App\View\Components;

use Illuminate\Routing\Route;
use Illuminate\View\Component;
use Illuminate\View\View;

class GoogleTagManager extends Component
{
    /**
     * @var string
     */
    public $category;

    /**
     * @var string
     */
    public $format;

    /**
     * @var array
     */
    public $content;

    /**
     * @var array
     */
    public $info;

    /**
     * @var mixed
     */
    public $gtm_id;

    /**
     * @var mixed
     */
    public $gtm_amp_id;

    /**
     * @var mixed
     */
    public $gtm_fbia_id;

    /**
     * Create a new component instance.
     *
     * @param string $category
     * "nota" - interior de notas
     * "vitrina de notas" - listados donde se muestren varias noticias
     * "homepage" - Home
     * "buscador" - Sección buscador
     *
     * @param string $format
     * @param array $info
     */
    public function __construct(string $category, string $format = 'estandar', array $info = [])
    {
        $this->category = $category;
        $this->format = $format;
        $this->info = $info;
        $this->gtm_id = env('ANALYTICS_GTM_ID','');
        $this->gtm_amp_id = env('ANALYTICS_GTM_AMP_ID', '');
        $this->gtm_fbia_id = env('ANALYTICS_GTM_FBIA_ID', '');

        $this->content = [
            'brand' => env('SITE_CODE', 'perfil'),
            'environment' => (env('APP_ENV', 'local') != 'production') ? "testing" : "main",
            'pageCategory' => $this->category,
            'articleFormat' => $this->format
        ];

        $this->_setGTM();
    }

    /**
     * Configura GTM para diferentes recursos
     */
    protected function _setGTM()
    {
        switch ($this->category) {
            case 'nota':
                $this->_setArticleGTM();
                break;

            case 'buscador':
                $this->content['searchTerm'] = $this->info['searchTerm'] ?? "";
        }
    }

    /**
     * Set GTM para interior de notas
     */
    protected function _setArticleGTM()
    {
        $home_zone = $this->info['home']['zone'] ?? '';
        $home_position = $this->info['home']['position'] ?? '';

        $this->content += [
            'articleId' => $this->info['id'],
            'articleTitle' => $this->info['title'],
            'articleStyle' => 'noticia',
            'articleSection' => $this->info['channel']['slug'],
            'articleTags' => str_replace( ',', '|', $this->info['tags']),

            // Fechas
            'articleLastUpdate' => $this->info['date_update']->toDateTimeString(),
            'articlePublicationDateLegacy' => $this->info['date_available']->locale('en')->isoFormat('MMMM, DD YYYY HH:mm:ss ZZ'),
            'articlePublicationDate' => $this->info['date_available']->toDateTimeString(),
            'articleLastUpdateLegacy' => $this->info['date_update']->locale('en')->isoFormat('MMMM, DD YYYY HH:mm:ss ZZ'),

            // Home Zone and Position
            'articleHighlightLevel' => ($home_zone != '' && $home_position != '') ? "$home_zone#$home_position" : '',
            'articleHighlightLevelZone' => $home_zone,
            'articleHighlightLevelPosition' => $home_position,

            // Editor
            'articleEditorId' => $this->info['editor']['id'] ?? '',
            'articleEditorUserName' => trim($this->info['editor']['username'] ?? ''),
            'articleEditor' => trim($this->info['editor']['fullname']?? ''),

            // Author
            'articleAuthorId' => $this->info['author']['id'],
            'articleAuthorUserName' => trim($this->info['author']['username']),
            'articleAuthor' => trim($this->info['author']['fullname'] ?? ''),
            'articleSigned' => $this->info['signed'] == 1,
            'articleCredit' => trim($this->info['credit'] ?? ''),

            // Flags
            'articleHaveVideo' => isset($this->info['has']['video']) && $this->info['has']['video'],
            'articleHaveImages' => isset($this->info['has']['images']) && $this->info['has']['images'],
            'articleHaveGallery' => isset($this->info['has']['gallery']) && $this->info['has']['gallery'],
            'articleHaveAudio' => isset($this->info['has']['audio']) && $this->info['has']['audio'],
            'articleHaveSocial' => isset($this->info['has']['social']) && $this->info['has']['social'],
            'articleHaveComments' => isset($this->info['has']['commnets']) && $this->info['has']['commnets'],
            'articleHaveFiles' => isset($this->info['has']['file']) && $this->info['has']['file'],

            'articleIsCompressed' => 'false',
            'articleHaveRedaction' => (strlen (strip_tags( $this->info['body'] )) > 0 ),
            'articleFullLength' => strlen (strip_tags( $this->info['body'] )),
            'articleWordCounter' => str_word_count( strip_tags( $this->info['body'] ), 0 ),

            'articleLayout' => 'default',
            'articleScrollLimit' => 'false'
        ];
    }





    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.google-tag-manager');
    }
}
