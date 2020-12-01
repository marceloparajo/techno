@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)


<section id="periodismopuro">
	<header>
		<div class="periodismopuro-titulo"><i class="fa fa-quote-right" aria-hidden="true"></i> <a href="https://www.canalnet.tv/programas/periodismo-puro/" target="_blank">Periodismo Puro</a></div>
	</header>

	@foreach(array_slice($news, 0, 4) as $key => $new)

	<article class="notaPeriodismopuro">
		<a href="{{ $new['permalink'] }}">
			<figure>
				{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid','270x152') !!}
			</figure>
			<div class="content">
				<h3>{{ $new['home_title'] }}</h3>
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
		</a>
	</article>
	@endforeach
	<footer>
		<a href="https://www.canalnet.tv/programas/periodismo-puro/" target="_blank">Más Periodismo Puro </a>
	</footer>
</section>

@endif