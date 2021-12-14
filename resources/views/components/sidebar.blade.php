<div class="content-sidebar">

    <x-ad-space id="300x250x-pos-" width="300" height="250" margin-top="0" max-height="600" />

    @foreach ($content as $item)

        @switch($item['id'])

            @case('mas-leidas')
                <x-mas-leidas-widget :rows="5" />
                @break

            @case('mas-leidas-perfil')
                <x-mas-leidas-perfil-widget :rows="5" />
                @break

            @case('minuto-de-noticias')
                <x-minuto-de-noticias-widget />
                @break

            @default
                @if (view()->exists('sidebar.dispositions.' . $item['template']))
                    @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
                @endif

        @endswitch 
        
        {{--
            @if ($loop->iteration % 2 && $loop->iteration < 11)
                <x-ad-space id="sidebar_300x250x-pos-" width="300" height="250" />
            @endif
        --}}

    @endforeach

    <div class="placa-home">
        <a href="/seccion/salud" title="Caras Salud" rel="noreferrer">
            <img src="{{ asset('images/caras_salud.png') }}" alt="{{ env('APP_NAME') }}" loading="lazy">
        </a>
    </div>

    <x-ad-space id="300x250x-pos-" width="300" height="250" margin-top="0" max-height="600" />

    <div class="placa-home">
        <a href="/seccion/horoscopo" title="Caras Horoscopo" rel="noreferrer">
            <img src="{{ asset('images/caras_astrologia.png') }}" alt="{{ env('APP_NAME') }}" loading="lazy">
        </a>
    </div>


</div>
