@extends('layout.base')

@section('page-title', 'Noticias de ' . $author['fullname'])

@section('ads-sec', 'seccion')

@section('head-top')
	<link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

	<main class="supercontenedor">


		<div class="contenido autor {{ $author['username'] }}">
			@include('authors.partials.author', ['author' => $author, 'displayAuthor'=>'block'  ])
			<div class="cuatro-notas">
				@foreach ($noticias as $key => $noticia)
					@include('lists.index', ['noticia' => $noticia])
				@endforeach
			</div>
		</div>


		<div class="sidebar">
			@include('sidebar.index', ['content' => $sidebar_content])
		</div>

	</main>
@endsection