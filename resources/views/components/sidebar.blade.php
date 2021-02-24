<div class="content-sidebar">
    <x-divisas-widget />

    <x-ad-space id="sidebar_300x250x-pos-" width="300" height="250" margin-top="0" max-height="600" />

    @foreach ($content as $item)

        @switch($item['id'])

            @case('mas-leidas-de-perfil')
                <x-mas-leidas-perfil-widget :rows="5" />
                @break

            @case('columnistas')
                <x-columnistas-widget :news="$item['news']" />
                @break

            @case('minuto-de-noticias')
                <x-minuto-de-noticias-widget />
                @break

            @case('batimes')
                <x-batimes-widget />
                @break

            @case('ventas-directas')
                <div class="ventas-directas">
                    <a href="{{ route('channels.show', 'guia-de-salud-pnt') }}"><img src="{{ asset('images/ventas/guia-salud.png') }}" style="margin:10px 0;border:none;width:300px;height:50px;" alt="guia de la salud"></a>

                    <a href="{{ route('channels.show', 'guia-de-profesionales-pnt') }}"><img src="{{ asset('images/ventas/guia-profesionales.png') }}" style="margin:10px 0;border:none;width:300px;height:50px" alt="guia de profesionales"></a>
                </div>
                @break

            @default
                @if (view()->exists('sidebar.dispositions.' . $item['template']))
                    @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
                @endif

        @endswitch

        @if ($loop->iteration % 2 && $loop->iteration < 11)
            <x-ad-space id="sidebar_300x250x-pos-" width="300" height="250" />
        @endif

    @endforeach
</div>
