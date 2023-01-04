<div class="channel__autor">
	<figure>
		<img class="channel__autor-img" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
	</figure>
	<div class="channel__autor-data">
		<span class="channel__autor-nombre">{{ $author['fullname'] }}</span>
		@if ( $author['about'] != '')
			<p class="channel__autor-about">{!! $author['about'] !!}
				
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
