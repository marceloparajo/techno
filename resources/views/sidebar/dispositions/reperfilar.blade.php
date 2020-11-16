@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)


<section id="reperfilar">
	<header>
		<div class="reperfilar-titulo"><a href="https://www.perfil.com/reperfilar/" target="_blank">Reperfilar</a></div>
	</header>

	@foreach(array_slice($news, 0, 6) as $key => $new)

	<article class="notaOpinion">
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
		<a href="https://www.perfil.com/reperfilar/" target="_blank">Más en RePerfilAr </a>
	</footer>
</section>

@endif