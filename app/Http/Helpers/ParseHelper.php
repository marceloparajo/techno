<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 6/8/18
 * Time: 00:15
 */

namespace App\Http\Helpers;


use Carbon\Carbon;
use App\Http\Helpers\ImageHelper;
use Illuminate\Support\Str;

class ParseHelper
{
    /**
     * @var shortCodeConverter
     */
    protected $shortCodeConverter;

    /**
     * @var imageHelper
     */
    protected $imageHelper;

    /**
     * ParseHelper constructor.
     * @param shortCodeConverter $shortCodeConverter
     */
    public function __construct(shortCodeConverter $shortCodeConverter)
    {
        $this->shortCodeConverter = $shortCodeConverter;
        Carbon::setlocale(env('APP_TIME_LANGUAGE'));
        $this->imageHelper = new ImageHelper();
    }

    /**
     * @param array $noticia
     * @return array
     */
    public function parseNoticia(Array $noticia)
    {
        $datesHelper = new DatesHelper();

        $date_available = Carbon::createFromFormat('F, d Y H:i:s O', $noticia['date_available']);
        $date_update = (isset($noticia['date_update'])) ? Carbon::createFromFormat('F, d Y H:i:s O', $noticia['date_update']) : null;

        $date_available_human = $datesHelper->getDateForHuman($date_available);

        // Relacionadas
        if (isset($noticia['relacionadas']) && count($noticia['relacionadas']) > 0)
            $relacionadas = $this->_parseNoticiaRelacionada($noticia['relacionadas']);
        else if (isset($noticia['relacionadas_canal']) && count($noticia['relacionadas_canal']) > 0)
            $relacionadas = $this->_parseNoticiaRelacionada($noticia['relacionadas_canal'], $noticia['id']);
        else
            $relacionadas = [];

        switch (count($relacionadas)) {
            case '1':
                $relacionadasGroupClass = "groupxUno";
                break;
            case '2':
                $relacionadasGroupClass = "groupxDos";
                break;
            case '3':
                $relacionadasGroupClass = "groupxTres";
                break;
            default:
                $relacionadasGroupClass = "group";
                break;
        }

        // Gallery
        $gallery = [];
        if (isset($noticia['gallery']) && count($noticia['gallery']) > 0)
            $gallery = $this->_parseGallery($noticia['gallery'], [$noticia['main_image_id']]);
        array_unshift($gallery, [
            'id' => $noticia['main_image_id'] ?? 0,
            'src' => $this->imageHelper->generateUrlImage($noticia['image'], ''),
            'srcs' => $this->imageHelper->parseVersionImages($noticia['image']),
            'title' => $noticia['image_title'] ?? '',
            'caption' => $noticia['image_caption'] ?? '',
            'credit' => $noticia['image_credit'] ?? ''
        ]);

        // Tags
        $tags = [];
        if (isset($noticia['tags']) && $noticia['tags'] != '') {
            $array = explode(',', $noticia['tags']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($tags, [
                    'name' => ucwords($tag),
                    'route' => route('tags.show', Str::slug($tag))
                ]);
            }
        }

        $celebrities = [];
        if (isset($noticia['uol_tag1']) && $noticia['uol_tag1'] != '') {
            $array = explode(',', $noticia['uol_tag1']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($celebrities, [
                    'name' => ucwords($tag),
                    'route' => route('tags.personalities.show', Str::slug($tag))
                ]);
            }
        }

        $series = [];
        if (isset($noticia['uol_tag2']) && $noticia['uol_tag2'] != '') {
            $array = explode(',', $noticia['uol_tag2']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($series, [
                    'name' => ucwords($tag),
                    'route' => route('tags.series.show', Str::slug($tag))
                ]);
            }
        }

        $movies = [];
        if (isset($noticia['uol_tag3']) && $noticia['uol_tag3'] != '') {
            $array = explode(',', $noticia['uol_tag3']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($movies, [
                    'name' => ucwords($tag),
                    'route' => route('tags.movies.show', Str::slug($tag))
                ]);
            }
        }

        $events = [];
        if (isset($noticia['uol_tag4']) && $noticia['uol_tag4'] != '') {
            $array = explode(',', $noticia['uol_tag4']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($events, [
                    'name' => ucwords($tag),
                    'route' => route('tags.events.show', Str::slug($tag))
                ]);
            }
        }

        $locations = [];
        if (isset($noticia['uol_tag5']) && $noticia['uol_tag5'] != '') {
            $array = explode(',', $noticia['uol_tag5']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($locations, [
                    'name' => ucwords($tag),
                    'route' => route('tags.locations.show', Str::slug($tag))
                ]);
            }
        }

        $themes = [];
        if (isset($noticia['uol_tag6']) && $noticia['uol_tag6'] != '') {
            $array = explode(',', $noticia['uol_tag6']);

            foreach ($array as $tag) {
                $tag = trim($tag);
                array_push($themes, [
                    'name' => ucwords($tag),
                    'route' => route('tags.topics.show', Str::slug($tag))
                ]);
            }
        }

        // Body
        $body = (isset($noticia['body']) && $noticia['body'] != '') ? $noticia['body'] : '';

        // Permalink
        $permalink = $this->generatePermalink($noticia['permalink']);

        return [
            'id' => $noticia['id'],
            'slug' => $noticia['slug'] ?? '',
            'canonical'=> isset($noticia['canonical']) && !empty($noticia['canonical']) ? $noticia['canonical']: $permalink,
            'channel' => [
                'name' => $noticia['channel_name'],
                'slug' => $noticia['channel_slug']
            ],
            'date_available' => $date_available,
            'date_available_human' => $date_available_human,
            'date_update' => $date_update,
            'title' => $noticia['title'] ?? '',
            'home_title' => $noticia['home_title'],
            'short_title' => $noticia['short_title'] ?? '',
            'hat' => $noticia['hat'] ?? '',
            'headline' => $noticia['headline'],
            'signed' => isset($noticia['flag_firmado']) && $noticia['flag_firmado'] == 'S',
            'author' => [
                'id' => $noticia['author_id'] ?? 0,
                'username' => $noticia['author_username'],
                'image' => $this->imageHelper->generateUrlImageAuthor($noticia['author_username']),
                'fullname' => trim($noticia['author_firstname']) . ' ' . trim($noticia['author_lastname']),
                'twitter' => $noticia['author_twitter'] ?? '',
                'facebook' => $noticia['author_facebook'] ?? '',
                'instagram' => $noticia['author_instagram'] ?? '',
                'google_plus' => $noticia['author_googleplus'] ?? '',
                'blog' => $noticia['author_blogsite'] ?? '',
                'about' => $noticia['author_about'] ?? ''
            ],
            'gallery' => $gallery,
            'gallery_lightbox' => (count($gallery)) ? $this->_parseGalleryForLightbox($gallery) : '',
            'body' => $body,
            'permalink' => $permalink,
            'source_url' => $noticia['permalink'],
            'relacionadas' => $relacionadas,
            'relacionadasGroupClass' => $relacionadasGroupClass,
            'main_image' => [
                'id' => $noticia['main_image_id'] ?? '',
                'src' => $this->imageHelper->generateUrlImage($noticia['image'], '/trim/900/506/'),
                'credit' => $noticia['image_credit'] ?? '',
                'caption' => $noticia['image_caption'] ?? '',
                'title' => $noticia['image_title'] ?? '',
                'srcs' => $this->imageHelper->parseVersionImages($noticia['image'])
            ],
            'credit' => $noticia['credit'] ?? '',
            'google_amp' => isset($noticia['flag_google_amp']) && $noticia['flag_google_amp'] === 1,
            'embed_code' => $noticia['embed_code'],
            'embed_code_original' => $noticia['embed_code_original'] ?? '',
            'tags' => $noticia['tags'] ?? '',
            'tags_list'             => $tags,
            'tags_celebrities_list' => $celebrities,
            'tags_series_list'      => $series,
            'tags_movies_list'      => $movies,
            'tags_events_list'      => $events,
            'tags_locations_list'   => $locations,
            'tags_themes_list'      => $themes,
            'metadata' => (isset($noticia['metadata'])) ? $noticia['metadata'] : [],
            'previous_news' => (isset($noticia['previous_news'])) ? $noticia['previous_news'] : [],
            'has_video'=> $noticia['has_video']?? false,
            'has_gallery'=> $noticia['has_gallery']?? false
        ];
    }

