<div class="content-sidebar">
    <x-ad-space id="sidebar_300x250x-pos-" width="300" height="250" />

    <x-divisas-widget />

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
                    <a href="{{ route('channels.show', 'guia-de-salud-pnt') }}"><img src="{{ asset('images/ventas/guia-salud.png') }}" style="margin:10px 0;border:none;"></a>

                    <a href="{{ route('channels.show', 'guia-de-profesionales-pnt') }}"><img src="{{ asset('images/ventas/guia-profesionales.png') }}" style="margin:10px 0;border:none;"></a>
                </div>
                @break

            @default
                @if (view()->exists('sidebar.dispositions.' . $item['template']))
                    @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
                @endif

        @endswitch

        @if ($loop->iteration % 2)
            <x-ad-space id="sidebar_300x250x-pos-" width="300" height="250" />
        @endif

    @endforeach
</div>
