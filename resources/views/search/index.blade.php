@extends('layout.base')

@section('page-title', ucwords('buscador'))

@section('google-tag-manager')
	<x-google-tag-manager category="buscador" :info="['searchTerm' => $search_term]" />
@endsection

@section('ads-sec', 'seccion')

@section('head-top')
	<link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

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

			<!-- {{ env("APP_NAME","")}} search -->
			<script>
			  (function() {
				var cx = '{{ env("BUSCADOR_ID_GOOGLE", "") }}';
				var gcse = document.createElement('script');
				gcse.type = 'text/javascript';
				gcse.async = true;
				gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(gcse, s);
			  })();
			</script>
			<gcse:search></gcse:search>
			<!-- /{{ env("APP_NAME","")}} search -->

		</div>

		<aside class="sidebar">
			<x-sidebar />
		</aside>

	</main>

@endsection
