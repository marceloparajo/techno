@if ($internalImage())
    <picture class="{{ $picture_class }}">
        {{-- WEBP --}}
        @foreach ($images() as $image)
            @if ($loop->last)
                <source srcset="{{ $image['src_webp'] }}" type="image/webp" />
            @else
                <source media="(max-width: {{ $image['viewport'] }}px)" srcset="{{ $image['src_webp'] }}" type="image/webp" />
            @endif
        @endforeach

        {{-- JPG --}}
        @foreach ($images() as $image)
            @if ($loop->last)
                <img alt="{{ $alt }}" class="{{ $class }}" src="{{ $image['src'] }}" style="width: 100%" @if ($lazy_load) loading="lazy" @endif>
            @else
                <source media="(max-width: {{ $image['viewport'] }}px)" srcset="{{ $image['src'] }}" />
            @endif
        @endforeach
    </picture>
@else
    <img alt="{{ $alt }}" class="{{ $class }}" src="{{ $loadingImage() }}" data-src="{{ $src }}" @if ($lazy_load) loading="lazy" @endif>
@endif
@if ($play_button)
    <div class="galeria-video">
        <picture>
            <source srcset="{{ asset('images/hasvideo.webp') }}" type="image/webp">
            <source srcset="{{ asset('images/hasvideo.png') }}" type="image/png">
            <img src="{{ asset('images/hasvideo.png') }}" class="hasvideo" alt="video" width="20" height="18" loading="lazy" style="width: 20px; height: 15px; margin-left: 8px; margin-top: 10px;">
        </picture>
    </div>
@endif
@if ($camera_button)
    <div class="galeria-video">
        <picture>
            <source srcset="{{ asset('images/hasgallery.webp') }}" type="image/webp">
            <source srcset="{{ asset('images/hasgallery.png') }}" type="image/png">
            <img src="{{ asset('images/hasgallery.png') }}" class="hasgallery" alt="fotogaleria" width="20" height="15" loading="lazy" style="width: 20px; height: 15px; margin-left: 8px; margin-top: 10px;">
        </picture>
    </div>
@endif
