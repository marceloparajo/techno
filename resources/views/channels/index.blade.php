@extends('layout.base')

@section('page-title', ucwords($channel))

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

@section('ads-sec', 'seccion')

@section('head-top')
    <link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/channels-high.css') }}">

	<link rel="stylesheet" href="{{ mix('css/channels-low.css') }}" media="print" onload="this.media='all'">
	<link rel="stylesheet" href="{{ mix('css/channels-responsive.css') }}" media="print" onload="this.media='all'">
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

	<main class="supercontenedor">

		<h1 class="seccion-titulo {{ $sectionTitle }}">{{ $sectionTitle }}</h1>

		<div class="contenido canal {{ $sectionTitle }}">
			<div class="cuatro-notas">

				@foreach ($noticias as $noticia)

					<article class="articulo">
						<figure>
							<a href="{{ $noticia['permalink'] }}">
								<x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$noticia['has_video']" :camera-button="$noticia['has_gallery']" />
							</a>
						</figure>
						<div class="meta-content">
							<a href="{{ $noticia['permalink'] }}">
								@if ($noticia['hat'] != '')
									<h3 class="hat">{{ $noticia['hat'] }}</h3>
								@else
									<h3 class="hat">{{ $noticia['channel']['name'] }}</h3>
								@endif
								<h2>{{ $noticia['home_title'] }}</h2>
								@if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
									<p class="date-time">
										{{ $noticia['date_available_human'] }}
									</p>
								@endif
								<p class="headline">{{ $noticia['headline'] }}</p>
							</a>
							@if ($noticia['signed'])
								<span class="firma-home">
									<a href="/autores/{{$noticia['author']['username']}}">
										{{ __('by') }} {{ $noticia['author']['fullname'] }}
									</a>
								</span>
							@elseif ($noticia['credit'] != '')
								<span class="firma-home">{{ $noticia['credit'] }}</span>
							@endif
						</div>
					</article>

					@if (($loop->iteration + 4) % 8 == 0)
						</div>
						<div class="cuatro-notas"> 

						<x-ad-space id="central_300x250x-pos-" width="300" height="250" style-width="auto" class="d-none show-xxl" style="grid-area:tl" />
						<x-ad-space id="central_300x250x-pos-" width="300" height="250" class="hide-sm" />
					@elseif ($loop->iteration % 4 == 0)
						</div>
						<div class="cuatro-notas"> 

					@endif

					{{--
					@if ($loop->iteration > 4 && $loop->iteration % 4 == 1)					@endif
					--}}
				@endforeach

			</div>

		</div>

		<aside class="sidebar">
			<x-sidebar />
		</aside>

	</main>

@endsection
