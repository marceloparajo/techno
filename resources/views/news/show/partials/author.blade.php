<span class="autor-nota-arriba" itemscope itemprop="author" itemtype="https://schema.org/Person">
	<figure>
		<img class="autor-img" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
	</figure>
	<a href="{{ route('authors.show', $author['username']) }}" itemprop="url" class="nombreautor"><span itemprop="name">{{ $author['fullname'] }}</span></a>
	@if ( $author['about'] != '')
		<p class="autor-about">{!! $author['about'] !!}


			<br />
			@if ($author['facebook'] != '')
				<span>
					<a href="https://www.facebook.com/{{ $author['facebook'] }}" itemprop="sameAs" target="_blank"><img src="/images/glyph/share/facebook.svg" class="facebook"/> {{ $author['facebook'] }}</a>
				</span>
			@endif
			@if ($author['twitter'] != '')
				<span>
					<a href="https://twitter.com/{{ $author['twitter'] }}" itemprop="sameAs" target="_blank"><img src="/images/glyph/share/twitter.svg" class="twitter"> {{ $author['twitter'] }}</a>
				</span>
			@endif
			@if ($author['instagram'] != '')
				<span>
					<a href="https://www.instagram.com/{{ $author['instagram'] }}" itemprop="sameAs" target="_blank"><img src="/images/glyph/share/instagram.svg" class="instagram"></i>{{ $author['instagram'] }}</a>
				</span>
			@endif
			@if ($author['blog'] != '')
				<span>
					<a href="{{ $author['blog'] }}" itemprop="sameAs" target="_blank">Web</a>
				</span>
			@endif
				<span>
					<a href="{{ route('authors.show', $author['username']) }}" itemprop="url"><img src="/images/glyph/bullet.svg" class="bullet"><span class="redsocial">Más notas de {{ $author['fullname'] }}</span></a>
				</span>
		</p>
	@endif
</span>