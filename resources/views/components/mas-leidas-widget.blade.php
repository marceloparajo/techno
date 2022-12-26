<div id="mas-leidas" class="masvistas">
    <header class="masvistas__titulo">
        <a href="{{ route('mostviewed.show') }}">Las más leídas</a>
    </header>

    @foreach(array_slice($news, 0, $rows) as $new)
        <article class="masvistas__nota nota-{{$loop->index}}">
            <a href="{{ $new['permalink'] }}" class="enlace">
            <span class="rankOrder" style="opacity:{{ ( 10 - $loop->index ) / 10 }}">{{ $loop->iteration }}</span>
            <x-lazy-image
                    :src="$new['main_image']['srcs']['small-wide']"
                    clean-source="true"
                    :alt="$new['main_image']['title']"
                    :sizes="[['v' => 320, 'w' => 128, 'h' => 77], ['v' => 360, 'w' => 144, 'h' => 86], ['v' => 375, 'w' => 150, 'h' => 90], ['v' => 414, 'w' => 166, 'h' => 100], ['v' => 768, 'w' => 136, 'h' => 82], ['v' => 1024, 'w' => 120, 'h' => 72], ['v' => 1366, 'w' => 152, 'h' => 91]]"
                    class="img-fluid"
                    max-width="700"
                    :play-button="$new['has_video']"
                    :camera-button="$new['has_gallery']" />
            <div class="enlace__titulo"> {{ $new['title'] }}</div>
            </a>
        </article>
    @endforeach

</div>

<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads  d-md-none d-xl-flex" />
