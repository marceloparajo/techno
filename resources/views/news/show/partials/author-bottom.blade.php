<div class="autor-nota" itemscope itemprop="author" itemtype="https://schema.org/Person">
	<figure>
		<img class="img-fluid" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
	</figure>
	<div class="autor-nota-group">
		<h5>
			<a href="{{ route('authors.show', $author['username']) }}" itemprop="url"><span itemprop="name">{{ $author['fullname'] }}</span></a>
		</h5>
		@if ( $author['about'] != '')
			<p>{!! $author['about'] !!}</p>
		@endif

		<ul>
			@if ($author['facebook'] != '')
				<li>
					<a href="https://www.facebook.com/{{ $author['facebook'] }}" class="social-btn social-facebook mr-2" itemprop="sameAs" target="_blank"><i class="fab fa-facebook-square"></i><span class="redsocial">Facebook</span></a>
				</li>
			@endif
			@if ($author['twitter'] != '')
				<li>
					<a href="https://twitter.com/{{ $author['twitter'] }}" class="social-btn social-twitter mr-2" itemprop="sameAs" target="_blank"><i class="fab fa-twitter-square"></i><span class="redsocial">Twitter</span></a>
				</li>
			@endif
			@if ($author['instagram'] != '')
				<li>
					<a href="https://www.instagram.com/{{ $author['instagram'] }}" class="social-btn social-instagram mr-2" itemprop="sameAs" target="_blank"><i class="fab fa-instagram"></i><span class="redsocial">Instagram</span></a>
				</li>
			@endif
			@if ($author['blog'] != '')
				<li>
					<a href="{{ $author['blog'] }}" class="social-btn social-blog mr-2" itemprop="sameAs" target="_blank"><i class="fas fa-globe-americas"></i><span class="redsocial">Web</span></a>
				</li>
			@endif
				<li>
					<a href="{{ route('authors.show', $author['username']) }}" itemprop="url"><i class="fas fa-pencil-square-o"></i><span class="redsocial">Página de {{ $author['fullname'] }}</span></a>
				</li>
		</ul>
	</div>
</div>