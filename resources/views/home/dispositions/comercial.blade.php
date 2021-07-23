@if (isset($news) && count($news) > 2)

	<!-- Cobertura -->
	<div class="cobertura">

		<div class="cobertura__titulo">{{ $news[0]['hat'] ?? '' }}</div>

		@php 
			$mostrarnotas = (count($news) < 6 ) ? 3 : 6;
		@endphp
		
		@foreach(array_slice($news, 0, $mostrarnotas) as $key => $new)
			@include('home.dispositions.partials.articulo')
		@endforeach

	</div><!-- cobertura -->

	<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="d-md-none" />

@endif
