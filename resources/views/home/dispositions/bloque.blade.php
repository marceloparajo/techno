@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="row max-width bloque">

	<div class="col-fluid bloque__notas-container">

		@foreach(array_slice($news, 0, 13) as $new)
			@if ($new['channel']['slug'] == 'tapas' && !isset($tapa))
				@php ($tapa = $new)
			@else

			@include('partials.articulo', array('clase' => 'news--card-rounded', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '367', 'height_tablet' => '220', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))
			@endif
		@endforeach

	</div>

		<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250" />

		<div class="col-fixed">
			
			@if ( $item['id'] == 'ultimas-noticias' )

				<x-mas-leidas-perfil-widget :rows="5" />
				<div class="sticky">
				<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" /> 

				</div>


			@else
				<x-mas-leidas-widget :rows="5" />
				<div class="sticky">
				<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" /> 

				</div>

			@endif

		</div>
	</div>
@endif
