@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<section class="container-fluid cobertura py-2 mb-4">

			<div class="container">

				<div class="row">
					<h6>{{ $news[0]['hat'] ?? '' }}</h6>
				</div>

				<div class="row">
					<div class="notas-cobertura">

						<div class="columna-a"> 
							@foreach(array_slice($news, 0, 1) as $key => $new)
							<article class="cobertura-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						<div class="columna-b"> 
							@foreach(array_slice($news, 1, 2) as $key => $new)
							<article class="cobertura-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						@if (isset($news[6]))

						<div class="columna-c"> 
							@foreach(array_slice($news, 3, 3) as $key => $new)
							<article class="cobertura-nota">
								<a href="{{ $new['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
									</figure>

									<div class="meta-content">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
										@if ($new['signed'])
											<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
										@endif
									</div>
								</a>
							</article>
							@endforeach
						</div>

						@endif

					</div><!-- notas-cobertura -->


					<div class="row">
						<div class="col-12">
							<div id="" class="ads-space text-center" data-id="468x60x-pos-" data-w="468" data-h="60" data-loaded="false" data-reload="false"></div>
							<div id="" class="ads-space text-center mt-2 mb-3" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="false"></div>
						</div>
					</div>

					<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

				</div>

			</div>



		</section>

	@endif

@endif