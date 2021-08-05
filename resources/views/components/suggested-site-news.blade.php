@if( count($news) > 0 )
    <div class="mas-en-perfil">
        <div class="mas-en-perfil__titulo">
            {{ __('more in') }} <a href="//www.perfil.com"><img src="{{ asset('images/logo_perfil.svg') }}" class="img-mas-en-perfil" alt="Perfil.com" style="height:24px;width:106px"></a>
        </div>

        @foreach ($news as $site => $noticia)
            <article class="mas-en-perfil__nota {{ $site }}">
                <a href="{{ $getPath('', $site) }}"  class="logo-revista" rel="noreferrer">
                    {{ $site }}
                </a>
                <a href="{{ $noticia['url'] }}" title="{{ $noticia['pageTitle'] }}" class="nota" rel="noreferrer">
                    <figure>
                        <x-lazy-image :src="$noticia['imgSrc']" :alt="$noticia['pageTitle']" max-width="200" clean-source="true" />
                    </figure>
                    <span class="mas-en-perfil__nota__titulo">{{ $noticia['pageTitle'] }}</span>
                </a>
            </article>
        @endforeach
    </div>
@endif
