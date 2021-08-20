
@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="seccion bloque">
		@foreach(array_slice($news, 0, 6) as $key => $new)
			@if ($new['channel']['slug'] == 'tapas' && !isset($tapa))
				@php ($tapa = $new)
			@else
				@include('home.dispositions.partials.articulo')
			@endif
		@endforeach

		<x-ad-space id="central_300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250" />

		<section class="bloque-sidebar">

			@if (isset($tapa))

				<article class="tapa">

					<figure>
						<a href="{{ $tapa['permalink'] }}" title="{{ $tapa['home_title'] }}">
							<img src="{{ $new['main_image']['srcs']['original'] }}" alt="{{ $tapa['home_title'] }}">
						</a>
					</figure>

					<span class="suscripcion-kiosco">
						<a href="{{ env('SUBSCRIBE_URL')}}" target="_blank" rel="noreferrer">{{ __("subscribe now")}}</a>
					</span>

				</article>


				<div class="placa-home">
					<a href="/seccion/salud" title="Caras Salud" rel="noreferrer">
						<img src="{{ asset('images/caras_salud.png') }}" alt="{{ env('APP_NAME') }}">
					</a>
				</div>


				<div class="placa-home">
					<a href="/seccion/horoscopo" title="Caras Horoscopo" rel="noreferrer">
						<img src="{{ asset('images/caras_astrologia.png') }}" alt="{{ env('APP_NAME') }}">
					</a>
				</div>

			@else
				
				<x-ad-space id="central_300x250x-pos-" width="300" height="250" min-height="250" max-height="250" />

			@endif

		</section>
	</div>
@endif
