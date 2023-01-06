	<figure class="autor-nota__img">
		<img  src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image" width="60" height="60">
	</figure>

	<div class="autor-nota__data">
		<div class="autor-nota__nombre">
		<a href="{{ route('authors.show', $author['username']) }}" itemprop="url" >
			<span itemprop="name">{{ $author['fullname'] }}</span>
		</a>
		</div>
		
		@php

			$about = $author['about'] != '' ?: '';
			$facebook = $author['facebook'] != '' ?: '';
			$twitter = $author['twitter'] != '' ?: '';
			$instagram = $author['instagram'] != '' ?: '';

		@endphp
		
		@if($about || $facebook || $twitter || $instagram)
			<div class="autor-nota__about">		 
				@if ( $about)
					{{ $author['about'] }}
				@endif
				@if ($facebook)
					<span>
						<a href="https://www.facebook.com/{{ $author['facebook'] }}" itemprop="sameAs" target="_blank" rel="noreferrer"><img src="/images/glyph/share/facebook.svg" class="facebook" alt="fb" width="20" height="20"> {{ $author['facebook'] }}</a>
					</span>
				@endif
				@if ($twitter)
					<span>
						<a href="https://twitter.com/{{ $author['twitter'] }}" itemprop="sameAs" target="_blank" rel="noreferrer"><img src="/images/glyph/share/twitter.svg" class="twitter" alt="tw" width="20" height="20"> {{ $author['twitter'] }}</a>
					</span>
				@endif
				@if ($instagram)
					<span>
						<a href="https://www.instagram.com/{{ $author['instagram'] }}" itemprop="sameAs" target="_blank" rel="noreferrer"><img src="/images/glyph/share/instagram.svg" class="instagram" alt="ig" width="20" height="20">{{ $author['instagram'] }}</a>
					</span>
				@endif
			</div>
		@else 
		@endif

	</div>