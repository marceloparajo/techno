@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

		<div class="container bloque">

			<div class="caja-contenido">
				<div class="container px-0 flex-column flex-md-row">


					<div class="columna-dostercios">
						@foreach(array_slice($news, 0, 9) as $key => $new)
							@if ($key == 3)
							</div>
							@endif
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
									<a href="{{ $new['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
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
							@if ($key == 0)
							<div class="nopict-group">
							@endif
						@endforeach
					</div>
					<div class="columna-tercio">
						@foreach(array_slice($news, 4, 5) as $key => $new)
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
								<a href="{{ $new['permalink'] }}">
									@if ($new['hat'] != '')
										<h3 class="hat">{{ $new['hat'] }} </h3>
									@endif
									<h2>
										{{ $new['home_title'] }}
									</h2>
									<h4>{{ $new['headline'] }}</h4>
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
					</div>


{{--

	esto no iría

					<div class="hilera-full trescolumnas">
						@foreach(array_slice($news, 0, 5) as $key => $new)
							@if ($key == 4)
							</div>
							@endif
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
									<a href="{{ $new['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
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
							@if ($key == 0)
							<div class="untercio">
							@endif
						@endforeach
					</div>




					<div class="hilera-full cuatrocolumnas">
						@foreach(array_slice($news, 0, 5) as $key => $new)
							@if ($key == 4)
							</div>
							@endif
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
									<a href="{{ $new['permalink'] }}">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4>{{ $new['headline'] }}</h4>
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
							@if ($key == 1)
							<div class="columna-cuarto">
							@endif
						@endforeach
					</div>

--}}



				</div>



			</div>

			<div class="container caja-right">

				<p style="padding: 20px;font-size:2em;">CONTENIDO SIDEBAR</p>

			</div>


		</div>



		<div class="d-flex justify-content-center w-100 my-1 d-block d-md-none">
			<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
		</div>


@endif