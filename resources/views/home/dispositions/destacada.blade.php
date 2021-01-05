@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="caja-contenido destacada">
		@foreach(array_slice($news, 0, 3) as $key => $new)

			<article class="articulo nota-{{ $key }}">

				{{-- Embed Code --}}
				@if ($new['embed_code'] != '' && (strpos($new['embed_code'], 'rudo') || strpos($new['embed_code'], 'tube')))
					{!! $new['embed_code'] !!}
				@else
				<figure>
					<a href="{{ $new['permalink'] }}">
						@if($key == 0)
							<x-lazy-image :src="$news[0]['main_image']['srcs']['original']" alt="$news[0]['main_image']['caption']" class="img-fluid" />
						@else
							<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" class="img-fluid" sizes="(min-width: 540px) 30vw, 100vw" />
						@endif

						<p class="headline">{{ $new['headline'] }}</p>

						@if ($new['has_video'])
							<div class="galeria-video">
								<img src="/images/glyph/hasvideo.svg" class="hasvideo">
							</div>
						@elseif ($new['has_gallery'])
							<div class="galeria-video">
								<img src="/images/glyph/hasgallery.svg" class="hasgallery">
							</div>
						@endif
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

			@if($key == 0)
				<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
			@endif

		@endforeach

		<div id="" class="ads-space only-md up-xl" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" ></div>

	</div>
@endif
