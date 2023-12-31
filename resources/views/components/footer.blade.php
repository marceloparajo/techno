<footer class="main-footer">
    <figure class="main-footer__logo">
        <a href="{{ asset('') }}" title="Ir a la Home de {{ env('APP_NAME') }}" itemprop="url">
            <img src="{{ asset('img/logo-fortuna.svg') }}" alt="Parabrisas" width="160" height="35">
        </a> 
    </figure>
    <div class="main-footer__redes">
        <a href="https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" title="{{  ucfirst(env("APP_NAME")) }} {{ __("in instagram") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/instagram.svg" class="instagram" alt="Instagram" width="30" height="30"></a>
		<a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" title="{{ ucfirst(env("APP_NAME")) }} {{ __("in facebook") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/facebook.svg" class="facebook" alt="Facebook" width="30" height="30"></a>
		<a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" title="{{ ucfirst(env("APP_NAME")) }} {{ __("in twitter") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/twitter.svg" class="twitter" alt="twitter" width="30" height="30"></a>
		<a href="https://www.youtube.com/channel/{{ env('YOUTUBE_CHANNEL', '') }}" target="_blank" title="{{ ucfirst(env("APP_NAME")) }} {{ __("in youtube") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/youtube.svg" class="youtube" alt="Youtube" width="30" height="30"></a>


        <a href="{{ route('feeds.channel', '') }}" rel="noreferrer nofollow"
        target="_blank"
        class="link-social-rss">
            <img src="/images/glyph/share/rss.svg"
                alt="RSS" width="30" height="30" alt="rss" />
        </a>

        <a href="{{ route('sitemaps.index') }}" rel="noreferrer nofollow"
        target="_blank"
        class="link-social-sitemap">
            <img src="/images/glyph/share/sitemap.svg" width="30" height="30"
                alt="Sitemap" />
        </a>

    </div>
    <nav class="main-footer__nav">

        <ul class="main-footer__revistas max-width">
            @foreach ($revistas as $item)
                <li class="{{ $item['class'] }}"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
            @endforeach
        </ul>

        <ul class="main-footer__fijas">
            <li><a href="{{ route('pages.canales.rss') }}">Canales RSS</a></li>
            <li><a href="{{ asset('static/docs/brochure_perfil.pdf') }}">Quienes Somos</a></li>
            <li><a href="mailto:editores.online@gmail.com">Contáctenos</a></li>
            <li><a href="{{ route('pages.tyc') }}">Privacidad</a></li>
            <li><a href="{{ route('pages.staff') }}">Equipo</a></li>
            <li><a href="{{ route('pages.reglas.participacion') }}">Reglas de participación</a></li>
            <li><a href="{{ route('pages.transito') }}">Tránsito</a></li>
        </ul>
    </nav>

    <div class="main-footer__disclaimer">
        <span itemprop="name">Parabrisas - Editorial Perfil S.A.</span> | © Perfil.com 2006-{{ date('Y') }} - Todos los derechos reservados.<br />
        Editor responsable: María José Bonacifa.<br>
        Registro de la propiedad intelectual número 5346433<br />
        <div class="d-none d-xl-block" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            Dirección: <span itemprop="streetAddress">California 2715</span>, <span itemprop="postalCode">C1289ABI</span>, <span itemprop="addressLocality">CABA, Argentina</span>  | Teléfono: <span itemprop="telephone">(+5411) 7091-4921</span> / <span itemprop="telephone">(+5411) 7091-4922</span> | E-mail: <a href="mailto:perfilcom@perfil.com"><span itemprop="email">perfilcom@perfil.com</span></a><br>
        </div>
    </div>
</footer>
