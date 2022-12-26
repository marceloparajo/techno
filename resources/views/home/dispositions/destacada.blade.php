@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="seccion destacada">

		@foreach(array_slice($news, 0, 3) as $new)

			@include('partials.articulo', array('clase' => 'news--standard', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '540', 'height_tablet' => '304', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))


			@if($loop->first)
				<x-ad-space id="300x250x-pos-" class="d-md-none" width="300" height="250" min-height="250" max-height="250" />
			@endif

		@endforeach
	</div>

	<x-ad-space id="970x90x-pos-" width="970" height="90" margin-top="0" class="d-xs-none d-xxl-flex" min-height="90" max-height="280" />
@endif
