<div id="mas-leidas" class="masvistas">
	<div class="masvistas__titulo news__aside-title">
		<a href="{{ route('mostviewed.show') }}">Las más leídas</a>
	</div>

	@foreach(array_slice($news, 0, $rows) as $new)
		<article class="masvistas__nota masvistas__nota--{{$loop->index}}">
			<a href="{{ $new['permalink'] }}" class="masvistas__link">
				<span class="masvistas__ranking">{{ $loop->iteration }}</span>
					<x-lazy-image
						:src="$new['main_image']['srcs']['small-wide']"
						clean-source="true"
						:alt="$new['main_image']['title']"
						:sizes="[ 
						['v' => 360, 'w' => 86, 'h' => 86], 
						['v' => 375, 'w' => 89, 'h' => 89], 
						['v' => 414, 'w' => 100, 'h' => 100], 
						['v' => 768, 'w' => 112, 'h' => 60], 
						['v' => 1920, 'w' => 86, 'h' => 86]]"
						class="img-fluid"
						max-width="700"
						:play-button="$new['has_video']"
						:camera-button="$new['has_gallery']" />
				<div class="masvistas__nota__titulo"> {{ $new['title'] }}</div>
			</a>
		</article>
	@endforeach

</div>