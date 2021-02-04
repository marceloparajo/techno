@if (isset($news) && count($news) > 0)

	@if (isset($news[1]))

		<div class="container cajageneral">

			<div class="caja-contenido">

				<div class="notas-cajageneral marieclaire">

					<div class="header-cajageneral">
						<h6>Marie Claire</h6>
					</div>

					<div class="contenido-notas">
						@foreach(array_slice($news, 0, 2) as $key => $new)
							<article class="articulo caja-nota">
								<figure>
									<a href="{{ $new['permalink'] }}">
										<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
										<h4>{{ $new['headline'] }}</h4>
									</a>
								</figure>

								<div class="meta-content">
									<a href="{{ $new['permalink'] }}">
										@if ($new['hat'] != '')
											<span class="hat">{{ $new['hat'] }} </span>
										@endif
										<h2>{{ $new['home_title'] }}</h2>
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
							@if($key == 0)
								<div class="ad-marieclaire d-none d-xl-block">
									<x-ad-space id="central_300x250x-pos-" width="300" height="250" />
								</div>
							@endif
						@endforeach
					</div>

				</div><!-- notas-cajageneral -->

			</div>

			<aside class="caja-right">

				sidebarismo

			</aside>
		</div>

	@endif

@endif
