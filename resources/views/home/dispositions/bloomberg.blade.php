@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<section class="container bloomberg py-2 mb-4 border">



				<h5>Negocios</h5>

				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-2 nota-c order-1 order-lg-0">
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
					<div class="col-12 col-lg-8 col-xl-4 nota-b order-0 order-lg-1">
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
					<div class="col-12 col-md-6 col-lg-4 col-xl-2 nota-a order-2">
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
					<div class="col-12 col-md-6 col-lg-4 col-xl-2 nota-a order-2">
						<article class="cobertura-nota">
							<a href="{{ $news[3]['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[3]['main_image']['srcs']['medium-wide'], 720, $news[3]['main_image']['caption'],'img-fluid','720x405') !!}
								</figure>
								<div class="meta-content">
									<h2>{{ $news[3]['home_title'] }}</h2>
									<h4><span>{{ $news[3]['date_available_human']}}</span> {{ $news[3]['headline'] }}</h4>
									@if ($news[3]['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $news[3]['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-2 nota-a order-2">
						<article class="cobertura-nota">
							<a href="{{ $news[2]['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[4]['main_image']['srcs']['medium-wide'], 720, $news[4]['main_image']['caption'],'img-fluid','720x405') !!}
								</figure>
								<div class="meta-content">
									<h2>{{ $news[4]['home_title'] }}</h2>
									<h4><span>{{ $news[4]['date_available_human']}}</span> {{ $news[4]['headline'] }}</h4>
									@if ($news[4]['signed'])
										<h4 class="firma-home">{{ __('by') }} {{ $news[4]['author']['fullname'] }}</h4>
									@endif
								</div>
							</a>
						</article>
					</div>



			</div>



		</section>

	@endif

@endif