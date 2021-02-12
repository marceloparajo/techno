@extends('layout.base')

@section('page-title', 'Tránsito | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('head-css')
    <link rel="stylesheet" href="{{ mix('css/pages.css') }}">
@endsection

@section('body')
    <div class="container">
        <div class="content">
            <iframe src="https://embed.waze.com/es/iframe?zoom=14&amp;lat=-34.6037389&amp;lon=-58.3837591" width="950" height="600" style="border: 0;"></iframe>
        </div>
    </div>
@endsection
