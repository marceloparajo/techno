@extends('layout.base')

@section('page-title', ucwords($channel) . ' | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

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
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

<main class="main-container max-width margin-auto container-white considebar">


	<div class="seccion channel" id="{{ $sectionTitle }}">

		<h1 class="seccion-titulo {{ $sectionTitle }}">{{ $sectionTitle }}</h1>

		@foreach ($noticias as $noticia)

			@include('channels.partials.articulo')

		@endforeach

	</div>
	<aside class="sidebar">
		<x-sidebar />
	</aside>

</main>

@endsection
