<!DOCTYPE html>

<html lang="{{ env('APP_TIME_LANGUAGE', 'en') }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="@yield('page-description', 'Noticias de Economía, Negocios, Mercados, Tecnología, Estilo y Opinión.')">
        <meta property="fb:admins"              content="{{ env('FACEBOOK_ADMINS', '') }}">
        <meta property="fb:app_id"              content="{{ env('FACEBOOK_APP_ID', '') }}">
        <meta property="fb:pages"               content="{{ env('FACEBOOK_PAGE_ID', '') }}">
        <title>@yield('page-title', env('APP_ALTER_NAME', 'Fortuna'))</title>

        @shared()

        {{-- Page info --}}
        <meta name="page-version" content="{{ \Carbon\Carbon::now()->format('d-m-Y H:i:s') }}">
        @yield('page-info')
        {{-- /Page info --}}

        @yield('head-meta')

        {{-- Favicons --}}
        <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('images/favicon/apple-icon-57x57.png') }}">
        <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('images/favicon/apple-icon-60x60.png') }}">
        <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('images/favicon/apple-icon-72x72.png') }}">
        <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('images/favicon/apple-icon-76x76.png') }}">
        <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('images/favicon/apple-icon-114x114.png') }}">
        <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('images/favicon/apple-icon-120x120.png') }}">
        <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('images/favicon/apple-icon-144x144.png') }}">
        <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('images/favicon/apple-icon-152x152.png') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/favicon/apple-icon-180x180.png') }}">
        <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('images/favicon/android-icon-192x192.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('images/favicon/favicon-96x96.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon/favicon-16x16.png') }}">
        <link rel="manifest" href="{{ asset('images/favicon/manifest.json') }}">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="{{ asset('images/favicon/ms-icon-144x144.png') }}">
        <meta name="theme-color" content="#ffffff">
        {{-- /Favicons --}}

        <link rel="preload" as="image" href="{{ asset('img/logo-fortuna.svg') }}">
        <link rel="preconnect" href="https://ads.us.e-planning.net">
        
        @yield('head-top')

        {{-- Font --}}
        <link rel="preload" href="/fonts/Faustina-Bold.woff2" as="font" type="font/woff2" crossorigin> 
        {{-- /Font --}}

        @yield('head-css')

        @yield('head-bottom')

        {{-- Config Paywall
        <script type="text/javascript">
            window.paywall = window.paywall || {}
            window.paywallConfig = window.paywallConfig || {}
            window.perfilContent = window.perfilContent || {}
            paywall.queue = window.paywall.queue || []

            window.paywallConfig.loginwallLimit = 35
            window.paywallConfig.paywallLimit = 60
            window.paywallConfig.enableSocket = true
            window.paywallConfig.socketHoursPeriodicity = 6
            window.paywallConfig.socketHoursPeriodicitySubs = 24
        </script>
        /Config Paywall --}}

        @yield('google-tag-manager')
        <x-comscore />
        <x-marfeel />

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

        {{-- Facebook Pixel
        @if (env('FACEBOOK_PIXEL_ENABLE', false) && env('FACEBOOK_PIXEL_ID', '') != '')
            <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                window.paywallConfig.facebook_pixel = '{{ env('FACEBOOK_PIXEL_ID') }}'
            </script>
            <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id={{ env('FACEBOOK_PIXEL_ID') }}&ev=PageView&noscript=1"/></noscript>
        @endif
        /Facebook Pixel --}}


    </head>

    <body class="@yield('body-class', '')">
        <x-header />

        @yield('body')

        <div id="pw-content"></div>

        <x-footer />

        @yield('templates')

        @yield('paywall-config')
        {{--<script defer type="text/javascript" src="{{ mix('js/mi-perfil.js') }}"></script>--}}

        @yield('js')

        {{-- DMP --}}
        <script type="text/javascript">
          var _rl_cn = _rl_cn || 0,_rl_ptc = ("https:" == window.location.protocol ? "https" : "http"); window._rl_ids = window._rl_ids || []; window._rely = window._rely || []; _rl_ids.push({pid:909,src:0}); _rely.send = _rely.send?_rely.send:function() {}; (function() { var rl = document.createElement("script"); rl.type = "text/javascript"; rl.defer = true; rl.src = _rl_ptc + "://api.retargetly.com/loader?id=" + _rl_ids[_rl_ids.length-1].pid; rl.id = "rely-api-"+(_rl_cn++); var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(rl, s); })();
        </script>
        {{-- /DMP --}}

        @if (env('ADS_ENABLE', false) && env('ADS_CLIENT', '') != '')
            <script type="text/javascript">var eplDoc = document; var eplLL = false;</script>
            <script defer src="{{ mix('js/eplanning.js') }}"></script>
            <script defer id="js-eplvideo" async type="text/javascript" src="https://hls.e-planning.video/video/js/eplvideo.js" data-client="ut/2b79"></script>
        @endif

        <x-ad-space id="layer" height="0" width="1" margin-top="0" margin-bottom="0"></x-ad-space>
        <x-ad-space id="anuncioprevio" height="0" width="1" margin-top="0" margin-bottom="0"></x-ad-space>

    </body>
</html>
