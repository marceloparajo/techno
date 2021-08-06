@extends('layout.base')

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('page-title', $author['fullname'] . ' | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('ads-sec', 'seccion')

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/channels-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

<main class="main-container max-width margin-auto container-white considebar">

	<div class="seccion autor" id="autor {{ $author['username'] }}">

		@include('authors.partials.author', ['author' => $author, 'displayAuthor'=>'block'  ])

		@foreach ($noticias as $noticia)

			@include('channels.partials.articulo')
	
		@endforeach

	</div>

	<div class="sidebar">
		<x-sidebar />
	</div>

</main>
@endsection
