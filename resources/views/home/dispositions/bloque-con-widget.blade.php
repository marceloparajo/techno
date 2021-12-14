
@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="seccion bloquewidget">

		<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250 d-none d-md-block d-lg-none" />

		<div class="bloquewidget__encuesta">
			<header class="titulo-widget">¡Dejá tu opinión!</header>
			<div class="quiz-container">
			<!-- Pontamedia Survey Tag //-->
			<div id="brandencuesta"></div>
			<script defer type="text/javascript" src="//api.pontamedia.net/survey.php?p=YToyOntzOjE6ImsiO3M6NDA6IjlmYTIwMmFjNjEwNzMzNTljNmM3NWZkMzQ3MjIyYmI2YjBmMjZjNGYiO3M6NjoicG9sbElkIjtpOjgyOTY7fQ==&lang=es"></script>
			<!-- End Pontamedia Survey Tag //-->
			</div>
		</div>


		@foreach(array_slice($news, 0, 6) as $new)
			<article class="articulo nota-{{ $loop->index }}" >
				<a href="{{ $new['permalink'] }}">
					@if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
						{!! $new['embed_code'] !!}
					@else
						<figure>
							<x-lazy-image
								:src="$new['main_image']['srcs']['original']"
								:alt="$new['main_image']['title']"
								:sizes="[['v' => 320, 'w' => 540, 'h' => 304], ['v' => 768, 'w' => 367, 'h' => 220]]"
								class="img-fluid"
								max-width="720"
								:play-button="$new['has_video']"
								:camera-button="$new['has_gallery']" />
						</figure>
					@endif

					<div class="meta-content">

						@if ($new['hat'] != '')
							<span class="hat">{{ $new['hat'] }} </span>
						@else
							<span class="hat">{{ $new['channel']['name'] }}</span>
						@endif

						<h2>{{ $new['home_title'] }}</h2>

						<p class="headline">{{ $new['headline'] }}</p>

						@if ($new['signed'])
							<span class="firma-home">
                        {{ __('by') }} {{ $new['author']['fullname'] }}
                    </span>
						@elseif ($new['credit'] != '')
							<span class="firma-home">
                        {{ $new['credit'] }}
                    </span>
						@endif
					</div>
				</a>
			</article>
		@endforeach

	</div>
@endif
