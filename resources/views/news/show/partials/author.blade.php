<div class="row author-nota w-100" itemscope itemprop="author" itemtype="https://schema.org/Person" style="display: {{ $displayAuthor }}" >
	<div class="col-12 d-flex  align-items-center">
		<img class="img-fluid" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
		<div class="group">
			<h5 ><a href="{{ route('authors.show', $author['username']) }}" itemprop="url"><span itemprop="name">{{ $author['fullname'] }}</span></a></h5>
			@if ( $author['about'] != '')
				<p>{!! $author['about'] !!}</p>
			@endif
			<p>
				@if ($author['facebook'] != '')
					<a href="https://www.facebook.com/{{ $author['facebook'] }}" class="social-btn social-facebook mr-2" itemprop="sameAs" target="_blank"><i class="fab fa-facebook-square"></i></a>
				@endif
				@if ($author['twitter'] != '')
					<a href="https://twitter.com/{{ $author['twitter'] }}" class="social-btn social-twitter mr-2" itemprop="sameAs" target="_blank"><i class="fab fa-twitter-square"></i></a>
				@endif
				@if ($author['instagram'] != '')
					<a href="https://www.instagram.com/{{ $author['instagram'] }}" class="social-btn social-instagram mr-2" itemprop="sameAs" target="_blank"><i class="fab fa-instagram"></i></a>
				@endif
				@if ($author['blog'] != '')
					<a href="{{ $author['blog'] }}" class="social-btn social-blog mr-2" itemprop="sameAs" target="_blank"><i class="fas fa-globe-americas"></i></a>
				@endif
			</p>
		</div>
	</div>
</div>