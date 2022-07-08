<span class="autor__nota" itemscope itemprop="author" itemtype="https://schema.org/Person">
	<figure>
		<img class="autor__nota__img" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image" width="60" height="60">
	</figure>
	<a href="{{ route('authors.show', $author['username']) }}" itemprop="url" class="autor__nota__nombre">
		<span itemprop="name">{{ $author['fullname'] }}</span>
	</a>
	@if ( $author['about'] != '')
		<p class="autor-about">{!! $author['about'] !!}


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
		</p>
	@endif
</span>