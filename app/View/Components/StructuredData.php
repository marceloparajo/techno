<?php

namespace App\View\Components;

use App\Http\Helpers\ImageHelper;
use Illuminate\Support\Str;
use Illuminate\View\Component;
use Illuminate\View\View;

class StructuredData extends Component
{
    /** @var ImageHelper  */
    protected $imageHelper;

    /** @var array  */
    protected $data;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(ImageHelper $imageHelper, array $noticia)
    {
        $this->imageHelper = $imageHelper;
        $this->data = [];

        $this->data = $this->_generate_noticia($noticia);
        $media = $this->_generate_media($noticia);
        if (count($media) > 0) $this->data[] = $media;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View
     */
    public function render(): View
    {
        return view('components.structured-data');
    }

    /**
     * @return string
     */
    public function get_structured_data(): string
    {
        return json_encode($this->data);
    }

    /**
     * @param array $noticia
     * @return array
     */
    protected function _generate_media(array $noticia): array
    {
        $data = [];

        if (isset($noticia['metadata']['media_objects'])) {
            $metadata = collect($noticia['metadata']['media_objects']);

            $meta_videos = $metadata->where('type', 'video');

            foreach ($meta_videos as $meta) {
                $item = [
                    '@context' => 'http://schema.org',
                    '@type' => 'VideoObject',
                    'description' => ($meta['description'] != '') ? $meta['description'] : $meta['title'],
                    'name' => $meta['title'],
                    'publisher' => [
                        '@type' => $meta['publisher']['type'],
                        'name' => $meta['publisher']['name'],
                        'url' => $meta['publisher']['url'],
                        'logo' => [
                            '@type' => 'ImageObject',
                            'url' => $meta['publisher']['logo']
                        ]
                    ],
                    'thumbnailUrl' => $meta['thumbnails']['high'],
                    'embedUrl' => $meta['embed_url'],
                ];

                if ($meta['duration'] != '')
                    $item['duration'] = $meta['duration'];

                if ($meta['reproductions'] > 0)
                    $item['interactionCount'] = $meta['reproductions'];

                if ($meta['upload_date'] != '')
                    $item['uploadDate'] = $meta['upload_date'];

                $data[] = $item;
            }
        }

        return $data;
    }

    /**
     * @param array $noticia
     * @return array
     */
    protected function _generate_noticia(array $noticia): array
    {
        $channel_url = route('channels.show', $noticia['channel']['slug']);
        $date_available = $noticia['date_available']->format('F, d Y H:i:s O');

        return [
            '@context' => 'http://schema.org',
            '@type' => 'NewsArticle',
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => $noticia['permalink'],
            ],
            'headline' => Str::limit($noticia['short_title'], 110),
            'url' => $noticia['permalink'],
            'articleSection' => $channel_url,
            'genre' => $channel_url,
            'dateline' => 'Buenos Aires, AR',
            'inLanguage' => env('APP_TIME_LOCALE', config('app.locale')),
            'image' => [
                '@type' => 'ImageObject',
                'url' => $this->imageHelper->generateUrlImage($noticia['main_image']['srcs']['original'], '/trim/1280/720/'),
                'width' => 1280,
                'height' => 720
            ],
            'datePublished' => $date_available,
            'dateModified' => $date_available,
            'keywords' => '',
            'author' => [
                '@type' => 'Person',
                'name' => $noticia['author']['fullname'],
                'url' => route('authors.show', $noticia['author']['username'])
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => env( 'APP_ALTER_NAME', env('APP_NAME') ),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset('images/logo_perfil.png')
                ]
            ],
            "isAccessibleForFree" => true, //$this->_is_news_accessible_for_free($noticia),
            "hasPart" => [
                "@type" => "WebPageElement",
                "isAccessibleForFree" => true, //$this->_is_news_accessible_for_free($noticia),
                "cssSelector" => ".supercontenedor",
            ],
            "isPartOf" => [
                "@type" => ["CreativeWork", "Product"],
                "name" => "Perfil Virtual",
                "productID" => "perfil.com:perfil_digital"
            ]
        ];
    }
}
