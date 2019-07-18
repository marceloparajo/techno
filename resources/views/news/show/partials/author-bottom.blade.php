<div class="row flex-column flex-md-row d-lg-none author-bottom">
	<figure class="border">
		<img class="img-fluid" src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}">
	</figure>
	<div class="datos-autor">
		<h3>{{ $author['fullname'] }}</h3>
		<p>{!! $author['about'] !!}</p>
		<p>
			@if ($author['facebook'] != '')
				<a href="https://www.facebook.com/{{ $author['facebook'] }}" class="social-btn social-facebook mr-2"><i class="fab fa-facebook-f" target="_blank"></i></a>
			@endif

			@if ($author['twitter'] != '')
				<a href="https://twitter.com/{{ $author['twitter'] }}" class="social-btn social-twitter mr-2" target="_blank"><i class="fab fa-twitter"></i></a>
			@endif

			@if ($author['instagram'] != '')
				<a href="https://www.instagram.com/{{ $author['instagram'] }}" class="social-btn social-instagram mr-2" target="_blank"><i class="fab fa-instagram"></i></a>
			@endif

			@if ($author['blog'] != '')
				<a href="{{ $author['blog'] }}" class="social-btn social-blog mr-2" target="_blank"><i class="fas fa-globe-americas"></i></a>
			@endif
		</p>
	</div>
</div>
