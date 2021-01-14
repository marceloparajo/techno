@extends('layout.base')

@section('page-title', ucwords($channel))

@section('ads-sec', 'seccion')

@section('head-top')
    <link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="preload" href="{{ mix('css/channels.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news-responsive.css') }}"></noscript>
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

	<main class="supercontenedor">

		<h1 class="seccion-titulo">{{ $sectionTitle }}</h1>


{{-- TODO: Sacar el if else que pregunta si es seccion columnistas --}}

		@if($sectionTitle == 'columnistas')

		 @include('channels.columnistas') 
{{--
	TODO: Este sería el include de una list, pero no sé ponerle dos notas al primer columnista. El archivo channels.columnistas está harcodeado.
		<div class="contenido columnistas">
			@foreach ($noticias as $key => $noticia)
				@include('lists.columnistas', ['noticia' => $noticia])
			@endforeach
		</div>
--}}

		@else

		<div class="contenido canal {{ $sectionTitle }}">
			<div class="cuatro-notas">

				@foreach ($noticias as $key => $noticia)
					@include('lists.index', ['noticia' => $noticia])
				@endforeach
			</div>
		</div>
		@endif

		<div class="sidebar">
			@include('sidebar.index', ['content' => $sidebar_content])
		</div>

	</main>

@endsection
