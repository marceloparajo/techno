@inject('menuHelper', "App\Http\Helpers\MenuHelper")

@extends('layout.base')

@section('ads-sec',  'home')

@section('page-title', 'No encontramos el contenido')

@section('head-bottom')
	{{--@include('partials.taboola-sidebar-header')--}}
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/error-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection


@section('body')
	<main class="main-container max-width margin-auto container-white error">

		<div class="error__number">404</div>
		<div class="error__titulo">No hemos encontrado lo que estabas buscando.</div>
		<div class="error__subtitulo">Podés seguir navegando en nuestros contenidos</div>

		<div class="error__contenido">
			<p class="main-page"><a hrf="/">Página principal</a></p>
			<div class="error__contenido__sugerencias">
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
			<div class="error__contenido__sugerencias">
				<p>Podés buscar por temas de interés</p>
				<ul>
					@foreach ($menuHelper->getMenuItems('principal') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="error__contenido__sugerencias">
				<p>Podés encontrar más contenido en todos nuestros sitios</p>
				<ul>
					@foreach ($menuHelper->getMenuItems('revistas') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="error__contenido__sugerencias">
				<p>Podés seguirnos por radio en FM 101.9 o escuchar online</p>
				<a href="https://radio.perfil.com/en-vivo/radio" class="radio-error"><img src="/images/radio-perfil.png" alt="Radio Perfil"></a>
			</div>
			<div class="error__contenido__sugerencias">
				<p>Podés ver NET en televisión abierta o desde la web</p>
				<a href="https://www.canalnet.tv/page/senal-en-vivo" class="net-error"><img src="/images/net-logo-sidebar.png" alt="Radio Perfil"></a>
			</div>
		</div>

	</main>


@endsection
