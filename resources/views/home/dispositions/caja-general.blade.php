@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[1]))

		<div class="container cajageneral">

			<div class="caja-contenido">

				<div class="notas-cajageneral radio-perfil">

					<div class="header-cajageneral">
						<h6>Radio Perfil</h6>
					</div>

					<div class="contenido-notas"> 
						@foreach(array_slice($news, 0, 3) as $key => $new)
						<article class="articulo caja-nota">
							<figure>
								<a href="{{ $new['permalink'] }}">
								@if ($key == 0)
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
								@else
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
								@endif
								</a>	
							</figure>

							<div class="meta-content">
								<a href="{{ $new['permalink'] }}">
									@if ($new['hat'] != '')
										<span class="hat">{{ $new['hat'] }} </span>
									@endif
									<h2>{{ $new['home_title'] }}</h2>
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

					<div class="footer-cajageneral">
						<span class="mira"><a href="#"><i class="fas fa-video"></i>Mirá<br>en&nbsp;vivo</a></span>
						<span class="escucha"><a href="#"><i class="fas fa-play"></i>Escuchá&nbsp;on&nbsp;line<br>FM 101.9</a></span>
					</div>

				</div><!-- notas-cajageneral -->

			</div>

			<div class="caja-right">





{{--
######################################
######################################

CONTENIDO HARDCODEADO DESDE ACA

######################################
######################################
--}}
				<section id="columnistas">
					<header class="columnistas-titulo">
						<a href="#">Columnistas</a>
					</header>
					<div class="grupo-columnistas">
						<article class="nota-columnista">
							<a href="/noticias/columnistas/en-45-dias-explota-todo.phtml">
								<figure><img src="https://fotos.perfil.com/autores/default/jfontevecchia_50.jpg?v=1.0.29"> </figure>
								<h3>"En 45 días explota todo"</h3>
								<h5>Jorge Fontevecchia</h5>
							</a>
						</article>

						<article class="nota-columnista">
							<a href="/noticias/columnistas/la-comedia-mas-triste-del-mundo.phtml">
								<figure><img src="https://fotos.perfil.com/autores/default/ggonzalez_50.jpg?v=1.0.29"></figure>
								<h3>La comedia más triste del mundo</h3>
								<h5>Gustavo González</h5>
							</a>
						</article>
						
						<article class="nota-columnista">
							<a href="/noticias/columnistas/no-importa.phtml">
								<figure><img src="https://fotos.perfil.com/autores/default/jcalvo_50.jpg?v=1.0.29"> </figure>
								<h3>No importa</h3>
								<h5>Javier Calvo</h5>
							</a>
						</article>
						
						<article class="nota-columnista">
							<a href="/noticias/columnistas/piolas-y-duros.phtml">
								<figure><img src="https://fotos.perfil.com/autores/default/bsarlo_50.jpg?v=1.0.29"> </figure>
								<h3>Piolas y duros</h3>
								<h5>Beatriz Sarlo</h5>
							</a>
						</article>
						
						<article class="nota-columnista">
							<a href="/noticias/columnistas/dogmatismo-y-ciencia.phtml">
								<figure><img src="https://fotos.perfil.com/autores/default/jduranbarba_50.jpg?v=1.0.29"> </figure>
								<h3>Dogmatismo y ciencia</h3>
								<h5>Jaime Duran Barba</h5>
							</a>
						</article>


						<article class="nota-columnista">
							<a href="#">
								<figure>
									<img src="https://fotos.perfil.com/autores/default/rspregelburd_50.jpg?v=1.0.29">
								</figure> 
								<h3>Volver a fase uno</h3>
								<h5>Rafael Spregelburd</h5>
							</a>
						</article>


					</div><!-- grupo-columnistas -->
					<footer>
						<a href="/mas-leidas">Mirá más</a>
					</footer>
				</section>

{{--
######################################
######################################

CONTENIDO HARDCODEADO HASTA ACA

######################################
######################################
--}}




			</div>

		</div>
	@endif

@endif