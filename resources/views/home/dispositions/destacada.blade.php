@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)


	<div class="container-fluid ">

		<div class="container destacada">

			<div class="caja-contenido">
				<div class="container px-0 flex-column flex-md-row">

					<div class="columna-a">
						<article class="main-destacada">
							<a href="{{ $news[0]['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['small-wide'], 540, $news[0]['main_image']['caption'],'img-fluid','540x304') !!}
								</figure>
								<div class="meta-content">
									@if ($news[0]['hat'] != '')
										<h3 class="hat">{{ $news[0]['hat'] }} </h3>
									@endif
									<h2>
										{{ $news[0]['home_title'] }}
									</h2>
									<h4 class="headline">{{ $news[0]['headline'] }}</h4>
									@if ($news[0]['signed'])
										<h5 class="firma-home">{{ __('by') }} {{ $news[0]['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>
						
						@if ( count($news) > 2)

						<article class="destacadita">
							<a href="{{ $news[2]['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['small-wide'], 540, $news[2]['main_image']['caption'],'img-fluid','540x304') !!}
								</figure>
								<div class="meta-content">
										@if ($news[2]['hat'] != '')
											<h3 class="hat">{{ $news[2]['hat'] }} </h3>
										@endif
									<h2>
										{{ $news[2]['home_title'] }}
									</h2>
									<h4 class="headline">{{ $news[2]['headline'] }}</h4>
									@if ($news[2]['signed'])
										<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>

						@endif

						<div class="row text-center my-2 d-flex d-md-none justify-content-center w-100">
							<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
						</div>

					</div>				
					
					<div class="columna-b">







						@foreach(array_slice($news, 1, 2) as $key => $new)

						<article>
							<a href="{{ $new['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
								</figure>
								<div class="meta-content">
									@if ($new['hat'] != '')
										<h3 class="hat">{{ $new['hat'] }} </h3>
									@endif
									<h2>
										{{ $new['home_title'] }}
									</h2>
									<h4 class="headline">
										{{ $new['headline'] }}
									</h4>
									@if ($new['signed'])
										<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>

						@endforeach

					</div>



					<div class="columna-c">


						@foreach(array_slice($news, 0, 3) as $key => $new)

						<article>
							<a href="{{ $new['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
								</figure>
								<div class="meta-content">
									@if ($new['hat'] != '')
										<h3 class="hat">{{ $new['hat'] }} </h3>
									@endif
									<h2>
										{{ $new['home_title'] }}
									</h2>
									<h4 class="headline">
										{{ $new['headline'] }}
									</h4>
									@if ($new['signed'])
										<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>

						@endforeach


					</div>

				</div>


				<div class="row text-center banner-horizontal mx-2 mb-1 mt-5 d-none d-xl-block w-100">
					<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" ></div>
				</div>

				<div class="row text-center my-2 d-flex d-md-none justify-content-center w-100">
					<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
				</div>

			</div><!-- caja-contenido -->

		</div><!-- container-destacada -->

	</div><!-- container-fluid -->



@endif
