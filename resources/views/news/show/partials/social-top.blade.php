<div class="social-topsharing">
	<ul>
   <li><a href="http://pinterest.com/pin/create/button/?url={{ $noticia['permalink'] }}&media={{ $noticia['main_image']['src'] }}&description={{ urlencode($noticia['title']) }}" class="pinterest" target="_blank"><i class="fab fa-pinterest"></i></a></li>
    <li><a href="whatsapp://send?text={{ urlencode($noticia['title']) . ' ' . $noticia['permalink'] }}" data-action="share/whatsapp/share" class="whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
    <li> <a class="twitter" href="https://twitter.com/intent/tweet?text={{ urlencode($noticia['title']) }}&url={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-twitter"></i></a></li>
    <li><a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u={{ $noticia['permalink'] }}" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
    <li><h4>{{ __('share it') }} <i class="fas fa-arrow-right"></i></h4></li>
</ul>
</div>