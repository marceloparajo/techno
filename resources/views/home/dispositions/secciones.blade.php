@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))
		<section class="container-fluid cobertura secciones py-2 mb-4 border">
			<div class="container">
				<h5>{{ $news[0]['hat'] ?? '' }}</h5>
				<div class="row px-2" >
					@foreach(array_slice($news, 0) as $key => $new)

						@if ( $key == 0 || $key == 9 )
						<article class="bloque pt-3 pb-md-3 col-12 col-md-6 col-lg-4 col-xxl-3 px-0 px-sm-3">
						@else 
						<article class="bloque pt-3 pb-md-3 col-12 col-sm-6 col-lg-4 col-xxl-3 px-0 px-sm-3">
						@endif
							<a href="{{ $new['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
									<h4>{{ $new['headline'] }}</h4>
								</figure>

								<div class="meta-content px-2 px-sm-0">
									@if ($new['hat'] != '')
										<h3>{{ $new['hat'] }}</h3>
									@else
										<h3>{{ strtoupper($new['channel']['name']) }} </h3>
									@endif
									<h2 class="mb-2">{{ $new['home_title'] }}</h2>
									@if ($new['signed'])
										<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>
					@endforeach
				</div>
			</div>
		</section>
	@endif
@endif