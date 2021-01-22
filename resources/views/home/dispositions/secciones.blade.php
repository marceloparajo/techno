@if (isset($news) && count($news) > 3)
	<x-block-secciones :news="$news" :id="$id" />
@endif
