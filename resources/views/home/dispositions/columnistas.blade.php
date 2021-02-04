@if (isset($news) && count($news) > 0)
@php
	$itemsBySlices = 4;
	$slices = (int)floor(count($news)/$itemsBySlices);
	$currentSlice = 0;
@endphp
<div class="container-fluid bg-white mb-3 py-3 shadow">
	<div class="container columnistas-home">
		<div class="d-flex flex-column flex-md-row align-items-start">
			<div class="row w-100 flex-md-grow-1">

				<h5 class="mx-2 mx-md-0">{{ __("columnists") }}</h5>

				<div id="carouselColumnistas" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						@for ($i = 0; $i < $slices; $i++)
							<li data-target="#carouselColumnistas" data-slide-to="{{ $i }}" class="@php if($i == 0) {echo 'active';} @endphp"></li>
						@endfor
					</ol>

					<div class="carousel-inner">
					@for ($i = 0; $i < $slices; $i++)
						<div class="carousel-item @php if($i == 0) { echo 'active';} @endphp">
							<div class="row d-flex">
								@foreach(array_slice($news, ($i*$itemsBySlices), $itemsBySlices) as $key => $new)
									<article class="col-12 col-sm-6 col-lg-3 columna d-flex px-2">
										<a href="{{ $new['permalink'] }}" class=" align-items-stretch">
											@if ($new['signed'])
												<img src="https://fotos.perfil.com/autores/default/{{ $new['author']['username'] }}.jpg" class="rounded-circle" />
											@else
												<img src="https://fotos.perfil.com/autores/default/default_100.jpg" class="rounded-circle" />
											@endif
												<h2>{{ $new['home_title'] }}</h2>
											@if ($new['signed'])
												<h4 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h4>
											@endif
										</a>
									</article>
								@endforeach
							</div>
						</div>
					@endfor

					</div>

				</div>

			</div>


			<div class="d-flex banner-vertical">
				<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="d-sm-none" />
			</div>
		</div>
	</div>
</div>



@endif
