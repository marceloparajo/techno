@if (isset($news) && count($news) > 2)
	<div class="supercontenedor especiales">
		<section class="especial">
			@foreach (array_slice($news, 0, 3) as $key => $new)
				<article class="articulo">
					<figure>
						<a href="{{ $new['permalink'] }}">
							<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['title']" class="img-fluid" max-width="1000" />
						</a>
					</figure>
					<div class="meta-content">
						<a href="{{ $new['permalink'] }}">
							@if ($new['hat'] != '')
								<span class="hat">{{ $new['hat'] }}</span>
							@endif
							<h2>{{ $new['home_title'] }}</h2>
							<!-- <h4 class="headline">{{ $new['headline'] }}</h4> -->
						</a>
					</div>
				</article>
			@endforeach
		</section>
	</div>
@endif
