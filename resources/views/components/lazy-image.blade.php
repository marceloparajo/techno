@if ($internalImage())
    <picture>
        @foreach ($images() as $image)
            @if ($loop->last)
                <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $image['src'] }}" style="width: 100%"  loading="lazy">
            @else
                <source media="(max-width: {{ $image['width'] }})" data-srcset="{{ $image['src'] }}" />
            @endif
        @endforeach
    </picture>
@else
    <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $src }}"  loading="lazy">
@endif
<noscript><img src="{{ $src }}" alt="{{ $alt }}" itemprop="url" loading="lazy"></noscript>
@if ($play_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasvideo.svg') }}" class="hasvideo" style="width:20px;height:18px"></div>
@endif
@if ($camera_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasgallery.svg') }}" class="hasgallery" style="width:20px;height:15px"></div>
@endif
