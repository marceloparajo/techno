<aside class="sticky-social d-none d-lg-block">
    <ul>
        <li><a href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" class="entypo-facebook" target="_blank"><img src="/images/glyph/share/facebook.svg"><span>Facebook</span></a></li>
        <li><a href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" class="entypo-twitter" target="_blank"><img src="/images/glyph/share/twitter.svg"><span>Twitter</span></a></li>
        <li><a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" class="entypo-whatsapp" target="_blank"><img src="/images/glyph/share/whatsapp.svg"><span>Whatsapp</span></a></li>
        <li><a href="#" class="entypo-linkedin" target="_blank"><img src="/images/glyph/share/linkedin.svg"><span>LinkedIn</span></a></li>
        <li><a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" class="entypo-pinterest" target="_blank"><img src="/images/glyph/share/mail.svg"><span>Pinterest</span></a></li>
    </ul>
</aside>