@if (isset($news) && count($news) > 0)
	<section id="videocolumnas">
		<header>
			<div class="videocolumnas-titulo"><a href="https://www.perfil.com/reperfilar/columnistas" target="_blank" rel="noreferrer">Videocolumnas</a></div>
		</header>

		@foreach(array_slice($news, 0, 4) as $key => $new)

			<article class="notaOpinion">
				<a href="{{ $new['permalink'] }}">
					<figure>
						@if ($loop->first)
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['title']" max-width="300" />
						@else
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['title']" max-width="200" />
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
			<a href="https://www.perfil.com/reperfilar/columnistas" target="_blank" rel="noreferrer">Más Videocolumnas </a>
		</footer>
	</section>
@endif
