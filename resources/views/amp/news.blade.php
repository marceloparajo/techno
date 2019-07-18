@inject('menuHelper', "App\Http\Helpers\MenuHelper")

<!doctype html>
<html amp lang="es">
    <head>
        <meta charset="utf-8">
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <link rel="canonical" href="{{ $noticia['permalink'] }}">
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
        <meta name="amp-google-client-id-api" content="googleanalytics">

        <title>{{ env('APP_ALTER_NAME') }} | {{ $noticia["home_title"] }}</title>

        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald|Poppins">

        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
        <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
        <script async custom-element="amp-instagram" src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"></script>
        <script async custom-element="amp-facebook" src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js"></script>
        <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
        <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
        <script async custom-element="amp-soundcloud" src="https://cdn.ampproject.org/v0/amp-soundcloud-0.1.js"></script>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
        <script async custom-element="amp-facebook-comments" src="https://cdn.ampproject.org/v0/amp-facebook-comments-0.1.js"></script>
        <script async custom-element="amp-image-lightbox" src="https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js"></script>
        <script async custom-element="amp-lightbox-gallery" src="https://cdn.ampproject.org/v0/amp-lightbox-gallery-0.1.js"></script>
        <script async custom-element="amp-sticky-ad" src="https://cdn.ampproject.org/v0/amp-sticky-ad-1.0.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>

        <script type="application/ld+json">
            {!! json_encode($jsonStructured) !!}
        </script>

        @include('amp.partials.styles')

    </head>

    <body>
        <amp-analytics type="googleanalytics">
            <script type="application/json">
                {
                    "vars": {
                        "account": "{{ $analytics_data['client'] }}"
                    },
                    "triggers": {
                        "trackPageviewWithCustomUrl": {
                              "on": "visible",
                              "request": "pageview",
                              "vars": {
                                "documentLocation": "{{ $analytics_data['url'] }}"
                              }
                        }
                    }
                }
            </script>
        </amp-analytics>

        @include('amp.partials.main-header')

        <article>
            @include('amp.partials.main-image')

            <div class="container">
                <div class="hat">{{ $noticia['hat'] }}</div>
                <h1>{{ $noticia['title'] }}</h1>
                <p class="headline">{{ $noticia['headline'] }}</p>
                <div class="date">
                    <span></span>
                </div>

                <amp-ad width=300 height=250
                        type="eplanning"
                        data-epl_si="{{ env('ADS_CLIENT', '') }}"
                        data-epl_sv="https://ads.us.e-planning.net"
                        data-epl_isv="https://us.img.e-planning.net"
                        data-epl_sec="new_amp"
                        data-epl_kvs='{}'
                        data-epl_e="300x250x1">
                </amp-ad>


                <div class="body">
                    {!! $body !!}
                </div>

                <div class="ad">
                    <amp-ad width=300 height=250
                            type="eplanning"
                            data-epl_si="{{ env('ADS_CLIENT', '') }}"
                            data-epl_sv="https://ads.us.e-planning.net"
                            data-epl_isv="https://us.img.e-planning.net"
                            data-epl_sec="new_amp"
                            data-epl_kvs='{}'
                            data-epl_e="300x250x3">
                    </amp-ad>
                </div>

                {{-- Temas/tags --}}
                @include('news.show.partials.news-tags')
                
                {{-- Comentarios --}}
                <amp-facebook-comments width=486 height=657
                                       layout="responsive"
                                       data-numposts="5"
                                       data-href="{{ $noticia['permalink'] }}">
                </amp-facebook-comments>
                
                {{-- Noticias Relacionadas --}}
                <div class="relacionadas">
                    <h4>{{ __('related news') }}</h4>
                    <ul>
                        @foreach ($noticia['relacionadas'] as $item)
                        <li>
                            <a href="{{ $item['permalink'] }}">
                                <figure>
                                    <amp-img
                                            src="{{ $item['image']['srcs']['medium'] }}"
                                            alt="{{ $item['image']['caption'] }}"
                                            height="200"
                                            width="400"
                                            layout="responsive">
                                    </amp-img>
                                </figure>
                                <h3>{{ $item['home_title'] }}</h3>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                </div>

                {{-- Outbrain --}}
                <amp-embed width="100" height="100"
                    type="outbrain"
                    layout="responsive"
                    data-widgetIds="AMP_1">
                </amp-embed>

            </div>

            <amp-image-lightbox id="lightbox-image" layout="nodisplay"></amp-image-lightbox>

            <amp-sticky-ad layout="nodisplay">
                <amp-ad width="320" height="50"
                        type="eplanning"
                        data-epl_si="{{ env('ADS_CLIENT', '') }}"
                        data-epl_sv="https://ads.us.e-planning.net"
                        data-epl_isv="https://us.img.e-planning.net"
                        data-epl_sec="new_amp"
                        data-epl_kvs='{}'
                        data-epl_e="320x50">
                </amp-ad>
            </amp-sticky-ad>
        </article>

        @include('amp.partials.main-footer')

    </body>
</html>