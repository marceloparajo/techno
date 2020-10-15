@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if (isset($news) && count($news) > 0)
	<div class="caja-contenido coronavirus">
		@foreach (array_slice($news, 0, 1) as $new)
	
		<article>
			<a href="{{ $new['permalink'] }}">
				<h2>{{ $new['home_title'] }}</h2>
				<p>{{ $new['embed_code'] }}</p>
			</a>
		</article>
		@endforeach
	</div>
@endif