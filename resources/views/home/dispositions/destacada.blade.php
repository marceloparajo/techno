@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class=" destacada row max-width">

		<div class="col-fluid d-xl-flex destacada__container">

			<div class="col-fluid">

				@foreach(array_slice($news, 0, 1) as $new)

					@include('partials.articulo', array('clase' => 'news--tipo-destacada news--figure-rounded news--full-width news--border-bottom', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '540', 'height_tablet' => '304', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))

					<x-ad-space id="300x250x-pos-" class="ads d-lg-none" width="300" height="250" min-height="250" max-height="250" />

				@endforeach		

			</div>

			<div class="col-xl-fixed d-lg-flex">

				@foreach(array_slice($news, 1, 2) as $new)

					@include('partials.articulo', array('clase' => 'news--figure-rounded news--border-bottom', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '540', 'height_tablet' => '304', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))

				@endforeach

			</div>

		</div>

		<div class="col-fixed">
			<x-ad-space id="600x250x-pos-" width="300" height="600" margin-top="0" class="ads d-xs-flex sticky" min-height="600" max-height="600" />
		</div>
	</div>

	<x-ad-space id="970x90x-pos-" width="970" height="90" margin-top="0" class="ads d-xs-none d-lg-flex" min-height="90" max-height="280" />
@endif
