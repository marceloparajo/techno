@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<div class="container fotogaleria mb-4">

			<h6>Fotogalerías</h6>

			<div class="notas-fotogaleria">

				@foreach(array_slice($news, 0, 3) as $key => $new)
				@if ($key == 1)
					<div class="secundarias">
				@endif

				<article class="articulo defotogaleria">
					<figure>
						<a href="{{ $new['permalink'] }}">
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera_button="$new['has_gallery']" />
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

					</div><!-- secundarias -->

			</div><!-- notas-fotogaleria -->

		</div><!-- fotogaleria -->


			<div id="" class="ads-space up-md" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
			</div>


		<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>



	@endif

@endif
