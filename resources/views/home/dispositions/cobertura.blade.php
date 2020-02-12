@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<section class="container-fluid cobertura bg-dark py-2 mb-4">


			<div class="row bn-stick bg-dark">
				<div class="col-12">
					<div id="" class="ads-space text-center" data-id="468x60x-pos-" data-w="468" data-h="60" data-loaded="false" data-reload="false"></div>
					<div id="" class="ads-space text-center mt-2 mb-3" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="false"></div>
				</div>
			</div>

			<div class="container">

				<h5>{{ $news[0]['hat'] ?? '' }}</h5>

				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-1 order-xl-0">
						<article class="cobertura-nota">
							<a href="{{ $news[1]['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['medium-wide'], 720, $news[1]['main_image']['caption'],'img-fluid','720x405') !!}
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
									{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['medium-wide'], 720, $news[0]['main_image']['caption'],'img-fluid','720x405') !!}
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
									{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid','720x405') !!}
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


				</div>

			</div>



		</section>

	@endif

@endif