<div class="content-sidebar">
    <div id="" class="ads-space text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false" style="width: 300px; height: 250px;"></div>

    @foreach ($content as $item)

        @switch($item['id'])

            @case('mas-leidas-de-perfil')
                <x-mas-leidas-perfil-widget :rows="5" />
                @break

            @case('divisas')
                <x-divisas-widget />
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

            @default
                @if (view()->exists('sidebar.dispositions.' . $item['template']))
                    @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
                @endif

        @endswitch

    @endforeach
</div>
