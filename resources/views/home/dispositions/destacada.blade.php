@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="seccion destacada">

		@foreach(array_slice($news, 0, 3) as $key => $new)

			@include('home.dispositions.partials.articulo')

			@if($loop->first)
				<x-ad-space id="central_300x250x-pos-" class="d-md-none" width="300" height="250" min-height="250" max-height="250" />
			@endif

		@endforeach
	</div>

	<x-ad-space id="central_970x90x-pos-" width="970" height="90" margin-top="0" class="d-xs-none d-xxl-flex" min-height="90" max-height="280" />
@endif
