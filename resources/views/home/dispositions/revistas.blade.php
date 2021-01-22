@if (isset($news) && count($news) > 0)
	<x-block-revistas :id="$id" :news="$news" />
@endif
