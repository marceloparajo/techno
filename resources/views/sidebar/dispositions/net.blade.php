@if (isset($news) && count($news) > 0)
	<section id="net">
		<header>
			<div class="net-titulo"><a href="https://www.canalnet.tv" target="_blank" rel="noreferrer">Net</a></div>
		</header>

		@foreach(array_slice($news, 0, 4) as $key => $new)

			<article class="notaNet">
				<a href="{{ $new['permalink'] }}">
					<figure>
						@if ($loop->first)
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['title']" max-width="300" loading="lazy" class="img-fluid" />
						@else
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['title']" max-width="200" loading="lazy" class="img-fluid" />
						@endif
					</figure>
					<div class="content">
						<h3>{{ $new['home_title'] }}</h3>
						@if ($new['signed'])
							<span class="firma-home">
								{{ __('by') }} {{ $new['author']['fullname'] }}
							</span>
						@elseif ($new['credit'] != '')
							<span class="firma-home">
								{{ $new['credit'] }}
							</span>
						@endif
					</div>
				</a>
			</article>
		@endforeach

		<footer>
			<a href="https://www.canalnet.tv" target="_blank" rel="noreferrer">Más en Net TV</a>
		</footer>
	</section>
@endif
