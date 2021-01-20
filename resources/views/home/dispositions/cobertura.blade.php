@if (isset($news) && count($news) > 2)


		<!-- Cobertura -->
		<div class="cobertura">

			<h6>{{ $news[0]['hat'] ?? '' }}</h6>

			<div class="notas-cobertura">

				<div class="columna-dostercios">
					@foreach(array_slice($news, 0, 3) as $key => $new)
					@if ($key == 1)
				</div>

				<div class="columna-tercio">
					@endif

					<article class="articulo decobertura">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="700" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />

								@if($key != 0)<p class="headline">{{ $new['headline'] }}</p>@endif
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
					@endforeach
				</div>

				@if (isset($news[6]))

				<div class="columna-ancha">
					@foreach(array_slice($news, 3, 4) as $key => $new)
					<article class="articulo decobertura">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
								<p class="headline">{{ $new['headline'] }}</p>
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
					@endforeach

				</div>

				@endif

			</div><!-- notas-cobertura -->

		</div><!-- cobertura -->


		<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>


@endif
