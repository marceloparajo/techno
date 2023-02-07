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
	<x-structured-data :noticia="$noticia" />
	<noscript>
		<img src="http://b.scorecardresearch.com/p?c1=2&c2=6906401&cv=2.0&cj=1" />
	</noscript>
@endsection

@section('body-class', 'perfil-noticia')

@section('body')


	<main class="news main container row max-width margin-auto">
		<div class="col-fluid d-xs-flex news__container" id="noticia">
			<header class="news__header">
				<div class="news__hat">
					<a href="/seccion/{{ $noticia['channel']['slug']}}">{{ strtoupper($noticia['channel']['name']) }}</a>

				</div>
				{{-- Titulos --}}
				<h1 class="news__title">{{ $noticia['title'] }}</h1>			
			</header>

			{{-- Featured Image or Video --}}
			@if ($noticia['featured_content'] == 'embed_code')
				<div class="news__media embed-responsive embed-responsive-16by9 videoContainer">
					{!! $noticia['embed_code'] !!}
				</div>
			@else
				<figure class="news__media btn-open-gallery">
					@if (count($noticia['gallery']) > 1)
						<a href="#" role="button" class="btn-open-gallery fotogaleria" title="Ver fotogaleria"><img src="/images/glyph/icon-enlarge.svg" alt="Ver fotogalería" width="22" height="22"></a>
					@endif
					<x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['title']"
						class="img-fluid"
						:sizes="[['v' => 320, 'w' => 720, 'h' => 405], 
						['v' => 360, 'w' => 720, 'h' => 405], 
						['v' => 375, 'w' => 720, 'h' => 405], 
						['v' => 414, 'w' => 720, 'h' => 405], 
						['v' => 768, 'w' => 720, 'h' => 405], 
						['v' => 1024, 'w' => 600, 'h' => 337], 
						['v' => 1280, 'w' => 856, 'h' => 481], 
						['v' => 1366, 'w' => 876, 'h' => 492]]"
						:lazy-load="false" />
					<figcaption class="figure-caption">{{ $noticia['main_image']['caption'] }}<span class="credito-foto"> | {{ $noticia['main_image']['credit']}}</span></figcaption>
				</figure>
			@endif
			<x-ad-space id="728x90x-pos-" width="728" height="90" class="ads d-xs-none d-xl-flex" min-height="90" max-height="250" margin-bottom="20" />

			<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-md-none" min-height="250" max-height="250" margin-bottom="20" />

			<article class="news__main-article">

				<aside class="news__sharing">
					@include('news.show.partials.social-top', ['shareText' => __('share')] )

				</aside>

				{{-- Article Body --}}	
				
				<div class="news__body">

					@if($noticia['headline'] != '.')
						<h2 class="news__headline">
							{{ $noticia['headline'] }}
							@if (count($noticia['gallery']) > 1)
								<a href="#" role="button" class="open-gallery" title="Ver fotogaleria">
									<img src="/images/glyph/hasgallerytext.png" width="20" height="16" alt="Galería de fotos">Galería de fotos
								</a>
							@endif
						</h2>
					@endif
					
					{{-- Author --}}
					@if ($noticia['signed'])
						<div class="autor">
							@include('news.show.partials.author', ['author' => $noticia['author'], 'displayAuthor'=>$displayAuthor  ])
						</div>
					@elseif (! $noticia['signed'] && $noticia['credit'] != '')
						<div class="autor autor--credito">
							<div class="autor-nota__nombre">
								{{ $noticia['credit'] }}
							</div>
						</div>
					@else 
						<div class="autor">
							<div class="autor-nota__nombre">
								Redacción Fortuna
							</div>
						</div>
					@endif
					

					<time class="news__date" datetime="{{ $noticia['date_available']->isoFormat('YYYY[-]MM[-]DD[T]hh[:]mm[:]ss[-03:00]') }}">{{ $noticia['date_available']->locale('es-ES')->isoFormat('dddd DD [de] MMMM [de] YYYY [ | ] hh[:]mm') }}</time>

						
					<div class="news__content">
						{!! $body !!}


						{{-- Embed Code --}}
						@if ($noticia['embed_code'] != '' && $noticia['featured_content'] != 'embed_code')
							{!! $noticia['embed_code'] !!}
						@endif

						{{-- Gallery --}}
						@if (count($noticia['gallery']) > 1)
							<div class="news__aside galeria-fotos">
								<div class="news__aside-title">Galería de imágenes</div>
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
						<x-ad-space id="728x90x-pos-" width="728" height="90" class="ads d-xs-none d-xl-flex" min-height="90" max-height="250" margin-bottom="20" />
						<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-xl-none" />

						@include('news.show.partials.news-tags')

					</div> {{-- news__content --}}

				</div> {{-- news__body --}}
				{{-- /Article Body --}}

			</article>

			<aside class="news__comments-suggested">

				{{-- Facebook Comments --}}
				<div class="news__comments">
						<div class="fb-comments" data-href="{{ $noticia['permalink'] }}" data-width="100%" data-numposts="3" data-colorscheme="light">
					</div>
				</div>
				{{-- / Facebook Comments --}}

				{{-- Outbrain --}}
				@if (env('OUTBRAIN_ENABLE', false))
					<div class="comments">
							<div class="OUTBRAIN" data-src="{{ $noticia['permalink'] }}" data-widget-id="AR_1" data-ob-template="exitoina"></div>
							<script defer type="text/javascript" src="https://widgets.outbrain.com/outbrain.js"></script>
							<style type="text/css" media="screen">.AR_1.ob-widget .ob_what {top: -30px !important;} .AR_1.ob-widget {padding-left: 0 !important;}</style>
					</div>
				@endif
				{{-- /Outbrain --}}

				{{-- Noticias sugeridas de otros sitios/revistas --}}
				<x-suggested-site-news />

				@include('news.show.partials.more-news-crawlers')


			</aside>

		</div><!-- noticia -->

		<div class="col-fixed-news">
			<x-ad-space id="300x250x-pos-" width="300" height="250" class="ads d-xs-block" min-height="250" max-height="250" margin-bottom="40" />
			<x-sidebar />
		</div>

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