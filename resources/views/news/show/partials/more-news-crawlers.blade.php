@if ( isset($noticia['previous_news']) && count($noticia['previous_news']) > 0 )
<aside class="news__aside">
	<div class="news__aside-title">{{ __('previous news of') }} "{{ ucfirst($noticia['channel']['name']) }}"</div>
	<div class="noticias-crawlers">
		@foreach ($noticia['previous_news'] as $new)
		<article><a href="{{ asset($new['permalink']) }}">{{ $new['title'] }}</a></article>
		@endforeach
	</div>
</aside>
@endif