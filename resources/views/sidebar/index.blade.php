<div class="content-sidebar">
    @foreach ($content as $item)
        @if (view()->exists('sidebar.dispositions.' . $item['template']))
            @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
        @endif
    @endforeach
	@if (Route::currentRouteName() != "home.index")
	<article class="article article-side bg-ads-space" style="top: 3.5em">
	    <p>{{ __('ads space') }}</p>
	    <div id="" class="ads-space text-center" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false"></div>
	</article>
	@endif



{{-- TODO: Las más leidas en sidebar. Esto es solo html harcodeado --}}

	<div id="masLeidasSidebar">
		<header class="masleidas-titulo">
			<a href="/mas-leidas">Las más leídas</a>
		</header>

		<div class="ranking">
			<article class="masleidas">
				<a href="#">
					<figure>
						<img src="https://fotos.perfil.com/2020/06/11/300/0/berni-encabezo-desinfeccion-y-llevo-mas-policias-en-la-zona-de-villa-madero-la-matanza-970432.jpg">
					</figure>
					<h3>
						<span class="rankOrder">1</span>Un diputado de JxC chicaneó a un gremialista docente que rechaza clases presenciales
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">2</span>"Callate, no grites, va a ser rápido", la amenaza del empresario acusado de abusar de su empleada
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">3</span>Facebook eliminó más de mil cuentas que promovían noticias sobre Sergio Berni
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">4</span>Covid: la Ciudad superó el pico de contagios de la primera ola
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">5</span>American Tower compra torres de Telefónica por US$9.400 millones
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">6</span>Susana Giménez realiza un nuevo aislamiento en Punta del Este
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">7</span>La CIA liberó archivos confidenciales sobre ovnis y están disponibles online
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">8</span>Monotributistas: qué tener en cuenta para recategorizarse antes del 20 de enero
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">9</span>Aplicaron al Papa Francisco la vacuna de Pfizer BioNTech
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="#">
					<h3>
						<span class="rankOrder">10</span>Camioneros repudió a empresarios rurales por "aprietes y amenazas" a choferes
					</h3>
				</a>
			</article>
		</div>

		<footer>
			<a href="/mas-leidas">Ver más</a>
		</footer>
	</div>



{{-- TODO: Divisas --}}

	<div class="divisas">
		<header class="title-divisas">
			Divisas
		</header>
		<div class="content-divisas">
			<div class="venta">Venta</div>
			<div class="compra">Compra</div>
			<div class="do">Dólar Oficial</div>
			<div class="doventa">91.09</div>
			<div class="docompra">85.09</div>
			<div class="db">Dólar blue</div>
			<div class="dbventa">159.33</div>
			<div class="dbcompra">154.00</div>
			<div class="eo">Euro Oficial</div>
			<div class="eoventa">97.95</div>
			<div class="eocompra">91.49</div>
			<div class="eb">Euro blue</div>
			<div class="ebventa">171.33</div>
			<div class="ebcompra">165.59</div>
		</div>
	</div>

</div>
