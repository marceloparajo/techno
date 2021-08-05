<div class="tags">

	<div class="tags__titulo">{{__('in this news')}}</div>





	<ul class="tags__listado">
		{{-- uol_tag1/celebrities --}}
		@if (count($noticia['tags_celebrities_list']))
			<label for="tag-celebrities">@lang('Personalidades'):</label>
			@foreach ($noticia['tags_celebrities_list'] as $tag)
				@if (trim($tag['name']) != '')
					<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
				@endif
			@endforeach
		@endif
		{{-- uol_tag2/series --}}
		@if (count($noticia['tags_series_list']))
			<br />
			<label for="tag-series">@lang('Series'):</label>
			@foreach ($noticia['tags_series_list'] as $tag)
				@if (trim($tag['name']) != '')
					<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
				@endif
			@endforeach
		@endif
		{{-- uol_tag3/movies --}}
		@if (count($noticia['tags_movies_list']))
			<br />
			<label for="tag-movies">@lang('Películas'):</label>
			@foreach ($noticia['tags_movies_list'] as $tag)
				@if (trim($tag['name']) != '')
					<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
				@endif
			@endforeach
		@endif
		{{-- uol_tag4/events --}}
		@if (count($noticia['tags_events_list']))
			<br />
			<label for="tag-events">@lang('Eventos'):</label>
			@foreach ($noticia['tags_events_list'] as $tag)
				@if (trim($tag['name']) != '')
					<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
				@endif
			@endforeach
		@endif
		{{-- uol_tag5/locations --}}
		@if (count($noticia['tags_locations_list']))
			<br />
			<label for="tag-locations">@lang('Lugares'):</label>
			@foreach ($noticia['tags_locations_list'] as $tag)
				@if (trim($tag['name']) != '')
					<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
				@endif
			@endforeach
		@endif
		{{-- uol_tag6/themes --}}
		@if (count($noticia['tags_themes_list']))
			<br />
			<label for="tag-themes">@lang('Temas'):</label>
			@foreach ($noticia['tags_themes_list'] as $tag)
				@if (trim($tag['name']) != '')
					<li><a href="{{ $tag['route'] }}" >{{ $tag['name'] }}</a></li>
				@endif
			@endforeach
		@endif

	</ul>

</div><!-- tags -->