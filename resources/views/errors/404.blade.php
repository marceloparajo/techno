@inject('sidebarHelper', "App\Http\Helpers\SidebarHelper")

@extends('layout.base')

@section('ads-sec',  'home')

@section('page-title', 'No encontramos el contenido')

@section('css')
    <style type="text/css">
        .article-link {
            color: black
        }

        .article-link:hover {
            text-decoration: none;
        }
    </style>
@endsection

@section('body')
    <div class="row p-0 m-0 mt-5">
        <div class="col-12 text-center">
            <h1>No hemos podido encontrar lo que andabas buscando.</h1>
            <h2>Pero puede que te interese el siguiente contenido.</h2>
        </div>
    </div>

    <div class="row m-0 p-0 mt-3">
        <div class="col-12 col-lg-10 offset-lg-1">
            <div class="row">
                @foreach ($sidebarHelper->getMostViewed(null, 8) as $noticia)
                    <div class="col-12 col-lg-3 mt-3">
                        <a class="article-link" href="{{ $noticia['url'] }}">
                            <article class="card" style="height: 400px;">
                                <img src="{{ $noticia['image'] }}" class="card-img-top" alt="" style="height: 250px;">
                                <div class="card-body">
                                    <h4 class="card-title">{{ $noticia['title'] }}</h4>
                                </div>
                            </article>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>


@endsection