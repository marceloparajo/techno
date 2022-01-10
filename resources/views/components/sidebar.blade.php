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

   

    <x-ad-space id="300x250x-pos-" width="300" height="250" margin-top="0" max-height="600" />

  


</div>
