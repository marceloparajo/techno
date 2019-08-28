@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

<div class="container-fluid destacada mt-3">

	<div class="container position-relative d-flex"> 



	<div class="container px-0">
		<div class="tres-notas d-flex align-items-start">

			<div class="row flex-grow-1">

				<article class="col-12 col-lg-8 pb-2 px-0 pb-lg-0 main-destacada">
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
								<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $news[0]['author']['fullname'] }}</h5>
							@endif
						</div>
					</a>
				</article>
				
				
				<div class="col-12 col-lg-4 px-0 pl-lg-3">
					<div class="row mx-0 bg-white pt-3 pt-md-0">
						@if ( count($news) > 1)
						<article class="col-12 col-md-6 col-lg-12 px-0 px-md-2 segunda">
							<a href="{{ $news[1]['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['extra-medium-wide'], 720, $news[1]['main_image']['caption'],'img-fluid', '720x355') !!}
									<h4 class="headline">
										@if ($news[1]['signed'])
											<span class="firma-home">{{ __('by') }} {{ $news[1]['author']['fullname'] }}</span>
										@endif
									{{ $news[1]['headline'] }}
									</h4>
								</figure>
								<div class="meta-content">
									@if ($news[1]['hat'] != '')<h3 class="hat">{{ $news[1]['hat'] }}</h3>@endif
									<h2>{{ $news[1]['home_title'] }}</h2>
								</div>
							</a>
						</article>
						@endif
						@if ( count($news) > 2)
						<article class="col-12 col-md-6 col-lg-12 px-0 px-md-2 tercera">
							<a href="{{ $news[2]['permalink'] }}" class="d-md-block">
								<figure>
									{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['extra-medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid', '720x355') !!}
									<h4 class="headline">
										@if ($news[2]['signed'])
											<span class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</span>
										@endif
										{{ $news[2]['headline'] }}
									</h4>
								</figure>
								<div class="meta-content">
									@if ($news[2]['hat'] != '')<h3 class="hat">{{ $news[2]['hat'] }}</h3>@endif
									<h2>{{ $news[2]['home_title'] }}</h2>
									@if ($news[2]['signed'])
										<h5 class="firma-home px-2 px-lg-0">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h5>
									@endif
								</div>
							</a>
						</article>
						@endif
					</div>
				</div>



				<div class="row flex-grow-1 mx-0 mt-md-4">
					{{--
						ESTE ES EL BLOQUE ORIGINAL QUE DEBE IR.
						LO COMENTO PARA PONER UN BLOQUE FALSO PARA QUE APAREZCAN DOS NOTAS MAS
					@if ( count($news) > 3)
					<article class="col-12 col-md-6 col-lg-4 px-0 px-md-2 pl-lg-2 pr-lg-3 cuarta">
						<a href="{{ $news[3]['permalink'] }}" class="d-md-block">
							<figure>
								{!! $imageHelper->getLazyImages( $news[3]['main_image']['srcs']['extra-medium-wide'], 720, $news[3]['main_image']['caption'],'img-fluid', '720x355') !!}
								<h4 class="headline">{{ $news[3]['headline'] }}</h4>
							</figure>
							<div class="meta-content">
								@if ($news[3]['hat'] != '')<h3 class="hat">{{ $news[3]['hat'] }}</h3>@endif
								<h2>{{ $news[3]['home_title'] }}</h2>
							</div>
						</a>
					</article>
					@endif
					@if ( count($news) > 4)
					<article class="col-12 col-md-6 col-lg-8 px-0 px-md-2 pl-lg-3 pr-lg-2 quinta">
						<a href="{{ $news[4]['permalink'] }}" class="d-lg-flex">
							<figure>
								{!! $imageHelper->getLazyImages( $news[4]['main_image']['srcs']['extra-medium-wide'], 720, $news[4]['main_image']['caption'],'img-fluid','720x355') !!}
								<h4 class="headline">
									@if ($news[4]['signed'])
										<span class="firma-home">{{ __('by') }} {{ $news[4]['author']['fullname'] }}</span>
									@endif
									{{ $news[4]['headline'] }}</h4>
							</figure>
							<div class="meta-content">
								@if ($news[4]['hat'] != '')<h3 class="hat">{{ $news[4]['hat'] }}</h3>@endif
								<h2>{{ $news[4]['home_title'] }}</h2>
							</div>
						</a>
					</article>
					@endif
					--}}










					<!-- BORRAR A PARTIR DE AQUI -->

					<article class="col-12 col-md-6 col-lg-4 px-0 px-md-2 pl-lg-2 pr-lg-3 cuarta">
						<a href="{{ $news[1]['permalink'] }}" class="d-md-block">
							<figure>
								{!! $imageHelper->getLazyImages( $news[1]['main_image']['srcs']['extra-medium-wide'], 720, $news[1]['main_image']['caption'],'img-fluid', '720x355') !!}
								<h4 class="headline">{{ $news[1]['headline'] }}</h4>
							</figure>
							<div class="meta-content">
								@if ($news[1]['hat'] != '')<h3 class="hat">{{ $news[1]['hat'] }}</h3>@endif
								<h2>{{ $news[1]['home_title'] }}</h2>
							</div>
						</a>
					</article>


					<article class="col-12 col-md-6 col-lg-8 px-0 px-md-2 pl-lg-3 pr-lg-2 quinta">
						<a href="{{ $news[2]['permalink'] }}" class="d-lg-flex">
							<figure>
								{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['extra-medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid','720x355') !!}
								<h4 class="headline">
									@if ($news[2]['signed'])
										<span class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</span>
									@endif
									{{ $news[2]['headline'] }}</h4>
							</figure>
							<div class="meta-content">
								@if ($news[2]['hat'] != '')<h3 class="hat">{{ $news[2]['hat'] }}</h3>@endif
								<h2>{{ $news[2]['home_title'] }}</h2>
							</div>
						</a>
					</article>



					<!-- BORRAR HASTA AQUI -->





















				</div>

			</div>


			<div class="banner-vertical">
				<div id="" class="ads-space d-none d-lg-block" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false" data-reload="true" ></div>
			</div>


		</div>


	</div>


	</div>
</div><!-- container-fluid -->
@endif
