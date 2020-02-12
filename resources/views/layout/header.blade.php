@inject('menuHelper', "App\Http\Helpers\MenuHelper")

<div class="container-fluid header-meta bg-light px-0">
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

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<a href="{{ asset('') }}" class="logo ml-0 mr-3 navbar-brand" id="logo-small" style="background-color: transparent;">
						<img src="{{ asset('img/logo_perfil.svg') }}" alt="Perfil">
					</a> 

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



				<div class="buscador col-10 col-xl-3 px-2 ml-auto mr-auto mr-xl-0 pt-2 pt-lg-0" id="header-search">
					<form method="get" action="{{ route('search.index') }}" class="d-flex py-1">
						<input class="form-control my-0 py-1 bg-white text-dark border" name="q" type="text" placeholder="{{ __('search') }}" aria-label="{{ __('search') }}" value="{{ Request::get('q') }}">
						<button class="btn d-lg-none border border-lg-0 bg-white" type="submit"><i class="fas fa-search"></i></button>
					</form>
				</div>





{{--
			<button class="navbar-toggler mr-0" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
--}}
			<div class="collapse navbar-collapse flex-grow-1 d-flex flex-column flex-xl-row" id="navbarToggler">

				<ul class="nav justify-content-start temas mb-1 mb-lg-0 d-flex flex-column flex-sm-row d-flex d-xl-none mr-auto">
				@foreach ($menuHelper->getMenuItems('temas') as $item)
					<li class="nav-item text-uppercase px-0 text-left">
						<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="px-0 nav-link text-secondary {{ $item['class'] }}" title="{{ $item['title'] }}">
							{{ $item['text'] }}
						</a>
					</li>
				@endforeach
				</ul>
				<ul class="navbar-nav canales mr-auto mt-2 mt-lg-0 d-lg-flex d-xl-flex">
					@foreach ($menuHelper->getMenuItems('principal') as $item)
					<li class="nav-item"><a class="nav-link" href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>


				<div class="buscador col-10 col-xl-3 px-0 ml-auto mr-auto mr-xl-0 pt-2 pt-lg-0" id="header-search">
					<form method="get" action="{{ route('search.index') }}" class="d-flex py-1">
						<input class="form-control my-0 py-1 bg-white text-dark border" name="q" type="text" placeholder="{{ __('search') }}" aria-label="{{ __('search') }}" value="{{ Request::get('q') }}">
						<button class="btn d-lg-none border border-lg-0 bg-white" type="submit"><i class="fas fa-search"></i></button>
					</form>
				</div>




				<div class="social-header responsivo col-12 mt-3 d-flex d-xl-none justify-content-center pb-3">
					<a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" class="d-block link-social-facebook ml-4 bg-transparent text-secondary text-center rounded-circle p-1"><i class="fab fa-facebook-f"></i></a>
					<a href="d-block https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" class="link-social-instagram ml-4 bg-transparent text-secondary text-center rounded-circle p-1"><i class="d-block fab fa-instagram"></i></a>
					<a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" class="d-block link-social-twitter ml-4 bg-transparent text-secondary text-center rounded-circle p-1"><i class="fab fa-twitter"></i></a>
					<a href="{{ route('feeds.lastposts') }}" target="_blank" class="d-block link-social-rss ml-4 bg-transparent text-secondary text-center rounded-circle p-1"><i class="fa fa-rss"></i></a>
				</div>




			</div>
		</nav>
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