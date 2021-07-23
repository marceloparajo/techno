@extends('layout.base')

@section('ads-sec',  'home')

@section('head-meta')
	<meta http-equiv="refresh" content="600" />
@endsection

@section('google-tag-manager')
	<x-google-tag-manager category="homepage" />
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/home-high.css') }}">
	<link rel="stylesheet" href="{{ mix('css/home-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('head-bottom')
{{--	@include('partials.taboola-sidebar-header')  --}}
@endsection

@section('page-title', env('APP_ALTER_NAME', 'Perfil') . ' | Ultimas noticias de Argentina y el mundo')

@section('js')
	<script type="text/javascript" src="{{ mix('js/home.js') }}"></script>
@endsection

@section('body')

	<main class="main-container max-width margin-auto">
		@foreach($home_content as $key => $value)
			@if ($key != 'sidebar')
				<section id="{{ $key }}" class="contenedor-general">
					@foreach($value as $item)
						@include('home.dispositions.' . $item['template'], ['news' => $item['news'], 'id' => $item['id']])
					@endforeach
				</section>
			@endif
		@endforeach
	</main>

@endsection

