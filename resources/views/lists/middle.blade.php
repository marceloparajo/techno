@inject('imageHelper', "App\Http\Helpers\ImageHelper")



	<article class="articulo">
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

	@if(($key + 1) % 4 == 0 && $key != 0)
			<div id="" class="ads-space ads-space-channel down-md up-xl" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
		</div>
		<div class="cuatro-notas">
	@endif

