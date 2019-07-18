@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

<div class="container-fluid destacada">

	<div class="container position-relative d-flex"> 



		<!-- banners skycraper -->


		<div class="ad-160x600-left position-relative">
			<div id="" style="top:5em;margin-bottom:1em;" class="ads-space sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
		</div>
		<div class="ad-160x600-right position-relative">
			<div id="" style="top:5em;margin-bottom:1em;" class="ads-space sticky-top float-right text-right" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
		</div>
		<!-- //banners-skycrapper -->




	<div class="container px-0">

		<div class="tres-notas d-flex align-items-start">

			<div class="row flex-grow-1">

				<div class="row text-center banner-horizontal mx-2 mb-3">
					<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" ></div>
				</div>


				<article class="col-12 col-lg-8 pb-2 px-0 px-md-2 pb-lg-0 main-destacada">
					<a href="{{ $news[0]['permalink'] }}">
						<figure>
							{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['extra-big-wide'], 1140, $news[0]['main_image']['caption'],'img-fluid','1140x540') !!}
						</figure>
						<div class="meta-content">
							@if ($news[0]['hat'] != '')
								<h3 class="hat">{{ $news[0]['hat'] }}</h3>
							@else
								<h3 class="hat">{{ $news[0]['channel']['name'] }}</h3>
							@endif
							<h2>{{ $news[0]['home_title'] }}</h2>
							<h4 class="headline">{{ $news[0]['headline'] }}</h4>
							@if ($news[0]['signed'])
								<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $news[0]['author']['fullname'] }}</h5>
							@endif
						</div>
					</a>
				</article>
				
				
				<div class="col-12 col-lg-4 px-0 pl-lg-3">
					<div class="row mx-0 bg-white pt-3 pt-md-0">
						@if ( count($news) > 1)
						<article class="col-12 col-md-6 col-lg-12 px-0 px-md-2 segunda">
							<a href="{{ $news[1]['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['extra-medium-wide'], 720, $news[1]['main_image']['caption'],'img-fluid', '720x355') !!}
									<h4 class="headline">
										@if ($news[1]['signed'])
											<span class="firma-home">{{ __('by') }} {{ $news[1]['author']['fullname'] }}</span>
										@endif
									{{ $news[1]['headline'] }}
									</h4>
								</figure>
								<div class="meta-content">
									@if ($news[1]['hat'] != '')<h3 class="hat">{{ $news[1]['hat'] }}</h3>@endif
									<h2>{{ $news[1]['home_title'] }}</h2>
								</div>
							</a>
						</article>
						@endif
						@if ( count($news) > 2)
						<article class="col-12 col-md-6 col-lg-12 px-0 px-md-2 tercera">
							<a href="{{ $news[2]['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['extra-medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid', '720x355') !!}
									<h4 class="headline">
										@if ($news[2]['signed'])
											<span class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</span>
										@endif
										{{ $news[2]['headline'] }}
									</h4>
								</figure>
								<div class="meta-content">
									@if ($news[2]['hat'] != '')<h3 class="hat">{{ $news[2]['hat'] }}</h3>@endif
									<h2>{{ $news[2]['home_title'] }}</h2>
									@if ($news[2]['signed'])
										<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>
						@endif
					</div>
				</div>



				<div class="row flex-grow-1 mx-0 mt-md-4">
					@if ( count($news) > 3)
					<article class="col-12 col-md-6 col-lg-4 px-0 px-md-2 pl-lg-2 pr-lg-3 cuarta">
						<a href="{{ $news[3]['permalink'] }}" class="d-md-block">
							<figure>
								{!! $imageHelper->getLazyImages( $news[3]['main_image']['srcs']['extra-medium-wide'], 720, $news[3]['main_image']['caption'],'img-fluid', '720x355') !!}
								<h4 class="headline">{{ $news[3]['headline'] }}</h4>
							</figure>
							<div class="meta-content">
								@if ($news[3]['hat'] != '')<h3 class="hat">{{ $news[3]['hat'] }}</h3>@endif
								<h2>{{ $news[3]['home_title'] }}</h2>
							</div>
						</a>
					</article>
					@endif
					@if ( count($news) > 4)
					<article class="col-12 col-md-6 col-lg-8 px-0 px-md-2 pl-lg-3 pr-lg-2 quinta">
						<a href="{{ $news[4]['permalink'] }}" class="d-lg-flex">
							<figure>
								{!! $imageHelper->getLazyImages( $news[4]['main_image']['srcs']['extra-medium-wide'], 720, $news[4]['main_image']['caption'],'img-fluid','720x355') !!}
								<h4 class="headline">
									@if ($news[4]['signed'])
										<span class="firma-home">{{ __('by') }} {{ $news[4]['author']['fullname'] }}</span>
									@endif
									{{ $news[4]['headline'] }}</h4>
							</figure>
							<div class="meta-content">
								@if ($news[4]['hat'] != '')<h3 class="hat">{{ $news[4]['hat'] }}</h3>@endif
								<h2>{{ $news[4]['home_title'] }}</h2>
							</div>
						</a>
					</article>
					@endif
				</div>
				{{--
					//esto es para borrar, lo dejo ahora por las dudas
				<div class="row flex-grow-1 mx-0 mt-md-3">
					@foreach(array_slice($news, 0, 3) as $key => $new)
						<article class="col-12 col-md-4 px-0 px-md-1 px-lg-3 bg-white">
							<a href="{{ $new['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-medium-wide'], 720, $new['main_image']['caption'],'img-fluid', '720x355') !!}
									<h4 class="headline">{{ $new['headline'] }}</h4>
								</figure>
								<div class="meta-content">
									@if ($new['hat'] != '')<h3 class="hat">{{ $new['hat'] }}</h3>@endif
									<h2>{{ $new['home_title'] }}</h2>
								</div>
							</a>
						</article>
					@endforeach
				</div>

				--}}

			</div>


			<div class="banner-vertical d-none d-xl-flex">
				<div id="" class="ads-space d-none d-lg-block" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false" data-reload="true" ></div>
			</div>


		</div>


	</div>


	</div>
</div><!-- container-fluid -->
@endif
