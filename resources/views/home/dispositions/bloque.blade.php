@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="caja-contenido bloque">
		<div class="columna-dostercios">
			@foreach(array_slice($news, 0, 6) as $key => $new)
				<article class="articulo">
					<figure>
						<a href="{{ $new['permalink'] }}">
							@if ($key == 4)
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="700" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
							@else
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
							@endif

							<p class="headline">{{ $new['headline'] }}</p>
						</a>
					</figure>

					<div class="meta-content">
						<a href="{{ $new['permalink'] }}">
							@if ($new['hat'] != '')<span class="hat">{{ $new['hat'] }}</span>@endif

							<h2>{{ $new['home_title'] }}</h2>

							<p class="headline">{{ $new['headline'] }}</p>
						</a>

						@if ($new['signed'])
							<span class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</span>
						@elseif ($new['credit'] != '')
							<span class="firma-home">{{ $new['credit'] }}</span>
						@endif
					</div>
				</article>
			@endforeach
		</div>

		<div class="columna-tercio">

			<div class="columna-tercio-izquierda">
				@foreach(array_slice($news, 6, 2) as $key => $new)
					<article class="articulo">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />

								<p class="headline">{{ $new['headline'] }}</p>
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')<span class="hat">{{ $new['hat'] }}</span>@endif

								@if ($new['has_video'])
									<div class="galeria-video"><img src="/images/glyph/hasvideo-azul.svg" class="hasvideo"></div>
								@elseif ($new['has_gallery'])
									<div class="galeria-video"><img src="/images/glyph/hasgallery-azul.svg" class="hasgallery"></div>
								@endif

								<h2>{{ $new['home_title'] }}</h2>

								<p class="headline">{{ $new['headline'] }}</p>
							</a>

							@if ($new['signed'])
								<span class="firma-home">
									<a href="/autores/{{$new['author']['username']}}">
										{{ __('by') }} {{ $new['author']['fullname'] }}
									</a>
								</span>
							@elseif ($new['credit'] != '')
								<span class="firma-home">{{ $new['credit'] }}</span>
							@endif
						</div>
					</article>

				@endforeach
			</div>

			<div class="columna-tercio-derecha">

				@foreach(array_slice($news, 8, 2) as $key => $new)
					<article class="articulo">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />

								<p class="headline">{{ $new['headline'] }}</p>
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')<span class="hat">{{ $new['hat'] }}</span>@endif

								@if ($new['has_video'])
									<div class="galeria-video"><img src="/images/glyph/hasvideo-azul.svg" class="hasvideo"></div>
								@elseif ($new['has_gallery'])
									<div class="galeria-video"><img src="/images/glyph/hasgallery-azul.svg" class="hasgallery"></div>
								@endif

								<h2>{{ $new['home_title'] }}</h2>

								<p class="headline">{{ $new['headline'] }}</p>
							</a>

							@if ($new['signed'])
								<span class="firma-home">
									<a href="/autores/{{$new['author']['username']}}">
										{{ __('by') }} {{ $new['author']['fullname'] }}
									</a>
								</span>
							@elseif ($new['credit'] != '')
								<span class="firma-home">{{ $new['credit'] }}</span>
							@endif
						</div>
					</article>

				@endforeach

				<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
			</div>

		</div>
	</div>



@endif
