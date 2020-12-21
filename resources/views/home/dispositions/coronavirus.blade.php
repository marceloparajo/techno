@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if (isset($news) && count($news) > 0)
	<div class="caja-contenido coronavirus">
		@foreach (array_slice($news, 0, 1) as $new)

		@php 
			$cuentacasos = str_replace( ' | ', '<span class="pipe"> | </span><br />' , $new['embed_code'] );
		@endphp
		<article>
			<a href="{{ $new['permalink'] }}">
				<h2>{{ $new['home_title'] }}</h2>
				<p>{!! $cuentacasos !!}</p>
			</a>
		</article>
		@endforeach
	</div>
@endif