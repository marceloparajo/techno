<div class="social-topsharing">
	<h4>{{ __('share it') }} <i class="fas fa-arrow-right"></i></h4>
	<ul>
		<li class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
		<li class="twitter"> <a href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-twitter"></i></a></li>
		<li class="whatsapp"><a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
		<li class="linkedin">
			<a href="https://www.linkedin.com/shareArticle?mini=true&url={{ $noticia['permalink'] }}&title={{ urlencode($noticia['title']) }}&source={{ url('/') }}" class="linkedin" title="Compartir en Linkedin"><i class="fab fa-linkedin-in"></i></a>
		</li>
		<li class="mailto">
			<a href="mailto:?subjet=Perfil.com | {{ urlencode($noticia['title']) }}&body=Hola, vi este artículo que publicó Perfil.com y creo que te puede interesar. {{ $noticia['permalink'] }}" class="email" rel="noopener noreferrer" aria-label="Email" title="Compartir por email"><i class="far fa-envelope"></i></a>
		</li>
		{{--
		<li class="pinterest"><a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" target="_blank"><i class="fab fa-pinterest"></i></a></li>
		--}}
	</ul>
</div>