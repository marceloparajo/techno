@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

<div class="container-fluid destacada">

	<div class="container py-3"> 

	@if (count($news) == 1)
		<div class="una-nota d-flex">
			<article class=" flex-grow-1 pb-2 pb-lg-0">
				<a href="{{ $news[0]['permalink'] }}">
					<figure>
						{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['big-wide'], 1140, $news[0]['main_image']['caption'],'img-fluid') !!}
					</figure>
					<div class="meta-content px-2">
						@if ($news[0]['hat'] != '')<h3 class="hat">{{ $news[0]['hat'] }}</h3>@endif
						<h2>{{ $news[0]['home_title'] }}</h2>
						<h4 class="headline">{{ $news[0]['headline'] }}</h4>
						@if ($news[0]['signed'])
							<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
						@endif
					</div>
				</a>
			</article>
			<div class="banner-vertical d-none d-xl-flex">
				<div id="" class="ads-space d-none d-lg-block" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false" data-reload="true" ></div>
			</div>
		</div>



	@elseif (count($news) === 2)



		<div class="row dos-notas">
			<article class="col-12 col-md-6 pb-2">
				<a href="{{ $news[0]['permalink'] }}">
					<figure>
						{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['medium-wide'], 720, $news[0]['main_image']['caption'],'img-fluid') !!}
					</figure>
					<div class="meta-content">
						@if ($news[0]['hat'] != '')<h3 class="hat">{{ $news[0]['hat'] }}</h3>@endif
						<h2>{{ $news[0]['home_title'] }}</h2>
						<h4 class="headline">{{ $news[0]['headline'] }}</h4>
					</div>
				</a>
			</article>

			<article class="col-12 col-md-6 pb-2">
				<a href="{{ $news[1]['permalink'] }}">
					<figure>
						{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['medium-wide'], 720, $news[1]['main_image']['caption'],'img-fluid') !!}
					</figure>
					<div class="meta-content">
						@if ($news[1]['hat'] != '')<h3 class="hat">{{ $news[1]['hat'] }}</h3>@endif
						<h2>{{ $news[1]['home_title'] }}</h2>
						<h4 class="headline">{{ $news[1]['headline'] }}</h4>
					</div>
				</a>
			</article>
		</div>



	@else



	<div class="row mx-0 px-0">

		<div class="tres-notas d-flex align-items-start">

			<div class="row flex-grow-1">

				<article class="col-12 pb-2 px-0 px-md-2">
					<a href="{{ $news[0]['permalink'] }}">
						<figure>
							{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['extra-big-wide'], 1140, $news[0]['main_image']['caption'],'img-fluid','1140x540') !!}
						</figure>
						<div class="meta-content">
							@if ($news[0]['hat'] != '')
								<h3 class="hat">{{ $news[0]['hat'] }}</h3>
							@else
								<h3 class="hat">{{ $news[0]['channel']['name'] }}</h3>
							@endif							
							<h2>{{ $news[0]['home_title'] }}</h2>
							<h4 class="headline">{{ $news[0]['headline'] }}</h4>
							@if ($news[0]['signed'])
								<h5 class="firma-home">{{ __('by') }} {{ $news[0]['author']['fullname'] }}</h5>
							@endif
						</div>
					</a>
				</article>

				<article class="col-12 col-md-6 px-0 px-md-2">
					<a href="{{ $news[1]['permalink'] }}" class="d-block">
						<figure>
							{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['extra-medium-wide'], 720, $news[1]['main_image']['caption'],'img-fluid', '720x355') !!}
						</figure>
						<div class="meta-content">
							@if ($news[1]['hat'] != '')
								<h3 class="hat">{{ $news[1]['hat'] }}</h3>
							@else
								<h3 class="hat">{{ $news[1]['channel']['name'] }}</h3>
							@endif
							<h2 class="px-2 px-md-0">{{ $news[1]['home_title'] }}</h2>
							<h4 class="headline">{{ $news[1]['headline'] }}</h4>
							@if ($news[1]['signed'])
								<h5 class="firma-home">{{ __('by') }} {{ $news[1]['author']['fullname'] }}</h5>
							@endif
						</div>
					</a>
				</article>

				<article class="col-12 col-md-6 px-0 px-md-2">
					<a href="{{ $news[2]['permalink'] }}" class="d-block">
						<figure>
							{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['extra-medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid', '720x355') !!}
						</figure>
						<div class="meta-content">
							@if ($news[2]['hat'] != '')
								<h3 class="hat">{{ $news[2]['hat'] }}</h3>
							@else
								<h3 class="hat">{{ $news[2]['channel']['name'] }}</h3>
							@endif
							<h2 class="px-2 px-md-0">{{ $news[2]['home_title'] }}</h2>
							<h4 class="headline">{{ $news[2]['headline'] }}</h4>
							@if ($news[2]['signed'])
								<h5 class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h5>
							@endif
						</div>
					</a>
				</article>

				<div class="row text-center banner-horizontal mx-2">
					<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" ></div>
				</div>

			</div>

			<div class="banner-vertical d-none d-lg-block">
				<div id="" class="ads-space d-none d-lg-block" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false" data-reload="true" ></div>
			</div>


		</div>


	</div>

	@endif

	</div>
</div><!-- container-fluid -->
@endif
