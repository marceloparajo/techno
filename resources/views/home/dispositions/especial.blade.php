@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="especial">

		<div class="especial__container row max-width d-lg-grid">

			@foreach(array_slice($news, 0, 5) as $new)

				@if($loop->first)

					@include('partials.articulo', array('clase' => 'news--tipo-especial news--tipo-especial-main news--hat-inverted', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '736', 'height_tablet' => '414', 'width_laptop' => '496', 'height_laptop' => '279', 'width_desktop' => '643', 'height_desktop' => '362'))

					<x-ad-space id="300x250x-pos-" class="d-md-none" width="300" height="250" min-height="250" max-height="250" />

				@else

				@include('partials.articulo', array('clase' => 'news--tipo-especial news--hat-inverted', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '368', 'height_tablet' => '212', 'width_laptop' => '248', 'height_laptop' => '140', 'width_desktop' => '322', 'height_desktop' => '180'))

				@endif

			@endforeach
		</div>

	</div>
	<x-ad-space id="970x90x-pos-" width="970" height="90" margin-top="0" class="d-xs-none d-xxl-flex" min-height="90" max-height="280" />

@endif
