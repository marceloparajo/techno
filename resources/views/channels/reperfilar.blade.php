@extends('layout.base')

@section('page-title', $page_title)

@section('ads-sec', 'seccion')

@section('head-css')
    <link rel="preload" href="{{ mix('css/reperfilar-channels.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{ mix('css/reperfilar-channels.css') }}"></noscript>

    <link rel="preload" href="{{ mix('css/reperfilar-channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{ mix('css/reperfilar-channels-responsive.css') }}"></noscript>
@endsection

@section('js')
    <script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection

@section('body-class', 'pf-channel-show')

@section('body')

    @include('partials.reperfilar-header')
    

    <div class="contenedorGeneral reperfilar" id="reperfilar">
        <div class="noticias">
            <div class="listado-subchannel">
                @foreach (array_slice($posts, 0, 40) as $post)
                    <article class="articulo tipo-reperfilar">
                        <x-lazy-image :src="$post['main_image']['srcs']['original']" play-button="true" />
                        <h2>{{ $post['home_title'] }}</h2>
                        <div class="meta-content">
                            <a href="{{ $post['permalink'] }}">
                                <h2>{{ $post['home_title'] }}</h2>
                                <h3>{{ $post['headline'] }}</h3>
                            </a>
                            @if ($post['signed'])
                                <h5><a href="/autor/{{ $post['author']['username'] }}" title="Ir a Página de autor">Por {{ $post['author']['fullname'] }}</a></h5>
                            @elseif ($post['credit'] != '')
                                <h5>Por {{ $post['credit'] }}</h5>
                            @endif
                        </div>
                    </article>
                @endforeach
            </div>
        </div>
    </div>
@endsection
