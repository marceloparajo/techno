@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="row max-width bloque">

	<div class="col-fluid d-xl-flex bloque__container">


	{{--
		@if ( $item['id'] == 'bloque-superior' )
			<div class="bloque__title">Argentina</div>
			<x-divisas-widget />
		@else 
			<div class="bloque__title">Internacional</div>
		@endif
	--}}

		<div class="col-fluid flex-md-doble">
		@foreach(array_slice($news, 0, 6) as $new)
			@include('partials.articulo', array('clase' => 'news--card-rounded', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '367', 'height_tablet' => '220', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))
		@endforeach
		</div>
		<div class="col-xl-fixed flex-md-doble flex-xl-single">
			<div class="row">
				<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ads" /> 
			</div>
			@foreach(array_slice($news, 6, 4) as $new)
				@include('partials.articulo', array('clase' => 'news--small-picture news--border-bottom', 'width_mobile' => '160', 'height_mobile' => '160', 'width_tablet' => '160', 'height_tablet' => '160', 'width_laptop' => '160', 'height_laptop' => '160', 'width_desktop' => '160', 'height_desktop' => '160'))
			@endforeach
		</div>

	</div>

		<div class="col-fixed">

			<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250" />
			
			@if ( $item['id'] == 'bloque-superior' )
				<x-mas-leidas-widget :rows="5" />
				<div class="sticky">
					<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ads"/> 
				</div>
			@elseif ( $item['id'] == 'bloque-medio' )
				<x-mas-leidas-perfil-widget :rows="5" />
				<div class="sticky">
					<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ads" /> 
				</div>
			@else
				<div class="sticky">
					<x-ad-space id="300x600x-pos-" width="300" height="600" min-height="300" max-height="600" class="ads" /> 
				</div>
			@endif

		</div>
	</div>
@endif