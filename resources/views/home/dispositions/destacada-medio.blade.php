@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)



		<div class="destacada">

			<div class="tres-notas">

				<article class="main-destacada">
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
				
				
				<div class="dos-notas">
					@if ( count($news) > 1)
					<article class="segunda">
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
								@if ($news[1]['hat'] != '')
									<h3 class="hat">{{ $news[1]['hat'] }}</h3>
								@else
									<h3 class="hat">{{ $news[1]['channel']['name']}}</h3>
								@endif
								<h2>{{ $news[1]['home_title'] }}</h2>
							</div>
						</a>
					</article>
					@endif
					@if ( count($news) > 2)
					<article class="tercera">
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



				<div class="dos-horizontales">
					{{--
						ESTE ES EL BLOQUE ORIGINAL QUE DEBE IR.
						LO COMENTO PARA PONER UN BLOQUE FALSO PARA QUE APAREZCAN DOS NOTAS MAS
						@if ( count($news) > 3)
						<article class="col-12 col-md-6 col-lg-4 px-0 px-md-2 pl-lg-0 pr-lg-3 cuarta">
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

					<article class="cuarta">
						<a href="{{ $news[1]['permalink'] }}">
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

					@if ( count($news) > 2)
					<article class="quinta">
						<a href="{{ $news[2]['permalink'] }}">
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
					@endif

					<!-- BORRAR HASTA AQUI -->

				</div>






				<div class="row text-center banner-horizontal mx-2 mb-1 mt-2 d-none d-xl-block w-100">
					<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" ></div>
				</div>


				<div class="row text-center my-2 d-flex d-md-none justify-content-center w-100">
					<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
				</div>




			</div>

			<div class="banner-vertical">
				<div id="" class="ads-space d-none d-lg-block" data-id="300x600x-pos-" data-w="300" data-h="600" data-loaded="false" data-reload="true" >
				</div>
			</div>


		</div>



@endif
