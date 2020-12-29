@if (isset($news) && count($news) > 0)
	<section id="periodismopuro">
		<header>
			<div class="periodismopuro-titulo"><i class="fa fa-quote-right" aria-hidden="true"></i> <a href="https://www.canalnet.tv/programas/periodismo-puro/" target="_blank">Periodismo Puro</a></div>
		</header>

		@foreach(array_slice($news, 0, 4) as $key => $new)

			<article class="notaPeriodismopuro">
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
			<a href="https://www.canalnet.tv/programas/periodismo-puro/" target="_blank">Más Periodismo Puro </a>
		</footer>
	</section>
@endif
