@extends('layout.base')

@section('page-title', ucwords($tag))

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('ads-sec', 'seccion')

@section('body-class', 'pf-channel-show')

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

	<div class="seccion tag" id="{{ $tag_title }}">

		<h1 class="seccion-titulo {{ $tag_title }}">{{ $tag_title }}</h1>

		@foreach ($noticias as $noticia)

			@include('channels.partials.articulo')

		@endforeach

	</div>

	<div class="sidebar">
		<x-sidebar />
	</div>

</main>
@endsection
