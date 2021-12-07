<div style="width: {{ $width }}px; 
    @if (! is_null($max_height)) max-height: {{ $max_height }}px; @endif min-height: {{ $min_height }}px; display: flex; flex-direction: column; align-items: center; margin-top: {{ $margin_top }}px; margin-bottom: {{ $margin_bottom }}px; overflow: hidden;margin-left: auto;margin-right: auto;" class="{{ $class }}">
    <div id="" class="ads-space {{ $class }}" data-id="{{ $id }}" data-w="{{ $width }}" data-h="{{ $height }}" data-loaded="false" data-reload="{{ $reload }}"></div>
</div>

