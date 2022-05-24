
@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="seccion bloque">
		@foreach(array_slice($news, 0, 13) as $new)
			@if ($new['channel']['slug'] == 'tapas' && !isset($tapa))
				@php ($tapa = $new)
			@else

				<article class="articulo nota-{{ $loop->index }}" >
					<a href="{{ $new['permalink'] }}">
						@if ($new['embed_code_original'] != '' && (strpos($new['embed_code_original'], 'rudo') || strpos($new['embed_code_original'], 'tube')))
							{!! $new['embed_code'] !!}
						@else
							<figure>
								@if($loop->iteration < 4)
									<x-lazy-image
										:src="$new['main_image']['srcs']['original']"
										:alt="$new['main_image']['title']"
										:sizes="[['v' => 320, 'w' => 540, 'h' => 304], ['v' => 768, 'w' => 367, 'h' => 220]]"
										class="img-fluid"
										max-width="720"
										:play-button="$new['has_video']"
										:camera-button="$new['has_gallery']" />
								@else
									<x-lazy-image
										:src="$new['main_image']['srcs']['original']"
										:alt="$new['main_image']['title']"
										:sizes="[['v' => 320, 'w' => 540, 'h' => 304], ['v' => 768, 'w' => 367, 'h' => 220]]"
										class="img-fluid"
										max-width="720"
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

			@endif
		@endforeach

		<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250" />

		<section class="bloque-sidebar">
			
			@if (isset($tapa))

				<article class="tapa">

					<figure>
						<a href="{{ $tapa['permalink'] }}" title="{{ $tapa['home_title'] }}">
							<x-lazy-image
									:src="$tapa['main_image']['srcs']['original']"
									:alt="$tapa['main_image']['title']"
									:sizes="[['v' => 320, 'w' => 300, 'h' => 420]]"
									class="img-fluid" />
						</a>
					</figure>

					<span class="suscripcion-kiosco">
						<a href="//kioscoperfil.com/" target="_blank" rel="noreferrer">Suscribite</a>
					</span>

				</article>


				<div class="placa-home">
					@include('sidebar.modules.most-viewed', ['site' => env('SITE_CODE',''), 'title' => $title])
				</div>


				<div class="placa-home">
					<a href="/seccion/horoscopo" title="Caras Horoscopo" rel="noreferrer">
						<img src="{{ asset('images/caras_astrologia.png') }}" alt="{{ env('APP_NAME') }}">
					</a>
				</div>

			@else
			<x-mas-leidas-widget :rows="5" />
				{{-- <x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" /> --}}

			@endif

		</section>
	</div>
@endif
