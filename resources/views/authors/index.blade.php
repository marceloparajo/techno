@extends('layout.base')

@section('page-title', 'Noticias de ' . $author['fullname'])

@section('ads-sec', 'seccion')

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="preload" href="{{ mix('css/channels-low.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-low.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news-responsive.css') }}"></noscript>
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

	<main class="supercontenedor">


		<div class="contenido autor {{ $author['username'] }}">
			@include('authors.partials.author', ['author' => $author, 'displayAuthor'=>'block'  ])
			<div class="cuatro-notas">
				@foreach ($noticias as $key => $noticia)
					@include('lists.index', ['noticia' => $noticia])
				@endforeach
			</div>
		</div>

		<div class="sidebar">
			<x-sidebar />
		</div>

	</main>
@endsection
