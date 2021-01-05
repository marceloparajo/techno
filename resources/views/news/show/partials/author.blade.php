<span class="autor-nota-arriba" itemscope itemprop="author" itemtype="https://schema.org/Person">
	<figure>
		<img class="autor-img" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
	</figure>
	<a href="{{ route('authors.show', $author['username']) }}" itemprop="url"><span itemprop="name">{{ $author['fullname'] }}</span></a>
	@if ( $author['about'] != '')
		<p class="autor-about">{!! $author['about'] !!}</p>
	@endif
</span>