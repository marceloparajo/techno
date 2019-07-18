@inject('menuHelper', "App\Http\Helpers\MenuHelper")
<footer>
    <div class="container-fluid" itemscope itemprop="publisher" itemtype="https://schema.org/Organization">
        <div class="row">
            <div class="col-xs-12 col-xl-6 offset-xl-3 text-center">
                <a href="{{ asset('') }}" title="Ir a la Home de {{ env('APP_NAME') }}" itemprop="url">
                    <div itemscope itemprop="logo" itemtype="https://schema.org/ImageObject">
                        <img src="{{ asset('img/logo-w.svg') }}" alt="{{ env('APP_NAME') }}">
                        <noscript>
                            <img src="{{ asset('img/favicon/android-icon-192x192.png') }}" alt="{{ env('APP_NAME') }}" itemprop="url">
                        </noscript>
                    </div>
                </a>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-xs-12 col-xl-6 offset-xl-3 text-center">
                <a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" class="link-social-facebook mr-3" itemprop="sameAs"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" class="link-social-twitter mr-3" itemprop="sameAs"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/{{ env('YOUTUBE_CHANNEL', '') }}" target="_blank" class="link-social-youtube mr-3" itemprop="sameAs"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" class="link-social-instagram mr-3" itemprop="sameAs"><i class="fab fa-instagram"></i></a>
                <a href="{{ route('feeds.lastposts') }}" target="_blank" class="link-social-rss mr-3"><i class="fa fa-rss-square"></i></a>
                <a href="https://www.{{ env('APP_NAME', '') }}.com.ar/sitemap" target="_blank" class="link-social-sitemap"><i class="fa fa-sitemap"></i></a>
            </div>
        </div>
        <div class="row mt-3 " >
            <nav class="footer-nav text-center">
                <ul class="footer-revistas">
                    @foreach ($menuHelper->getMenuItems('revistas') as $item)
                     <li class="{{ $item['class'] }}"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
                    @endforeach
                </ul>
            </nav>
        </div>
        <div class="row mt-3 disclaimer">
            <div class="col-xs-12 col-xl-6 offset-xl-3 text-center">
                <p>
                    <span itemprop="name">{{ strtolower(env('APP_NAME')) }}.perfil.com - Editorial Perfil S.A.</span> | © Perfil.com 2006-{{ \Carbon\Carbon::now()->format('Y') }} - All rights reserved<br />
                    Intellectual Property Registry Number 5346433<br />
                    <div class="d-none d-xl-block" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                    Address: <span itemprop="streetAddress">California 2715</span>, <span itemprop="postalCode">C1289ABI</span>, <span itemprop="addressLocality">CABA, Argentina</span>  | Phone: <span itemprop="telephone">(+5411) 7091-4921</span> / <span itemprop="telephone">(+5411) 7091-4922</span> | E-mail: <a href="mailto:perfilcom@perfil.com"><span itemprop="email">perfilcom@perfil.com</span></a>
                    </div>
                </p>
            </div>
        </div>
    </div>
</footer>