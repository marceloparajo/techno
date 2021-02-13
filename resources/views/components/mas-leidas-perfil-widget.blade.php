<div id="masLeidasSidebar">
    <header class="masleidas-titulo">
        <a href="{{ route('mostviewed.show') }}">Las más leídas</a>
    </header>

    <div class="ranking">
        @foreach(array_slice($news, 0, $rows) as $new)
            <article class="masleidas">
                <a href="{{ $new['permalink'] }}">
                    @if ($loop->first)
                        <x-lazy-image :src="$new['main_image']['src']" :alt="$new['main_image']['caption']" max-width="300" clean-source="true" />
                    @endif
                    <h3>
                        <span class="rankOrder">{{ $loop->iteration }}</span> {{ $new['title'] }}
                    </h3>
                </a>
            </article>
        @endforeach
    </div>

    <footer>
        <a href="{{ route('mostviewed.show') }}">Ver más</a>
    </footer>
</div>
