@if (isset($news) && count($news) > 0)
	<div class="supercontenedor bgalerta">
		<div class="contenedor-general alerta">
			@foreach (array_slice($news, 0, 1) as $new)
			<article>
				<span class="laalerta"><img src="/images/glyph/alerta.svg" alt="alerta"></span>
				<a href="{{ $new['permalink'] }}">
					<h2>
						@if ($new['hat'] != '')
							<span class="hat">{{ $new['hat'] }} </span>
						@endif
					{{ $new['home_title'] }}</h2>
				</a>
			</article>
			@endforeach
		</div>
	</div>
@endif
