@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="caja-contenido destacada">

		@foreach(array_slice($news, 0, 3) as $key => $new)


				{{-- Embed Code --}}
				@if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
				<article class="articulo nota-{{ $key }} convideo" >
					{!! $new['embed_code'] !!}
				@else
				<article class="articulo nota-{{ $key }}">
				<figure>
					<a href="{{ $new['permalink'] }}">
						@if($key == 0)
							<x-lazy-image :src="$news[0]['main_image']['srcs']['original']" :alt="$news[0]['main_image']['caption']" class="img-fluid" max-width="700" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
						@else
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" sizes="200,300" :play-button="$new['has_video']" :camera-button="$new['has_gallery']" />
						@endif

						<p class="headline">{{ $new['headline'] }}</p>
					</a>
				</figure>
				@endif

				<div class="meta-content">
					<a href="{{ $new['permalink'] }}">

						@if ($new['hat'] != '')
							<span class="hat">{{ $new['hat'] }} </span>
						@else
							<span class="hat">{{ $new['channel']['name'] }}</span>
						@endif

						<h2>{{ $new['home_title'] }}</h2>

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
			</article>

			@if($loop->first)
				<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="d-sm-none" min-height="50" max-height="250" />
			@endif

		@endforeach
	</div>

	<x-ad-space id="central_970x90x-pos-" width="970" height="90" margin-top="0" class="d-xs-none d-lg-flex" min-height="90" max-height="280" />
@endif
