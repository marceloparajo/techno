@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<div class="container cobertura mb-4">

			<h6>{{ $news[0]['hat'] ?? '' }}</h6>

			<div class="notas-cobertura">

				<div class="columna-dostercios"> 
					@foreach(array_slice($news, 0, 3) as $key => $new)
					@if ($key == 1)
				</div>

				<div class="columna-tercio"> 
					@endif

					<article class="articulo decobertura">
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
								@if ($new['has_video']) 
									<div class="galeria-video">
										<span><i class="fa fa-play"></i></span>
									</div>
								@endif
								@if ($new['has_gallery'])
									<div class="galeria-video">
										<span><i class="fa fa-camera"></i></span>
									</div>
								@endif
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<span class="hat">{{ $new['hat'] }} </span>
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
					<article class="articulo decobertura">
						<figure>
							<a href="{{ $new['permalink'] }}">
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								<h4>{{ $new['headline'] }}</h4>
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<span class="hat">{{ $new['hat'] }} </span>
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


			<div id="" class="ads-space ads-up-xl" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
			</div>


		<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>


	
	@endif

@endif