<!doctype html>

<html lang="{{ config('app.locale') }}" prefix="op: http://media.facebook.com/op#">
    <head>
        <meta charset="utf-8">
        <meta property="op:markup_version" content="v1.0">
        <meta property="fb:likes_and_comments" content="enable">
        <meta property="fb:use_automatic_ad_placement" content="enable=true ad_density=default">
        <title>{!! $noticia['short_title'] !!} | {{ env('APP_ALTER_NAME', 'Perfil') }}</title>
        <link rel="canonical" href="{{ $noticia['permalink'] }}">
    </head>
    <body>
        <article>
            <header>
                <figure>
                    <img src="{{ $noticia['main_image']['src'] }}">
                    <figcaption>{{ $noticia['main_image']['caption'] }}</figcaption>
                </figure>

                <h1>{!! $noticia['title'] !!}</h1>
                <h2>{{ $noticia['headline'] }}</h2>
                <h3 class="op-kicker">{{ $noticia['hat'] }}</h3>

                <time class="op-published" dateTime="{{ $noticia['date_available']->toIso8601String() }}">{{ $noticia['date_available']->format('d-m-Y H:i') }}</time>
                <time class="op-modified" dateTime="{{ $noticia['date_update']->toIso8601String() }}">{{ $noticia['date_update']->format('d-m-Y H:i') }}</time>
            </header>

            <figure class="op-tracker">
                <x-google-tag-manager category="nota" format="fbia" :info="$noticia" />
            </figure>
            @if (config('services.marfeel.enable'))
                <figure class="op-tracker">
                    <iframe>
                        <script type="text/javascript">
                          function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=document.createElement("script");c.src=e,t?c.type="module":(c.async=!0,c.type="text/javascript",c.setAttribute("nomodule",""));var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(c,n)}function t(t,c,n){var a,o,r;null!==(a=t.marfeel)&&void 0!==a||(t.marfeel={}),null!==(o=(r=t.marfeel).cmd)&&void 0!==o||(r.cmd=[]),t.marfeel.config=n,t.marfeel.config.accountId=c;var i="https://sdk.mrf.io/statics";e("".concat(i,"/marfeel-sdk.js?id=").concat(c),!0),e("".concat(i,"/marfeel-sdk.es5.js?id=").concat(c),!1)}!function(e,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t(e,c,n)}(window,1740,{pageType:"fbia"} /*config*/);
                        </script>
                    </iframe>
                </figure>
            @endif
            <figure class="op-tracker">
                <iframe>
                    <script>
                        var _comscore = _comscore || [];
                        _comscore.push({ c1: "2", c2: "6906401", options: { url_append: "comscorekw=fbia"} });
                        (function() {
                            var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
                            s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                            el.parentNode.insertBefore(s, el);
                        })();
                    </script>
                    <noscript>
                        <img src="https://sb.scorecardresearch.com/p?c1=2&c2=6906401&cv=2.0&cj=1" />
                    </noscript>
                </iframe>
            </figure>

            {!! $noticia['body'] !!}

            @if (count($noticia['gallery']) > 1)
                <figure class="op-slideshow">
                    @foreach ($noticia['gallery'] as $image)
                        <figure>
                            <img src="{{ $image['srcs']['original'] }}">
                        </figure>
                    @endforeach
                </figure>
            @endif

            @if (count($noticia['relacionadas']) > 0)
                <ul class="op-related-articles" title="Leer también">
                    @foreach (array_slice($noticia['relacionadas'], 0 , 3) as $article)
                        <li><a href="{{ $article['permalink'] }}"></a></li>
                    @endforeach
                </ul>
            @endif

            <footer>
                <aside>
                    <p>Editorial Perfil S.A. | © Perfil.com 2006-{{ date('Y') }} - Todos los derechos reservados</p>
                    <p>Registro de Propiedad Intelectual: Nro. 5346433</p>
                </aside>
            </footer>
        </article>
    </body>
</html>
