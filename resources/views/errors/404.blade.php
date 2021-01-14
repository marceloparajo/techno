@inject('sidebarHelper', "App\Http\Helpers\SidebarHelper")

@extends('layout.base')

@section('ads-sec',  'home')

@section('page-title', 'No encontramos el contenido')





@section('head-top')
    <link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
    @include('partials.taboola-sidebar-header')
@endsection

@section('head-css')
    <link rel="preload" href="{{ mix('css/channels.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{ mix('css/news.css') }}"></noscript>

    <link rel="preload" href="{{ mix('css/channels-responsive.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{ mix('css/news-responsive.css') }}"></noscript>
@endsection

@section('body-class', 'pf-channel-show')

@section('js')
    <script defer type="text/javascript" src="{{ mix('js/channels-show.js') }}"></script>
@endsection



@section('body')
    <main class="supercontenedor">
        <h1 class="seccion-titulo">No hemos podido encontrar lo que estabas buscando.</h1>

        <div class="contenido canal">
            <div class="cuatro-notas"> 

                @foreach ($sidebarHelper->getMostViewed(null, 8) as $noticia)
                    <article class="articulo">
                        <figure>
                            <a class="article-link" href="{{ $noticia['url'] }}">
                                <img src="{{ $noticia['image'] }}" class="  card-img-top" alt="" style="height: 250px;">
                            </a>
                        </figure>
                        <div class="meta-content">
                            <a class="article-link" href="{{ $noticia['url'] }}">
                                <h4 class="card-title">{{ $noticia['title'] }}</h4>
                            </a>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>



        <div class="sidebar">
        </div>

    </main>


@endsection