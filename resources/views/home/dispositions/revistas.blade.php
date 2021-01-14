@if (isset($news) && count($news) > 0)
	<div class="container revistas">
		<h6>Revista</h6>

			<div class="notas-revistas">
				@foreach(array_slice($news, 0, 4) as $key => $new)
					<article class="articulo derevistas">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
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
