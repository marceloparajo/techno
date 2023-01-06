<aside class="suggested-news">
   	<a href="{{ $url }}" title="{{ $title }}">
		@if ($type == '')
			<figure class="suggested-news__media">
				<img src="{{ $image }}" class="lazyload" alt="{{ $title }}">
			</figure>
		@endif
		<div class="sugested-news__content">
		<span class="suggested-news__hat">Leé también</span>		<span class="suggested-news__title">{{ $title }}</span>
		</div>
	</a>
</aside>
