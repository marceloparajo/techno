@if (isset($news) && count($news) > 0)
	<section id="exitoina">
		<header>
			<div class="exitoina-titulo"><a href="https://exitoina.perfil.com/" target="_blank">Exitoina</a></div>
		</header>

		@foreach(array_slice($news, 0, 4) as $key => $new)

			<article class="notaExitoina">
				<a href="{{ $new['permalink'] }}">
					<figure>
						<x-lazy-image :src="$new['main_image']['srcs']['original']" alt="$new['main_image']['caption']" sizes="(min-width: 540px) 30vw, 100vw" />
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
			<a href="https://exitoina.perfil.com/" target="_blank">Más en Exitoína </a>
		</footer>
	</section>
@endif
