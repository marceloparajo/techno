<div class="social-sharing text-center">
    <h4>{{ __('share') }}</h4>
    <a class="btn btn-share-facebook btn-share mr-2" href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a class="btn btn-share-twitter btn-share mr-2" href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-twitter"></i></a>
   
    <a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" class="btn btn-share-whatsapp btn-share mr-2" target="_blank"><i class="fab fa-whatsapp"></i></a>
    <a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" class="btn btn-share btn-share-pinterest" target="_blank"><i class="fab fa-pinterest"></i></a>
</div>