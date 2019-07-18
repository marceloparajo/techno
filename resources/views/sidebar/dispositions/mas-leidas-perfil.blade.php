@php
$title = '<a href="http://www.perfil.com/mas-leidas" style="border-left: 0px!important;">'.__("most viewed of").' Perfil <span class="in-other-lang">'.__("in spanish").'</span></a>';
@endphp
<div class="col-12 col-md-6 col-lg-12 p-lg-0 m-0 perfilcom">
    @include('sidebar.modules.most-viewed', ['site' => 'perfil', 'title' => $title])

    <article class="d-md-none d-lg-block article article-side bg-ads-space pt-0 pb-2 text-center">
        <p>{{ __('ads space') }}</p>
        <div id="" class="ads-space text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false"></div>
    </article>
</div>