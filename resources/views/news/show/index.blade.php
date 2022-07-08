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
				<figure class="btn-open-gallery">
					@if (count($noticia['gallery']) > 1)
						<a href="#" role="button" class="btn-open-gallery fotogaleria" title="Ver fotogaleria"></a>
					@endif
						<x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['title']"
									  class="img-fluid"
									  :sizes="[['v' => 320, 'w' => 320, 'h' => 180], ['v' => 360, 'w' => 360, 'h' => 202], ['v' => 375, 'w' => 375, 'h' => 211], ['v' => 414, 'w' => 414, 'h' => 233], ['v' => 768, 'w' => 720, 'h' => 405], ['v' => 1024, 'w' => 635, 'h' => 357], ['v' => 1366, 'w' => 950, 'h' => 534]]"
									  :lazy-load="false" />
					<figcaption class="figure-caption">{{ $noticia['main_image']['caption'] }}<span class="credito-foto"> | {{ $noticia['main_image']['credit']}}</span></figcaption>
				</figure>
			@endif
			<x-ad-space id="728x90x-pos-" width="728" height="90" class="ads d-xs-none d-lg-flex" min-height="90" max-height="250" margin-bottom="20" />

			<article class="main-article">

				<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-lg-none" min-height="250" max-height="250" margin-bottom="20" />

				{{-- Article Body --}}
				<div class="news-body">
						{{-- Author
						@if ($noticia['signed'])
							<div class="autor">
								@include('news.show.partials.author', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
							</div>
						@elseif (! $noticia['signed'] && $noticia['credit'] != '')
							<div class="autor">{{ $noticia['credit'] }}</div>
						@endif
						--}}

					@include('news.show.partials.social-top', ['shareText' => __('share')] )

					<div class="news-content">
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
											<x-lazy-image
												:src="$image['src']"
												:alt="$image['title']"
												class="img-fluid"
												:sizes="[['v' => 320, 'w' => 97, 'h' => 97], ['v' => 360, 'w' => 110, 'h' => 110], ['v' => 375, 'w' => 115, 'h' => 115], ['v' => 414, 'w' => 128, 'h' => 128], ['v' => 768, 'w' => 111, 'h' => 111], ['v' => 1024, 'w' => 96, 'h' => 96], ['v' => 1366, 'w' => 137, 'h' => 137]]"
												:lazy-load="false" />
										</a>
									@endforeach
								</div>
							</div>
						@endif
						{{--  /Gallery --}}

						@include('news.show.partials.noticias-relacionadas', ['news' => $noticia['relacionadas']])
						<x-ad-space id="728x90x-pos-" width="728" height="90" class="ads d-xs-none d-lg-flex" min-height="90" max-height="250" margin-bottom="20" />
						<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-xl-none" />

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
							<div class="OUTBRAIN" data-src="{{ $noticia['permalink'] }}" data-widget-id="AR_1" data-ob-template="exitoina"></div>
							<script defer type="text/javascript" src="https://widgets.outbrain.com/outbrain.js"></script>
							<style type="text/css" media="screen">.AR_1.ob-widget .ob_what {top: -30px !important;} .AR_1.ob-widget {padding-left: 0 !important;}</style>
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

	<x-ad-space id="inline" width="1" height="1" class="ads" min-height="1" max-height="1" />
	<x-ad-space id="interscroller" width="1" height="1" class="ads" min-height="1" max-height="1" />
	<x-ad-space id="teads" width="1" height="1" class="ads" min-height="1" max-height="1" />
@endsection