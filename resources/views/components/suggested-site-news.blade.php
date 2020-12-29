@if( count($news) > 0 )
    <div class="mas-en-perfil">
        <div class="mas-en-perfil-titulo">
            {{ __('more in') }} <a href="//www.perfil.com"><img src="https://www.perfil.com/static/css/img/logo_perfil.svg" class="img-mas-en-perfil"></a>
        </div>

        @foreach ($news as $site => $noticia)
            <article class="sitio-externo {{ $site }}">
                <a href="{{ $getPath('', $site) }}"><div class="logo-revista"></div></a>
                <a href="{{ $noticia['pagePath'] }}" title="{{ $noticia['pageTitle'] }}">
                    <figure>
                        <x-lazy-image :src="$noticia['imgSrc']" alt="$noticia['pageTitle']" sizes="(min-width: 540px) 30vw, 100vw" />
                    </figure>
                    <h2>{{ $noticia['pageTitle'] }}</h2>
                </a>
            </article>
        @endforeach
    </div>
@endif
