
@if (isset($news) && count($news) > 0)
	<!-- Bloque -->
	<div class="row max-width bloque">

	<div class="col-fluid bloque__notas-container">

		@foreach(array_slice($news, 0, 13) as $new)
			@if ($new['channel']['slug'] == 'tapas' && !isset($tapa))
				@php ($tapa = $new)
			@else

			@include('partials.articulo', array('clase' => 'news--card-rounded', 'width_mobile' => '375', 'height_mobile' => '211', 'width_tablet' => '367', 'height_tablet' => '220', 'width_laptop' => '309', 'height_laptop' => '174', 'width_desktop' => '423', 'height_desktop' => '238'))
			@endif
		@endforeach

	</div>

		<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" class="ad-300x250" />

		<div class="col-fixed">
			
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

			@else
				<x-mas-leidas-widget :rows="5" />
				<div class="sticky">
				<x-ad-space id="300x250x-pos-" width="300" height="250" min-height="250" max-height="250" /> 

				</div>

			@endif

		</div>
	</div>
@endif
