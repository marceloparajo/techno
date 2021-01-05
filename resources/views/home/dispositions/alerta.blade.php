@if (isset($news) && count($news) > 0)
	<div class="supercontenedor bgalerta">
		<div class="contenedor-general alerta">
			@foreach (array_slice($news, 0, 1) as $new)
			<article>
				<span class="laalerta"><img src="/images/glyph/alerta.svg"></span>
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
@else
	<div class="supercontenedor radio-ticker">
		<div class="contenedor-general">
			<p class="radio-news"><a href="#">Tips Jurídicos: ¿Es obligatorio lo que decide la Corte Suprema de Justicia de la Nación?</a></p>
			<p class="radio-news"><a href="#">El Renatre aumentó la prestación por desempleo a $14.500.</a></p>
			<p class="radio-news"><a href="#">La pandemia está más presente que nunca en todo el mundo.</a></p>
			<p class="radio-news"><a href="#">Sigue subiendo la tasa de riesgo país.</a></p>
			<p class="radio-news"><a href="#">Julián Cárdenas: "Los empresarios argentinos están poco cohesionados".</a></p>
			<p class="radio-news"><a href="#">El gobernador Kicillof se reúne con intendentes de la costa atlántica.</a></p>
			<p class="radio-news"><a href="#">Sassen: "Descubrimos que puede haber peligros que no tienen olor ni hacen ruido".</a></p>
			<p class="radio-news"><a href="#">El 5de enero de 1985 nacieron los primeros trillizos europeos fecundados "in vitro".</a></p>
		</div>
		<div class="frecuencia">
			FM 101.9
		</div>

		<script>
			var myIndex = 0;
			carousel();

			function carousel() {
				var i;
				var x = document.getElementsByClassName("radio-news");
				for (i = 0; i < x.length; i++) {
					x[i].style.display = "none";
				}
				myIndex++;
				if (myIndex > x.length) {myIndex = 1}
				x[myIndex-1].style.display = "block";
				setTimeout(carousel, 5000);
			}
		</script>

	</div>	

@endif