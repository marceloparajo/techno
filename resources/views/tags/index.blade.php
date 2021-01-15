@extends('layout.base')

@section('page-title', ucwords($tag))

@section('ads-sec', 'seccion')

@section('body-class', 'pf-channel-show')

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="preload" href="{{ mix('css/channels-low.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-low.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-responsive.css') }}"></noscript>
@endsection

@section('js')
	<script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

	<main class="supercontenedor">

		<h1 class="seccion-titulo">Tema: "{{ $tag_title }}"</h1>

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
