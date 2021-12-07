@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="seccion destacada">

		@foreach(array_slice($news, 0, 3) as $new)

			<article class="articulo nota-{{ $loop->index }}" >
				<a href="{{ $new['permalink'] }}">
					@if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
						{!! $new['embed_code'] !!}
					@else
						<figure>
							@if($loop->first)
								<x-lazy-image
										:src="$new['main_image']['srcs']['original']"
										:alt="$new['main_image']['title']"
										:sizes="[['v' => 320, 'w' => 320, 'h' => 183], ['v' => 360, 'w' => 360, 'h' => 205], ['v' => 375, 'w' => 375, 'h' => 213], ['v' => 414, 'w' => 414, 'h' => 236], ['v' => 768, 'w' => 728, 'h' => 414], ['v' => 1024, 'w' => 470, 'h' => 279], ['v' => 1366, 'w' => 640, 'h' => 380]]"
										class="img-fluid"
										max-width="700"
										:play-button="$new['has_video']"
										:camera-button="$new['has_gallery']" />
							@else
								<x-lazy-image
										:src="$new['main_image']['srcs']['original']"
										:alt="$new['main_image']['title']"
										:sizes="[['v' => 320, 'w' => 320, 'h' => 183], ['v' => 360, 'w' => 360, 'h' => 205], ['v' => 375, 'w' => 375, 'h' => 213], ['v' => 414, 'w' => 414, 'h' => 236], ['v' => 768, 'w' => 350, 'h' => 200], ['v' => 1024, 'w' => 212, 'h' => 150], ['v' => 1366, 'w' => 288, 'h' => 164]]"
										class="img-fluid"
										:play-button="$new['has_video']"
										:camera-button="$new['has_gallery']" />
							@endif
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

			@if($loop->first)
				<x-ad-space id="central_300x250x-pos-" class="d-md-none" width="300" height="250" min-height="250" max-height="250" />
			@endif

		@endforeach
	</div>

	<x-ad-space id="central_970x90x-pos-" width="970" height="90" margin-top="0" class="d-xs-none d-xxl-flex" min-height="90" max-height="280" />
@endif
