@if ($internalImage())
    <picture>
        @foreach ($images() as $image)
            @if ($loop->last)
                <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $image['src'] }}">
            @else
                <source media="(max-width: {{ $image['width'] }})" data-srcset="{{ $image['src'] }}" />
            @endif
        @endforeach
    </picture>
@else
    <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $src }}">
@endif
<noscript><img src="{{ $src }}" alt="{{ $alt }}" itemprop="url"></noscript>
@if ($play_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasvideo.svg') }}" class="hasvideo"></div>
@endif
@if ($camera_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasgallery.svg') }}" class="hasgallery"></div>
@endif
