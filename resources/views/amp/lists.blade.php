@inject('menuHelper', "App\Http\Helpers\MenuHelper")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

<!doctype html>
<html amp lang="es">
    <head>
        <meta charset="utf-8">
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <link rel="canonical" href="{{ $canonical }}">
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
        <meta name="amp-google-client-id-api" content="googleanalytics">

        <title>{{ env('APP_ALTER_NAME') }} | {{ $sectionTitle }}</title>

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
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
        <script async custom-element="amp-sticky-ad" src="https://cdn.ampproject.org/v0/amp-sticky-ad-1.0.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>

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

        <div class="pf-title-container">
            <div class="pf-title">
                <h1>{{ $sectionTitle }}</h1>
            </div>

            <div role="list" class="list">
            @foreach ($noticias as $key => $noticia)
                <a target="_top" class="ampstart-card related m1" href="{{ $noticia['permalink'] }}" role="listitem">
                    <amp-img 
                        attribution="https://perfil.com" 
                        alt="{{ $noticia['main_image']['caption'] }}" 
                        src="{{ $noticia['main_image']['srcs']['small-wide'] }}" 
                        height="304" 
                        width="540"
                        layout="responsive"
                        >
                    </amp-img>
                    @if ($noticia['hat'] != '')<p class="pf-hat">{{ $noticia['hat'] }}</p>@endif
                    <h2>{{ $noticia['home_title'] }}</h2>
                    {{-- <p class="headline">{{ $noticia['headline'] }}</p> --}}
                </a>
            @endforeach
            </div>

        </div>
        
        @include('amp.partials.main-footer')
    </body>
</html>