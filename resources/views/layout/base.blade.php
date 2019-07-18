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
        <meta name="ads-load" content="{{ env('ADS_LOAD', 'true') }}">
        <meta name="ads-sec" content="@yield('ads-sec', 'articulo')">
        <meta name="ads-client" content="{{ env('ADS_CLIENT', '') }}">

        <meta name="analytics-path-name" content="{{ rtrim(env('ANALYTICS_PATH_NAME', ''), '/') }}">
        <meta name="analytics-client-id" content="{{ env('ANALYTICS_CLIENT_ID', '') }}">
        <meta name="analytics-run" content="{{ env('ANALYTICS_SHOW', '0') }}">
        <meta name="analytics-view" content="@if (! is_null(\Route::getCurrentRoute())) {{ \Route::getCurrentRoute()->getName() }} @endif">
        <meta name="analytics-data" content="{{ isset($analytics_data) ? json_encode($analytics_data) : '' }}">
        <meta name="comscore-client-id" content="{{ env('COMSCORE_CLIENT_ID', '') }}">

        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <meta name="last-render" content="{{ \Carbon\Carbon::now()->format('d-m-H H:i:s') }}">
        @yield('head-meta')

        <title>{{ env('APP_ALTER_NAME', 'Perfil') }} | @yield('page-title', '')</title>

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

        <linl rel="manifest" href="{{ asset('onesignal-manifest.json') }}"></linl>

        <link rel="preconnect" href="https://player.performgroup.com">
        <link rel="preconnect" href="https://prg.smartadserver.com">
        <link rel="preconnect" href="https://onesignal.com">
        <link rel="preconnect" href="https://ads.us.e-planning.net">
        <link rel="preconnect" href="https://ad.doubleclick.net">
        <link rel="preconnect" href="https://ut.e-planning.video">
        <link rel="preconnect" href="https://bidder.criteo.com">
        @yield('head-top')

        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
        @yield('css')

        @yield('head-bottom')

        {{-- Analytics --}}
        <script type="text/javascript">
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        </script>

        {{-- One Signal --}}
        @if (env('ONESIGNAL_ENABLE', false))
            <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
            <script>
                var OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                    OneSignal.init({
                        appId: "{{ env('ONESIGNAL_APP_ID', '') }}",
                    });
                });
            </script>
        @endif

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
    </head>

    <body class="@yield('body-class', '') bg-light">
        <div class="container-fluid m-0 p-0">
            @include('layout.header')

            @yield('body')

            <div id="" class="ads-space" data-id="anuncioprevio" data-w="1" data-h="1" data-loaded="false" data-reload="false"></div>
            @include('layout.footer')

            <div class="sticky-bottom-ads d-md-none">
                <button class="close-button" id="button-close-sticky-ads"><i class="fa fa-times"></i></button>
                <div id="" class="ads-space text-center" data-id="float-footer" data-w="320" data-h="50" data-loaded="false" data-reload="true"></div>
            </div>
            <div id="" class="ads-space text-center d-none d-md-block" data-id="float-footer-desktop" data-w="728" data-h="90" data-loaded="false" data-reload="false"></div>
        </div>

        @yield('templates')

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        <script type="text/javascript">const eplDoc = document;</script>
        <script type="text/javascript" src="{{ mix('js/epl-41.js') }}"></script>
        <script id="js-eplvideo" async type="text/javascript" src="//hls.e-planning.video/video/js/eplvideo.js" data-client="ut/2b79"></script>
        <script async src="https://sb.scorecardresearch.com/beacon.js"></script>
        @yield('js')

        @include('partials.dmp')
        @include('partials.comscore')
    </body>
</html>