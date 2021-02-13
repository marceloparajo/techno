<div style="width: {{ $style_width }}; @if ($set_max_height) max-height: {{ $height }}px; height: {{ $height }}px; @else min-height: {{ $height }}px; @endif  display: flex; flex-direction: column; align-items: center; margin: {{ $margin_top }}px 0 {{ $margin_bottom }}px 0; overflow: hidden;" class="{{ $class }}">
    <div id="" class="ads-space {{ $class }}" data-id="{{ $id }}" data-w="{{ $width }}" data-h="{{ $height }}" data-loaded="false" data-reload="{{ $reload }}"></div>
</div>

