<div class="content-sidebar">
    @foreach ($content as $item)
		{{ dd($item) }}
		<x-sidebar />
        @if (view()->exists('sidebar.dispositions.' . $item['template']))
            @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
        @endif
    @endforeach
	@if (Route::currentRouteName() != "home.index")
	<article class="article article-side bg-ads-space" style="top: 3.5em">
	    <p>{{ __('ads space') }}</p>
	    <div id="" class="ads-space text-center" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false"></div>
	</article>
	@endif



{{-- TODO: Las más leidas en sidebar. Esto es solo html harcodeado --}}





{{-- TODO: Divisas --}}



</div>
