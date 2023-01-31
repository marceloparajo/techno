<article class="news {{ $clase }} news--{{ $loop->index }}">
    <a href="{{ $new['permalink'] }}">
        <div class="news__media">
            @if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube') || strpos($new['embed_code_original'], 'vimeo')))
                {!! $new['embed_code'] !!}
            @else
            <figure>
                <x-lazy-image 
                :src="$new['main_image']['srcs']['original']" 
                :alt="$new['main_image']['title']" 
                class="img-fluid" 
                :sizes="[['v' => 414, 'w' => $width_mobile, 'h' => $height_mobile], 
                        ['v' => 768, 'w' => $width_tablet, 'h' => $height_tablet], 
                        ['v' => 1024, 'w' => $width_laptop, 'h' => $height_laptop], 
                        ['v' => 1366, 'w' => $width_desktop, 'h' => $height_desktop]]" 
                :play-button="$new['has_video']" 
                :camera-button="$new['has_gallery']" />
            </figure>
            @endif
        </div>
        <div class="news__meta">
            @if ($new['hat'] != '')
                <span class="news__hat">
                    {{ $new['hat'] }}
                </span>
            @else
                <span class="news__hat">
                    {{ $new['channel']['name'] }}
                </span>
            @endif
            <h2 class="news__title">
                {{ $new['home_title'] }}
            </h2>
            <p class="news__headline">{{ $new['headline'] }}</p>

            @if ($new['signed'])
            <span class="news__autor">
                {{ $new['author']['fullname'] }}
            </span>
            @elseif ($new['credit'] != '')
            <span class="news__autor">
                {{ $new['credit'] }}
            </span>
            @endif
        </div>
    </a>
</article>