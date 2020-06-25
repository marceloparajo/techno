@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@inject('shortcodeConverter', "App\Http\Helpers\ShortCodeConverter")




@if (isset($news) && count($news) > 0)


		<div class="container destacada">

			<div class="caja-contenido">
				<div class="container px-0 flex-column flex-md-row">

					<div class="columna-dostercios">
						<article class="articulo main-destacada">
							<figure>
								<a href="{{ $news[0]['permalink'] }}">
									{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['small-wide'], 540, $news[0]['main_image']['caption'],'img-fluid','540x304') !!}
									@if ($news[0]['has_video']) 
										<div class="galeria-video">
											<span><i class="fa fa-play"></i></span>
										</div>
									@endif
									@if ($news[0]['has_gallery'])
										<div class="galeria-video">
											<span><i class="fa fa-camera"></i></span>
										</div>
									@endif
								</a>
							</figure>			
							<div class="meta-content">
								<a href="{{ $news[0]['permalink'] }}">
									@if ($news[0]['hat'] != '')
										<h3 class="hat">{{ $news[0]['hat'] }} </h3>
									@else
										<h3 class="hat">{{ $news[0]['channel']['name'] }}
									@endif
									<h2>
										{{ $news[0]['home_title'] }}
									</h2>
									<h4 class="headline">{{ $news[0]['headline'] }}</h4>
								</a>
								@if ($news[0]['signed'])
								<h5 class="firma-home">
									<a href="/autores/{{$news[0]['author']['username']}}">
										{{ __('by') }} {{ $news[0]['author']['fullname'] }}
									</a>
								</h5>
								@elseif ($news[0]['credit'] != '')
									<h5>{{ $news[0]['credit'] }}</h5>
								@endif
							</div>
						</article>


						@foreach(array_slice($news, 0, 2) as $key => $new)<!-- ESTE FOREACH DEBE SER 3,4 -->

							<article class="articulo destacadin">

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
									<a href="{{ $news[0]['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
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

						{{-- BORRAR DESDE ACA --}}

							@foreach(array_slice($news, 0, 2) as $key => $new)

								<article class="articulo destacadin">
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
										<a href="{{ $news[0]['permalink'] }}">
											@if ($new['hat'] != '')
												<h3 class="hat">{{ $new['hat'] }} </h3>
											@endif
											<h2>
												{{ $new['home_title'] }}
											</h2>
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
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

						{{-- BORRAR HASTA ACA --}}

					</div>		

					<div class="row text-center mx-0 my-2 d-flex d-md-none justify-content-center w-100">
						<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
					</div>		
					
					<div class="columna-tercio">

						@foreach(array_slice($news, 1, 2) as $key => $new)

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
									<a href="{{ $news[0]['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
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


						{{-- BORRAR DESDE ACA --}}


							@foreach(array_slice($news, 0, 3) as $key => $new)

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
										<a href="{{ $news[0]['permalink'] }}">
											@if ($new['hat'] != '')
												<h3 class="hat">{{ $new['hat'] }} </h3>
											@endif
											<h2>
												{{ $new['home_title'] }}
											</h2>
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
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

						{{-- BORRAR HASTA ACA --}}


					</div>


				</div>


				<div class="row text-center banner-horizontal mx-2 mb-1 mt-5 d-none d-xl-block w-100">
					<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
						
					</div>
				</div>

				<div class="row text-center my-2 d-flex d-xl-none justify-content-center w-100">
					<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" >
						
					</div>
				</div>

			</div><!-- caja-contenido -->






			<div class="container caja-right">

				<div class="sidebar">

				<div id="" class="ads-space d-none d-lg-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

				{{-- CONTENIDO HARCODED -BORRAR --}}

					<div class="podcasts-radio">
						<header>
							<div class="titulo">
								<div class="podcasts"><a href="https://radio.perfil.com/seccion/podcasts?_ga=2.183094944.726575515.1591564606-773308716.1570534419" target="_blank">Podcasts</a></div>
								<div class="logo-radio">
									<a href="//radio.perfil.com/" target="_blank"></a>
								</div>
							</div>
						</header>
						<article class="notaPodcast">
							<a href="https://radio.perfil.com/noticias/politica/que-me-contas-el-subcomandante-alberto-entro-en-modo-chavez.phtml" target="_self" title="Qué me contás: ¿El Subcomandante Alberto entró en “modo Chávez”?">
								<figure>
									<img class="lazy" alt="Alberto Fernández, Néstor Kirchner y Hugo Chávez" src="https://fotos.perfil.com/2020/06/10/trim/150/85/alberto-fernandez-nestor-kirchner-y-hugo-chavez-969431.jpg" style="display: inline-block;">
								</figure>
								<div class="content">
									<h2>Qué me contás: ¿El Subcomandante Alberto entró en “modo Chávez”?</h2>
									<h5>Por Edi Zunino </h5>
								</div>
							</a>
						</article>
						<article class="notaPodcast">
							<a href="https://radio.perfil.com/noticias/actualidad/el-95-de-los-nuevos-casos-de-coronavirus-son-en-buenos-aires.phtml" target="_self" title="El 95% de los nuevos casos de coronavirus son en Buenos Aires">
					    	<figure>
					    		<img class="lazy" alt="Coronavirus en Buenos Aires " src="https://fotos.perfil.com/2020/06/10/trim/150/85/coronavirus-en-buenos-aires-969308.jpg" style="display: inline-block;">
					    	</figure>
								<div class="content">
									<h2>El 95% de los nuevos casos de coronavirus son en Buenos Aires</h2>
									<h5>Por Alejandro Gomel </h5>
								</div>
							</a>
						</article>
						<article class="notaPodcast">
							<a href="https://radio.perfil.com/noticias/actualidad/brasil-logra-cosecha-record-de-granos.phtml" target="_self" title="Brasil logra cosecha récord de granos">
								<figure>
									<img class="lazy" alt="Cereales en Brasil" src="https://fotos.perfil.com/2020/06/10/trim/150/85/cereales-en-brasil-969400.jpg" style="display: inline-block;">
								</figure>
								<div class="content">
									<h2>Brasil logra cosecha récord de granos</h2>
									<h5>Por Facundo Mesquida </h5>
								</div>
							</a>
						</article>
						<article class="notaPodcast">
							<a href="https://radio.perfil.com/noticias/politica/en-que-coinciden-roberto-lavagna-y-eduardo-duhalde.phtml" target="_self" title="En qué coinciden Roberto Lavagna y Eduardo Duhalde">
								<figure>
									<img class="lazy" alt="Eduardo Duhalde y Roberto Lavagna" src="https://fotos.perfil.com/2020/06/10/trim/150/85/eduardo-duhalde-y-roberto-lavagna-969268.jpg" style="display: inline-block;">
								</figure>
								<div class="content">
									<h2>En qué coinciden Roberto Lavagna y Eduardo Duhalde</h2>
									<h5>Por Gustavo González</h5>
								</div>
							</a>
						</article>
						<article class="notaPodcast">
							<a href="https://radio.perfil.com/noticias/actualidad/diez-mil-dolares-por-mes-para-volver-a-entrenar.phtml" target="_self" title="Diez mil dólares por mes para volver a entrenar">
								<figure>
									<img class="lazy" alt="Fútbol chileno" src="https://fotos.perfil.com/2020/06/09/trim/150/85/futbol-chileno-969190.jpg" style="display: inline-block;">
								</figure>
								<div class="content">
									<h2>Diez mil dólares por mes para volver a entrenar</h2>
									<h5>Por Juan Manuel Pons </h5>
								</div>
							</a>
						</article>
						<footer>
							<a href="https://radio.perfil.com/seccion/podcasts" target="_blank">Más podcasts</a>
						</footer>
					</div>

				{{-- HASTA ACA CONTENIDO HARCODED - BORRAR --}}


				<div id="" class="ads-space d-none d-lg-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

			</div><!-- sidebar -->

			</div><!-- container caja-right -->


		</div><!-- container-destacada -->




@endif
