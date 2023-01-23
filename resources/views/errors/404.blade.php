@inject('menuHelper', "App\Http\Helpers\MenuHelper")

@extends('layout.base')

@section('ads-sec',  'home')

@section('page-title', 'No encontramos el contenido')

@section('head-bottom')
	{{--@include('partials.taboola-sidebar-header')--}}
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/channels-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection


@section('body')

	<main class="error main container row max-width margin-auto">

		<img src="/images/404.jpg" alt="Error 404" width="300" height="352">
		<div class="error__titulo">No hemos encontrado lo que estabas buscando.</div>
		<div class="error__subtitulo">Esto puede deberse a que hayas seguido un enlace roto o que el contenido haya sido eliminado.</div>
		<div class="error__subtitulo">Podés seguir navegando en nuestros contenidos</div>

		<figure class="main-footer__logo">
			<a href="http://dev-parabrisas.perfil.com/" title="Ir a la Home de parabrisas" itemprop="url">
				<img src="http://dev-parabrisas.perfil.com/img/logo-fortuna.svg" alt="Parabrisas">
			</a>
		</figure>

		<div class="error__contenido">
			<div class="error__sugerencias">
				<div class="news__aside-title">Estos son los temas destacados de hoy</div>
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
			<div class="error__sugerencias">
				<div class="news__aside-title">Podés buscar por temas de interés</div>
				<ul>
					@foreach ($menuHelper->getMenuItems('principal') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="error__sugerencias">
				<div class="news__aside-title">Podés encontrar más contenido en todos nuestros sitios</div>
				<ul class="lossitios">
					@foreach ($menuHelper->getMenuItems('revistas') as $item)
						<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
					@endforeach
				</ul>
			</div>
		</div>

	</main>


@endsection
