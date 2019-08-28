@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

<section class="container-fluid bloque-de-notas mb-4 mt-lg-2 px-0">

	<div class="container d-flex p-0 bg-white flex-column pt-lg-3">

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


		<div class="row text-center banner-horizontal mx-2 d-none d-xl-flex">
			<div id="" class="ads-space text-center d-none d-lg-block" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="true"></div>
		</div>

		<div class="row mx-0" >
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
					<div class="ads-space-home text-center bloque-ad-300x250 col-12 col-md-6 col-lg-4 col-xxl-3 mt-3 mt-md-0 pt-md-3 px-0 px-md-3">
						<div id="" class="ads-space mx-auto text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true"></div>
					</div>
				@endif
			@endforeach
		</div>
	</div>
</section>
@endif