@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)


<section id="net">
	<header>
		<div class="net-titulo"><i class="fa fa-quote-right" aria-hidden="true"></i> <a href="https://www.canalnet.tv" target="_blank">Net</a></div>
	</header>

	@foreach(array_slice($news, 0, 4) as $key => $new)

	<article class="notaNet">
		<a href="{{ $new['permalink'] }}">
			<figure>
				{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid','270x152') !!}
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
		<a href="https://www.canalnet.tv" target="_blank">Más en Net TV</a>
	</footer>
</section>

@endif