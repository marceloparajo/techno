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
