@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<div class="container arteycultura mb-4">

			<h6>Arte y cultura</h6>

			<div class="notas-ayc">

					@foreach(array_slice($news, 0, 4) as $key => $new)
					@if ($key == 1)
						<div class="columna-dosnotas">
					@endif

					<article class="articulo ayc">
						<figure
						 @if ($key == 0)
						 style="background-image:url({{ $new['main_image']['srcs']['extra-medium-wide'] }});"
						 @endif
						 >
							<a href="{{ $new['permalink'] }}">
								@if ($key == 0)
									<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="700" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
								@else
									<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
								@endif
								@if($key != 0)
								<p class="headline">{{ $new['headline'] }}</p>
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
								<p class="headline">{{ $new['headline'] }}</p>
							</a>
							@if ($new['signed'])
							<div class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</div>
							@elseif ($new['credit'] != '')
								<div class="firma-home">{{ $new['credit'] }}</div>
							@endif
							</div>
						</a>
					</article>

					@if ($key == 2)
						</div><!-- columna-dosnotas -->
					@endif
					@endforeach
			</div><!-- notas-cobertura -->

		</div><!-- cobertura -->


	@endif

@endif
