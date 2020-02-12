@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

<section class="bloque-de-notas mt-3">

		<div class="row" >

			@foreach(array_slice($news, 0, 1) as $key => $new)
				<article class="bloque primera py-0 col-12 col-lg-6 px-0 px-md-3">
					<a href="{{ $new['permalink'] }}">
						<figure>
							{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
						</figure>

						<div class="meta-content">
							@if ($new['hat'] != '')
								<h3>{{ $new['hat'] }}</h3>
							@else
								<h3>{{ strtoupper($new['channel']['name']) }} </h3>
							@endif
							<h2 class="mb-2 px-2 px-lg-0">{{ $new['home_title'] }}</h2>
							<h4>{{ $new['headline'] }}</h4>
							@if ($new['signed'])
								<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
							@endif
						</div>
					</a>
			</article>
			@endforeach

			<div class="grupo-tres-notas col-12 col-lg-6 px-0 px-lg-3">
				<div class="row mx-0"> 
					@foreach(array_slice($news, 1, 3) as $key => $new)
					<article class="bloque bloquextres pb-3 col-12 col-md-4 col-lg-12 px-0 px-md-3 px-lg-0 px-xl-0">
						<a href="{{ $new['permalink'] }}" class="d-flex flex-md-column flex-lg-row">
							<figure>
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 720, $new['main_image']['caption'],'img-fluid','720x405') !!}
								@if ($new['hat'] != '')
									<h3>{{ $new['hat'] }}</h3>
								@else
									<h3>{{ strtoupper($new['channel']['name']) }}</h3>
								@endif
							</figure>

							<div class="meta-content">
								@if ($new['hat'] != '')
									<h3>{{ $new['hat'] }}</h3>
								@else
									<h3>{{ strtoupper($new['channel']['name']) }}</h3>
								@endif
								<h2 class="mb-2">{{ $new['home_title'] }}</h2>
								<h4>{{ $new['headline'] }}</h4>
								@if ($new['signed'])
									<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
								@endif
							</div>
						</a>
					</article>
					@endforeach
				</div>
			</div>


		</div><!-- row -->


		<div class="row text-center banner-horizontal d-none d-xl-flex">
			<div id="" class="ads-space text-center d-none d-lg-block" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="true"></div>
		</div>



		<div class="row tres-notas-irregulares px-2">


				<div class="col-12 col-md-6 col-lg-4 col-xl-3 nota-a order-1 order-xl-0">
					<article class="bloque">
						<a href="{{ $news[5]['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $news[5]['main_image']['srcs']['medium-wide'], 720, $news[5]['main_image']['caption'],'img-fluid','720x405') !!}
							</figure>
							<div class="meta-content">
								<h3>{{ $news[5]['hat'] }}</h3>
								<h2>{{ $news[5]['home_title'] }}</h2>
								<h4><span>{{ $news[5]['date_available_human']}}</span> {{ $news[5]['headline'] }}</h4>
								@if ($news[5]['signed'])
									<h4 class="firma-home">{{ __('by') }} {{ $news[5]['author']['fullname'] }}</h4>
								@endif
							</div>
						</a>
					</article>
				</div>
				<div class="col-12 col-lg-4 col-xl-6 nota-b order-0 order-xl-1">
					<article class="bloque">
						<a href="{{ $news[4]['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $news[4]['main_image']['srcs']['medium-wide'], 720, $news[4]['main_image']['caption'],'img-fluid','720x405') !!}
							</figure>
							<div class="meta-content">
								<h3>{{ $news[4]['hat'] }}</h3>
								<h2>{{ $news[4]['home_title'] }}</h2>
								<h4><span>{{ $news[4]['date_available_human']}}</span> {{ $news[4]['headline'] }}</h4>
								@if ($news[4]['signed'])
									<h4 class="firma-home">{{ __('by') }} {{ $news[4]['author']['fullname'] }}</h4>
								@endif
							</div>
						</a>
					</article>
				</div>
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


		</div>








		<div class="row px-2" >
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