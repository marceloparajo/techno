@extends('layout.base')

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('page-title', $author['fullname'] . ' | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('ads-sec', 'seccion')

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/channels-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

<main class="channel main container row max-width margin-auto">

	<div class="col-fluid d-xs-flex channel__container" id="autor {{ $author['username'] }}">

		@include('authors.partials.author', ['author' => $author, 'displayAuthor'=>'block'  ])

		@foreach ($noticias as $new)

			@if($loop->first || $loop->index % 5 == 0)

				@include('partials.articulo', array('clase' => 'news--tipo-especial news--tipo-especial-main news--hat-inverted', 'width_mobile' => '382', 'height_mobile' => '215', 'width_tablet' => '736', 'height_tablet' => '415', 'width_laptop' => '986', 'height_laptop' => '743', 'width_desktop' => '876', 'height_desktop' => '474'))

			@else 

				@include('partials.articulo', array('clase' => 'news--card-rounded news--half-size', 'width_mobile' => '380', 'height_mobile' => '214', 'width_tablet' => '733', 'height_tablet' => '413', 'width_laptop' => '472', 'height_laptop' => '265', 'width_desktop' => '305', 'height_desktop' => '172'))

			@endif
		@endforeach

	</div>

<div class="col-fixed-news">
	<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-xs-block" min-height="250" max-height="250" margin-bottom="40" />
	<x-sidebar />
</div>

</main>
@endsection
