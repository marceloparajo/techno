<div class="supercontenedor radio-ticker" id="radio-ticker">
    <div class="contenedor-general">
        @foreach ($news() as $new)
            <p class="radio-news" style="display: @if ($loop->first) block @else none @endif;"><a href="https://radio.perfil.com{{ $new['permalink'] }}">{{ $new['title'] }}</a></p>
        @endforeach
    </div>
    <div class="frecuencia">FM 101.9</div>
</div>
