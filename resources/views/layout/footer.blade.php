@inject('menuHelper', "App\Http\Helpers\MenuHelper")
<footer class="main-footer super-contenedor">
	<figure>
		<a href="{{ asset('') }}" title="Ir a la Home de {{ env('APP_NAME') }}" itemprop="url">
			<img src="{{ asset('img/logo_perfil.svg') }}">
		</a>
	</figure>
	<div class="footer-redes">
		<a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" class="link-social-facebook mr-3" itemprop="sameAs"><img src="/images/glyph/footer/facebook.svg" /></a>
		<a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" class="link-social-twitter mr-3" itemprop="sameAs"><img src="/images/glyph/footer/twitter.svg" /></a>
		<a href="https://www.youtube.com/channel/{{ env('YOUTUBE_CHANNEL', '') }}" target="_blank" class="link-social-youtube mr-3" itemprop="sameAs"><img src="/images/glyph/footer/youtube.svg" /></a>
		<a href="https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" class="link-social-instagram mr-3" itemprop="sameAs"><img src="/images/glyph/footer/instagram.svg" /></a>
		<a href="{{ route('feeds.lastposts') }}" target="_blank" class="link-social-rss mr-3"><img src="/images/glyph/footer/rss.svg" /></a>
		<a href="https://www.{{ env('APP_NAME', '') }}.com.ar/sitemap" target="_blank" class="link-social-sitemap"><img src="/images/glyph/footer/sitemap.svg" /></a>
	</div>
	<nav class="nav-footer">
		<ul class="footer-revistas">
			@foreach ($menuHelper->getMenuItems('revistas') as $item)
			 <li class="{{ $item['class'] }}"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
			@endforeach
		</ul>
	</nav>
	<div class="disclaimer">
		<p>
			<span itemprop="name">{{ strtolower(env('APP_NAME')) }}.perfil.com - Editorial Perfil S.A.</span> | © Perfil.com 2006-{{ \Carbon\Carbon::now()->format('Y') }} - All rights reserved<br />
			Intellectual Property Registry Number 5346433<br />
			<div class="d-none d-xl-block" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
			Address: <span itemprop="streetAddress">California 2715</span>, <span itemprop="postalCode">C1289ABI</span>, <span itemprop="addressLocality">CABA, Argentina</span>  | Phone: <span itemprop="telephone">(+5411) 7091-4921</span> / <span itemprop="telephone">(+5411) 7091-4922</span> | E-mail: <a href="mailto:perfilcom@perfil.com"><span itemprop="email">perfilcom@perfil.com</span></a>
			</div>
		</p>
	</div>
</footer>