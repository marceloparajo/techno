@if ( isset($noticia['previous_news']) && count($noticia['previous_news']) > 0 )
<div class="previous_news">
	<h4>{{ __('previous news of') }} "{{ ucfirst($noticia['channel']['name']) }}"</h4>
	<ul>
		@foreach ($noticia['previous_news'] as $new)
		<li><a href="{{ asset($new['permalink']) }}">{{ $new['title'] }}</a></li>
		@endforeach
	</ul>
</div>
@endif