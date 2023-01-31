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

@endforeach
<div class="sticky">
    <x-ad-space id="300x600x-pos-" width="300" height="600" margin-top="0" max-height="600" class="ads" />
</div>
