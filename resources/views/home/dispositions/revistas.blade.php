@if (isset($news) && count($news) > 0)
	<div class="container revistas">
		<span class="nombre-revista">Revista</span>

			<div class="notas-revistas">
				@foreach(array_slice($news, 0, 4) as $key => $new)
					<article class="articulo derevistas">
						<figure>
							<a href="{{ $new['permalink'] }}" rel="noreferrer">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}" rel="noreferrer">
								<h2>
									{{ $new['home_title'] }}
								</h2>
							</a>
							@if ($new['signed'])
							<span class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</span>
							@elseif ($new['credit'] != '')
								<span class="firma-home">{{ $new['credit'] }}</span>
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
