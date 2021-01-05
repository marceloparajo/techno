@extends('layout.base')

@section('page-title', ucwords($channel))

@section('ads-sec', 'seccion')

@section('head-top')
    <link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="preload" href="{{ mix('css/channels.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news-responsive.css') }}"></noscript>
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

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

@endsection
