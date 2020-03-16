@inject('menuHelper', "App\Http\Helpers\MenuHelper")

<div class="container-fluid header-meta bg-light px-0 d-none d-sm-flex">
	<div class="container d-flex justify-content-between px-2">
		<div class="header-fecha">
			martes 23 de julio de 2019 | <span class="suscribite"><a href="http://kioscoperfil.com/">Suscribite</a></span>
		</div>
		<div class="radio-perfil">
			<a href="//radio.perfil.com">
				<i class="fas fa-play"></i>
				<img src="{{ asset('img/radio-perfil.png') }}" alt="Radio Perfil">
			</a>
		</div>
	</div>
</div>
<div class="container-fluid m-0 py-0 perfil-header sticky-top shadow-sm">
	<div class="container px-0 d-flex flex-column flex-xl-row py-0 elheader">
		<nav class="navbar navbar-expand-xl navbar-light bg-white w-100 justify-content-start justify-content-xl-between mainnavbar py-lg-1 px-0" id="header-navbar">



				<div class="d-flex justify-content-start">

		            <div class="elisologo pl-2">
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
					</div><!-- elisologo -->

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
				</div>



				<div class="buscador d-none d-md-flex col-6 col-xl-3 px-2 ml-auto mr-0 pt-2 pt-lg-0" id="header-search">
					<form method="get" action="{{ route('search.index') }}" class="d-flex py-1">
						<input class="form-control my-0 py-1 bg-white text-dark border" name="q" type="text" placeholder="{{ __('search') }}" aria-label="{{ __('search') }}" value="{{ Request::get('q') }}">
						<button class="btn d-lg-none border border-lg-0 bg-white" type="submit"><i class="fas fa-search"></i></button>
					</form>
				</div>

		</nav>
	</div>

	<div class="container px-0">
		<div id="contenedor-header-menu">

			<div id="menues" class="tescondo">
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

			</div>
		</div><!-- header-menu -->
	</div>
</div>

<div class="container-fluid d-none d-xl-flex menudetemas px-0">
	<div class="container px-0 px-xl-0 elmenu">

		<div id="menuTemas" class="nav-temas collapse-temas collapse d-lg-flex row mx-0">
			<ul class="nav justify-content-start temas mb-3 mb-lg-0 pl-2 flex-grow-1">
				@foreach ($menuHelper->getMenuItems('temas') as $item)
					<li class="nav-item text-uppercase px-0">
						<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="px-0 nav-link {{ $item['class'] }}" title="{{ $item['title'] }}">
							{!! $item['text'] !!}
						</a>
					</li>
				@endforeach
			</ul>


			<div class="social-header text-right d-none d-lg-flex justify-content-end pt-2">
				<a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" class="d-block link-social-facebook ml-4 bg-transparent px-1"><i class="fab fa-facebook-f"></i></a>
				<a href="https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" class="d-block link-social-instagram ml-4 bg-transparent px-1-1"><i class="d-block fab fa-instagram"></i></a>
				<a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" class="d-block link-social-twitter ml-4 bg-transparent px-1"><i class="fab fa-twitter"></i></a>
				<a href="{{ route('feeds.lastposts') }}" target="_blank" class="d-block link-social-rss ml-4 bg-transparent px-1"><i class="fa fa-rss"></i></a>
			</div>

		</div>
	</div>
</div>



<script>
	function myFunction(x) {
		x.classList.toggle("change");
		$("#menues").toggleClass("tescondo temuestro");
	}
</script>