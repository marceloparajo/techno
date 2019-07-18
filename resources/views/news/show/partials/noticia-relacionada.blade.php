<div class="media noticia-relacionada row">
	<div class="content-related flex-shrink-1">
    @if ($type == '')
        <a href="{{ $url }}" title="{{ $title }}"><img src="{{ $image }}" class="mr-2 float-left" alt="{{ $title }}"></a>
    @endif
		<h6><a href="{{ $url }}" title="{{ $title }}">{{ __('Read more') }}...</a></h6>
		<h5><a href="{{ $url }}" title="{{ $title }}">{{ $title }}</a> <a href="{{ $url }}" class="round-btn"></a></h5>
	</div>
	<div class="banner-related">
		<div id="" class="ads-space text-center" data-id="320x50x-pos-" data-w="320" data-h="50" data-loaded="false" data-reload="false"></div>
	</div>
</div>