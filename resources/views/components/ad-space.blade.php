<div style="width: {{ $style_width }}; @if (! is_null($max_height)) max-height: {{ $max_height }}px; @endif min-height: {{ $min_height }}px; display: flex; flex-direction: column; align-items: center; margin: {{ $margin_top }}px 0 {{ $margin_bottom }}px 0; overflow: hidden;" class="{{ $class }}">
    <div id="" class="ads-space {{ $class }}" data-id="{{ $id }}" data-w="{{ $width }}" data-h="{{ $height }}" data-loaded="false" data-reload="{{ $reload }}"></div>
</div>

