@extends('layout.base')

@section('page-title', 'Más leídas | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('ads-sec', 'seccion')

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/masleidas-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')



<main class="main-container max-width margin-auto container-white considebar">

	<div class="seccion masleidas" id="masleidas">

		<h1 class="seccion-titulo">Las más leídas</h1>


		@foreach ($noticias as $noticia)

		<article class="articulo nota-{{ $loop->iteration }}">
			<a href="{{ $noticia['permalink'] }}">
				<figure>
					<x-lazy-image
							:src="$noticia['main_image']['srcs']['original']"
							:alt="$noticia['main_image']['caption']"
							class="img-fluid"
							:sizes="[['v' => 375, 'w' => 373, 'h' => 210], ['v' => 414, 'w' => 412, 'h' => 232], ['v' => 768, 'w' => 333, 'h' => 187], ['v' => 1024, 'w' => 286, 'h' => 161], ['v' => 1366, 'w' => 273, 'h' => 153]]"
							:play-button="$noticia['has_video']"
							:camera-button="$noticia['has_gallery']"
							clean-source="true"
					/>
				</figure>
				<div class="meta-content">
					<h2>{{ $noticia['home_title'] }}</h2>
				</div>
				<span class="articulo__ordenleidas">
					{{ $loop-> index + 1 }}
				</span>
			</a>
		</article>
		@endforeach
	</div>

	<aside class="sidebar">
		<x-sidebar />
	</aside>

</main>
@endsection
