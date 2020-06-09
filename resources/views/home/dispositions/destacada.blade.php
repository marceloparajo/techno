@inject('imageHelper', "App\Http\Helpers\ImageHelper")




@if (isset($news) && count($news) > 0)


		<div class="container destacada">

			<div class="caja-contenido">
				<div class="container px-0 flex-column flex-md-row">

					<div class="columna-dostercios">
						<article class="articulo main-destacada">
								<figure>
									<a href="{{ $news[0]['permalink'] }}">
										{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['small-wide'], 540, $news[0]['main_image']['caption'],'img-fluid','540x304') !!}
									</a>
								</figure>
								<div class="meta-content">
									<a href="{{ $news[0]['permalink'] }}">
										@if ($news[0]['hat'] != '')
											<h3 class="hat">{{ $news[0]['hat'] }} </h3>
										@endif
										<h2>
											{{ $news[0]['home_title'] }}
										</h2>
										<h4 class="headline">{{ $news[0]['headline'] }}</h4>
									</a>
									@if ($news[0]['signed'])
										<h5 class="firma-home">{{ __('by') }} {{ $news[0]['author']['fullname'] }}</h5>
									@endif
								</div>
						</article>

						@foreach(array_slice($news, 0, 2) as $key => $new)<!-- ESTE FOREACH DEBE SER 3,4 -->

							<article class="articulo destacadin">
								<figure>
									<a href="{{ $new['permalink'] }}">
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
									</a>
								</figure>
								<div class="meta-content">
									<a href="{{ $news[0]['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
									</a>
									@if ($new['signed'])
										<h5 class="firma-home">{{ __('by') }} {{ $new['author']['fullname'] }}</h5>
									@endif
								</div>
							</article>

						@endforeach

						{{-- BORRAR DESDE ACA --}}

							@foreach(array_slice($news, 0, 2) as $key => $new)

								<article class="articulo destacadin">
									<figure>
										<a href="{{ $new['permalink'] }}">
											{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
										</a>
									</figure>
									<div class="meta-content">
										<a href="{{ $news[0]['permalink'] }}">
											@if ($new['hat'] != '')
												<h3 class="hat">{{ $new['hat'] }} </h3>
											@endif
											<h2>
												{{ $new['home_title'] }}
											</h2>
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
										</a>
										@if ($new['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$new['author']['username']}}">
												{{ __('by') }} {{ $new['author']['fullname'] }}
											</a>
										</h5>
										@elseif ($new['credit'] != '')
											<h5>{{ $new['credit'] }}</h5>
										@endif
									</div>
								</article>

							@endforeach

						{{-- BORRAR HASTA ACA --}}

					</div>		

					<div class="row text-center mx-0 my-2 d-flex d-md-none justify-content-center w-100">
						<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
					</div>		
					
					<div class="columna-tercio">

						@foreach(array_slice($news, 1, 2) as $key => $new)

							<article class="articulo">
								<figure>
									<a href="{{ $new['permalink'] }}">
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
									</a>
								</figure>
								<div class="meta-content">
									<a href="{{ $news[0]['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
									</a>
									@if ($new['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$new['author']['username']}}">
												{{ __('by') }} {{ $new['author']['fullname'] }}
											</a>
										</h5>
										@elseif ($new['credit'] != '')
											<h5>{{ $new['credit'] }}</h5>
									@endif
								</div>
							</article>
						@endforeach


						{{-- BORRAR DESDE ACA --}}


							@foreach(array_slice($news, 0, 3) as $key => $new)

								<article class="articulo">
									<figure>
										<a href="{{ $new['permalink'] }}">
											{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
										</a>
									</figure>
									<div class="meta-content">
										<a href="{{ $news[0]['permalink'] }}">
											@if ($new['hat'] != '')
												<h3 class="hat">{{ $new['hat'] }} </h3>
											@endif
											<h2>
												{{ $new['home_title'] }}
											</h2>
											<h4 class="headline">
												{{ $new['headline'] }}
											</h4>
										</a>
										@if ($new['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$new['author']['username']}}">
												{{ __('by') }} {{ $new['author']['fullname'] }}
											</a>
										</h5>
										@elseif ($new['credit'] != '')
											<h5>{{ $new['credit'] }}</h5>
										@endif
									</div>
								</article>

							@endforeach

						{{-- BORRAR HASTA ACA --}}


					</div>


				</div>


				<div class="row text-center banner-horizontal mx-2 mb-1 mt-5 d-none d-xl-block w-100">
					<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
						
					</div>
				</div>

				<div class="row text-center my-2 d-flex d-md-none justify-content-center w-100">
					<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" >
						
					</div>
				</div>

			</div><!-- caja-contenido -->






			<div class="container caja-right">
				<p style="padding: 20px;font-size:2em;">CONTENIDO SIDEBAR</p>
			</div>


		</div><!-- container-destacada -->




@endif
