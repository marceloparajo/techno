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
									<h2>
										@if ($news[0]['hat'] != '')
											<span class="hat">{{ $news[0]['hat'] }} </span>
										@endif
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
									<h2>
										@if ($news[2]['hat'] != '')
											<span class="hat">{{ $news[2]['hat'] }} </span>
										@endif
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
						@if ( count($news) > 1)
						<article class="segunda">
							<a href="{{ $news[1]['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['extra-small-wide'], 270, $news[1]['main_image']['caption'],'img-fluid', '270x152') !!}
									<h4 class="headline">
										@if ($news[1]['signed'])
											<span class="firma-home">{{ __('by') }} {{ $news[1]['author']['fullname'] }}</span>
										@endif
									{{ $news[1]['headline'] }}
									</h4>
								</figure>
								<div class="meta-content">
									<h2>
										@if ($news[1]['hat'] != '')
											<span class="hat">{{ $news[1]['hat'] }}</span>
										@endif
										{{ $news[1]['home_title'] }}
									</h2>
								</div>
							</a>
						</article>
						@endif
						@if ( count($news) > 2)
						<article class="tercera">
							<a href="{{ $news[2]['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['extra-small-wide'], 270, $news[2]['main_image']['caption'],'img-fluid', '270x152') !!}
									<h4 class="headline">
										@if ($news[2]['signed'])
											<span class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</span>
										@endif
										{{ $news[2]['headline'] }}
									</h4>
								</figure>
								<div class="meta-content">
									<h2>
										@if ($news[2]['hat'] != '')
											<span class="hat">{{ $news[2]['hat'] }} </span>
										@endif								
										{{ $news[2]['home_title'] }}
									</h2>
									@if ($news[2]['signed'])
										<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>
						@endif
					</div>



					<div class="columna-c">


						@foreach(array_slice($news, 0, 4) as $key => $new)

						<article>
							<a href="{{ $new['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
								</figure>
								<div class="meta-content">
									<h2>
										@if ($new['hat'] != '')
											<span class="hat">{{ $new['hat'] }} </span>
										@endif
										{{ $new['home_title'] }}
									</h2>
									@if ($new['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h4>
									@endif
									<h4 class="headline">
										{{ $new['headline'] }}
									</h4>
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




			<div class="banner-vertical d-none d-lg-block">
				<div id="" class="ads-space d-none d-lg-block" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false" data-reload="true" >
				</div>
			</div>

		</div><!-- container-destacada -->

	</div><!-- container-fluid -->



@endif
