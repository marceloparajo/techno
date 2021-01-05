@if ($internalImage())
    <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-srcset="{{ $imageSourcesSet() }}" />
@else
    <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $src }}">
@endif
<noscript><img src="{{ $src }}" alt="{{ $alt }}" itemprop="url"></noscript>
@if ($play_button)
    <div class="galeria-video">
        <span><i class="fa fa-play"></i></span>
    </div>
@endif
