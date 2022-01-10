@extends('layout.base')

@section('page-title', ucwords($channel) . ' | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('google-tag-manager')
	<x-google-tag-manager category="vitrina de notas" />
@endsection

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
	<script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')

<main class="main-container max-width margin-auto container-white considebar">


	<div class="seccion channel" id="{{ $sectionTitle }}">

		<h1 class="seccion-titulo {{ $sectionTitle }}">{{ $sectionTitle }}</h1>

		@foreach ($noticias as $noticia)

			<article class="articulo nota-{{ $loop->iteration }}">
				<a href="{{ $noticia['permalink'] }}">
					<figure>
						@if($loop->first)
							<x-lazy-image
								:src="$noticia['main_image']['srcs']['original']"
								:alt="$noticia['main_image']['title']"
								:sizes="[['v' => 320, 'w' => 318, 'h' => 180], ['v' => 360, 'w' => 358, 'h' => 201], ['v' => 375, 'w' => 373, 'h' => 210], ['v' => 414, 'w' => 412, 'h' => 232], ['v' => 768, 'w' => 333, 'h' => 187], ['v' => 1024, 'w' => 286, 'h' => 161], ['v' => 1366, 'w' => 857, 'h' => 482]]"
								class="img-fluid"
								max-width="700"
								:play-button="$noticia['has_video']"
								:camera-button="$noticia['has_gallery']" />
						@else
							<x-lazy-image
									:src="$noticia['main_image']['srcs']['original']"
									:alt="$noticia['main_image']['title']"
									:sizes="[['v' => 320, 'w' => 318, 'h' => 180], ['v' => 360, 'w' => 358, 'h' => 201], ['v' => 375, 'w' => 373, 'h' => 210], ['v' => 414, 'w' => 412, 'h' => 232], ['v' => 768, 'w' => 333, 'h' => 187], ['v' => 1024, 'w' => 286, 'h' => 161], ['v' => 1366, 'w' => 410, 'h' => 230]]"
									class="img-fluid"
									:play-button="$noticia['has_video']"
									:camera-button="$noticia['has_gallery']" />
						@endif
					</figure>
					<div class="meta-content">
						@if ($noticia['hat'] != '')
							<span class="hat">{{ $noticia['hat'] }}</span>
						@else
							<span class="hat">{{ $noticia['channel']['name'] }}</span>
						@endif
						<h2>{{ $noticia['home_title'] }}</h2>
						<p class="headline">{{ $noticia['headline'] }}</p>
						@if ($noticia['signed'])
							<span class="firma-home">
                    {{ __('by') }} {{ $noticia['author']['fullname'] }}
            </span>
						@elseif ($noticia['credit'] != '')
							<span class="firma-home">{{ $noticia['credit'] }}</span>
						@endif
					</div>
					@if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
						<span class="date-time">
                Publicado: {{ $noticia['date_available_human'] }}
            </span>
					@endif
				</a>
			</article>

		@endforeach

	</div>
	<!-- <aside class="sidebar">
		<x-sidebar />
	</aside> -->

</main>

@endsection
