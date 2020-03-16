@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if (isset($news) && count($news) > 0)
	<div class="container-fluid catastrofe">
		<div class="container">
			@foreach (array_slice($news, 0, 1) as $new)
		
			<article>
				<a href="{{ $new['permalink'] }}">
					<figure>
						{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-big-wide'], 1140, $new['main_image']['caption'],'img-fluid','1140x540') !!}
					</figure>
					<div class="meta-contenido mx-0 mx-md-2 mx-lg-5 mb-0 mb-lg-2 px-lg-3 py-0">
						@if ($new['hat'] != '')<h3 class="hat">{{ $new['hat'] }}</h3>@endif
						<h2>{{ $new['home_title'] }}</h2>
						<h4 class="headline">{{ $new['headline'] }}</h4>
					</div>
				</a>
			</article>
			@endforeach

{{--
			<div id="" class="d-md-none ads-space text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
			<div id="" class="d-none d-md-block d-lg-none ads-space text-center" data-id="468x60x-pos-" data-w="468" data-h="60" data-loaded="false" data-reload="false"></div>
			<div id="" class="d-none d-lg-block ads-space text-center mb-5" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="false"></div>

--}}
			
		</div>

	</div>
@endif