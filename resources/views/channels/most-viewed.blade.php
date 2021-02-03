@extends('layout.base')

@section('page-title', ucwords($channel))

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
	<link rel="stylesheet" href="{{ mix('css/channels-responsive.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

	<main class="supercontenedor">

		<h1 class="seccion-titulo">Más Leídas de Perfil</h1>

		<div class="contenido masleidas">
			@foreach ($noticias as $key => $noticia)
				<article class="articulo">
					<figure>
						<a href="{{ $noticia['permalink'] }}">
							<div class="masleidas-orden">
								{{ $loop-> index + 1 }}
							</div>

							<x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['caption']" class="img-fluid" max-width="300" :play-button="$noticia['has_video']" :camera-button="$noticia['has_gallery']" />
						</a>
					</figure>
					<div class="meta-content">
						<a href="{{ $noticia['permalink'] }}">
							<h2>{{ $noticia['home_title'] }}</h2>
						</a>
					</div>
				</article>
			@endforeach
		</div>

		<aside class="sidebar">
			<x-sidebar />
		</aside>

	</main>

@endsection
