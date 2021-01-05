@extends('layout.base')

@section('head-meta')
    <meta http-equiv="refresh" content="600" />
@endsection

@section('page-title', $page_title)

@section('body')

    {{-- Menu --}}
    <div class="tituloCanal reperfilar">
        <div class="nombreCanal">
            <span class="nombre-reperfilar">Reperfilar</span>
            <nav class="menu-reperfilar">
                <div class="secciones">
                    <div class="menu-secciones-barras">
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                    </div>
                    Secciones
                </div>
                <ul>
                    @foreach ($subchannels_list as $subchannel)
                        <li><a href="/reperfilar/{{ $subchannel['slug'] }}">{{ $subchannel['name'] }}</a></li>';
                    @endforeach
                    <li class="seguinos"><a>Seguinos <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                        <ul>
                            <li><a href="https://www.instagram.com/reperfilar/" target="_blank"><span class="fa fa-instagram"></span></a></li>
                            <li><a href="https://twitter.com/reperfilar" target="_blank"><span class="fa fa-twitter-square"></span></a></li>
                            <li><a href="https://facebook.com/reperfilar" target="_blank"><span class="fa fa-facebook-square"></span></a></li>
                            <li><a href="https://www.youtube.com/perfiltv" target="_blank"><span class="fa fa-youtube-play"></span></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    {{-- /Menu --}}

    <div class="contenedorGeneral-reperfilar" id="reperfilar">
        <div class="noticias">
            <div class="destacadas">

                {{-- Primer artículo --}}
                @foreach (array_slice($destaque_posts, 0, 1) as $post)
                    <div class="main-article">
                        <article class="articulo tipo-reperfilar">
                            <div class="video-player">
                                @if ($post['embed_code'] != '' && \Illuminate\Support\Str::contains($post['embed_code'], ['rudo', 'tube']))
                                    {!! $post['embed_code'] !!}
                                @else
                                    <x-lazy-image :src="$post['main_image']['srcs']['original']" />
                                @endif
                            </div>
                            <div class="meta-content">
                                <a href="{{ $post['permalink'] }}">
                                    <h2>{{ $post['home_title'] }}</h2>
                                    <h3>{{ $post['headline'] }}</h3>
                                    @if ($post['signed'])
                                        <h5><a href="/autor/{{ $post['author']['username'] }}" title="Ir a Página de autor">Por {{ $post['author']['fullname'] }}</a></h5>
                                    @elseif ($post['credit'] != '')
                                        <h5>Por {{ $post['credit'] }}</h5>
                                    @endif
                                </a>
                            </div>
                        </article>
                    </div>
                @endforeach
                {{-- /Primer artículo --}}

                {{-- Segundo artículo --}}
                <div class="secondary-article">
                    @foreach (array_slice($destaque_posts, 1, 4) as $post)
                        <article class="articulo tipo-reperfilar">
                            <x-lazy-image :src="$post['main_image']['srcs']['original']" play-button="true" />
                            <div class="meta-content">
                                <a href="{{ $post['permalink'] }}">
                                    <h2>{{ $post['home_title'] }}</h2>
                                </a>
                                @if ($post['signed'])
                                    <h5><a href="/autor/{{ $post['author']['username'] }}" title="Ir a Página de autor">Por {{ $post['author']['fullname'] }}</a></h5>
                                @elseif ($post['credit'] != '')
                                    <h5>Por {{ $post['credit'] }}</h5>
                                @endif
                            </div>
                        </article>
                    @endforeach
                </div>
                {{-- /Segundo artículo --}}
            </div>

            {{-- Secciones --}}
            <div class="secciones">
                @foreach ($subchannel_posts as $subchannel)

                    @if ($subchannel['slug'] == 'programas')
                        @if (isset($subchannel['posts']) && count($subchannel['posts']) > 0)
                            <div class="seccion-title programacion">
                                <a id="{{ $subchannel['slug'] }}" class="anchor"></a>
                                <div class="seccion-nombre">Programas completos</div>
                            </div>
                            <div class="seccion programacion">
                                <div class="articulo-flexible">
                                    <article class="articulo tipo-reperfilar">
                                        <div class="video-player">
                                            @if ($subchannel['posts'][0]['embed_code'] != '' && (\Illuminate\Support\Str::contains($subchannel['posts'][0]['embed_code'], ['rudo', 'tube'])))
                                                {!! $subchannel['posts'][0]['embed_code'] !!}
                                            @else
                                                <x-lazy-image :src="$post['main_image']['srcs']['original']" />
                                            @endif
                                        </div>
                                        <div class="meta-content">
                                            <a href="{{ $subchannel['posts'][0]['permalink'] }}">
                                                <h2>{{ $subchannel['posts'][0]['home_title'] }}</h2>
                                                <h3>{{ $subchannel['posts'][0]['headline'] }}</h3>
                                                @if ($subchannel['posts'][0]['signed'])
                                                    <h5><a href="/autor/{{ $subchannel['posts'][0]['author']['username'] }}" title="Ir a Página de autor">Por {{ $subchannel['posts'][0]['author']['fullname'] }}</a></h5>
                                                @elseif ($subchannel['posts'][0]['credit'] != '')
                                                    <h5>Por {{ $subchannel['posts'][0]['credit'] }}</h5>
                                                @endif
                                            </a>
                                        </div>
                                    </article>
                                </div>
                                <div class="seguinos-vermas">
                                    <div class="redes">
                                        <ul>
                                            <li class="followus">Seguinos </li>
                                            <li><a href="https://www.instagram.com/reperfilar/" target="_blank"><span class="fa fa-instagram"></span></a></li>
                                            <li><a href="https://twitter.com/reperfilar" target="_blank"><span class="fa fa-twitter-square"></span></a></li>
                                            <li><a href="https://facebook.com/reperfilar" target="_blank"><span class="fa fa-facebook-square"></span></a></li>
                                            <li><a href="https://www.youtube.com/perfiltv" target="_blank"><span class="fa fa-youtube-play"></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="vermas"><a href="/reperfilar/{{ $subchannel['slug'] }}">Programas anteriores</a></div>
                                </div>
                            </div>
                        @endif
                    @else
                        <div class="seccion {{ $subchannel['slug'] }}">
                            <a id="{{ $subchannel['slug'] }}" class="anchor"></a>
                            <div class="seccion-title">
                                <div class="seccion-nombre">{{ $subchannel['name'] }}</div>
                                @foreach (array_slice($subchannel['posts'], 0, 5) as $post)
                                    <article class="articulo tipo-reperfilar">
                                        <x-lazy-image :src="$post['main_image']['srcs']['original']" play-button="true" />
                                        <div class="meta-content">
                                            <a href="{{ $post['permalink'] }}">
                                                <h2>{{ $post['home_title'] }}</h2>
                                            </a>
                                            @if ($post['signed'])
                                                <h5><a href="/autor/{{ $post['author']['username'] }}" title="Ir a Página de autor">Por {{ $post['author']['fullname'] }}</a></h5>
                                            @else
                                                <h5>Por {{ $post['credit'] }}</h5>
                                            @endif
                                        </div>
                                    </article>
                                @endforeach
                                <div class="seguinos-vermas">
                                    <div class="redes">
                                        <ul>
                                            <li class="followus">Seguinos </li>
                                            <li><a href="https://www.instagram.com/reperfilar/" target="_blank"><span class="fa fa-instagram"></span></a></li>
                                            <li><a href="https://twitter.com/reperfilar" target="_blank"><span class="fa fa-twitter-square"></span></a></li>
                                            <li><a href="https://facebook.com/reperfilar" target="_blank"><span class="fa fa-facebook-square"></span></a></li>
                                            <li><a href="https://www.youtube.com/perfiltv" target="_blank"><span class="fa fa-youtube-play"></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="vermas"><a href="/reperfilar/{{ $subchannel['slug'] }}">Ver más</a></div>
                                </div>
                            </div>
                        </div>
                    @endif
                @endforeach
            </div>
            {{-- /Seccion --}}

        </div>
    </div>
@endsection
