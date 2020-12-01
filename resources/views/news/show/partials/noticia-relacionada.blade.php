<div class="media noticia-relacionada">
   	<a href="{{ $url }}" title="{{ $title }}">
		@if ($type == '')
			<figure>
				<img src="{{ $image }}" class="mr-2 float-left" alt="{{ $title }}">
			</figure>
		@endif
		<h6>{{ __('Read more') }}...</h6>
		<h5>{{ $title }}</h5>
	</a>
</div>