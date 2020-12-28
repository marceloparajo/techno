@if ($showEmbedCode())
    {!! $embedCode() !!}
@else
    <figure class="figure btn-open-gallery" itemscope itemprop="image" itemtype="https://schema.org/ImageObject">
        @if (count($noticia['gallery']) > 1)
            <a href="#" role="button" class="btn-open-gallery fotogaleria" title="{{ __('show fotogallery') }}"><i class="fas fa-expand-arrows-alt"></i></a>
        @endif
        {!! $mainImage() !!}
        <noscript>
            <img src="{{ $gallery[0]['srcs']['big-wide'] }}" alt="{{ $gallery[0]['caption'] }}" itemprop="url">
        </noscript>
        <figcaption class="figure-caption">{{ $gallery[0]['caption'] }}<span class="credito-foto"> | {{ $gallery[0]['credit']}}</span></figcaption>
    </figure>
@endif
