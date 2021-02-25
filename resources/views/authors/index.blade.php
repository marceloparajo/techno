@extends('layout.base')

@section('page-title', 'Canales RSS | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('head-css')
    <link rel="stylesheet" href="{{ mix('css/pages.css') }}">
@endsection

@section('body')
    <div class="container">
        <div class="content">
            <ul>
                @foreach ($authors as $author)
                    <li>
                        <a href="{{ route('authors.show', $author['username']) }}">{{ $author['first_name'] }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
@endsection
