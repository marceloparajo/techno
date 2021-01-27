@inject('menuHelper', "App\Http\Helpers\MenuHelper")

@extends('layout.base')

@section('ads-sec',  'home')

@section('page-title', 'No encontramos el contenido')





@section('head-top')
	<link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="preload" href="{{ mix('css/channels-low.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-low.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-responsive.css') }}"></noscript>

@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection


@section('body')
	<main class="supercontenedor error">
		<div class="elerror">404</div>
		<h1 class="error-titulo">No hemos encontrado lo que estabas buscando.</h1>
		<h2 class="error-subtitulo">Podés seguir navegando en nuestros contenidos</h2>

		<div class="contenedor-error">
			<p class="main-page"><a hrf="/">Página principal</a></p>
			<div class="box-error sugerencias">
				<p>Estos son los temas destacados de hoy</p>
				<ul class="lostemas">
				@foreach ($menuHelper->getMenuItems('temas') as $item)
					<li>
						<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">
							{{ $item['text'] }}
						</a>
					</li>
				@endforeach
				</ul>
			</div>
			<div class="box-error sugerencias">
				<p>Podés buscar por temas de interés</p>
				<ul>
					@foreach ($menuHelper->getMenuItems('principal') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="box-error sugerencias">
				<p>Podés encontrar más contenido en todos nuestros sitios</p>
				<ul>
					@foreach ($menuHelper->getMenuItems('revistas') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="box-error">
				<p>Podés seguirnos por radio en FM 101.9 o escuchar online</p>
				<a href="https://radio.perfil.com/en-vivo/radio" class="radio-error"><img src="/images/radio-perfil.png" alt="Radio Perfil"></a>
			</div>
			<div class="box-error">
				<p>Podés ver NET en televisión abierta o desde la web</p>
				<a href="https://www.canalnet.tv/page/senal-en-vivo" class="net-error"><img src="/images/net-logo-sidebar.png" alt="Radio Perfil"></a>
			</div>
		</div>

	</main>


@endsection