@extends('layout.base')

@section('page-title', 'Columnistas')

@section('ads-sec', 'seccion')

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="preload" href="{{ mix('css/channels-low.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-low.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/channels-responsive.css') }}"></noscript>
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')
	<main class="supercontenedor">
		<h1 class="seccion-titulo">Columnistas</h1>

		<div class="contenido columnistas">

			@foreach ($authors as $author)

				<div class="box-columnista @if ($loop->first) main-columnista @endif">
					<div class="info-columnista">
						<a href="#">
							<figure>
								<img src="{{ $author['image'] }}" class="lazyload" />
							</figure>
							<span class="nombre-columnista">{{ $author['first_name'] }} {{ $author['last_name'] }}</span>
						</a>
					</div>

					@foreach (array_slice($author['posts'], 0, $author['count_show_posts']) as $post)
						<article class="articulo">
							<a href="{{ $post['permalink'] }}">
								<span class="hat">{{ $post['hat'] }}</span>
								<h2>{{ $post['title'] }}</h2>
								<p class="headline">{{ $post['headline'] }}</p>
								<span class="fechayhora">Domingo 10 de enero de 2021</span>
							</a>
						</article>
					@endforeach
				</div>

			@endforeach

		</div>

		<div class="sidebar">
			@include('sidebar.index', ['content' => $sidebar_content])
		</div>
	</main>
@endsection
