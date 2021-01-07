@if (isset($news) && count($news) > 0)
	<div class="container catastrofe">
		<div class="catastrofe-todas">
			@foreach (array_slice($news, 0, 1) as $new)

			<article class="articulo catastrofe-grande">
				<figure>
					<a href="{{ $new['permalink'] }}">
						<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="700" />
					</a>
				</figure>
				<div class="meta-content">
					<a href="{{ $new['permalink'] }}">
						@if ($new['hat'] != '')
							<span class="hat">{{ $new['hat'] }} </span>
						@endif
						<h2>
							{{ $new['home_title'] }}
						</h2>
						<p class="headline">{{ $new['headline'] }}</p>
					</a>
					@if ($new['signed'])
					<div class="firma-home">
						<a href="/autores/{{$new['author']['username']}}">
							{{ __('by') }} {{ $new['author']['fullname'] }}
						</a>
					</div>
					@elseif ($new['credit'] != '')
						<div class="firma-home">{{ $new['credit'] }}</div>
					@endif
				</div>
			</article>
			@endforeach

			<div class="catastrofe-tres">

				@foreach (array_slice($news, 1, 3) as $new)
					<article class="articulo catastrofe-chica">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
							</a>
						</figure>
						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<span class="hat">{{ $new['hat'] }} </span>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
								<p class="headline">{{ $new['headline'] }}</p>
							</a>
							@if ($new['signed'])
							<div class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</div>
							@elseif ($new['credit'] != '')
								<div class="firma-home">{{ $new['credit'] }}</div>
							@endif
						</div>
					</article>
				@endforeach

			</div>

		</div>

	</div>
@endif
