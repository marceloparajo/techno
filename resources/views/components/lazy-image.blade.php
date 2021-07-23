@if ($internalImage())
    <picture>
        @foreach ($images() as $image)
            @if ($loop->last)
                @if ($lazy_load)
                    <img alt="{{ $alt }}" class="{{ $class }} lazyload" src="{{ $loadingImage() }}" data-src="{{ $image['src'] }}">
                @else
                    <img alt="{{ $alt }}" class="{{ $class }}" src="{{ $image['src'] }}">
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
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasvideo.png') }}" class="hasvideo" style="width:20px;height:18px"></div>
@elseif ($camera_button)
    <div class="galeria-video"><img src="{{ asset('images/glyph/hasgallery.png') }}" class="hasgallery" style="width:20px;height:15px"></div>
@endif
