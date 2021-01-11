<div class="tags">

	<h4>{{__('in this news')}}</h4>

<?php /*

	{{-- uol_tag1/celebrities --}}
	@if (count($noticia['tags_celebrities_list']))
	<ul id="tag-celebrities" class="etiquetas-nota">
		<label for="tag-celebrities">{{__('tag personalities')}}:</label>
		@foreach ($noticia['tags_celebrities_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	</ul>
	@endif
	{{-- uol_tag2/series --}}
	@if (count($noticia['tags_series_list']))
	<ul id="tag-series">
		<label for="tag-series">{{__('tag series')}}:</label>
		@foreach ($noticia['tags_series_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	</ul>
	@endif
	{{-- uol_tag3/movies --}}
	@if (count($noticia['tags_movies_list']))
	<ul id="tag-movies">
		<label for="tag-movies">{{__('tag movies')}}:</label>
		@foreach ($noticia['tags_movies_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	</ul>
	@endif
	{{-- uol_tag4/events --}}
	@if (count($noticia['tags_events_list']))
	<ul id="tag-events">
		 <label for="tag-events">{{__('tag events')}}:</label>
		@foreach ($noticia['tags_events_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	</ul>
	@endif
	{{-- uol_tag5/locations --}}
	@if (count($noticia['tags_locations_list']))
	<ul id="tag-locations">
		<label for="tag-locations">{{__('tag locations')}}:</label>   
		@foreach ($noticia['tags_locations_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	</ul>
	@endif
	{{-- uol_tag6/themes --}}
	@if (count($noticia['tags_themes_list']))
	
	<ul id="tag-themes">
		<label for="tag-themes">{{__('tag themes')}}:</label>
		@foreach ($noticia['tags_themes_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	</ul>
	@endif


*/ ?>



<ul>
	{{-- uol_tag1/celebrities --}}
	@if (count($noticia['tags_celebrities_list']))
		<label for="tag-celebrities">{{__('tag personalities')}}:</label>
		@foreach ($noticia['tags_celebrities_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	@endif
	{{-- uol_tag2/series --}}
	@if (count($noticia['tags_series_list']))
		<label for="tag-series">{{__('tag series')}}:</label>
		@foreach ($noticia['tags_series_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	@endif
	{{-- uol_tag3/movies --}}
	@if (count($noticia['tags_movies_list']))
		<label for="tag-movies">{{__('tag movies')}}:</label>
		@foreach ($noticia['tags_movies_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	@endif
	{{-- uol_tag4/events --}}
	@if (count($noticia['tags_events_list']))
		 <label for="tag-events">{{__('tag events')}}:</label>
		@foreach ($noticia['tags_events_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	@endif
	{{-- uol_tag5/locations --}}
	@if (count($noticia['tags_locations_list']))
		<label for="tag-locations">{{__('tag locations')}}:</label>   
		@foreach ($noticia['tags_locations_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	@endif
	{{-- uol_tag6/themes --}}
	@if (count($noticia['tags_themes_list']))
		<label for="tag-themes">{{__('tag themes')}}:</label>
		@foreach ($noticia['tags_themes_list'] as $tag)
		<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
		@endforeach
	@endif


</ul>























</div>