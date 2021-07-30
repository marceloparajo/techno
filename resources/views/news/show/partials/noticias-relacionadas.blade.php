<div class="noticias-relacionadas">
    <div class="relacionadas-titulo">{{ __('related news') }}</div>
    <ul>
        @foreach(array_slice($news, 0, 5) as $new)
            <li>
                <a href="{{ $new['permalink'] }}">
                    <img src="{{ $new['image']['srcs']['small'] }}" class="lazyload" alt="{{ $new['image']['title'] }}">
                    {{ $new['title'] }}
                </a>
            </li>
        @endforeach
    </ul>
</div>
