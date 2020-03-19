@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)




	<div class="container-fluid ">
		<div class="container bloque-superior">

			<div class="caja-contenido">
				<div class="columna-a">
					@foreach(array_slice($news, 0, 2) as $key => $new)
					<article class="bloque superior">
						<a href="{{ $new['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
								<h4>{{ $new['headline'] }}</h4>
							</figure>

							<div class="meta-content">
								<h2>
									@if ($new['hat'] != '')
										<span class="hat">{{ $new['hat'] }} </span>
									@endif
									{{ $new['home_title'] }}
								</h2>
								@if ($new['signed'])
									<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
								@endif
							</div>
						</a>
					</article>
					@endforeach
				</div>
				<div class="columna-b">

					<div class="d-flex justify-content-center w-100 mb-1">
						<div id="" class="ads-space text-center d-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
					</div>


					@foreach(array_slice($news, 2, 3) as $key => $new)
					<article class="bloque superior">
						<a href="{{ $new['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
								<h4>{{ $new['headline'] }}</h4>
							</figure>

							<div class="meta-content">
								<h2>
									@if ($new['hat'] != '')
										<span class="hat">{{ $new['hat'] }} </span>
									@endif
									{{ $new['home_title'] }}
								</h2>
								@if ($new['signed'])
									<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
								@endif
							</div>
						</a>
					</article>
					@endforeach



				</div>
			</div>

			<div class="caja-right">

					@foreach(array_slice($news, 5, 4) as $key => $new)
					<article class="bloque superior">
						<a href="{{ $new['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
								<h4>{{ $new['headline'] }}</h4>
							</figure>

							<div class="meta-content">
								<h2>
									@if ($new['hat'] != '')
										<span class="hat">{{ $new['hat'] }} </span>
									@endif
									{{ $new['home_title'] }}
								</h2>
								@if ($new['signed'])
									<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
								@endif
							</div>
						</a>
					</article>
					@endforeach
			</div>


		</div>
	</div>








<section class=" container bloque-de-notas mt-3 px-0">

		<div class="row pb-4 d-flex flex-column flex-md-row" >

			@foreach(array_slice($news, 0, 3) as $key => $new)
			@if($key != 0)
			<article class="bloque bloquextres col-12 col-md-6 col-lg-4 px-0 px-md-3 px-lg-3">
			@else
			<article class="bloque bloquextres col-12 col-md-12 col-lg-4 px-0 px-md-3 px-lg-3">
			@endif
				<a href="{{ $new['permalink'] }}">
					<figure>
						{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
						<h4>{{ $new['headline'] }}</h4>
					</figure>

					<div class="meta-content">
						@if ($new['hat'] != '')
							<h3>{{ $new['hat'] }}</h3>
						@else
							<h3>{{ strtoupper($new['channel']['name']) }}</h3>
						@endif
						<h2 class="mb-2">{{ $new['home_title'] }}</h2>
						@if ($new['signed'])
							<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
						@endif
					</div>
				</a>
			</article>
			@endforeach

		</div><!-- row -->


		<!--
		<div class="row text-center banner-horizontal d-none d-xl-flex">
			<div id="" class="ads-space text-center d-none d-lg-block" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="true"></div>
		</div>
		//-->


		<div class="row tres-notas-irregulares px-2 px-lg-0">


				<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-1 order-xl-0 px-0 px-md-3">
					<article class="bloque">
						<a href="{{ $news[5]['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $news[4]['main_image']['srcs']['medium-wide'], 720, $news[4]['main_image']['caption'],'img-fluid','720x405') !!}
							</figure>
							<div class="meta-content">
								@if ($news[4]['hat'] != '')
									<h3>{{ $news[4]['hat'] }}</h3>
								@else
									<h3>{{ strtoupper($news[4]['channel']['name']) }}</h3>
								@endif
								<h2>{{ $news[4]['home_title'] }}</h2>
								<h4><span>{{ $news[4]['date_available_human']}}</span> {{ $news[4]['headline'] }}</h4>
								@if ($news[4]['signed'])
									<h4 class="firma-home">{{ __('by') }} {{ $news[4]['author']['fullname'] }}</h4>
								@endif
							</div>
						</a>
					</article>
				</div>
				<div class="col-12 col-lg-4 col-xl-6 nota-b order-0 order-xl-1 px-0 px-md-3">
					<article class="bloque">
						<a href="{{ $news[3]['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $news[3]['main_image']['srcs']['medium-wide'], 720, $news[3]['main_image']['caption'],'img-fluid','720x405') !!}
							</figure>
							<div class="meta-content">
								@if ($news[3]['hat'] != '')
									<h3>{{ $news[3]['hat'] }}</h3>
								@else
									<h3>{{ strtoupper($news[3]['channel']['name']) }}</h3>
								@endif								<h2>{{ $news[3]['home_title'] }}</h2>
								<h4><span>{{ $news[3]['date_available_human']}}</span> {{ $news[3]['headline'] }}</h4>
								@if ($news[3]['signed'])
									<h4 class="firma-home">{{ __('by') }} {{ $news[3]['author']['fullname'] }}</h4>
								@endif
							</div>
						</a>
					</article>
				</div>

				<!--
				<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-2">

					<article class="bloque">
						<a href="{{ $news[6]['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $news[6]['main_image']['srcs']['medium-wide'], 720, $news[6]['main_image']['caption'],'img-fluid','720x405') !!}
							</figure>
							<div class="meta-content">
								<h3>{{ $news[6]['hat'] }}</h3>
								<h2>{{ $news[6]['home_title'] }}</h2>
								<h4><span>{{ $news[6]['date_available_human']}}</span> {{ $news[6]['headline'] }}</h4>
								@if ($news[6]['signed'])
									<h4 class="firma-home">{{ __('by') }} {{ $news[6]['author']['fullname'] }}</h4>
								@endif
							</div>
						</a>
					</article>
				</div>
				-->



				<div class="ads-space-home text-center bloque-ad-300x250 col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0 pt-md-3 pt-lg-0 px-0 px-md-3 px-lg-0 order-2">

					<div id="" class="ads-space mx-auto text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true"></div>

				</div>
		</div>








		<div class="row px-2 px-lg-0" >
			@foreach(array_slice($news, 4) as $key => $new)

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
				@if ( $key == 0 || $key == 4 || $key == 8 || $key == 9 )
					<div class="ads-space-home text-center bloque-ad-300x250 col-12 col-md-6 col-lg-4 col-xxl-3 mt-3 mt-md-0 pt-md-3 px-0 px-md-3 px-lg-1">
						<div id="" class="ads-space mx-auto text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true"></div>
					</div>
				@endif
			@endforeach
		</div>
</section>
@endif