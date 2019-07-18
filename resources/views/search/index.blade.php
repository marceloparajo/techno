@extends('layout.base')

@section('page-title', ucwords('buscador'))

@section('ads-sec', 'seccion')

@section('head-bottom')
    @include('partials.taboola-sidebar-header')
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
    <script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')
    <section class="container-fluid p-0 m-0 pf-title-container">
        <div class="col-xl-10 offset-xl-1 pf-title mb-0">
            <h1>{{ $sectionTitle }}</h1>
        </div>
    </section>

<section class="container-fluid p-0 mt-3 ml-0 mr-0">
        <div class="row m-0">

            <div class="col-ads-left d-none d-xl-block">
                <div id="" class="ads-space text-center sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
            </div>

            <div class="col-articles">
                <div class="row m-0">

                    {{-- Contenido 468x60 --}}
                    <div class="col-lg-8 col-xxl-9 p-1">
                        <div class="row m-0">

<!-- {{ env("APP_NAME","")}} search -->
<script>
  (function() {
    var cx = '{{ env("BUSCADOR_ID_GOOGLE", "") }}';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>
<!-- /{{ env("APP_NAME","")}} search -->

                        </div>
                    </div>

                    {{-- Sidebar --}}
                    <div class="d-none d-lg-block col-lg-4 col-xxl-3 pf-sidebar">
                        @include('sidebar.index', ['content' => $sidebar_content])
                    </div>
                </div>
            </div>

            <div class="col-ads-right d-none d-xxl-block">
                <div id="" class="ads-space text-center sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
            </div>

        </div>
    </section>
@endsection