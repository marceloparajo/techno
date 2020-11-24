@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

    <div class="caja-contenido bloque">
            <div class="columna-dostercios">
                @foreach(array_slice($news, 0, 6) as $key => $new)
                    <article class="articulo">
                        <figure>
                            <a href="{{ $new['permalink'] }}">
                                @if ($key == 4)
                                {!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
                                @else
                                {!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
                                @endif


                                <p class="headline">
                                    {{ $new['headline'] }}
                                </p>
                                @if ($new['has_video']) 
                                    <div class="galeria-video">
                                        <span><i class="fa fa-play"></i></span>
                                    </div>
                                @endif
                                @if ($new['has_gallery'])
                                    <div class="galeria-video">
                                        <span><i class="fa fa-camera"></i></span>
                                    </div>
                                @endif
                            </a>
                        </figure>

                        <div class="meta-content">
                            <a href="{{ $new['permalink'] }}">
                                @if ($new['hat'] != '')
                                    <span class="hat">{{ $new['hat'] }} </span>
                                @endif
                                <h2>
                                    {{ $new['home_title'] }}
                                </h2>
                                <p class="headline">{{ $new['headline'] }}</p>
                            </a>
                            @if ($new['signed'])
                                <span class="firma-home">
                                    <a href="/autores/{{$new['author']['username']}}">
                                        {{ __('by') }} {{ $new['author']['fullname'] }}
                                    </a>
                                </span>
                            @elseif ($new['credit'] != '')
                                <span class="firma-home">{{ $new['credit'] }}</span>
                            @endif
                            </div>
                    </article>
                @endforeach
            </div>
            <div class="columna-tercio">

                <div class="columna-tercio-izquierda"> 
                @foreach(array_slice($news, 6, 4) as $key => $new)
                    <article class="articulo">
                        <figure>
                            <a href="{{ $new['permalink'] }}">
                                    {!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
                                    <p class="headline">
                                        {{ $new['headline'] }}
                                    </p>
                                    @if ($new['has_video']) 
                                        <div class="galeria-video">
                                            <span><i class="fa fa-play"></i></span>
                                        </div>
                                    @endif
                                    @if ($new['has_gallery'])
                                        <div class="galeria-video">
                                            <span><i class="fa fa-camera"></i></span>
                                        </div>
                                    @endif
                            </a>
                        </figure>

                        <div class="meta-content">
                            <a href="{{ $new['permalink'] }}">
                                @if ($new['hat'] != '')
                                    <span class="hat">{{ $new['hat'] }} </span>
                                @endif
                                <h2>
                                    {{ $new['home_title'] }}
                                </h2>
                                <p class="headline">{{ $new['headline'] }}</p>
                            </a>
                            @if ($new['signed'])
                                <span class="firma-home">
                                    <a href="/autores/{{$new['author']['username']}}">
                                        {{ __('by') }} {{ $new['author']['fullname'] }}
                                    </a>
                                </span>
                            @elseif ($new['credit'] != '')
                                <span class="firma-home">{{ $new['credit'] }}</span>
                            @endif
                        </div>
                    </article>
                    @if ($key == 1)
                </div>
                <div class="columna-tercio-derecha">
                    @endif
                @endforeach
                <div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
                </div>

            </div>
    </div>



@endif