@if (isset($news) && count($news) > 2)

	<!-- Cobertura -->
	<div class="cobertura row max-width">

		<div class="cobertura__titulo news__aside-title">{{ $news[0]['hat'] ?? '' }}</div>

		@php 
			$mostrarnotas = (count($news) < 6 ) ? 3 : 6;
		@endphp
		
		@foreach(array_slice($news, 0, $mostrarnotas) as $new)


		@include('partials.articulo', array('clase' => 'news--hat-inverted news--meta-over', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '540', 'height_tablet' => '304', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))



		@endforeach

	</div><!-- cobertura -->

	<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-md-none" />

@endif
