<div class="relacionadas">
    <div class="relacionadas__titulo">{{ __('related news') }}</div>
    @foreach(array_slice($news, 0, 4) as $new)
        <article class="relacionadas__notas">
            <a href="{{ $new['permalink'] }}">
                <img src="{{ $new['image']['srcs']['small'] }}" class="lazyload" alt="{{ $new['image']['title'] }}">
                <span class="relacionada-titulo-nota">{{ $new['title'] }}</span>
            </a>
        </article>
    @endforeach
</div>
