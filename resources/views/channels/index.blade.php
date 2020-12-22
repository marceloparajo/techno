@extends('layout.base')

@section('page-title', ucwords($channel))

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
	
	@if($channel == 'reperfilar')
		@include('channels.partials.reperfilar')
	@else
		@include('channels.partials.standard')
	@endif

@endsection