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

@section('body-class', 'perfil-noticia')

@section('body')


	<main class="maincontainer" id="page">

		<header class="container articulo-header">
			<div class="hat">
				<a href="/seccion/{{ $noticia['channel']['slug']}}">{{ strtoupper($noticia['channel']['name']) }}</a>
				@if($noticia['hat'] != '')
				<span class="volanta">{{ $noticia['hat'] }}</span>
				@endif
			</div>

			{{-- Titulos --}}
			<h1>{{ $noticia['title'] }}</h1>
			<h2 class="headline">
				{{ $noticia['headline'] }}
			</h2>
			<span class="fecha">{{ $noticia['date_available_human'] }}</span>
		</header>

		<div class="container noticia">
			
			<article>

				{{-- Author --}}
				@if ($noticia['signed'])
					@include('news.show.partials.author', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
				{{-- Credit --}}
				@elseif (! $noticia['signed'] && $noticia['credit'] != '')
					<p>{{ __('by') }} {{ $noticia['credit'] }}</p>
				@endif



				@include('news.show.partials.main_image', ['gallery' => $noticia['gallery'], 'lightbox' => $noticia['gallery_lightbox'], 'main_content' => $noticia['main_content'], 'embed_code' => $noticia['embed_code'], 'channel_slug' => $noticia['channel']['slug']])


				<div class="news-body">
					{!! $body !!}



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

					
				</div>				

			</article>

			<aside class="sidebar">
			</aside>

		</div><!-- noticia -->



	</main> <!-- maincontainer -->

	@if (env('APP_MODE_PREVIEW', false))
		<a href="http://cmspress.perfil.com/admin/galerias/editar/{{ $noticia['id'] }}" target="_blank" class="float-button">
			<i class="fa fa-edit"></i>
		</a>
	@endif

@endsection
