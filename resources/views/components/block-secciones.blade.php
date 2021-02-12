

<div class="container secciones">

    <div class="caja-contenido">

        <div class="seccionfija {{ $id_seccion }}">

            <div class="seccion-fija-titulo">
                


            @switch($id_seccion)
                @case('mujer')
                    <a href="https://marieclaire.perfil.com" target="_blank" rel="noreferrer"><img src="/images/marieclaire.png" style="width:120px;height:20px;margin-top:4px;"></a>
                    @break
                @case('deportes')
                    <a href="https://442.perfil.com" target="_blank" rel="noreferrer">Deportes</a>
                    @break
                @case('espectaculos')
                    <a href="https://exitoina.perfil.com" target="_blank" rel="noreferrer">Espectáculos</a>
                    @break
                @default
                    Más noticias
            @endswitch




            </div>

            <div class="contenedor-notas">

                @foreach(array_slice($news, 0, 7) as $new)

                    <article class="articulo seccion">

                        <figure>
                            <a href="{{ $new['permalink'] }}" target="_blank"  rel="noreferrer">
                                <x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
                                <p class="headline">
                                    {{ $new['headline'] }}
                                </p>
                            </a>
                        </figure>

                        <div class="meta-content">
                            <a href="{{ $new['permalink'] }}" target="_blank"  rel="noreferrer">
                                @if ($new['hat'] != '')
                                    <span class="hat">{{ $new['hat'] }} </span>
                                @endif
                                <h2>
                                    {{ $new['home_title'] }}
                                </h2>
                                <p class="headline">
                                    {{ $new['headline'] }}
                                </p>
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

        </div>

    </div>

</div>
