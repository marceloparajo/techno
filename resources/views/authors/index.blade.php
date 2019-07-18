@extends('layout.base')

@section('page-title', 'Noticias de ' . $author['fullname'])

@section('ads-sec', 'seccion')

@section('head-top')
    <link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
    @include('partials.taboola-sidebar-header')
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
    <script type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body')
    <section class="container-fluid py-1 m-0 pf-title-container">
        <div class="container py-0 pf-title mb-0">
            <h1>{{ __('news of') }} {{ $author['fullname'] }}</h1>
        </div>
    </section>

    <section class="container-fluid p-0 mt-3 ml-0 mr-0">
        <div class="container">

            <div class="col-ads-left d-none d-xl-block">
                <div id="" class="ads-space text-center sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
            </div>
            <div class="row m-2">
            @include('news.show.partials.author', ['author' => $author, 'displayAuthor'=>'block'  ])
            </div>
            <div class="row m-0">

            @foreach ($noticias as $key => $noticia)
                @include('lists.index', ['noticia' => $noticia])

            @endforeach
                
            </div>

            <div class="col-ads-right d-none d-xl-block">
                <div id="" class="ads-space text-center sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
            </div>

        </div>
    </section>
@endsection