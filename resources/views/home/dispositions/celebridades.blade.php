@inject('menuHelper', "App\Http\Helpers\MenuHelper")
@if (isset($news) && count($news) > 2)

<!-- Celebridades -->

	<div class="celebrities">

		<div class="celebrities__titulo">
			<button class="celebrities__btn" id="celebridades-boton" onclick="muestraMenuCelebridades()">
				<div class="bar-1"></div>
				<div class="bar-2"></div>
				<div class="bar-3"></div>
				Celebridades
			</button>
			Celebridades
		</div>


		<ul class="celebrities__nav" id="celebridades-menu">
			@foreach ($menuHelper->getMenuItems('personajes') as $item)
			<li class="nav-item"><a class="nav-link {{ $item['class'] }}" href="{{ $item['href'] }}" target="{{ $item['target'] }}" title="{{ $item['title'] }}"> {{ $item['text'] }}</a></li>
			@endforeach
		</ul>



		@php 
			$mostrarnotas = (count($news) < 6 ) ? 3 : 6;
		@endphp
		
		<div class="celebrities__notas">
			@foreach(array_slice($news, 0, $mostrarnotas) as $key => $new)
				@include('home.dispositions.partials.articulo')
			@endforeach
			<x-ad-space id="central_300x250x-pos-" width="300" height="250" margin-top="0" class=" d-md-none d-xxl-flex" />
		</div>

	</div><!-- celebridades  -->








	<script>
	function muestraMenuCelebridades() {
		var c = document.getElementById("celebridades-boton");
		var m = document.getElementById("celebridades-menu");
	  	c.classList.toggle("open");
	  	m.classList.toggle("mostrar");
	}
	</script>




<!-- /Celebridades -->

@endif
