@extends('layout.base')

@section('page-title', $page_title)

@section('ads-sec', 'seccion')

@section('head-css')
	<link rel="preload" href="{{ mix('css/reperfilar-channels.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/reperfilar-channels.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/reperfilar-channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/reperfilar-channels-responsive.css') }}"></noscript>
@endsection

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body-class', 'pf-channel-show')

@section('body')

	@include('partials.reperfilar-header')
	
<main class="supercontenedor reperfilar">
		<div class="listado-subchannel">
			@php
				$key = 0;
			@endphp
			@foreach (array_slice($posts, 0, 40) as $post)
				<article class="articulo">
					<figure>
						<a href="{{ $post['permalink'] }}">
							<x-lazy-image :src="$post['main_image']['srcs']['original']" play-button="true" />
						</a>
					</figure>
					<div class="meta-content">
						<a href="{{ $post['permalink'] }}">
							<h2>{{ $post['home_title'] }}</h2>
							<p class="headline">{{ $post['headline'] }}</p>
						</a>
						@if ($post['signed'])
							<span class="firma-home"><a href="/autor/{{ $post['author']['username'] }}" title="Ir a Página de autor">Por {{ $post['author']['fullname'] }}</a></span>
						@elseif ($post['credit'] != '')
							<span class="firma-home">Por {{ $post['credit'] }}</span>
						@endif
					</div>
				</article>
				@php 
					$key++;
				@endphp
				@if($key % 5 == 0)

				<div id="" class="ads-space ads-up-xl" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

				@endif
			@endforeach
		</div>
</main>
@endsection
