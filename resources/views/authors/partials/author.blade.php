<div class="autor__indice">
	<figure>
		<img class="autor__indice__img" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
	</figure>
	<div class="autor__indice__data">
		<span class="autor__indice__nombre">{{ $author['fullname'] }}</span>
		@if ( $author['about'] != '')
			<p class="autor__indice__about">{!! $author['about'] !!}
				
				<br />
					
				@if ($author['facebook'] != '')
					<span>
						<a href="https://www.facebook.com/{{ $author['facebook'] }}" itemprop="sameAs" target="_blank" rel="noreferrer"><img src="/images/glyph/share/facebook.svg" class="facebook" alt="fb" style="width:7px;height:12px"/> {{ $author['facebook'] }}</a>
					</span>
				@endif
				@if ($author['twitter'] != '')
					<span>
						<a href="https://twitter.com/{{ $author['twitter'] }}" itemprop="sameAs" target="_blank" rel="noreferrer"><img src="/images/glyph/share/twitter.svg" class="twitter" alt="tw" style="width:13.53px;height:11px;"> {{ $author['twitter'] }}</a>
					</span>
				@endif
				@if ($author['instagram'] != '')
					<span>
						<a href="https://www.instagram.com/{{ $author['instagram'] }}" itemprop="sameAs" target="_blank" rel="noreferrer"><img src="/images/glyph/share/instagram.svg" class="instagram" alt="ig" style="width:12px;height:12px;"></i>{{ $author['instagram'] }}</a>
					</span>
				@endif
				@if ($author['blogsite'] != '')
					<span>
						<a href="{{ $author['blog'] }}" itemprop="sameAs" target="_blank">Web</a>
					</span>
				@endif
			</p>
		@endif
	</div>
</div>
