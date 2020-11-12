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

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('page-title', env('HOME_TITLE','Home') )

@section('js')
	<script type="text/javascript" src="{{ mix('js/home.js') }}"></script>
@endsection

@section('body')


	<main class="supercontenedor">

		@foreach($home_content as $key => $value)
			@if ($key != 'sidebar')
				<section id="{{ $key }}" class="contenedor">
					@foreach($value as $item)
						<div class="contenedor-general"> 
							@include('home.dispositions.' . $item['template'], ['news' => $item['news']])
						</div>
					@endforeach
				</section>
			@endif
		@endforeach

		<div class="sidebar">
				@include('sidebar.index', ['content' => $sidebar_content])
		</div>
	</main>

@endsection

