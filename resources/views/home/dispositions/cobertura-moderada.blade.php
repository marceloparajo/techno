@if (isset($news) && count($news) > 2)


		<section class="container-fluid cobertura moderada bg-dark py-2 mb-4">


			<div class="row bn-stick bg-dark">
				<div class="col-12">
					<div id="" class="ads-space text-center" data-id="468x60x-pos-" data-w="468" data-h="60" data-loaded="false" data-reload="false"></div>
					<div id="" class="ads-space text-center mt-2 mb-3" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="false"></div>
				</div>
			</div>
			<div class="container">

				<h5>{{ $news[0]['hat'] ?? '' }}</h5>

				<div class="row">

				@if (count($news) === 3)

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-1 order-xl-0">
						<article class="cobertura-nota">
							<a href="{{ $news[1]['permalink'] }}">
								<figure>
									<x-lazy-image :src="$news[1]['main_image']['srcs']['original']" alt="$news[1]['main_image']['caption']" class="img-fluid" />
								</figure>

								<div class="meta-content">
									<h2>{{ $news[1]['home_title'] }}</h2>
									<h4><span>{{ $news[1]['date_available_human']}}</span> {{ $news[1]['headline'] }}</h4>
									@if ($news[1]['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $news[1]['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>
					</div>
					<div class="col-12 col-lg-4 col-xl-6 nota-b order-0 order-xl-1">
						<article class="cobertura-nota">
							<a href="{{ $news[0]['permalink'] }}">
								<figure>
									<x-lazy-image :src="$news[0]['main_image']['srcs']['original']" alt="$news[0]['main_image']['caption']" class="img-fluid" />
								</figure>
								<div class="meta-content">
									<h2>{{ $news[0]['home_title'] }}</h2>
									<h4><span>{{ $news[0]['date_available_human']}}</span> {{ $news[0]['headline'] }}</h4>
									@if ($news[0]['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $news[0]['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-2">
						<article class="cobertura-nota">
							<a href="{{ $news[2]['permalink'] }}">
								<figure>
									<x-lazy-image :src="$news[2]['main_image']['srcs']['original']" alt="$news[2]['main_image']['caption']" class="img-fluid" />
								</figure>
								<div class="meta-content">
									<h2>{{ $news[2]['home_title'] }}</h2>
									<h4><span>{{ $news[2]['date_available_human']}}</span> {{ $news[2]['headline'] }}</h4>
									@if ($news[2]['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>
					</div>

				@elseif (count($news) === 4)

					@foreach(array_slice($news, 0, 4) as $key => $new)

						<article class="cobertura-nota-porcuatro">
							<a href="{{ $new['permalink'] }}">
								<figure>
									<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" class="img-fluid" />
								</figure>
								<div class="meta-content">
									<h2>{{ $new['home_title'] }}</h2>
									<h4><span>{{ $new['date_available_human']}}</span> {{ $new['headline'] }}</h4>
									@if ($new['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>

					@endforeach

				@else

					@foreach(array_slice($news, 0, 5) as $key => $new)
						@if($key == 0)
						<div class="col-12 col-lg-8 col-xl-4 nota-b order-0 order-lg-1">
						@elseif($key == 1)
						<div class="col-12 col-md-6 col-lg-4 col-xl-2 nota-c order-1 order-lg-0">
						@else
						<div class="col-12 col-md-6 col-lg-4 col-xl-2 nota-a order-2">
						@endif
						<article class="cobertura-nota-porcinco">
							<a href="{{ $new['permalink'] }}">
								<figure>
									<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" class="img-fluid" />
								</figure>
								<div class="meta-content">
									<h2>{{ $new['home_title'] }}</h2>
									<h4><span>{{ $new['date_available_human']}}</span> {{ $new['headline'] }}</h4>
									@if ($new['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>
					</div>
					@endforeach

				@endif

				</div><!-- row -->

			</div>


		</section>



@endif
