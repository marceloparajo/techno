<div class="relacionadas">
    <div class="relacionadas__titulo">{{ __('related news') }}</div>
    <div class="relacionadas__noticias">
        @foreach(array_slice($news, 0, 4) as $new)
            <article class="relacionadas__nota">
                <a href="{{ $new['permalink'] }}">
                    <figure>
                        <x-lazy-image
                            :src="$new['image']['srcs']['small']"
                            clean-source="true"
                            :alt="$new['image']['title']"
                            :sizes="[['v' => 320, 'w' => 121, 'h' => 68], ['v' => 360, 'w' => 138, 'h' => 77], ['v' => 375, 'w' => 143, 'h' => 80], ['v' => 414, 'w' => 160, 'h' => 90], ['v' => 768, 'w' => 163, 'h' => 94], ['v' => 1024, 'w' => 144, 'h' => 80],['v' => 1366, 'w' => 206, 'h' => 115]]"
                            class="img-fluid" />
                    </figure>
                    <span class="relacionada-titulo-nota">{{ $new['title'] }}</span>
                </a>
            </article>
        @endforeach
    </div>
</div>
