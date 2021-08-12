@extends('layout.base')

@section('page-info')
	<meta name="article-id" content="{{ $noticia['id'] }}">
	<meta name="featured-image-id" content="{{ $noticia['main_image']['id'] }}">
@endsection

@section('google-tag-manager')
	<x-google-tag-manager category="nota" :info="$noticia" />
@endsection

@section('ads-sec', 'articulo')

@section('page-title', $noticia['short_title'] . ' | ' . env('APP_ALTER_NAME', 'Perfil'))
@section('page-description', $noticia['headline'])

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/news-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/news-low.css') }}" media="print" onload="this.media='all'">
	<link rel="stylesheet" href="{{ asset('vendors/lightgallery/css/lightgallery.min.css') }}" media="print" onload="this.media='all'">
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


	<main class="main-container max-width margin-auto container-white considebar">

		<div class="seccion noticia" id="noticia">

			<header class="articulo-header">
				<div class="hat">
					<a href="/seccion/{{ $noticia['channel']['slug']}}">{{ strtoupper($noticia['channel']['name']) }}</a>
					<span class="hat__fecha">
						{{ $noticia['date_available_human'] }}
					</span>

				</div>
				{{-- Titulos --}}
				<h1>{{ $noticia['title'] }}</h1>
				@if($noticia['headline'] != '.')
					<h2 class="headline">
						{{ $noticia['headline'] }}
						@if (count($noticia['gallery']) > 1)
						<a href="#" role="button" class="abrirgaleria" title="Ver fotogaleria"><img src="/images/glyph/hasgallerytext.png" width="20" height="16" alt="Galería de fotos">Galería de fotos</a>
					@endif
					</h2>
				@endif

			</header>


			{{-- Featured Image or Video --}}
			
			@if ($noticia['featured_content'] == 'embed_code')
				<div class="media embed-responsive embed-responsive-16by9 videoContainer">
					{!! $noticia['embed_code'] !!}
				</div>
			@else
				<figure class="media figure btn-open-gallery">
					@if (count($noticia['gallery']) > 1)
						<a href="#" role="button" class="btn-open-gallery fotogaleria" title="Ver fotogaleria"></a>
					@endif
					<x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['title']" max-width="900" :lazy-load="false" />
					<figcaption class="figure-caption">{{ $noticia['main_image']['caption'] }}<span class="credito-foto"> | {{ $noticia['main_image']['credit']}}</span></figcaption>
				</figure>
			@endif



			<article class="main-article">

				<x-ad-space id="central_728x90x-pos-" width="728" height="90" class="ads d-xs-none d-xl-flex" min-height="90" max-height="280" />
				<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="ads d-lg-none" min-height="250" max-height="250" margin-bottom="20" />

				{{-- Article Body --}}
				<div class="news-body">
						{{-- Author --}}
						@if ($noticia['signed'])
							<div class="autor">
								@include('news.show.partials.author', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
							</div>
						{{-- Credit --}}
						@elseif (! $noticia['signed'] && $noticia['credit'] != '')
							<div class="autor">{{ $noticia['credit'] }}</div>
						@endif


					@include('news.show.partials.social-top', ['shareText' => __('share')] )

					<div class="news-content">

						{{-- Más Noticias (para los crawlers) --}}
						{{--@include('news.show.partials.more-news-crawlers')--}}

						{!! $body !!}

						{{-- Embed Code --}}
						@if ($noticia['embed_code'] != '' && $noticia['featured_content'] != 'embed_code')
							{!! $noticia['embed_code'] !!}
						@endif

						{{-- Gallery --}}
						@if (count($noticia['gallery']) > 1)
							<div class="galeria-fotos">
								<div class="galeria-fotos__title">Galería de imágenes</div>
								<div class="galeria-fotos__fotos" id="images-gallery">
									@foreach ($noticia['gallery'] as $image)
										<a href="{{ $image['srcs']['original'] }}" title="{{ $image['caption'] }}">
											<img src="{{ $image['srcs']['thumb']['100'] }}" alt="{{ $image['caption'] }}" class="lazyload" loading="lazy">
										</a>
									@endforeach
								</div>
							</div>
						@endif
						{{--  /Gallery --}}

						@include('news.show.partials.noticias-relacionadas', ['news' => $noticia['relacionadas']])

						<x-ad-space id="central_728x90x-pos-" width="728" height="90" class="ads d-xs-none d-xl-flex" />
						<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="ads d-xl-none" />

						@include('news.show.partials.news-tags')

					</div>

				</div>
				{{-- /Article Body --}}

				{{-- Facebook Comments --}}
				<div class="comments">
					<div class="col-12">
						<h4></h4>
						<div class="fb-comments" data-href="{{ $noticia['permalink'] }}" data-width="100%" data-numposts="3" data-colorscheme="light"></div>
					</div>
				</div>
				{{-- / Facebook Comments --}}

				{{-- Noticias sugeridas de otros sitios/revistas --}}
				<x-suggested-site-news />

				{{-- Outbrain --}}
				@if (env('OUTBRAIN_ENABLE', false))
					<div class="comments">
						<div class="col-12">
							<h4></h4>
							<div class="OUTBRAIN" data-src="https://www.perfil.com/noticias/politica/sera-necesario-el-aval-del-congreso-para-tomar-deuda-en-moneda-extranjera.phtml" data-widget-id="AR_2" data-ob-template="perfil"></div>
							<script defer type="text/javascript" src="https://widgets.outbrain.com/outbrain.js"></script>
							<style type="text/css" media="screen">.AR_2.ob-widget .ob_what {top: -30px !important;} .AR_2.ob-widget {padding-left: 0 !important;}</style>
						</div>
					</div>
				@endif
				{{-- /Outbrain --}}

			</article>

		</div><!-- noticia -->

		<aside class="sidebar">
			<x-sidebar />
		</aside>

	</main> <!-- maincontainer -->

	@if (env('APP_MODE_PREVIEW', false))
		<a href="http://cmspress.perfil.com/admin/galerias/editar/{{ $noticia['id'] }}" target="_blank" class="float-button">
			<i class="fa fa-edit"></i>
		</a>
	@endif

@endsection