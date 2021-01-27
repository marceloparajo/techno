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
	<link rel="stylesheet" href="{{ mix('css/home-responsive.css') }}" media="print" onload="this.media='all'">
@endsection

@section('head-bottom')
{{--	@include('partials.taboola-sidebar-header')  --}}
@endsection

@section('page-title', env('HOME_TITLE','Home') )

@section('js')
	<script type="text/javascript" src="{{ mix('js/home.js') }}"></script>
@endsection

@section('body')


		@foreach($home_content as $key => $value)
			@if ($key != 'sidebar')

				@if ($key == 'central-footer')
					</div>
					<div class="sidebar">
						<x-sidebar />
					</div>
				@endif


				<section id="{{ $key }}" class="contenedor-general">
					@foreach($value as $item)
						@include('home.dispositions.' . $item['template'], ['news' => $item['news'], 'id' => $item['id']])
					@endforeach
				</section>
			@endif
			@if ($key == 'central-header')
			<main class="supercontenedor">
				<div class="contenido" style="max-width:935px">
			@endif
		@endforeach
	</main>


@endsection

