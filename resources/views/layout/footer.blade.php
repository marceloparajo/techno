@inject('menuHelper', "App\Http\Helpers\MenuHelper")

<footer class="main-footer super-contenedor">
	<figure>
		<a href="{{ asset('') }}" title="Ir a la Home de {{ env('APP_NAME') }}" itemprop="url">
			<img src="{{ asset('img/logo_perfil.svg') }}" alt="Perfil.com" style="width:120px;height:27px;">
		</a>
	</figure>
	<div class="footer-redes">
		<a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" class="link-social-facebook" itemprop="sameAs" rel="noreferrer"><img src="/images/glyph/footer/facebook.svg" alt="Seguinos en Facebook" style="width:20px;height:20px" /></a>
		<a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" class="link-social-twitter" itemprop="sameAs" rel="noreferrer"><img src="/images/glyph/footer/twitter.svg"  style="width:20px;height:16.25px" alt="Seguinos en Twitter"  /></a>
		<a href="https://www.youtube.com/channel/{{ env('YOUTUBE_CHANNEL', '') }}" target="_blank" class="link-social-youtube" itemprop="sameAs" rel="noreferrer"><img src="/images/glyph/footer/youtube.svg"  style="width:20px;height:14px" alt="Seguinos en Youtube" /></a>
		<a href="https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" class="link-social-instagram" itemprop="sameAs" rel="noreferrer"><img src="/images/glyph/footer/instagram.svg" alt="Seguinos en Instagram"  style="width:20px;height:20px" /></a>
		<a href="{{ route('feeds.lastposts') }}" target="_blank" class="link-social-rss" rel="noreferrer"><img src="/images/glyph/footer/rss.svg"  alt="RSS"  style="width:17px;height:17px" /></a>
		<a href="https://www.{{ env('APP_NAME', '') }}.com.ar/sitemap" target="_blank" class="link-social-sitemap" rel="noreferrer"><img src="/images/glyph/footer/sitemap.svg"  style="width:20px;height:15px" alt="Sitemap" /></a>
	</div>
	<nav class="nav-footer">
		<ul class="footer-revistas">
			@foreach ($menuHelper->getMenuItems('revistas') as $item)
			 <li class="{{ $item['class'] }}"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
			@endforeach
		</ul>
	</nav>
	<div class="disclaimer">
		<span itemprop="name">{{ strtolower(env('APP_NAME')) }}.perfil.com - Editorial Perfil S.A.</span> | © Perfil.com 2006-{{ date('Y') }} - All rights reserved<br />
		Intellectual Property Registry Number 5346433<br />
		<div class="d-none d-xl-block" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
		Address: <span itemprop="streetAddress">California 2715</span>, <span itemprop="postalCode">C1289ABI</span>, <span itemprop="addressLocality">CABA, Argentina</span>  | Phone: <span itemprop="telephone">(+5411) 7091-4921</span> / <span itemprop="telephone">(+5411) 7091-4922</span> | E-mail: <a href="mailto:perfilcom@perfil.com"><span itemprop="email">perfilcom@perfil.com</span></a>
		</div>
	</div>
</footer>
