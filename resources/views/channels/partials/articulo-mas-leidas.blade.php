<article class="news {{ $clase }} news--{{ $loop->index }}">
    <a href="{{ $new['permalink'] }}">
        <div class="news__media">
            <figure>
                <x-lazy-image 
                    :src="$new['main_image']['srcs']['original']" 
                    :alt="$new['main_image']['title']" 
                    class="img-fluid" 
                    width="$width_mobile"
                    height="hight_mobile"
                    :sizes="[['v' => 414, 'w' => $width_mobile ? $width_mobile : $width_mobile = '375', 'h' => $height_mobile ? $height_mobile : $height_mobile = '211'], 
                            ['v' => 768, 'w' => $width_tablet, 'h' => $height_tablet], 
                            ['v' => 1024, 'w' => $width_laptop, 'h' => $height_laptop], 
                            ['v' => 1366, 'w' => $width_desktop, 'h' => $height_desktop]]" 
                    clean-source="true" 
                />
            </figure>
        </div>
        <div class="news__meta">
            @if ($new['hat'] != '')
                <span class="news__hat">
                    {{ $new['hat'] }}
                </span>
            @endif
            <h2 class="news__title">
                {{ $new['home_title'] }}
            </h2>
        </div>
        <span class="news__ranking">
            {{ $loop->index + 1 }}
        </span>
    </a>
</article>