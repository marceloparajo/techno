@extends('layout.base')

@section('ads-sec',  'home')

@section('head-meta')
	<meta http-equiv="refresh" content="600" />
@endsection

@section('head-top')
	<link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('page-title', env('HOME_TITLE','Home') )

@section('js')
	<script type="text/javascript" src="{{ mix('js/home.js') }}"></script>
@endsection

@section('body')


	<main class="supercontenedor">

		@foreach($home_content as $key => $value)
			@if ($key != 'sidebar')
				<section id="{{ $key }}" class="contenedor">

					{{-- codigo original
					@foreach($value as $item)
						@include('home.dispositions.' . $item['template'], ['news' => $item['news']])
					@endforeach
					--}}


					{{-- codigo harcodeado - borrar --}}

					@if ($key != 'central-header' && $key != 'central-footer')
						<div class="contenedor-general"> 
							@foreach($value as $item)
								@include('home.dispositions.' . $item['template'], ['news' => $item['news']])
							@endforeach
						</div><!-- cierra contenedor-general -->

						<div class="sidebar">

							<div class="content-sidebar">

								<div id="" class="ads-space ads-sidebar" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

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
												<h3>Qué me contás: ¿El Subcomandante Alberto entró en “modo Chávez”?</h3>
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
												<h3>El 95% de los nuevos casos de coronavirus son en Buenos Aires</h3>
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
										<h3>Brasil logra cosecha récord de granos</h3>
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
										<h3>En qué coinciden Roberto Lavagna y Eduardo Duhalde</h3>
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
										<h3>Diez mil dólares por mes para volver a entrenar</h3>
										<h5>Por Juan Manuel Pons </h5>
										</div>
										</a>
									</article>
									<footer>
										<a href="https://radio.perfil.com/seccion/podcasts" target="_blank">Más podcasts</a>
									</footer>
								</div>

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


								<div id="" class="ads-space ads-sidebar" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>


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


							</div><!-- cierra content-sidebar -->
						</div><!-- cierra sidebar -->
					@else
						@foreach($value as $item)
							@include('home.dispositions.' . $item['template'], ['news' => $item['news']])
						@endforeach
					@endif

					{{-- hasta aca codigo harcodeado borrar --}}

				</section>
			@endif
		@endforeach



	</main>

@endsection

