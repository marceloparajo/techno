@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[0]))

	{{ dd($news[0]) }}

		<div class="container video mb-4">

			<h6>{{ $news[0]['hat'] ?? '' }}</h6>

			<div class="notas-video">

				<div class="columna-dostercios"> 
					@foreach(array_slice($news, 0, 3) as $key => $new)
					@if ($key == 1)
				</div>

				<div class="columna-tercio"> 
					@endif

					<article class="articulo devideo">
						<figure
						 @if ($key == 0)
						 style="background-image:url({{ $new['main_image']['srcs']['extra-medium-wide'] }});"
						 @endif
						 >
							<a href="{{ $new['permalink'] }}">
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								@if($key != 0)
								<h4>{{ $new['headline'] }}</h4>
								@endif
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }} </h3>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
								<h4>{{ $new['headline'] }}</h4>
							</a>
							@if ($new['signed'])
							<h5 class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</h5>
							@elseif ($new['credit'] != '')
								<h5>{{ $new['credit'] }}</h5>
							@endif
							</div>
						</a>
					</article>
					@endforeach
				</div>

				@if (isset($news[6]))

				<div class="columna-ancha"> 
					@foreach(array_slice($news, 3, 3) as $key => $new)
					<article class="articulo devideo">
						<figure>
							<a href="{{ $new['permalink'] }}">
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								<h4>{{ $new['headline'] }}</h4>
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }} </h3>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
								<h4>{{ $new['headline'] }}</h4>
							</a>
							@if ($new['signed'])
							<h5 class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</h5>
							@elseif ($new['credit'] != '')
								<h5>{{ $new['credit'] }}</h5>
							@endif
							</div>
						</a>
					</article>
					@endforeach

	

					<div class="text-center d-none d-xl-block justify-content-center">
						<div id="" class="ads-space text-center d-none d-xl-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
					</div>	

				</div>

				@endif

			</div><!-- notas-cobertura -->

		</div><!-- cobertura -->


		<div class="row text-center banner-horizontal mx-2 mb-1 mt-5 d-none d-lg-block w-100">
			<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
			</div>
		</div>


		<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>


	
	@endif

@endif