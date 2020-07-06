@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

		<div class="container bloque">

			<div class="caja-contenido">
				<div class="container px-0 flex-column flex-md-row">


					<div class="columna-dostercios">
						@foreach(array_slice($news, 0, 9) as $key => $new)
							@if ($key == 3)
							</div>
							@endif
							<article class="articulo">
								<figure>
									<a href="{{ $new['permalink'] }}">
										@if ($key == 4)
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
										@else
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
										@endif


										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
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
										<h4>{{ $new['headline'] }}</h4>
									</a>
									@if ($new['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$new['author']['username']}}">
												{{ __('by') }} {{ $new['author']['fullname'] }}
											</a>
										</h5>
									@elseif ($new['credit'] != '')
										<h5>{{ $new['credit'] }}</h5>
									@endif
									</div>
							</article>
							@if ($key == 0)
							<div class="nopict-group">
							@endif
						@endforeach
					</div>
					<div class="columna-tercio">
						@foreach(array_slice($news, 4, 5) as $key => $new)
						<article class="articulo">
							<figure>
								<a href="{{ $new['permalink'] }}">
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
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
									<h4>{{ $new['headline'] }}</h4>
								</a>
								@if ($new['signed'])
									<h5 class="firma-home">
										<a href="/autores/{{$new['author']['username']}}">
											{{ __('by') }} {{ $new['author']['fullname'] }}
										</a>
									</h5>
								@elseif ($new['credit'] != '')
									<h5>{{ $new['credit'] }}</h5>
								@endif
							</div>
						</article>
						@endforeach
					</div>


{{--
##########################
##########################

		ESTO NO VA

##########################
##########################

					<div class="hilera-full trescolumnas">
						@foreach(array_slice($news, 0, 5) as $key => $new)
							@if ($key == 4)
							</div>
							@endif
							<article class="articulo">
								<figure>
									<a href="{{ $new['permalink'] }}">
											{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
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
										<h4>{{ $new['headline'] }}</h4>
									</a>
									@if ($new['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$new['author']['username']}}">
												{{ __('by') }} {{ $new['author']['fullname'] }}
											</a>
										</h5>
									@elseif ($new['credit'] != '')
										<h5>{{ $new['credit'] }}</h5>
									@endif
								</div>
							</article>
							@if ($key == 0)
							<div class="untercio">
							@endif
						@endforeach
					</div>

					<div class="hilera-full cuatrocolumnas">
						@foreach(array_slice($news, 0, 5) as $key => $new)
							@if ($key == 4)
							</div>
							@endif
							<article class="articulo">
								<figure>
									<a href="{{ $new['permalink'] }}">
											{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
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
										<h4>{{ $new['headline'] }}</h4>
									</a>
									@if ($new['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$new['author']['username']}}">
												{{ __('by') }} {{ $new['author']['fullname'] }}
											</a>
										</h5>
									@elseif ($new['credit'] != '')
										<h5>{{ $new['credit'] }}</h5>
									@endif
								</div>
							</article>
							@if ($key == 1)
							<div class="columna-cuarto">
							@endif
						@endforeach
					</div>

--}}



				</div>



			</div>

			<div class="container caja-right">
				<div class="sidebar">



					{{-- BORRAR DESDE ACÁ - CONTENIDO HARDCODED --}}

					<div id="exitoina">
						<header>
							<div class="exitoina-titulo"><a href="https://exitoina.perfil.com/?_ga=2.143659325.921035876.1593701726-773308716.1570534419" target="_blank">Exitoína</a></div>
						</header>
								<article class="notaExitoina">
							<a href="https://exitoina.perfil.com/noticias/destacada/fabian-cubero-denuncio-penalmente-nicole-neumann.phtml" target="_self" title="Fabián Cubero denunció penalmente a Nicole Neumann">
								<figure>
													<img class="lazy" alt="Fabián Cubero" src="https://fotos.perfil.com/2020/04/21/trim/300/169/fabian-cubero-0421-943498.jpg" style="display: inline-block;">
												</figure>
								<h3>Fabián Cubero denunció penalmente a Nicole Neumann</h3>
							</a>
						</article>
								<article class="notaExitoina">
							<a href="https://exitoina.perfil.com/noticias/videos/jorge-rial-adrian-pallares-tension-intrusos.phtml" target="_self" title="Tensión en Intrusos por un comentario de Jorge Rial a Adrián Pallares">
								<figure>
													<img class="lazy" alt="Jorge Rial y Adrián Pallares" src="https://fotos.perfil.com/2020/07/01/trim/150/85/jorge-rial-adrian-pallares-0107-979581.jpg" style="display: inline-block;">
												</figure>
								<h3>Tensión en Intrusos por un comentario de Jorge Rial a Adrián Pallares</h3>
							</a>
						</article>
								<article class="notaExitoina">
							<a href="https://exitoina.perfil.com/noticias/videos/gustavo-conti-incomodo-pampita-online-drama-familiar.phtml" target="_self" title="El incómodo momento de Gustavo Conti en Pampita Online por un drama familiar">
								<figure>
													<img class="lazy" alt="Silvina Luna y Gustavo Conti" src="https://fotos.perfil.com/2020/07/02/trim/150/85/silvina-luna-gustavo-conti-0702-980083.jpg" style="display: inline-block;">
												</figure>
								<h3>El incómodo momento de Gustavo Conti en Pampita Online por un drama familiar</h3>
							</a>
						</article>
								<article class="notaExitoina">
							<a href="https://exitoina.perfil.com/noticias/mundo/beavis-butt-head-regreso.phtml" target="_self" title="Anunciaron el regreso de Beavis y Butt-Head">
								<figure>
													<img class="lazy" alt="Beavis y Butt-Head" src="https://fotos.perfil.com/2020/07/01/trim/150/85/beavis-y-butt-head-979935.jpg" style="display: inline-block;">
												</figure>
								<h3>Anunciaron el regreso de Beavis y Butt-Head</h3>
							</a>
						</article>
								<footer>
							<a href="https://exitoina.perfil.com" target="_blank">Más en Exitoína </a>
						</footer>
					</div>

					{{-- BORRAR HASTA ACÁ - CONTENIDO HARDCODED --}}



					<div id="" class="ads-space d-none d-lg-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>


					{{-- BORRAR DESDE ACÁ - CONTENIDO HARDCODED --}}

					<div id="net">
						<header>
							<div class="net-titulo"><a href="https://www.canalnet.tv/" target="_blank">Net</a></div>
						</header>
								<article class="notaNet">
							<a href="https://www.canalnet.tv/programas/pampita-online/gustavo-conti-expuso-como-seduciria-a-pampita_20200701/" target="_self" title="Gustavo Conti expuso cómo seduciría a Pampita ">
								<figure>
													<img class="lazy" alt="Gustavo Conti" src="https://fotos.perfil.com/2020/07/01/trim/300/169/gustavo-conti-979933.png" style="display: inline-block;">
												</figure>
								<h3>Gustavo Conti expuso cómo seduciría a Pampita </h3>
							</a>
						</article>
								<article class="notaNet">
							<a href="https://www.canalnet.tv/programas/pampita-online/pampita-le-respondio-a-mariana-brey-estoy-muy-bien-parada-como-mujer-el-honor-es-muy-importante_20200702/" target="_self" title="Pampita le respondió a Mariana Brey: “Estoy muy bien parada como mujer, el honor es muy importante” ">
								<figure>
													<img class="lazy" alt="Pampita" src="https://fotos.perfil.com/2020/07/02/trim/150/85/pampita-980609.png" style="display: inline-block;">
												</figure>
								<h3>Pampita le respondió a Mariana Brey: “Estoy muy bien parada como mujer, el honor es muy importante” </h3>
							</a>
						</article>
								<article class="notaNet">
							<a href="https://www.canalnet.tv/programas/como-todo/no-te-pierdas-estas-recetas-con-mollejas_20200701/" target="_self" title="Recetas variadas con mollejas">
								<figure>
													<img class="lazy" alt="@comotodonet" src="https://fotos.perfil.com/2020/07/01/trim/150/85/molleja-979666.jpg" style="display: inline-block;">
												</figure>
								<h3>Recetas variadas con mollejas</h3>
							</a>
						</article>
								<article class="notaNet">
							<a href="https://www.canalnet.tv/tecnologia/whatsapp-mira-como-enviar-mensajes-en-negrita-cursiva-y-tachado_20200701/" target="_self" title="WhatsApp: mirá cómo enviar mensajes en negrita, cursiva y tachado">
								<figure>
													<img class="lazy" alt="Mandá texto cone estilo por WhatsApp" src="https://fotos.perfil.com/2020/07/01/trim/150/85/whatsapp-979236.jpg" style="display: inline-block;">
												</figure>
								<h3>WhatsApp: mirá cómo enviar mensajes en negrita, cursiva y tachado</h3>
							</a>
						</article>
								<footer>
							<a href="https://www.canalnet.tv/" target="_blank">Más en Net TV</a>
						</footer>
					</div>

					{{-- BORRAR HASTA ACÁ - CONTENIDO HARDCODED --}}

				</div>

			</div>


		</div>



		<div class="d-flex justify-content-center w-100 my-1 d-block d-md-none">
			<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
		</div>


@endif