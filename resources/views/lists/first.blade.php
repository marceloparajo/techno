@inject('imageHelper', "App\Http\Helpers\ImageHelper")

<div class="col-12 mb-3 p-1">
	<article class="pf-first-article">
		<a class="article-link" href="{{ $noticia['permalink'] }}">
			<figure>
				{!! $imageHelper->getLazyImages( $noticia['main_image']['src'], 1140, $noticia['main_image']['caption'],'card-img') !!}
			</figure>
			<div class="card-img-overlay d-flex flex-row">
			@if ($noticia['hat'] != '')<p class="pf-hat">{{ $noticia['hat'] }}</p>@endif
				<h2>{{ $noticia['home_title'] }} sera esta la primera</h2>
				<p class="headline">{{ $noticia['headline'] }}</p>
				@if ($noticia['signed'] == 'S')
					<p class="author">{{ __('by') }} @if ($noticia['credit'] != '') {{ $noticia['credit'] }} @else {{ $noticia['author']['fullname'] }} @endif</p>
				@endif
				@if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
					<p class="date">{{ __('Published on') }}: {{ $noticia['date_available_human'] }}</p>
				@endif
			</div>
		</a>
	</article>	
</div>