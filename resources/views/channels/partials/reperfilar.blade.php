@inject('shortcodeConverter', "App\Http\Helpers\shortCodeConverter ")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")


<div class="header-reperfilar">
	<div class="reperfilar-logo">Reperfilar</div>
	<nav class="reperfilar-menu">

		<div class="secciones">
			<div class="menu-secciones-barras">
				<div class="barra"></div>
				<div class="barra"></div>
				<div class="barra"></div>
			</div>
			<label for="rsecciones">Secciones</label>
			<input type="checkbox" id="rsecciones" />
		</div>

		<ul id="reperfilar-nav">
			<li>
				<a href="/reperfilar#actualidad">actualidad</a></li><li><a href="/reperfilar#politica">política</a>
			</li>
			<li>
				<a href="/reperfilar#economia">economía</a></li><li><a href="/reperfilar#columnistas">columnistas</a>
			</li>
			<li>
				<a href="/reperfilar#programas">programas completos</a>
			</li>
			<li class="seguinos">
				<a>Seguinos <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
				<ul>
					<li>
						<a href="https://www.instagram.com/reperfilar/" target="_blank"><span class="fa fa-instagram"></span></a>
					</li>
					<li>
						<a href="https://twitter.com/reperfilar" target="_blank"><span class="fa fa-twitter-square"></span></a>
					</li>
					<li>
						<a href="https://facebook.com/reperfilar" target="_blank"><span class="fa fa-facebook-square"></span></a>
					</li>
					<li>
						<a href="https://www.youtube.com/perfiltv" target="_blank"><span class="fa fa-youtube-play"></span></a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>
<main class="supercontenedor reperfilar">

	<h1 class="seccion-titulo">{{ $sectionTitle }}</h1>

	<div class="contenido canal {{ $sectionTitle }}">

		<div class="reperfilar-main-content" >

			@foreach(array_slice($noticias, 0, 5) as $key => $noticia)



				<article class="articulo">



					@if($key == 0)

						{{-- Embed Code --}}
						@if ($noticia['embed_code'] != '')
							@php
								if (STRPOS($noticia['embed_code'], 'rudo') || STRPOS($noticia['embed_code'], 'tube')  ) {
							@endphp
								{!! $shortcodeConverter->convert($noticia['embed_code']) !!}
							@php
								} 
							@endphp
						@else 
						<figure>
							<a href="{{ $noticia['permalink'] }}">
								{!! $imageHelper->getLazyImages( $noticia['main_image']['src'], 540, $noticia['main_image']['caption'],'card-img') !!}
								@if ($noticia['has_video']) 
									<div class="galeria-video">
										<span><i class="fa fa-play"></i></span>
									</div>
								@endif
								@if ($noticia['has_gallery'])
									<div class="galeria-video">
										<span><i class="fa fa-camera"></i></span>
									</div>
								@endif
							</a>
						</figure>
						@endif


					@else


					<figure>
						<a href="{{ $noticia['permalink'] }}">
							{!! $imageHelper->getLazyImages( $noticia['main_image']['src'], 540, $noticia['main_image']['caption'],'card-img') !!}
							@if ($noticia['has_video']) 
								<div class="galeria-video">
									<span><i class="fa fa-play"></i></span>
								</div>
							@endif
							@if ($noticia['has_gallery'])
								<div class="galeria-video">
									<span><i class="fa fa-camera"></i></span>
								</div>
							@endif
						</a>
					</figure>

					@endif

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


			@endforeach

		</div>

	</div>

</main>