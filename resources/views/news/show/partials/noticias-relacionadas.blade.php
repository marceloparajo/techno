<div class="noticias-relacionadas">
    <h6>{{ __('related news') }}</h6>
    <div class="related-news">
        @foreach (array_slice($noticias, 0, 4) as $noticia)
            <article class="related-new">
                <figure class="related-img">
                    <a href="{{ $noticia['permalink'] }}" title="Read {{ $noticia['title'] }}">
                        <x-lazy-image :src="$noticia['image']['srcs']['original']" :alt="$noticia['image']['caption']" class="img-fluid" max-width="200" />
                    </a>
                </figure>
                <h5><a href="{{ $noticia['permalink'] }}">{{ $noticia['title'] }}</a></h5>
            </article>
        @endforeach
    </div>
</div>
