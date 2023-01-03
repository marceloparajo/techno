@if( count($news) > 0 )
    <div class="mas-en-perfil news__aside">
        <div class="mas-en-perfil__titulo news__aside-title">
            {{ __('more in') }} <a href="//www.perfil.com"><img src="{{ asset('images/logo_perfil.svg') }}" class="img-mas-en-perfil" alt="Perfil.com" width="106" height="24"></a>
        </div>

        @foreach ($news as $site => $noticia)
            <article class="mas-en-perfil__nota {{ $site }}">
                <a href="{{ $getPath('', $site) }}"  class="logo-revista" rel="noreferrer">
                    {{ $site }}
                </a>
                <a href="{{ $noticia['url'] }}" title="{{ $noticia['pageTitle'] }}" class="nota" rel="noreferrer">
                    <figure>
                        <x-lazy-image
                            :src="$noticia['imgSrc']"
                            clean-source="true"
                            :alt="$noticia['pageTitle']"
                            :sizes="[['v' => 320, 'w' => 128, 'h' => 77], 
                            ['v' => 360, 'w' => 144, 'h' => 86], 
                            ['v' => 375, 'w' => 150, 'h' => 90], 
                            ['v' => 414, 'w' => 166, 'h' => 100], 
                            ['v' => 768, 'w' => 136, 'h' => 82], 
                            ['v' => 1024, 'w' => 120, 'h' => 72], 
                            ['v' => 1366, 'w' => 152, 'h' => 91]]"
                            class="img-fluid"
                            max-width="700" />
                    </figure>
                    <span class="mas-en-perfil__nota__titulo">{{ $noticia['pageTitle'] }}</span>
                </a>
            </article>
        @endforeach
    </div>
@endif
