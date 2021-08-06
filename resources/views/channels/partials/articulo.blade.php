<article class="articulo nota-{{ $loop->iteration }}">
    <a href="{{ $noticia['permalink'] }}">
        <figure>
            <x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$noticia['has_video']" :camera-button="$noticia['has_gallery']" />
        </figure>
        <div class="meta-content">
            @if ($noticia['hat'] != '')
                <span class="hat">{{ $noticia['hat'] }}</span>
            @else
                <span class="hat">{{ $noticia['channel']['name'] }}</span>
            @endif
            <h2>{{ $noticia['home_title'] }}</h2>
            <p class="headline">{{ $noticia['headline'] }}</p>
            @if ($noticia['signed'])
            <span class="firma-home">
                    {{ __('by') }} {{ $noticia['author']['fullname'] }}
            </span>
            @elseif ($noticia['credit'] != '')
                <span class="firma-home">{{ $noticia['credit'] }}</span>
            @endif
        </div>
        @if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
            <span class="date-time">
                Publicado: {{ $noticia['date_available_human'] }}
            </span>
        @endif
    </a>
</article>