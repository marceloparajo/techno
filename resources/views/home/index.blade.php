@extends('layout.base')

@section('ads-sec',  'home')

@section('head-meta')
	<meta http-equiv="refresh" content="600" />
@endsection

@section('head-top')
	<link rel="amphtml" href="{{ $amphtml?? "" }}">
@endsection

@section('head-bottom')
	@include('partials.taboola-sidebar-header')
@endsection

@section('page-title', env('HOME_TITLE','Home') )

@section('js')
	<script type="text/javascript" src="{{ mix('js/home.js') }}"></script>
@endsection

@section('body')


	<div class="row maincontainer px-0 pt-3 mx-0">

		<div class="editorial">
			@foreach($home_content as $key => $value)
				@if ($key != 'sidebar')
					<section id="{{ $key }}">
						@foreach($value as $item)
							@include('home.dispositions.' . $item['template'], ['news' => $item['news']])
						@endforeach
					</section>
				@endif
			@endforeach
		</div>


		<!-- megalateral -->
		<div class="megalateral">
			<div class="container megalateral-b"> 
				<div class="ads-space-home text-center megalateral-ad-250x600 col-12 col-md-6 col-lg-4 col-xxl-3 mt-3 mt-md-0 pt-md-3 px-0 px-md-3">
					<div id="" class="ads-space mx-auto text-center" data-id="250x600x-pos-" data-w="250" data-h="600" data-loaded="false" data-reload="true"></div>
				</div>
			</div>
		</div>
		<!-- megalateral -->



	</div>

@endsection

