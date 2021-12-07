@if (isset($news) && count($news) > 2)

	<!-- Cobertura -->
	<div class="cobertura">

		<div class="cobertura__titulo">{{ $news[0]['hat'] ?? '' }}</div>

		@php 
			$mostrarnotas = (count($news) < 6 ) ? 3 : 6;
		@endphp
		
		@foreach(array_slice($news, 0, $mostrarnotas) as $new)

			<article class="articulo nota-{{ $loop->index }}" >
				<a href="{{ $new['permalink'] }}">
					@if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
						{!! $new['embed_code'] !!}
					@else
						<figure>
							<x-lazy-image
								:src="$new['main_image']['srcs']['original']"
								:alt="$new['main_image']['title']"
								:sizes="[['v' => 320, 'w' => 290, 'h' => 163], ['v' => 360, 'w' => 330, 'h' => 186], ['v' => 375, 'w' => 345, 'h' => 195], ['v' => 414, 'w' => 384, 'h' => 216], ['v' => 768, 'w' => 698, 'h' => 393], ['v' => 1024, 'w' => 290, 'h' => 163], ['v' => 1366, 'w' => 403, 'h' => 226]]"
								class="img-fluid"
								max-width="700"
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

	</div><!-- cobertura -->

	<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="d-md-none" />

@endif
