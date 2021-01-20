<div class="media noticia-relacionada">
   	<a href="{{ $url }}" title="{{ $title }}">
		@if ($type == '')
			<figure>
				<img src="{{ $image }}" class="lazyload mr-2 float-left" alt="{{ $title }}">
			</figure>
		@endif
		<div class="leermas">LEER MÁS...</div>
		<div class="titulorelacionada">{{ $title }}</div>
	</a>
</div>
