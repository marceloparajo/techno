<div class="autor-pagina">
	<figure>
		<img src="{{ $author['image'] }}" alt="{{ $author['fullname'] }}" itemprop="image">
	</figure>
	<div class="meta-autor">
		<span class="nombre-autor">{{ $author['fullname'] }}</span>
		<p class="info-autor">{!! $author['about'] !!}</p>
		<p class="redes-autor">
			@if ($author['facebook'] != '')
				<a href="{{ $author['facebook'] }}" class="social-btn social-facebook mr-2"><i class="fab fa-facebook-square"></i></a>
			@endif

			@if ($author['twitter'] != '')
				<a href="{{ $author['twitter'] }}" class="social-btn social-twitter mr-2"><i class="fab fa-twitter-square"></i></a>
			@endif

			@if ($author['googleplus'] != '')
				<a href="{{ $author['googleplus'] }}" class="social-btn social-google mr-2"><i class="fab fa-google-plus-square"></i></a>
			@endif

			@if ($author['instagram'] != '')
				<a href="{{ $author['instagram'] }}" class="social-btn social-instagram mr-2"><i class="fab fa-instagram"></i></a>
			@endif

			@if ($author['blogsite'] != '')
				<a href="{{ $author['blogsite'] }}" class="social-btn social-blog mr-2"><i class="fas fa-globe-americas"></i></a>
			@endif
		</p>
	</div>
</div>
<div></div>
