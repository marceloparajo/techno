@if (isset($news) && count($news) > 0)
	<div class="container catastrofe">
		<div class="caja-notas">
			<div class="catastrofe-todas">
				@foreach (array_slice($news, 0, 1) as $new)

				<article class="articulo catastrofe-grande">
					<figure>
						<a href="{{ $new['permalink'] }}">
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="900" />
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
							<h4 class="headline">{{ $new['headline'] }}</h4>
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

				<div class="catastrofe-tres">

					@foreach (array_slice($news, 1, 3) as $new)
						<article class="articulo catastrofe-chica">
							<figure>
								<a href="{{ $new['permalink'] }}">
									<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
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
									<h4 class="headline">{{ $new['headline'] }}</h4>
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

			</div>
		</div>

		<div class="caja-right">


{{--BORRAR ESTO - CONTENIDO HARCODED --}}



	<div id="opinion">
		<header>
			<div class="opinion-titulo"><i class="fa fa-quote-right" aria-hidden="true"></i> <a href="https://www.perfil.com/seccion/opinion/" target="_blank">Opinión</a></div>
		</header>
				<article class="notaOpinion">
			<a href="/noticias/opinion/martin-balza-manuel-belgrano-ejemplo-seguir-junto-san-martin-independencia.phtml" target="_self" title="Belgrano, nuestro ejemplo a seguir">
				<figure>
									<img class="lazy" alt="Manuel Belgrano" src="https://fotos.perfil.com/2020/06/19/trim/300/169/manuel-belgrano-973974.jpg" style="display: inline-block;">
								</figure>
				<div class="content">
					<h2>Belgrano, nuestro ejemplo a seguir</h2>
											<h5>Por Martín Balza</h5>
										</div>
			</a>
		</article>
				<article class="notaOpinion">
			<a href="/noticias/opinion/juan-brugge-comprender-realidad-grandes-desafios-humanidad.phtml" target="_self" title="A la realidad, ¿la podemos ver?">
				<figure>
									<img class="lazy" alt="Aislamiento" src="https://fotos.perfil.com/2020/07/02/trim/150/85/coronavirus-aislamiento-pandemia-pixabay-980587.jpg" style="display: inline-block;">
								</figure>
				<div class="content">
					<h2>A la realidad, ¿la podemos ver?</h2>
											<h5>Por Juan Fernando Brügge*</h5>
									</div>
			</a>
		</article>
				<article class="notaOpinion">
			<a href="/noticias/opinion/marcelo-echevarria-comete-delito-quien-viola-cuarentena.phtml" target="_self" title="¿Comete delito quien viola la cuarentena?">
				<figure>
									<img class="lazy" alt="En el ingreso a Capital por la zona Sur, Puente de La Noria y Constitución." src="https://fotos.perfil.com/2020/07/01/trim/150/85/endurecimiento-de-la-cuarentena-20200701-979342.jpg" style="display: inline-block;">
								</figure>
				<div class="content">
					<h2>¿Comete delito quien viola la cuarentena?</h2>
											<h5>Por Marcelo H.  Echevarría</h5>
										</div>
			</a>
		</article>
				<article class="notaOpinion">
			<a href="/noticias/opinion/carlos-brown-necesitamos-una-nueva-alianza-productiva.phtml" target="_self" title="Necesitamos una nueva Alianza Productiva">
				<figure>
									<img class="lazy" alt="Industria argentina" src="https://fotos.perfil.com/2020/05/13/trim/150/85/industria-argentina-955573.jpg" style="display: inline-block;">
								</figure>
				<div class="content">
					<h2>Necesitamos una nueva Alianza Productiva</h2>
											<h5>Por Carlos  Brown</h5>
										</div>
			</a>
		</article>
				<article class="notaOpinion">
			<a href="/noticias/opinion/alejandro-roemmers-ensenanzas-que-no-podemos-desconocer-en-tiempos-coronavirus.phtml" target="_self" title="Las enseñanzas que no podemos desconocer en tiempos de Covid-19">
				<figure>
									<img class="lazy" alt="Aislamiento" src="https://fotos.perfil.com/2020/07/02/trim/150/85/aislamiento-980116.jpg" style="display: inline-block;">
								</figure>
				<div class="content">
					<h2>Las enseñanzas que no podemos desconocer en tiempos de Covid-19</h2>
											<h5>Por Alejandro Roemmers*</h5>
									</div>
			</a>
		</article>
				<footer>
			<a href="https://www.perfil.com/seccion/opinion/" target="_blank">Más en Opinión </a>
		</footer>
	</div>

{{-- BORRAR HASTA ACA--}}

		</div>

	</div>
@endif
