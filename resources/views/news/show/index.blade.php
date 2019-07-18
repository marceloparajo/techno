@inject('shortcodeConverter', "App\Http\Helpers\shortCodeConverter ")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@extends('layout.base')

@section('page-info')
ID: {{ $noticia['id'] }}
Imagen Portada: {{ $noticia['main_image']['id'] }}
@endsection

@section('structured-data-type')itemscope itemtype='https://schema.org/NewsArticle'@endsection 

@section('ads-sec', 'articulo')

@section('page-title', $noticia['home_title'])

@section('css')
	<link rel="stylesheet" type="text/css" href="{{ asset('vendors/lightgallery/css/lightgallery.min.css') }}">
@endsection

@section('js')
	<script type="text/javascript" src="{{ asset('vendors/lightgallery/js/lightgallery-all.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('vendors/lightgallery/js/lg-thumbnail.min.js') }}"></script>
	<script type="text/javascript" src="{{ mix('js/news-show.js') }}"></script>
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.1';
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
@endsection

@section('head-top')

	<link rel="preconnect" href="https://www.facebbook.com">
	<link rel="canonical" href="{{ $noticia['permalink'] }}">
@if ($noticia['google_amp']) 
	<link rel="amphtml" href="{{ route('news.amp.show', [$noticia['channel']['slug'], $noticia['slug']]) }}"> 
@endif
	@include('news.show.partials.social-tags')
	
@endsection

@section('head-bottom')
	<script type="application/ld+json">
		{!! json_encode($jsonStructured) !!}
	</script>

	{{-- @include('partials.taboola-sidebar-header') --}}
	{{-- @include('partials.taboola-news-header') --}}
	<noscript>
		<img src="http://b.scorecardresearch.com/p?c1=2&c2=6906401&cv=2.0&cj=1" />
	</noscript>

@endsection

@section('body-class', 'pf-new-show')

@section('body')
	<div class="container-fluid">
		<div class="container d-flex position-relative p-0">

			<!-- banners skycraper -->
			<div class="ad-160x600-left position-relative">
				<div id="" style="top:5em;margin-bottom:1em;" class="ads-space sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
			</div>
			<div class="ad-160x600-right position-relative">
				<div id="" style="top:5em;margin-bottom:1em;" class="ads-space sticky-top float-right text-right" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
			</div>
			<!-- //banners-skycrapper -->

			<div class="container col-article p-0">
				<div class="row m-0">
					<div class="noticia-cuerpo p-1 pt-2 pt-lg-3 pr-lg-4">
						<div class="d-flex flex-column-reverse flex-md-column">

							{{-- Fecha y Canal --}}
							<div class="mt-md-3 px-md-3">
								<h3 class="text-center text-secondary pb-1">{{ strtoupper($noticia['channel']['name']) }}  | <span>{{ $noticia['date_available_human'] }}</span></h3>
							</div>

							{{-- Titulos --}}
							<div class="pt-0 pt-m-2">
								<div class="col-12 headgroup px-1 px-md-3">
									<h1>{{ $noticia['title'] }}</h1>
									<p class="headline mt-3 text-secondary">
										{{ $noticia['headline'] }}
									</p>
								</div>
								<div class="col-12 p-0 text-center">
									<div id="" class="ads-space text-center d-lg-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
								</div>

								{{-- Author --}}
								@if ($noticia['signed'])
									@php
										$displayAuthor =  ($noticia['signed']) ? "block":'none';
									@endphp
								@endif

								@include('news.show.partials.author', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
								@include('news.show.partials.social-top')
							</div>

							@include('news.show.partials.main_image', ['gallery' => $noticia['gallery'], 'lightbox' => $noticia['gallery_lightbox'], 'main_content' => $noticia['main_content'], 'embed_code' => $noticia['embed_code'], 'channel_slug' => $noticia['channel']['slug']])
						</div>

						{{-- Cuerpo --}}
						<div class="new-body mt-3">
							<div class="position-absolute botones-redes">
								<div class="boton-redes-sociales position-sticky">
									<a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
										<i class="fas fa-share-alt"></i>
									</a>

									<div class="collapse" id="collapseExample">
										<ul>
											<li><a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" class="pinterest" target="_blank"><i class="fab fa-pinterest"></i></a></li>
											<li><a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" class="whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
											<li> <a class="twitter" href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-twitter"></i></a></li>
											<li><a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-12 px-1" id="news-body" style="overflow-x: hidden;">
								<div class="col-12 p-0 text-center mt-2">
									<div id="" class="ads-space text-center d-none d-lg-block d-xl-none" data-id="468x60x-pos-" data-w="468" data-h="60" data-loaded="false" data-reload="false"></div>
									<div id="" class="ads-space text-center d-none d-xl-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="false"></div>
								</div>

								{!! $body !!}

								{{-- Credit --}}
								@if (! $noticia['signed'] && $noticia['credit'] != '')
									<p>{{ __('by') }} {{ $noticia['credit'] }}</p>
								@endif

								{{-- Embed Code --}}
								@if ($noticia['embed_code'] != '' && $noticia['main_content'] != 'embed_code'))
									{!! $shortcodeConverter->convert($noticia['embed_code']) !!}
								@endif

								{{-- Gallery --}}
								@if (count($noticia['gallery']) > 1)
									<div class="col-12 border p-3">
										<h3>{{ __('Image Gallery') }}</h3>
										<div id="gallery-thumbnails" class="bottom-gallery">
											@foreach ($noticia['gallery'] as $image)
												<a href="{{ $image['srcs']['original'] }}" title="{{ $image['caption'] }}">
													<img src="{{ $image['srcs']['thumb']['250'] }}" alt="{{ $image['caption'] }}">
												</a>
											@endforeach
										</div>
									</div>
								@endif

								@include('partials.teads')

								<div id="" class="ads-space" data-id="interscroller" data-w="1" data-h="1" data-loaded="false" data-reload="false"></div>

								@include('news.show.partials.news-tags')
							</div>
						</div>

						@if ($noticia['signed'])
							@include('news.show.partials.author-bottom', ['author' => $noticia['author']])
						@endif

						{{-- Noticias sugeridas de otros sitios/revistas --}}
						@include('news.show.partials.suggested-site-news')

						{{-- Más Noticias (para los crawlers) --}}
						@include('news.show.partials.more-news-crawlers')

						<div class="col-12 p-0 d-lg-none text-center mt-2">
							<div id="" class="ads-space text-center d-lg-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
						</div>
						<div class="comments">
							<div class="col-12">
								<h4>{{ __('comments') }}</h4>
								<div class="fb-comments" data-href="{{ $noticia['permalink'] }}" data-numposts="10" data-width="100%"></div>
							</div>
						</div>
						<div class="col-12 p-0 d-lg-none text-center mt-2">
							<div id="" class="ads-space text-center d-lg-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false">
							</div>
						</div>

						@include('partials.outbrain-news')

					</div>

					{{-- Sidebar --}}
					<div class="d-flex pf-sidebar">
						@include('sidebar.index', ['content' => $sidebar_content])
					</div>
				</div>
			</div>
		</div>
	</div>

	@if (env('APP_MODE_PREVIEW', false))
		<a href="http://cmspress.perfil.com/admin/galerias/editar/{{ $noticia['id'] }}" target="_blank" class="float-button">
			<i class="fa fa-edit"></i>
		</a>
	@endif

@endsection
