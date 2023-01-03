<div class="social__topsharing sticky">
	<ul>

		<li class="social__icon social__icon--facebook">
			<a href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank" rel="noreferrer">
				<img src="/images/glyph/share/icon-facebook.svg" width="20" height="20" alt="Compartila en Facebook">
			</a>
		</li>
		
		<li class="social__icon social__icon--twitter">
			<a href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank" rel="noreferrer">
				<img src="/images/glyph/share/icon-twitter.svg" width="20" height="20" alt="Compartila en Twitter">
			</a>
		</li>
		
		<li class="social__icon social__icon--whatsapp">
			<a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" target="_blank" rel="noreferrer">
				<img src="/images/glyph/share/icon-whatsapp.svg" width="20" height="20" alt="Compartila en Whatsapp">
			</a>
		</li>

		<li class="social__icon social__icon--linkedin">
			<a href="https://www.linkedin.com/shareArticle?mini=true&url={{ $noticia['permalink'] }}&title={{ urlencode($noticia['title']) }}&source={{ url('/') }}" class="linkedin" title="Compartir en Linkedin" rel="noreferrer">
				<img src="/images/glyph/share/icon-linkedin.svg" width="20" height="20" alt="Compartila en LinkedIn">
			</a>
		</li>
		
		<li class="social__icon social__icon--mailto">
			<a href="mailto:?subjet=Perfil.com | {{ urlencode($noticia['title']) }}&body=Hola, vi este artículo que publicó Perfil.com y creo que te puede interesar. {{ $noticia['permalink'] }}" class="email" rel="noopener noreferrer" aria-label="Email" title="Compartir por email" rel="noreferrer">
				<img src="/images/glyph/share/icon-email.svg" width="20" height="20" alt="Compartila por Email">
			</a>
		</li>
	</ul>
</div>