@inject('menuHelper', "App\Http\Helpers\MenuHelper")
<div class="pre-header supercontenedor">
	<div class="header-fecha">
		{{--
			TODO: Poner la fecha en español. 
		--}}
		@php
			$mytime = Carbon\Carbon::now();
			$mytime->settings([
				'toStringFormat' => 'jS \d\e F \d\e Y',
			]);
			echo $mytime;
		@endphp
	</div>
	<div class="header-data">
		<nav class="more-sites">
			<ul>
				<li class="menu-reperfilar"><a href="/reperfilar">RePerfilAr</a></li>
				<li class="menu-bloomberg"><a href="/seccion/bloomberg/">Bloomberg</a></li>
				<li class="menu-noticias"><a href="https://noticias.perfil.com" rel="noreferrer">Noticias</a></li>
				<li class="menu-caras"><a href="https://caras.perfil.com" rel="noreferrer">Caras</a></li>
				<li class="menu-exitoina"><a href="https://exitoina.perfil.com" rel="noreferrer">Exitoina</a></li>
			</ul>
		</nav>
		<div class="buscador" id="header-search">
			<form method="get" action="{{ route('search.index') }}">
				<input class="form-control" name="q" type="text" placeholder="{{ __('search') }}" aria-label="{{ __('search') }}" value="{{ Request::get('q') }}">
				<button type="submit" class="btn"><img src="/images/glyph/search.svg" alt="Search" style="width:13px;height:13px"></button>
			</form>
		</div>
	</div>
</div>

<header class="main-header supercontenedor">
	<div class="header-top">
		<div class="elisologo">
			<div id="hamburguesa" class="hamburguer">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<figure>
				<a href="/">
					<img src="{{ asset('img/logo_perfil.svg') }}" alt="Perfil.com" style="width:170px;height:38px">
				</a>
			</figure>
			<nav class="menu-primario">
				<ul class="menu-destacado">
					<li>
						<a href="/ultimo-momento">Últimas Noticias</a>
					</li>
					<li>
						<a href="/seccion/politica">Política</a>
					</li>
					<li>
						<a href="/seccion/opinion">Opinión</a>
					</li>
					<li>
						<a href="/seccion/sociedad">Sociedad</a>
					</li>
				</ul>
			</nav>
		</div><!-- elisologo -->
		<div class="radio-perfil">
			<a href="//radio.perfil.com">
				<img src="/images/glyph/radio-play.svg" class="radio-play" alt="Radio Perfil" style="width:22px;height:22px">
				<img src="{{ asset('img/radio-perfil.png') }}" alt="Radio Perfil" style="width:100px;height:8.66px"><span>FM 101.9</span>
			</a>
		</div>
		<div id="paywall-login-container" class="pw-suscripcion">
			<a href="https://mi.perfil.com/id/login/?continue=https://www.perfil.com/&amp;_ga=2.119616968.1355777437.1602594682-581691567.1598470282" class="pw-ingresar">Ingresar</a>
			<a href="https://mi.perfil.com/" class="pw-suscribite">Suscribite</a>
		</div>
	</div>
	<div id="contenedor-header-menu">
		<nav id="menues" class="">
			<ul>
				<li><a href="/ultimo-momento/">Último momento</a></li>
				<li><img src="/images/glyph/chevron.svg" class="chevron" style="width:6px;height:10px">Temas de hoy
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
				<li><img src="/images/glyph/chevron.svg" class="chevron" style="width:6px;height:10px">Secciones
					<ul>
						@foreach ($menuHelper->getMenuItems('principal') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
					</ul>
				</li>

				<li><img src="/images/glyph/chevron.svg" class="chevron" style="width:6px;height:10px">Revistas
					<ul>
					@foreach ($menuHelper->getMenuItems('revistas') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
					</ul>
				</li>

				<li><a href="https://radio.perfil.com/en-vivo/radio">Radio Perfil en vivo</a></li>
			</ul>
		</nav>
	</div><!-- header-menu -->
	<nav class="header-bottom">
		<ul class="temas">
		@foreach ($menuHelper->getMenuItems('temas') as $item)
		<li>
		<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="nav-link {{ $item['class'] }}" title="{{ $item['title'] }}">
		{!! $item['text'] !!}
		</a>
		</li>
		@endforeach
		</ul>
	</nav>
</header>
