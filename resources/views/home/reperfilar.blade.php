@extends('layout.base')

@section('head-meta')
	<meta http-equiv="refresh" content="600" />
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/reperfilar-home-high.css') }}">

	<link rel="preload" href="{{ mix('css/reperfilar-home-low.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/reperfilar-home-low.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/reperfilar-home-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/reperfilar-home-responsive.css') }}"></noscript>
@endsection

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('page-title', $page_title)

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('body')

	@include('partials.reperfilar-header')

	<main class="supercontenedor reperfilar">

		<div class="reperfilar-main-content" >

				{{-- Primer artículo --}}
				@php
					$key = 0;
				@endphp
				@foreach (array_slice($destaque_posts, 0, 5) as $post)
					<article class="articulo">
							@if($key == 0)
									@if ($post['embed_code'] != '' && \Illuminate\Support\Str::contains($post['embed_code'], ['rudo', 'tube']))
										{!! $post['embed_code'] !!}
									@else
										<figure>
											<a href="{{ $post['permalink'] }}">
												<x-lazy-image :src="$post['main_image']['srcs']['original']" />
											</a>
										</figure>
									@endif
							@else
								<figure>
									<a href="{{ $post['permalink'] }}">
										<x-lazy-image :src="$post['main_image']['srcs']['original']" play-button="true" />
									</a>
								</figure>
							@endif
						<div class="meta-content">
							<a href="{{ $post['permalink'] }}">
								<h2>{{ $post['home_title'] }}</h2>
								@if($key == 0)
									<p class="headline">{{ $post['headline'] }}</p>
								@endif
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
				@endforeach
				{{-- /Primer artículo --}}
		</div>

		{{-- Secciones --}}
		<div class="reperfilar-secciones">
			@foreach ($subchannel_posts as $subchannel)

				@if ($subchannel['slug'] == 'programas')
					{{--
					@if (isset($subchannel['posts']) && count($subchannel['posts']) > 0)
						<div class="seccion-title programacion">
							<a id="{{ $subchannel['slug'] }}" class="anchor"></a>
							<div class="seccion-nombre">Programas completos</div>
						</div>
						<div class="seccion programacion">
							<div class="articulo-flexible">
								<article class="articulo tipo-reperfilar">
									<div class="video-player">
										@if ($subchannel['posts'][0]['embed_code'] != '' && (\Illuminate\Support\Str::contains($subchannel['posts'][0]['embed_code'], ['rudo', 'tube'])))
											{!! $subchannel['posts'][0]['embed_code'] !!}
										@else
											<figure>
												<x-lazy-image :src="$post['main_image']['srcs']['original']" />
											</figure>
										@endif
									</div>
									<div class="meta-content">
										<a href="{{ $subchannel['posts'][0]['permalink'] }}">
											<h2>{{ $subchannel['posts'][0]['home_title'] }}</h2>
											<h3>{{ $subchannel['posts'][0]['headline'] }}</h3>
											@if ($subchannel['posts'][0]['signed'])
												<h5><a href="/autor/{{ $subchannel['posts'][0]['author']['username'] }}" title="Ir a Página de autor">Por {{ $subchannel['posts'][0]['author']['fullname'] }}</a></h5>
											@elseif ($subchannel['posts'][0]['credit'] != '')
												<h5>Por {{ $subchannel['posts'][0]['credit'] }}</h5>
											@endif
										</a>
									</div>
								</article>
							</div>
							<div class="seguinos-vermas">
								<div class="redes">
									<ul>
										<li class="followus">Seguinos </li>
										<li><a href="https://www.instagram.com/reperfilar/" target="_blank"><span class="fa fa-instagram"></span></a></li>
										<li><a href="https://twitter.com/reperfilar" target="_blank"><span class="fa fa-twitter-square"></span></a></li>
										<li><a href="https://facebook.com/reperfilar" target="_blank"><span class="fa fa-facebook-square"></span></a></li>
										<li><a href="https://www.youtube.com/perfiltv" target="_blank"><span class="fa fa-youtube-play"></span></a></li>
									</ul>
								</div>
								<div class="vermas"><a href="/reperfilar/{{ $subchannel['slug'] }}">Programas anteriores</a></div>
							</div>
						</div>
					@endif
					--}}
				@else
					<div class="reperfilar-seccion {{ $subchannel['slug'] }}">
						<a id="{{ $subchannel['slug'] }}" class="anchor"></a>
						<div class="seccion-title">
							{{ $subchannel['name'] }}
						</div>
						<hr >
						@foreach (array_slice($subchannel['posts'], 0, 5) as $post)
							<article class="articulo tipo-reperfilar">
								<figure>
									<a href="{{ $post['permalink'] }}">
										<x-lazy-image :src="$post['main_image']['srcs']['original']" play-button="true" />
									</a>
								</figure>
								<div class="meta-content">
									<a href="{{ $post['permalink'] }}">
										<h2>{{ $post['home_title'] }}</h2>
									</a>
									@if ($post['signed'])
										<span class="firma-home"><a href="/autor/{{ $post['author']['username'] }}" title="Ir a Página de autor">{{ $post['author']['fullname'] }}</a></span>
									@elseif ($post['credit'] != '')
										<span class="firma-home">{{ $post['credit'] }}</span>
									@endif
								</div>
							</article>
						@endforeach
						<div class="seguinos-vermas">
							<div class="redes">
								<ul>
									<li class="followus">Seguinos </li>
									<li class="instagram"><a href="https://www.instagram.com/reperfilar/" target="_blank">Instagram</a></li>
									<li class="twitter"><a href="https://twitter.com/reperfilar" target="_blank">Twitter</a></li>
									<li class="facebook"><a href="https://facebook.com/reperfilar" target="_blank">Facebook</a></li>
									<li class="youtube"><a href="https://www.youtube.com/perfiltv" target="_blank">Youtube</a></li>
								</ul>
							</div>
							<div class="vermas"><a href="/reperfilar/{{ $subchannel['slug'] }}" class="vermas">Ver más</a></div>
						</div>
					</div>
				@endif
			@endforeach
		</div>
		{{-- /Seccion --}}

	</main>

@endsection