    /**
     * @param string $permalink
     * @return string
     */
    public function generatePermalink(string $permalink)
    {
        $url = rtrim(env('APP_URL'), '/');
        $link = trim($permalink, '/');

        return "$url/$link";
    }

    /**
     * @param array $noticia
     * @return array
     */
    public function parseNoticiaStructuredData(Array $noticia)
    {
        $channel_url = route('channels.show', $noticia['channel']['slug']);
        $date_available = $noticia['date_available']->format('F, d Y H:i:s O');
        $structured = [];

        // Datos estructurados de la noticia
        $article = [
            '@context' => 'http://schema.org',
            '@type' => 'NewsArticle',
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => $noticia['permalink'],
                'breadcrumb' => [
                    '@context' => 'http://schema.org',
                    '@type' => 'BreadcrumbList',
                    'itemListElement' => [
                        [
                            '@type' => 'ListItem',
                            'position' => 1,
                            'item' => [
                                '@id' => asset(''),
                                'name' => 'Home'
                            ]
                        ],
                        [
                            '@type' => 'ListItem',
                            'position' => 2,
                            'item' => [
                                '@id' => $channel_url,
                                'name' => $noticia['channel']['name']
                            ]
                        ],
                        [
                            '@type' => 'ListItem',
                            'position' => 3,
                            'item' => [
                                '@id' => $noticia['permalink'],
                                'name' => ($noticia['hat'] != '') ? $noticia['hat'] : 'Noticia'
                            ]
                        ]
                    ]
                ]
            ],
            'headline' => Str::limit($noticia['short_title'], 110),
            'url' => $noticia['permalink'],
            'articleSection' => $channel_url,
            'genre' => $channel_url,
            'dateline' => 'Buenos Aires, AR',
            'inLanguage' => env( 'APP_TIME_LOCALE',config('app.locale') ),
            'image' => [
                $noticia['main_image']['srcs']['cropped']['1x1'],
                $noticia['main_image']['srcs']['cropped']['4x3'],
                $noticia['main_image']['srcs']['cropped']['16x9']
            ],
            'datePublished' => $date_available,
            'dateModified' => $date_available,
            'keywords' => '',
            'author' => [
                '@type' => 'Person',
                'image' => [
                    '@type' => 'ImageObject',
                    'contentUrl' => $noticia['author']['image']
                ],
                'name' => $noticia['author']['fullname'],
                'url' => ''
            ],
            //'articleBody' => $noticia['body'],
            'publisher' => [
                '@type' => 'Organization',
                'name' => env( 'APP_ALTER_NAME', env('APP_NAME') ),
                'alternateName' => env('APP_ALTER_NAME', 'Perfil'),
                'url' => asset(''),
                'telephone' => ['(+5411) 7091-4921', '(+5411) 7091-4922'],
                'email' => env('ORG_EMAIL', ''),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset('img/logo.png')
                ],
                'contactPoint' => [
                    [
                        '@type' => 'ContactPoint',
                        'telephone' => '+54-11-7091-4921',
                        'contactType' => 'customer support',
                        'areaServed' => 'AR',
                        'availableLanguage' => ['spanish']
                    ],
                    [
                        '@type' => 'ContactPoint',
                        'telephone' => '+54-11-7091-4922',
                        'contactType' => 'customer support',
                        'areaServed' => 'AR',
                        'availableLanguage' => ['spanish']
                    ]
                ],
                'address' => [
                    '@type' => 'PostalAddress',
                    'streetAddress' => 'California 2715',
                    'postalCode' => 'C1289ABI',
                    'addressLocality' => 'Ciudad Autónoma de Buenos Aires, Argentina'
                ],
                'sameAs' => [
                    'https://www.facebook.com/'.env('FACEBOOK_PAGE', ''),
                    'https://twitter.com/'.env('TWITTER_PAGE', ''),
                    'https://www.youtube.com/channel/'.env('YOUTUBE_CHANNEL', ''),
                    'https://www.instagram.com/'.env('INSTAGRAM_PAGE', '')
                ]
            ]
        ];
        array_push($structured, $article);

        // Datos estructurados multimedia media_objects
        if (isset($noticia['metadata']['media_objects'])) {
            $metadata = collect($noticia['metadata']['media_objects']);

            // Videos
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

                array_push($structured, $item);
            }
        }

        return $structured;

    }

    /**
     * @param array $noticias
     * @param Int $skip_id
     * @return array
     */
    protected function _parseNoticiaRelacionada(Array $noticias, Int $skip_id = 0)
    {
        $articles = [];
        foreach ($noticias as $noticia) {
            if ($skip_id == $noticia['id']) continue;

            array_push($articles, [
                'id' => $noticia['id'],
                'title' => $noticia['title'],
                'home_title' => $noticia['home_title'],
                'headline' => $noticia['headline'] ?? '',
                'image' => [
                    'srcs' => [
                        'medium'    => $this->imageHelper->generateUrlImage($noticia['image'], '/trim/500/281/'),
                        'small'     => $this->imageHelper->generateUrlImage($noticia['image'], '/trim/200/112/'),
                        'thumb' => $this->imageHelper->generateUrlImage($noticia['image'], '/trim/64/64/')
                    ],
                    'title' => $noticia['image_title'],
                    'caption' => $noticia['image_caption']
                ],
                'permalink' => asset($noticia['permalink'])
            ]);
        }

        return $articles;
    }

    /**
     * @param array $gallery
     * @return array
     */
    protected function _parseGalleryForLightbox(Array $gallery)
    {
        $images = [];
        foreach ($gallery as $image) {
            $src = $image['src'];
            $thumb = $image['srcs']['thumb']['250'];
            array_push($images, [
                'src' => $src,
                'thumb' => $thumb,
                'subHtml' => $image['caption']
            ]);
        }

        return $images;
    }

    /**
     * @param array $gallery
     * @param array $ignore
     * @return array
     */
    protected function _parseGallery(Array $gallery, Array $ignore = [])
    {
        $images = [];
        foreach ($gallery as $image) {
            if (! in_array($image['id'], $ignore))
                array_push($images, [
                    'id'        => $image['id'],
                    'src'       => $this->imageHelper->generateUrlImage($image['image'], ''),
                    'srcs'      => $this->imageHelper->parseVersionImages($image['image']),
                    'title'     => $image['title'],
                    'caption'   => $image['caption'],
                    'credit'    => $image['credit']
                ]);
        }

        return $images;
    }

}
