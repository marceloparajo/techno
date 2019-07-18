@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if($key == 0 || $key % 5 == 0)
<div class="col-lg-12 col-xl-3 mb-3 biggest-standard-nota contiene-nota">
@elseif($key == 1 || ($key - 1) % 5 == 0)
<div class="col-lg-6 col-xl-6 mb-3 biggest-nota contiene-nota">
@elseif($key == 2 || ($key - 2) % 5 == 0)
<div class="col-lg-6 col-xl-3 mb-3 standard-nota contiene-nota">
@else
<div class="col-lg-4 mb-3 standard-nota contiene-nota">
@endif

	<article class="nota-article">
		<a class="article-link" href="{{ $noticia['permalink'] }}">
			<figure>
				{!! $imageHelper->getLazyImages( $noticia['main_image']['src'], 1140, $noticia['main_image']['caption'],'card-img') !!}
			</figure>
			<div class="data-nota">
				@if ($noticia['hat'] != '')
					<h3 class="hat">{{ $noticia['hat'] }}</h3>
				@else
					<h3 class="hat">{{ $noticia['channel']['name'] }}</h3>
				@endif
					<h2>{{ $noticia['home_title'] }}</h2>
					<h4 class="headline d-none d-xl-block">
						@if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
							<span class="date-time">
								{{ $noticia['date_available_human'] }}
							</span>
						@endif
						{{ $noticia['headline'] }}
					</h4>
					@if ($noticia['signed'] == 'S')
						<h4 class="author">
							{{ __('by') }} @if ($noticia['credit'] != '') {{ $noticia['credit'] }} @else {{ $noticia['author']['fullname'] }}
						</h4>
					@endif
				@endif
			</div>
		</a>
	</article>
</div>

@if($key == 3 || ($key - 3) % 5 == 0)
	<div class="col-lg-4 mb-3 px-lg-0">
		<div id="" class="ads-space ads-space-channel text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
	</div>
@endif