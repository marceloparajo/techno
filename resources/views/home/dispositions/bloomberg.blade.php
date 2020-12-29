@if (isset($news) && count($news) > 0)

	@if (isset($news[4]))
		<!-- Bloomberg -->
		<div class="container bloomberg px-0">

			<div class="caja-contenido bloomberg">

				<h6>Negocios</h6>

				<div class="caja-notas">

					@foreach(array_slice($news, 0, 6) as $key => $new)

						@if($key == 3)
							<div class="bloomberg-tres">
						@endif


						<article class="articulo notabloomberg bl-{{ $key }}">
							<figure>
								<a href="{{ $new['permalink'] }}">
									<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" class="img-fluid" />
								</a>
							</figure>
							<div class="meta-content">
								<a href="{{ $new['permalink'] }}">
									<h2>{{ $new['home_title'] }}</h2>
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

				</div>

			</div>

		</div>

	@endif

@endif
