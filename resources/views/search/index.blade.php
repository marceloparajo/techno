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
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')



<main class="channel main container row max-width margin-auto">

	<div class="col-fluid d-xs-flex channel__container" id="{{ $sectionTitle }}">


		<h1 class="channel__title {{ $sectionTitle }}">{{ $sectionTitle }}</h1>

		<script async src="https://cse.google.com/cse.js?cx=3978ceed87019a67c"></script>
		<div class="gcse-search"></div>

	</div>

	<div class="col-fixed-news">
		<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-xs-block" min-height="250" max-height="250" margin-bottom="40" />
		<x-sidebar />
	</div>

</main>

@endsection
