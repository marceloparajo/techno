<footer>
    <div class="logo-footer">
        <a href="{{ route('home.index') }}">
            <amp-img src="{{ asset('images/logo_perfil_negativo.png') }}"
                     alt="{{ env('APP_ALTER_NAME', '') }}"
                     height="30"
                     width="150"
                     layout="fixed">
            </amp-img>
        </a>
    </div>
    <div class="social-share">
        <amp-social-share type="twitter" class="twitter"></amp-social-share>
        <amp-social-share type="facebook" class="facebook" data-param-app_id="{{ env('FACEBOOK_APP_ID', '') }}" data-param-quote="{{ $noticia['headline']?? $sectionTitle }}"></amp-social-share>
        <amp-social-share type="whatsapp" class="whatsapp"></amp-social-share>
        <amp-social-share type="linkedin" class="linkedin"></amp-social-share>
        <amp-social-share type="system"></amp-social-share>
    </div>
    <p>
        Perfil.com ©2006-{{ \Carbon\Carbon::now()->format('Y') }} - Todos los derechos reservados <br />
        Registro de Propiedad Intelectual: Nro. 5346433
    </p>
</footer>
