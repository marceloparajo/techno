<div class="social-topsharing">
	<h4>{{ __('share it') }} <i class="fas fa-arrow-right"></i></h4>
	<ul>
		<li class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank" rel="noreferrer"><img src="/images/glyph/share/facebook.svg" style="width:10px;height: auto" alt="Compartila en Facebook"></a></li>
		<li class="twitter"> <a href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank" rel="noreferrer"><img src="/images/glyph/share/twitter.svg" style="width:20px;height:auto" alt="Compartila en Twitter"></a></li>
		<li class="whatsapp"><a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" target="_blank" rel="noreferrer"><img src="/images/glyph/share/whatsapp.svg" style="width:20px;height:auto" alt="Compartila en Whatsapp"></a></li>
		<li class="linkedin">
			<a href="https://www.linkedin.com/shareArticle?mini=true&url={{ $noticia['permalink'] }}&title={{ urlencode($noticia['title']) }}&source={{ url('/') }}" class="linkedin" title="Compartir en Linkedin" rel="noreferrer"><img src="/images/glyph/share/linkedin.svg" style="width:20px;height:auto" alt="Compartila en LinkedIn"></i></a>
		</li>
		<li class="mailto">
			<a href="mailto:?subjet=Perfil.com | {{ urlencode($noticia['title']) }}&body=Hola, vi este artículo que publicó Perfil.com y creo que te puede interesar. {{ $noticia['permalink'] }}" class="email" rel="noopener noreferrer" aria-label="Email" title="Compartir por email" rel="noreferrer"><img src="/images/glyph/share/mail.svg" style="width:20px;height:auto" alt="Compartila por Email"></a>
		</li>
		{{--
		<li class="pinterest"><a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" target="_blank" rel="noreferrer"><i class="fab fa-pinterest"></i></a></li>
		--}}
	</ul>
</div>
