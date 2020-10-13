@inject('menuHelper', "App\Http\Helpers\MenuHelper")
<div class="pre-header">
	<div class="contenedor">
		<div class="header-data">
			<div class="header-fecha">
				9 oct 2020
			</div>
			<div class="radio-perfil">
				<a href="//radio.perfil.com">
					<i class="fas fa-play"></i>
					<img src="{{ asset('img/radio-perfil.png') }}" alt="Radio Perfil">
				</a>
			</div>
			<div id="paywall-login-container" class="pw-suscripcion">
    			<a href="https://mi.perfil.com/id/login/?continue=https://www.perfil.com/&amp;_ga=2.119616968.1355777437.1602594682-581691567.1598470282" class="pw-ingresar">Ingresar</a>
				<a href="https://mi.perfil.com/" class="pw-suscribite">Suscribite</a>
			</div>
		</div>
	</div>
</div>

<header class="main-header contenedor">
	<div class="header-top">
		<div class="elisologo">
			<div id="hamburguesa" class="hamburguer" onclick="myFunction(this)">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<script>
				function myFunction(x) {
					x.classList.toggle("change");
					$("#menues").toggleClass("tescondo temuestro");
				}
			</script>
			<figure>
				<a href="/">
					<img src="{{ asset('img/logo_perfil.svg') }}">
				</a>
			</figure>
			<nav class="menu-primario">
				<ul class="menu-destacado">
					<li>
						<a href="#">Últimas Noticias</a>
					</li>
					<li>
						<a href="#">Política</a>
					</li>
					<li>
						<a href="#">Opinión</a>
					</li>
					<li>
						<a href="#">Sociedad</a>
					</li>
				</ul>
			</nav>
		</div><!-- elisologo -->
		<div class="buscador" id="header-search">
			<form method="get" action="{{ route('search.index') }}">
				<input class="form-control" name="q" type="text" placeholder="{{ __('search') }}" aria-label="{{ __('search') }}" value="{{ Request::get('q') }}">
				<button type="submit" class="btn"><i class="fas fa-search"></i></button>
			</form>
		</div>
	</div>
		<div id="contenedor-header-menu">
			<nav id="menues" class="tescondo">
				<ul>
					<li><a href="/ultimo-momento/">Último momento</a></li>
					<li><a><i class="fa fa-angle-right" aria-hidden="true"></i>Temas de hoy</a>
						<ul>
						@foreach ($menuHelper->getMenuItems('temas') as $item)
							<li>
								<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">
									{{ $item['text'] }}
								</a>
							</li>
						@endforeach
						</ul>
					</li>
					<li><a><i class="fa fa-angle-right" aria-hidden="true"></i>Secciones</a>
						<ul>
							@foreach ($menuHelper->getMenuItems('principal') as $item)
							<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
						@endforeach
						</ul>
					</li>

					<li><a><i class="fa fa-angle-right" aria-hidden="true"></i>Revistas</a>
						<ul>
						@foreach ($menuHelper->getMenuItems('revistas') as $item)
							<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
						@endforeach
						</ul>
					</li>

					<li><a href="https://radio.perfil.com/en-vivo/radio">Radio Perfil en vivo</a></li>
				</ul>
			</nav>
		</div><!-- header-menu -->
	<div class="header-middle">
	</div>
	<nav class="header-bottom">
		<ul class="temas">
		@foreach ($menuHelper->getMenuItems('temas') as $item)
		<li>
		<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="px-0 nav-link {{ $item['class'] }}" title="{{ $item['title'] }}">
		{!! $item['text'] !!}
		</a>
		</li>
		@endforeach
		</ul>
	</nav>
</header>