@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if (isset($news) && count($news) > 0)
	<div class="container coronavirus px-10 px-sm-0">
		@foreach (array_slice($news, 0, 1) as $new)
	
		<article>
			<a href="{{ $new['permalink'] }}">
				<h2>{{ $new['home_title'] }}</h2>
				<h3>{{ $new['embed_code'] }}</h3>
			</a>
		</article>
		@endforeach
	</div>
@endif