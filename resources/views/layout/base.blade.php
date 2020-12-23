<!DOCTYPE html>
<!--
Version: {{ \Carbon\Carbon::now()->format('d-m-Y H:i:s') }}
@yield('page-info')
-->
<html lang="{{ env('APP_TIME_LANGUAGE', 'en') }}" @yield('structured-data-type')>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        @if (Route::currentRouteName() != "news.show")
        <meta http-equiv="Refresh" content="600" />
        @endif
        <meta name="description" content="{{ isset($page_description) ? $page_description : env('SITE_DESCRIPTION', '') }}">

        {{-- Ads --}}
        <meta name="ads-sec" content="@yield('ads-sec', 'articulo')">
        <meta name="ads-client" content="{{ env('ADS_CLIENT', '') }}">
        {{-- /Ads --}}

        {{-- Analytics/Comscore --}}
        <meta name="analytics-path-name" content="{{ rtrim(env('ANALYTICS_PATH_NAME', ''), '/') }}">
        <meta name="analytics-client-id" content="{{ env('ANALYTICS_CLIENT_ID', '') }}">
        <meta name="analytics-enable" content="{{ env('ANALYTICS_ENABLE', '0') }}">
        <meta name="analytics-view" content="@if (! is_null(\Route::getCurrentRoute())) {{ \Route::getCurrentRoute()->getName() }} @endif">
        <meta name="analytics-data" content="{{ isset($analytics_data) ? json_encode($analytics_data) : '' }}">
        <meta name="comscore-client-id" content="{{ env('COMSCORE_CLIENT_ID', '') }}">
        {{-- /Analytics/Comscore --}}

        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <meta name="last-render" content="{{ \Carbon\Carbon::now()->format('d-m-H H:i:s') }}">
        @yield('head-meta')

        <title>{{ env('APP_ALTER_NAME', 'Perfil') }} | @yield('page-title', '')</title>

        {{-- Favicons --}}
        <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('img/favicon/apple-icon-57x57.png') }}">
        <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('img/favicon/apple-icon-60x60.png') }}">
        <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('img/favicon/apple-icon-72x72.png') }}">
        <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('img/favicon/apple-icon-76x76.png') }}">
        <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('img/favicon/apple-icon-114x114.png') }}">
        <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('img/favicon/apple-icon-120x120.png') }}">
        <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('img/favicon/apple-icon-144x144.png') }}">
        <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('img/favicon/apple-icon-152x152.png') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/favicon/apple-icon-180x180.png') }}">
        <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('img/favicon/android-icon-192x192.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon/favicon-32x32.png.png') }}">
        <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('img/favicon/favicon-96x96.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon/favicon-16x16.png') }}">
        <link rel="manifest" href="{{ asset('img/favicon/manifest.json') }}">
        {{-- /Favicons --}}

        <link rel="preconnect" href="https://player.performgroup.com">
        <link rel="preconnect" href="https://prg.smartadserver.com">
        <link rel="preconnect" href="https://onesignal.com">
        <link rel="preconnect" href="https://ads.us.e-planning.net">
        <link rel="preconnect" href="https://ad.doubleclick.net">
        <link rel="preconnect" href="https://ut.e-planning.video">
        <link rel="preconnect" href="https://bidder.criteo.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://use.fontawesome.com">
        @yield('head-top')

        {{-- Font --}}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Oswald:wght@400;600&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" onload="this.rel='stylesheet'" />
        <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet" />
        {{-- /Font --}}

        <link rel="stylesheet" type="text/css" href="{{ mix('css/general.css') }}">

        @yield('head-css')

        @yield('head-bottom')

        {{-- Google Tag Manager --}}
        @if (env('ANALYTICS_ENABLE', false) && env('ANALYTICS_GTM_ID', '') != '')
        <script>{!! $gtmTag?? "" !!}(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','{{ env('ANALYTICS_GTM_ID','')}}');</script>
        @endif
        {{-- /Google Tag Manager --}}

        {{-- One Signal --}}
        @if (env('ONESIGNAL_ENABLE', false))
            <link rel="manifest" href="{{ asset('onesignal-manifest.json') }}">
            <script defer src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
            <script>
                var OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                    OneSignal.init({
                        appId: "{{ env('ONESIGNAL_APP_ID', '') }}",
                    });
                });
            </script>
        @endif
        {{-- /One Signal --}}

        {{-- Navegg --}}
        @if (env('NAVEGG_ENABLE', false))
            <script id="navegg" type="text/javascript">
                (function(n,v,g){o='Navegg';if(!n[o]){
                    a=v.createElement('script');a.src=g;b=document.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(a,b);n[o]=n[o]||function(parms){
                        n[o].q=n[o].q||[];n[o].q.push([this, parms])};}})
                (window, document, 'https://tag.navdmp.com/universal.min.js');
                window.naveggReady = window.naveggReady||[];
                window.nvgID = new Navegg({
                    acc: 56362
                });
            </script>
        @endif
        {{-- /Naveg --}}
    </head>

    <body class="@yield('body-class', '')">
        {{-- Google Tag Manager --}}
        @if (env('ANALYTICS_ENABLE', false) && env('ANALYTICS_GTM_ID', '') != '')
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ env('ANALYTICS_GTM_ID', '')}}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        @endif
        {{-- /Google Tag Manager --}}

        @include('layout.header')

        @yield('body')

        <div id="" class="ads-space" data-id="anuncioprevio" data-w="1" data-h="1" data-loaded="false" data-reload="false"></div>
        @include('layout.footer')

        <div class="sticky-bottom-ads d-md-none">
            <button class="close-button" id="button-close-sticky-ads"><i class="fa fa-times"></i></button>
            <div id="" class="ads-space text-center" data-id="float-footer" data-w="320" data-h="50" data-loaded="false" data-reload="true"></div>
        </div>

        @yield('templates')

        @if (env('ADS_ENABLE', false) && env('ADS_CLIENT', '') != '')
        <script type="text/javascript">var eplDoc = document; var eplLL = false;</script>
        <script defer src="{{ mix('js/eplanning.js') }}"></script>
        <script defer id="js-eplvideo" async type="text/javascript" src="https://hls.e-planning.video/video/js/eplvideo.js" data-client="ut/2b79"></script>
        @endif

        @yield('js')

        @include('partials.dmp')

        {{-- Comscore --}}
        @if (env('COMSCORE_ENABLE', false) && env('COMSCORE_CLIENT_ID', '') != '')
        <script>
            var _comscore = _comscore || [];
            _comscore.push({ c1: "2", c2: "{{ env('COMSCORE_CLIENT_ID', '6906401') }}" });
            (function() {
                var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.defer = true;
                s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                el.parentNode.insertBefore(s, el);
            })();
        </script>
        <noscript>
            <img src="https://b.scorecardresearch.com/p?c1=2&c2={{ env('COMSCORE_CLIENT_ID', '6906401') }}&cv=2.0&cj=1" />
        </noscript>
        @endif
        {{-- /Comscore --}}
    </body>
</html>
