@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="full-bg bg-gray">
	
		<div class="destacada-medio row max-width">

			@foreach(array_slice($news, 0, 3) as $new)

				@if($loop->first)

					@include('partials.articulo', array('clase' => 'news--card-rounded news--hat-inverted news--bg-dark', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '728', 'height_tablet' => '410', 'width_laptop' => '536', 'height_laptop' => '404', 'width_desktop' => '626', 'height_desktop' => '353'))

				@else 

					@include('partials.articulo', array('clase' => 'news--card-rounded news--hat-inverted news--bg-dark', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '728', 'height_tablet' => '410', 'width_laptop' => '196', 'height_laptop' => '110', 'width_desktop' => '305', 'height_desktop' => '172'))
				
				@endif

			@endforeach

		</div>

	</div>

	<x-ad-space id="970x90x-pos-" width="970" height="90" margin-top="0" class="ads d-xs-none d-lg-flex" min-height="90" max-height="280" />
@endif