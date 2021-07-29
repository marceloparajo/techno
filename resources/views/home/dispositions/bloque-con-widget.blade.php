
@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="seccion bloquewidget">

		<x-ad-space id="central_300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250 d-none d-md-block d-lg-none" />

		<div class="bloquewidget__encuesta">
			<header class="titulo-widget">¡Dejá tu opinión!</header>
			<div class="quiz-container">
			<!-- Pontamedia Survey Tag //-->
			<div id="brandencuesta"></div>
			<script type="text/javascript" src="//api.pontamedia.net/survey.php?p=YToyOntzOjE6ImsiO3M6NDA6IjlmYTIwMmFjNjEwNzMzNTljNmM3NWZkMzQ3MjIyYmI2YjBmMjZjNGYiO3M6NjoicG9sbElkIjtpOjgyOTY7fQ==&lang=es" async></script>
			<!-- End Pontamedia Survey Tag //-->
			</div>
		</div>


		@foreach(array_slice($news, 0, 6) as $key => $new)
			@if ($new['channel']['slug'] == 'tapas' && !isset($tapa))
				@php ($tapa = $new)
			@else
				@include('home.dispositions.partials.articulo')
			@endif
		@endforeach

	</div>
@endif
