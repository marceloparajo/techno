@if( count($news) > 0 )
    <div class="mas-en-perfil">
        <div class="mas-en-perfil-titulo">
            {{ __('more in') }} <a href="//www.perfil.com"><img src="https://www.perfil.com/static/css/img/logo_perfil.svg" class="img-mas-en-perfil" alt="Perfil.com" style="height:24px;width:auto"></a>
        </div>

        @foreach ($news as $site => $noticia)
            <article class="sitio-externo {{ $site }}">
                <a href="{{ $getPath('', $site) }}" rel="noreferrer"><div class="logo-revista">{{ $site }}</div></a>
                <a href="{{ $noticia['pagePath'] }}" title="{{ $noticia['pageTitle'] }}" rel="noreferrer">
                    <figure>
                        <x-lazy-image :src="$noticia['imgSrc']" :alt="$noticia['pageTitle']" max-width="500" clean-source="true" />
                    </figure>
                    <h2>{{ $noticia['pageTitle'] }}</h2>
                </a>
            </article>
        @endforeach
    </div>
@endif
