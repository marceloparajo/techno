	<article class="articulo nota-{{ $key }}" >
        <a href="{{ $new['permalink'] }}">
            @if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
                {!! $new['embed_code'] !!}
            @else
                <figure>
                    @if($key == 0)
                        <x-lazy-image :src="$news[0]['main_image']['srcs']['original']" :alt="$news[0]['main_image']['title']" class="img-fluid" max-width="700" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
                    @else
                        <x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['title']" class="img-fluid" sizes="200,300" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
                    @endif
                </figure>
            @endif

            <div class="meta-content">

                @if ($new['hat'] != '')
                    <span class="hat">{{ $new['hat'] }} </span>
                @else
                    <span class="hat">{{ $new['channel']['name'] }}</span>
                @endif

                <h2>{{ $new['home_title'] }}</h2>

                <p class="headline">{{ $new['headline'] }}</p>


                @if ($new['signed'])
                    <span class="firma-home">
                        {{ __('by') }} {{ $new['author']['fullname'] }}
                    </span>
                @elseif ($new['credit'] != '')
                    <span class="firma-home">
                        {{ $new['credit'] }}
                    </span>
                @endif
            </div>
        </a>
	</article>