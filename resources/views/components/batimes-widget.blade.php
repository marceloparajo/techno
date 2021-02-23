@if (isset($news) && count($news) > 0)
    <section id="batimes">
        <header>
            <div class="batimes-titulo"><a href="https://batimes.com.ar/" target="_blank" rel="noreferrer">Buenos Aires Times</a></div>
        </header>

        @foreach(array_slice($news, 0, 4) as $key => $new)


            <article class="notaBatimes">
                <a href="//batimes.com.ar{{ $new['source_url'] }}">
                    <figure>
                        @if ($loop->first)
<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" sizes="200,300" />                        @else
<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" sizes="100,200" />                        @endif
                    </figure>
                    <div class="content">
                        <h3>{{ $new['home_title'] }}</h3>

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
        @endforeach

        <footer><a href="https://batimes.com.ar/" target="_blank" rel="noreferrer">Más en Buenos Aires Times</a></footer>
    </section>
@endif



<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" sizes="200,300" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />