@extends('layout.base')

@section('page-title', 'Columnistas')

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

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
						<a href="{{ route('authors.show', $author['username']) }}">
							<figure>
								@if ($loop->index < 3)
								<img src="{{ $author['image'] }}" class="lazyload" alt="{{ $author['first_name'] }} {{ $author['last_name'] }}" />
								@else
								<img src="https://fotos.perfil.com/autores/default/{{ $author['username'] }}_50.jpg" class="lazyload" alt="{{ $author['first_name'] }} {{ $author['last_name'] }}">
								@endif
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
								@if ( isset($post['date_available_human']) && !empty($post['date_available_human']) )
									<span class="fechayhora">
										{{ $post['date_available_human'] }}
									</span>
								@endif
							</a>
						</article>
					@endforeach
				</div>

			@endforeach

		</div>

		<aside class="sidebar">
			<x-sidebar />
		</aside>
	</main>
@endsection
