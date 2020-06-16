@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<section class="container-fluid cajageneral py-2 mb-4">
			<div class="container">

				<div class="row">

					<div class="notas-cajageneral radio-perfil">

						<div class="header-cajageneral">
							<h6>Radio Perfil</h6>
						</div>

						<div class="columna-a"> 
							@foreach(array_slice($news, 0, 3) as $key => $new)
							<article class="caja-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						<div class="footer-cajageneral">
							<span class="mira"><a href="#"><i class="fas fa-video"></i>Mirá<br>en&nbsp;vivo</a></span>
							<span class="escucha"><a href="#"><i class="fas fa-play"></i>Escuchá&nbsp;on&nbsp;line<br>FM 101.9</a></span>
						</div>

					</div><!-- notas-cobertura -->



					<div class="notas-cajageneral perfil-educacion">

						<div class="header-cajageneral">
							<h6>Perfil Educación</h6>
						</div>

						<div class="columna-a"> 
							@foreach(array_slice($news, 0, 3) as $key => $new)
							<article class="caja-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						
						<div class="footer-cajageneral">
							<ul>
								<li><a href="https://www.perfileducacion.com.ar/inicio-posgrado/">Investigación</a></li>
								<li><a href="https://instituto.perfil.com/">Instituto Perfil</a></li>
								<li><a href="https://www.perfilelearning.com/">E-Learning</a></li>
								<li><a href="https://www.perfileducacion.com.ar/inicio-comunicacion/">Educación</a></li>
							</ul>
						</div>

					</div><!-- notas-cobertura -->








					<div class="notas-cajageneral marieclaire">

						<div class="header-cajageneral">
							<h6>Marie Claire</h6>
						</div>

						<div class="columna-a"> 
							@foreach(array_slice($news, 0, 3) as $key => $new)
							<article class="caja-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						
						<div class="footer-cajageneral">
							<ul>
								<li><a href="//marieclaire.perfil.com/seccion/gourmet">Gourmet</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/cultura">Cultura</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/sociedad">Sociedad</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/personajes">Personajes</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/moda">Moda</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/lifestyle">Lifestyle</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/belleza">Belleza</a></li>
							</ul>
						</div>

					</div><!-- notas-cobertura -->








					<div class="notas-cajageneral canalnet">

						<div class="header-cajageneral">
							<h6>Canal Net</h6>
						</div>

						<div class="columna-a"> 
							@foreach(array_slice($news, 0, 3) as $key => $new)
							<article class="caja-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						
						<div class="footer-cajageneral">
							<ul>
								<li><a href="//marieclaire.perfil.com/seccion/sociedad">Tecnología</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/personajes">Tendencias</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/moda">Espectáculos</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/lifestyle">Deportes</a></li>
								<li><a href="//marieclaire.perfil.com/seccion/belleza">Noticias</a></li>
							</ul>
						</div>

					</div><!-- notas-cobertura -->








				</div>

			</div>



		</section>

	@endif

@endif