@if ($internalImage())
    <picture>
        @foreach ($images() as $image)
            @if ($loop->last)
                @if ($lazy_load)
                    <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $image['src'] }}" style="width: 100%">
                @else
                    <img alt="{{ $alt }}" class="{{ $class }}" src="{{ $image['src'] }}" style="width: 100%">
                @endif
            @else
                <source media="(max-width: {{ $image['width'] }})" @if ($lazy_load) data-srcset="{{ $image['src'] }}" @else srcset="{{ $image['src'] }}" @endif />
            @endif
        @endforeach
    </picture>
@else
    @if ($lazy_load)
        <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $src }}"  loading="lazy">
    @else
        <img alt="{{ $alt }}" class="{{ $class }}" src="{{ $src }}">
    @endif
@endif
@if ($play_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasvideo.svg') }}" class="hasvideo" style="width:20px;height:18px"></div>
@endif
@if ($camera_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasgallery.svg') }}" class="hasgallery" style="width:20px;height:15px"></div>
@endif
