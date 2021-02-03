@if (isset($news) && count($news) > 0)
	<div id="columnistas">
		<header>
			<a href="/columnistas">Columnistas</a>
		</header>

		<div class="columnistas-general">

			<div id="columnistas-caja">
				@foreach ($content() as $row)
					<div class="grupo-columnistas" id="grupo-col-{{ $loop->index }}">
						@foreach ($row as $new)
							<article class="articulo-columnista">
								<a href="{{ $new['permalink'] }}">
									<figure>
{{--
										<img alt="{{ $new['author']['fullname'] }}" class="lazyload" src="https://fotos.perfil.com/autores/default/{{ $new['author']['username'] }}_50.jpg" style="width:48px;height:48px;">
--}}
										<img alt="{{ $new['author']['fullname'] }}" loading="lazy" src="https://fotos.perfil.com/autores/default/{{ $new['author']['username'] }}_50.jpg" style="width:48px;height:48px;">


									</figure>
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
				@endforeach
			</div>
			<div class="columnistas-enlaces">
				@foreach ($content() as $row)
					<a class="btn-columnistas-widget-row" data-index="{{ $loop->index }}">{{ $loop->iteration }}</a>
				@endforeach
			</div>
		</div>
		<footer>
			<a href="/columnistas">Más columnistas</a>
		</footer>
	</div>
@endif
