@if (isset($news) && count($news) > 0)
@php
	$itemsBySlices = 5;
	$slices = (int)floor(count($news)/$itemsBySlices);
	$currentSlice = 0;
@endphp

	<div id="columnistas">

		<header>
			<a href="/columnistas">{{ __("columnists") }}</a>
		</header>

		<div class="columnistas-general">

			<div id="columnistas-caja">
				@for ($i = 0; $i < $slices; $i++)
					<div class="grupo-columnistas" id="grupo-col-{{ $i }}">
							{{-- dd($news[0]) --}}

							@foreach(array_slice($news, ($i*$itemsBySlices), $itemsBySlices) as $key => $new)
								<article class="articulo-columnista">
									<a href="{{ $new['permalink'] }}">
										<figure>
											<img alt="{{ $new['author']['fullname'] }}" class="lazyload" src="https://fotos.perfil.com/autores/default/{{ $new['author']['username'] }}_50.jpg">
										</figure>

										{{--

										@if ($new['signed'])
										<figure>
											<img src="https://fotos.perfil.com/autores/default/{{ $new['author']['username'] }}.jpg" alt="{{ $new['author']['fullname'] }}" />
										</figure>
										@else
										<figure>
											<img src="https://fotos.perfil.com/autores/default/default_100.jpg" class="rounded-circle" />
										</figure>
										@endif

										--}}
											<h3>{{ $new['home_title'] }}</h3>


											<span class="firma-home"> {{ $new['author']['fullname'] }}</span>


										@if ($new['signed'])
											<span class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</span>
										@elseif ($new['credit'] != '')
											<span class="firma-home">{{ $new['credit'] }}</span>
										@endif
									</a>
								</article>
							@endforeach
					</div>
				@endfor
			</div>
			<div class="columnistas-enlaces">
				@for ($i = 0; $i < $slices; $i++)
					@php $k = $i + 1; @endphp
					<a id="col-enlace-{{ $i }}" onclick="fu({{ $i }})">{{ $k }}</a>
				@endfor
			</div>

		</div>
		<footer>
			<a href="/columnistas">Más columnistas</a>
		</footer>

	</div>

<script>
	var slices = @php echo ($slices); @endphp;
	var ancho = document.getElementById('grupo-col-0').clientWidth;
	var elmargen = 0;

	for (var i=0; i < slices; i++) {
		function fu(i) {
			elmargen = -(ancho * i);
			document.getElementById("grupo-col-0").style.marginLeft = elmargen + 'px';
		}
	}

</script>





@endif
