@if (isset($news) && count($news) > 0)

<!-- DESTACADA -->
	<div class="container-fluid px-0">

		<div class="row d-flex flex-wrap container-fluid ajustado evento">

			<div class="col-12 px-0 px-md-2">
				<div class="row px-0 titulo-evento d-flex justify-content-between  align-items-end">
					<h5>Martín Fierro</h5>
					<div class="sponsor"><img src="/images/sponsors/antonio-banderas.png" /></div>
				</div>
			</div>

<div class="row bg-dark mx-0 px-2 px-md-0 mx-md-2 py-2 py-md-0">
				<article class="contenedor-evento col-12 col-lg-6 d-flex first-note">
						<div class="d-flex justify-content-between flex-column noticia bg-danger col-12 primera">
								<div class="flex-column">
										<figure class="col-12">
											<img src="{{ $news[0]['main_image']['srcs']['medium-wide'] }}" alt="{{ $news[0]['home_title'] }}">
										</figure>
									<div class="meta-evento d-flex flex-column align-items-end col-12 mr-auto">
										{{--
										@if ($news[0]['hat'] != '')<h3 class="bg-white text-danger">{{ $news[0]['hat'] }}</h3>
										@else
											<h3 class="bg-white text-danger">{{ strtoupper($news[0]['channel']['name']) }}</h3>
										@endif
										--}}
											<h2 class="text-white">{{ $news[0]['home_title'] }}</h2>
										@if ($news[0]['signed'])<h4 class="text-white">{{ __('At') }} {{ $news[0]['author']['fullname'] }}@endif
									</div>
								</div>
								<a href="{{ $news[0]['permalink'] }}" class="borde"></a>
								<div class="d-flex justify-content-end flex-row share-article">
									<a href="https://www.facebook.com/sharer/sharer.php?u={{ $news[0]['permalink'] }}" class="rounded-circle" target="_blank"><i class="fab fa-facebook-f"></i></a>
									<a href="https://twitter.com/intent/tweet?text={{ urlencode($news[0]['title']) }}&url={{ $news[0]['permalink'] }}" class="rounded-circle" target="_blank"><i class="fab fa-twitter"></i></a>
								</div>
						</div>
				</article><!-- first-note -->

				<div class=" col-12 col-lg-6 d-flex flex-wrap px-0">
					@foreach(array_slice($news, 1) as $key => $new)
						@if ($key < 2)
							<article class="contenedor-evento col-12 col-md-6 col-lg-12 d-flex flex-wrap mt-2 mt-md-0">
									<div class="justify-content-between flex-column noticia bg-white shadow segunda">
											<div class="d-flex flex-wrap">
													<figure class="col-12 col-lg-6">
													<img src="{{ $new['main_image']['srcs']['small-wide'] }}" alt="">
													</figure>
													<div class="meta-evento d-flex flex-column align-items-end col-12 col-lg-6">
														{{--
															@if ($new['hat'] != '')
																<h3 class="bg-danger text-white">{{ $new['hat'] }}</h3>
															@else
																<h3 class="bg-danger text-white">{{ strtoupper($new['channel']['name']) }}</h3>
															@endif
																--}}
															<h2 class="text-dark">{{ $new['home_title'] }}</h2>
															@if ($new['signed'])<h4 class="text-danger">{{ __('At') }} {{ $new['author']['fullname'] }}</h4>
															@endif
													</div>
											</div>
											<a href="{{ $new['permalink'] }}" class="borde"></a>
											<div class="d-flex justify-content-end flex-row share-article">
													<a href="https://www.facebook.com/sharer/sharer.php?u={{ $new['permalink'] }}" class="rounded-circle" taret="_blank"><i class="fab fa-facebook-f"></i></a>
													<a href="https://twitter.com/intent/tweet?text={{ urlencode($new['title']) }}&url={{ $new['permalink'] }}" class="rounded-circle" target="_blank"><i class="fab fa-twitter"></i></a>
											</div>
									</div>
							</article>
						@endif
					@endforeach
				</div>


</div>



		</div>

	</div>

<!-- /DESTACADA -->
@endif