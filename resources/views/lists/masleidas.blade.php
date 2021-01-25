<article class="articulo">
	<figure>
		<a href="{{ $noticia['permalink'] }}">
			<div class="masleidas-orden">
				{{ $loop-> index + 1 }}
			</div>

			<x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['caption']" class="img-fluid" max-width="300" :play-button="$noticia['has_video']" :camera-button="$noticia['has_gallery']" />
		</a>
	</figure>
	<div class="meta-content">
		<a href="{{ $noticia['permalink'] }}">
			<h2>{{ $noticia['home_title'] }}</h2>
		</a>
	</div>
</article>