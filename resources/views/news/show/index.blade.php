@inject('shortcodeConverter', "App\Http\Helpers\shortCodeConverter ")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@extends('layout.base')

@section('page-info')
ID: {{ $noticia['id'] }}
Imagen Portada: {{ $noticia['main_image']['id'] }}
@endsection

@section('structured-data-type', 'itemscope itemtype="https://schema.org/NewsArticle"')

@section('ads-sec', 'articulo')

@section('page-title', $noticia['home_title'])

@section('head-css')
	<link rel="preload" href="{{ mix('css/news.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news.css') }}"></noscript>

	<link rel="preload" href="{{ mix('css/news-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ mix('css/news-responsive.css') }}"></noscript>

	<link rel="preload" href="{{ asset('vendors/lightgallery/css/lightgallery.min.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="{{ asset('vendors/lightgallery/css/lightgallery.min.css') }}"></noscript>
@endsection

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/news-show.js') }}"></script>
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.1';
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>

	@if (env('ADS_ENABLE', false) && env('TEADS_ENABLE', false) && env('ADS_CLIENT', '') != '')
		<script defer type="text/javascript" src="https://ads.us.e-planning.net/eb/3/{{ env("ADS_CLIENT") }}/articulo/teads?o=j&crs=UTF-8"></script>
	@endif

	@if (env('OUTBRAIN_ENABLE', false) && env('ADS_ENABLE', false))
		<script defer type="text/javascript" src="https://widgets.outbrain.com/outbrain.js"></script>
	@endif
@endsection

@section('paywall-config')
	<script type="text/javascript">
		window.paywallConfig.contentType = 'articulo';
		window.paywallConfig.type = window.sharedData.paywall.type;
		window.perfilContent = {
			id: window.sharedData.paywall.content_id,
			canal: window.sharedData.paywall.content_canal,
			title: window.sharedData.paywall.content_title,
			show_metered_paywall: window.sharedData.paywall.show_metered_modal,
			paywall_type: window.sharedData.paywall.type,
			date: window.sharedData.paywall.content_date,
			body_length: window.sharedData.paywall.content_length,
			author: {
				id: window.sharedData.paywall.author_id,
				username: window.sharedData.paywall.author_username,
				fullname: window.sharedData.paywall.author_fullname
			}
		}
	</script>
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
	<noscript>
		<img src="http://b.scorecardresearch.com/p?c1=2&c2=6906401&cv=2.0&cj=1" />
	</noscript>
@endsection

@section('body-class', 'perfil-noticia')

@section('body')


	<main class="supercontenedor {{ $noticia['channel']['slug']}}" id="page">

		<header class="articulo-header">
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
		</header>

		<div class="container" id="noticia">

			<article class="main-article">

				{{-- Featured Image or Video --}}
				@if ($noticia['featured_content'] == 'embed_code')
					{!! $noticia['embed_code'] !!}
				@else
					<figure class="figure btn-open-gallery" itemscope itemprop="image" itemtype="https://schema.org/ImageObject">
						@if (count($noticia['gallery']) > 1)
							<a href="#" role="button" class="btn-open-gallery fotogaleria" title="{{ __('show fotogallery') }}"><i class="fas fa-expand-arrows-alt"></i></a>
						@endif
						<x-lazy-image :src="$noticia['main_image']['srcs']['original']" />
						<figcaption class="figure-caption">{{ $noticia['main_image']['caption'] }}<span class="credito-foto"> | {{ $noticia['main_image']['credit']}}</span></figcaption>
					</figure>
				@endif

				{{-- Article Body --}}
				<div class="news-body">
					<div class="fecha-autor">
						{{-- Author --}}
						@if ($noticia['signed'])
							<div class="autor">
								@include('news.show.partials.author', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
							</div>
						{{-- Credit --}}
						@elseif (! $noticia['signed'] && $noticia['credit'] != '')
							<div class="autor">{{ $noticia['credit'] }}</div>
						@endif
						<div class="fecha">
							{{ $noticia['date_available_human'] }}
						</div>
					</div>

					@include('news.show.partials.news-tags')

					@include('news.show.partials.social-top', ['shareText' => __('share')] )

					<div class="news-content">
						{!! $body !!}

						{{-- Embed Code
						@if ($noticia['embed_code'] != '' && $noticia['main_content'] != 'embed_code')
							{!! $shortcodeConverter->convert($noticia['embed_code']) !!}
						@endif--}}

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

						{{-- Author
						@if ($noticia['signed'])
							@include('news.show.partials.author-bottom', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
						@endif
						--}}

						@include('news.show.partials.news-tags')

					</div>

					{{-- Más Noticias (para los crawlers) --}}
					@include('news.show.partials.more-news-crawlers')

				</div>
				{{-- /Article Body --}}

				{{-- Noticias sugeridas de otros sitios/revistas --}}
				@include('news.show.partials.suggested-site-news')

				{{-- Outbrain --}}
				@if (env('OUTBRAIN_ENABLE', false) && env('ADS_ENABLE', false))
					<div class="comments">
						<div class="col-12">
							<h4></h4>
							<div class="OUTBRAIN" data-src="{{ $noticia['permalink'] }}" data-widget-id="AR_1" data-ob-template="perfil"></div>
						</div>
					</div>
				@endif
				{{-- /Outbrain --}}

			</article>

			<aside class="sidebar">
				@include('sidebar.index', ['content' => $sidebar_content])
			</aside>

		</div><!-- noticia -->



	</main> <!-- maincontainer -->

	@if (env('APP_MODE_PREVIEW', false))
		<a href="http://cmspress.perfil.com/admin/galerias/editar/{{ $noticia['id'] }}" target="_blank" class="float-button">
			<i class="fa fa-edit"></i>
		</a>
	@endif

@endsection
