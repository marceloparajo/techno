@extends('layout.base')

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('page-title', 'Noticias de ' . $author['fullname'])

@section('ads-sec', 'seccion')

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/channels-low.css') }}" media="print" onload="this.media='all'">
	<link rel="stylesheet" href="{{ mix('css/channels-responsive.css') }}" media="print" onload="this.media='all'">
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
