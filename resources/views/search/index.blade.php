@extends('layout.base')

@section('page-title', ucwords('buscador'))

@section('google-tag-manager')
	<x-google-tag-manager category="buscador" :info="['searchTerm' => $search_term]" />
@endsection

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

		<h1 class="seccion-titulo {{ $sectionTitle }}">{{ $sectionTitle }}</h1>

		<div class="contenido canal {{ $sectionTitle }}">
			<script async src="https://cse.google.com/cse.js?cx=3978ceed87019a67c"></script>
			<div class="gcse-search"></div>
		</div>

		<aside class="sidebar">
			<x-sidebar />
		</aside>

	</main>

@endsection
