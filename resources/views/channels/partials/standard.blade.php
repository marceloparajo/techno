

<main class="supercontenedor">

	<h1 class="seccion-titulo">{{ $sectionTitle }}</h1>

	<div class="contenido canal {{ $sectionTitle }}">
		<div class="cuatro-notas">

			@foreach ($noticias as $key => $noticia)
				@include('lists.index', ['noticia' => $noticia])
			@endforeach
		</div>
	</div>
	<div class="sidebar">
		@include('sidebar.index', ['content' => $sidebar_content])
	</div>

</main>