@inject('sidebarHelper', "App\Http\Helpers\SidebarHelper")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@php
	$news = $sidebarHelper->getMostViewed( 'perfil', 9);
@endphp
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<section class="container-fluid cobertura bg-dark py-2 mb-4">

			<div class="row bn-stick bg-dark">
				<div class="col-12">
					<div id="" class="d-none d-md-block d-lg-none ads-space text-center" data-id="468x60x-pos-" data-w="468" data-h="60" data-loaded="false" data-reload="false"></div>
					<div id="" class="ads-space text-center mt-2 mb-3" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="false"></div>
				</div>
			</div>

			<div class="container">

				<h5><img src="{{ asset('img/perfil-blanco.svg') }}" /> <span class="in-other-lang">{{ __('in spanish') }}</span></h5>

				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-1 order-xl-0">
						<article class="cobertura-nota">
							<a href="{{ $news[1]['url'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[1]['image'], 720, $news[1]['title'],'img-fluid','720x405') !!}
								</figure>
								<div class="meta-content">
									<h2>{{ $news[1]['title'] }}</h2>
								</div>
							</a>
						</article>
					</div>
					<div class="col-12 col-lg-4 col-xl-6 nota-b order-0 order-xl-1">
						<article class="cobertura-nota">
							<a href="{{ $news[0]['url'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[0]['image'], 720, $news[0]['title'] ,'img-fluid','720x405') !!}
								</figure>
								<div class="meta-content">
									<h2>{{ $news[0]['title'] }}</h2>
								</div>
							</a>
						</article>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-2">
						<article class="cobertura-nota">
							<a href="{{ $news[2]['url'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $news[2]['image'], 720, $news[2]['title'],'img-fluid','720x405') !!}
								</figure>
								<div class="meta-content">
									<h2>{{ $news[2]['title'] }}</h2>
								</div>
							</a>
						</article>
					</div>
				</div>

				<div class="row">

					@foreach(array_slice($news, 3, 4) as $key => $new)

					<article class="cobertura-nota chica col-12 col-sm-6 col-lg-3 mt-2">
						<a href="{{ $new['url'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $new['image'], 720, $new['title'],'img-fluid','720x405') !!}
							</figure>

							<div class="meta-content px-2 px-sm-0">
								<h2 class="mb-2">{{ $new['title'] }}</h2>
							</div>
						</a>
					</article>

				@endforeach

				</div>

			</div>

		</section>

	@endif

@endif