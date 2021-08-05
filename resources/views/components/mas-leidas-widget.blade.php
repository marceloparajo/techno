<div id="mas-leidas" class="masvistas">
    <header class="masvistas__titulo">
        <a href="{{ route('mostviewed.show') }}">Las más leídas</a>
    </header>

    @foreach(array_slice($news, 0, $rows) as $new)
        <article class="masvistas__nota nota-{{$loop->index}}">
            <a href="{{ $new['permalink'] }}" class="enlace">
            <span class="rankOrder" style="opacity:{{ 10 / (($loop->index + 8) * 1.5) }}">{{ $loop->iteration }}</span>
            <x-lazy-image :src="$new['main_image']['srcs']['small-wide']" :alt="$new['main_image']['title']" max-width="300" clean-source="true" />
            <span class="enlace__titulo"> {{ $new['title'] }}</span>
            </a>
        </article>
    @endforeach

</div>

<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="ads  d-md-none d-xl-flex" />
