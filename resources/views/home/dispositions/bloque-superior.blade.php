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
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
							</figure>

							<div class="meta-content">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }} </h3>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
								<h4>{{ $new['headline'] }}</h4>
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
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								<h4>{{ $new['headline'] }}</h4>
							</figure>

							<div class="meta-content">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }} </h3>
								@endif
								<h2>
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
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								<h4>{{ $new['headline'] }}</h4>
							</figure>

							<div class="meta-content">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }} </h3>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
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



		<div class="d-flex justify-content-center w-100 my-1 d-block d-md-none">
			<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
		</div>


		<div class="container bloque-superior">
			<div class="cuatro-notas">


					@foreach(array_slice($news, 6, 4) as $key => $new)
					<article class="bloque superior">
						<a href="{{ $new['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								<h4>{{ $new['headline'] }}</h4>
							</figure>

							<div class="meta-content">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }}</h3>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
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

	</div><!-- container-fluid -->

@endif