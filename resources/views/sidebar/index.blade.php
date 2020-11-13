<div class="row p-0 m-0">
    @foreach ($content as $item)
        @if (view()->exists('sidebar.dispositions.' . $item['template']))
            @include('sidebar.dispositions.' . $item['template'], ['news' => $item['news']])
        @endif
    @endforeach
</div>
@if (Route::currentRouteName() != "home.index")
<article class="article article-side bg-ads-space pt-0 pb-2 text-center position-sticky" style="top: 3.5em">
    <p>{{ __('ads space') }}</p>
    <div id="" class="d-none d-lg-block ads-space text-center" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false"></div>
</article>
@endif
<article class="d-none d-md-block d-lg-none d-lg-none article article-side bg-ads-space pt-2 pb-2 text-center position-sticky" style="top:3.5em;">
    <p>{{ __('ads space') }}</p>
 </article>