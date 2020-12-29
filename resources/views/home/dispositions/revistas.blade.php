@if (isset($news) && count($news) > 0)
	<div class="container revistas mb-4">
		<h6>Revista</h6>

			<div class="notas-revistas">
				@foreach(array_slice($news, 0, 4) as $key => $new)
					<article class="articulo derevistas">
						<figure>
							<a href="{{ $new['permalink'] }}">
								@if ($key == 0)
									<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" class="img-fluid" />
								@else
									<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" class="img-fluid" sizes="(min-width: 540px) 30vw, 100vw" />
								@endif
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								{{--
									@if ($new['hat'] != '')
										<span class="hat">{{ $new['hat'] }} </span>
									@endif
								--}}
								<h2>
									{{ $new['home_title'] }}
								</h2>
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
					<div class="grupotres">
				@endif
				@endforeach
				</div>
			</div>

	</div><!-- container-fluid -->

@endif
