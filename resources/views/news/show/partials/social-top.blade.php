<div class="social-topsharing">
	<p>Compartí esta nota</p>
	<ul>
		<li class="share">
			<img src="/images/glyph/share/share.svg" width="20" height="20" alt="Compartila en Facebook">
		</li>

		<li class="facebook">
			<a href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank" rel="noreferrer">
				<img src="/images/glyph/share/facebook.svg" width="30" height="30" alt="Compartila en Facebook">
			</a>
		</li>
		
		<li class="twitter">
			<a href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank" rel="noreferrer">
				<img src="/images/glyph/share/twitter.svg" width="30" height="30" alt="Compartila en Twitter">
			</a>
		</li>
		
		<li class="whatsapp">
			<a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" target="_blank" rel="noreferrer">
				<img src="/images/glyph/share/whatsapp.svg" width="30" height="30" alt="Compartila en Whatsapp">
			</a>
		</li>

		<li class="linkedin">
			<a href="https://www.linkedin.com/shareArticle?mini=true&url={{ $noticia['permalink'] }}&title={{ urlencode($noticia['title']) }}&source={{ url('/') }}" class="linkedin" title="Compartir en Linkedin" rel="noreferrer">
				<img src="/images/glyph/share/linkedin.svg" width="30" height="30" alt="Compartila en LinkedIn">
			</a>
		</li>
		
		<li class="mailto">
			<a href="mailto:?subjet=Perfil.com | {{ urlencode($noticia['title']) }}&body=Hola, vi este artículo que publicó Perfil.com y creo que te puede interesar. {{ $noticia['permalink'] }}" class="email" rel="noopener noreferrer" aria-label="Email" title="Compartir por email" rel="noreferrer">
				<img src="/images/glyph/share/mail.svg" width="30" height="30" alt="Compartila por Email">
			</a>
		</li>

		{{--
		<li class="pinterest"><a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" target="_blank" rel="noreferrer"><i class="fab fa-pinterest"></i></a></li>
		--}}
	</ul>
</div>
