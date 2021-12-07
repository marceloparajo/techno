<div class="celebrities">
    <div class="celebrities__titulo">
        <button class="celebrities__btn" id="celebridades-boton" onclick="muestraMenuCelebridades()">
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
            Celebridades
        </button>
        Celebridades
    </div>

    <ul class="celebrities__nav" id="celebridades-menu">
        @foreach ($getMenu() as $item)
            <li class="nav-item"><a class="nav-link {{ $item['class'] }}" href="{{ $item['href'] }}" target="{{ $item['target'] }}" title="{{ $item['title'] }}"> {{ $item['text'] }}</a></li>
        @endforeach
    </ul>

    <div class="celebrities__notas">
        @foreach($getNews() as $new)

            <article class="articulo nota-{{ $loop->index }}" >
                <a href="{{ $new['permalink'] }}">
                    @if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
                        {!! $new['embed_code'] !!}
                    @else
                        <figure>
                            @if($loop->first)
                                <x-lazy-image
                                        :src="$new['main_image']['srcs']['original']"
                                        :alt="$new['main_image']['title']"
                                        :sizes="[['v' => 320, 'w' => 300, 'h' => 169], ['v' => 360, 'w' => 340, 'h' => 191], ['v' => 375, 'w' => 355, 'h' => 200], ['v' => 414, 'w' => 394, 'h' => 222], ['v' => 768, 'w' => 705, 'h' => 396], ['v' => 1024, 'w' => 298, 'h' => 167], ['v' => 1366, 'w' => 304, 'h' => 171]]"
                                        class="img-fluid"
                                        max-width="700"
                                        :play-button="$new['has_video']"
                                        :camera-button="$new['has_gallery']" />
                            @else
                                <x-lazy-image
                                        :src="$new['main_image']['srcs']['original']"
                                        :alt="$new['main_image']['title']"
                                        :sizes="[['v' => 320, 'w' => 300, 'h' => 169], ['v' => 360, 'w' => 340, 'h' => 191], ['v' => 375, 'w' => 355, 'h' => 200], ['v' => 414, 'w' => 394, 'h' => 222], ['v' => 768, 'w' => 336, 'h' => 202], ['v' => 1024, 'w' => 298, 'h' => 167], ['v' => 1366, 'w' => 304, 'h' => 171]]"
                                        class="img-fluid"
                                        :play-button="$new['has_video']"
                                        :camera-button="$new['has_gallery']" />
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

        @endforeach
        <x-ad-space id="central_300x250x-pos-" width="300" height="250" margin-top="0" class=" d-md-none d-xxl-flex" />
    </div>

</div>