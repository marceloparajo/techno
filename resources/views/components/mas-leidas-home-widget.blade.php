<div id="mas-leidas" class="masvistas">
    <header class="masvistas__titulo">
        <a href="{{ route('mostviewed.show') }}">Las más leídas</a>
    </header>

    <div class="masvistas__articulos">
    @foreach(array_slice($news, 0, $rows) as $new)
        <article class="nota nota-{{$loop->index}}">
            <a href="{{ $new['permalink'] }}" class="enlace">
                <span class="rankOrder" style="opacity:{{ 10 / (($loop->index + 8) * 1.5) }}">{{ $loop->iteration }}</span>
                @if ($loop->first)
                    <x-lazy-image
                        :src="$new['main_image']['srcs']['small-wide']"
                        clean-source="true"
                        :alt="$new['main_image']['title']"
                        :sizes="[['v' => 320, 'w' => 300, 'h' => 180], ['v' => 360, 'w' => 340, 'h' => 204], ['v' => 375, 'w' => 355, 'h' => 213], ['v' => 414, 'w' => 394, 'h' => 236], ['v' => 768, 'w' => 127, 'h' => 76], ['v' => 1024, 'w' => 169, 'h' => 101], ['v' => 1366, 'w' => 484, 'h' => 291]]"
                        class="img-fluid"
                        max-width="700"
                        :play-button="$new['has_video']"
                        :camera-button="$new['has_gallery']" />
                @else
                    <x-lazy-image
                            :src="$new['main_image']['srcs']['small-wide']"
                            clean-source="true"
                            :alt="$new['main_image']['title']"
                            :sizes="[['v' => 320, 'w' => 90, 'h' => 54], ['v' => 360, 'w' => 102, 'h' => 61], ['v' => 375, 'w' => 106, 'h' => 64], ['v' => 414, 'w' => 118, 'h' => 71], ['v' => 768, 'w' => 127, 'h' => 76], ['v' => 1024, 'w' => 169, 'h' => 101], ['v' => 1366, 'w' => 242, 'h' => 145]]"
                            class="img-fluid"
                            max-width="700"
                            :play-button="$new['has_video']"
                            :camera-button="$new['has_gallery']" />
                @endif
                <span class="enlace__titulo"> {{ $new['title'] }}</span>
            </a>
        </article>
    @endforeach
    </div>
    <x-ad-space id="300x250x-pos-" width="300" height="250" margin-top="0" class="ads d-md-none d-xl-flex" />

</div>

