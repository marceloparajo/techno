@extends('layout.base')

@section('ads-sec',  'home')

@section('head-meta')
	<meta http-equiv="refresh" content="600" />
@endsection

@section('google-tag-manager')
	<x-google-tag-manager category="homepage" />
@endsection

@section('head-css')
	<link rel="stylesheet" href="{{ mix('css/home-high.css') }}">
	<link rel="stylesheet" href="{{ mix('css/home-low.css') }}" media="print" onload="this.media='all'">
@endsection

@section('head-bottom')
{{--	@include('partials.taboola-sidebar-header')  --}}
@endsection

@section('page-title', env('APP_ALTER_NAME', 'Perfil'))

@section('js')
	<script type="text/javascript" src="{{ mix('js/home.js') }}"></script>
@endsection

@section('body')

	<main class="home container">
		@foreach($home_content as $key => $value)
			@if ($key != 'sidebar')
				<section id="{{ $key }}" class="seccion row">
					@foreach($value as $item)

						@switch ($item['template'])
							@case('celebridades')
								<x-celebridades :news="$item['news']" />
								@break

							@default
								@if (view()->exists('home.dispositions.' . $item['template']))
									@include('home.dispositions.' . $item['template'], ['news' => $item['news'], 'id' => $item['id']])
								@endif
						@endswitch
					@endforeach
				</section>
			@endif
		@endforeach
	</main>

@endsection

