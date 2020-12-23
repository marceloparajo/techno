@inject('shortcodeConverter', "App\Http\Helpers\shortCodeConverter ")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@extends('layout.base')

@section('ads-sec',  'home')

@section('head-meta')
	<meta http-equiv="refresh" content="600" />
@endsection

@section('head-top')
	<link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-css')
	<link rel="preload" href="{{ mix('css/home.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/home.css') }}"></noscript>
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
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
								@include('sidebar.index', ['content' => $sidebar_content])
						</div>
					@endif


					<section id="{{ $key }}" class="contenedor-general">
						@foreach($value as $item)
							@include('home.dispositions.' . $item['template'], ['news' => $item['news']])
						@endforeach
					</section>
				@endif
				@if ($key == 'central-header')
				<main class="supercontenedor">
					<div class="contenido">
				@endif
			@endforeach
		</main>


@endsection

