<div class="media noticia-relacionada">
   	<a href="{{ $url }}" title="{{ $title }}">
		@if ($type == '')
			<figure>
				<img src="{{ $image }}" class="lazyload mr-2 float-left" alt="{{ $title }}">
			</figure>
		@endif
		<h6>LEER MÁS...</h6>
		<h5>{{ $title }}</h5>
	</a>
</div>
