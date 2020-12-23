@inject('shortCodeConverter', "App\Http\Helpers\shortCodeConverter")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if ($main_content == 'embed_code')
    {!! $shortCodeConverter->convert($embed_code) !!}
@else
    <figure class="figure btn-open-gallery" itemscope itemprop="image" itemtype="https://schema.org/ImageObject">
        @if (count($noticia['gallery']) > 1)
            <a href="#" role="button" class="btn-open-gallery fotogaleria" title="{{ __('show fotogallery') }}"><i class="fas fa-expand-arrows-alt"></i></a>
        @endif
        {!! $imageHelper->getLazyImages( $gallery[0]['srcs']['medium-wide'], 1140, $gallery[0]['caption'], 'figure-img img-fluid', '1140x641') !!}
        <noscript>
            <img src="{{ $gallery[0]['srcs']['big-wide'] }}" alt="{{ $gallery[0]['caption'] }}" itemprop="url">
        </noscript>
        <figcaption class="figure-caption">{{ $gallery[0]['caption'] }}<span class="credito-foto"> | {{ $gallery[0]['credit']}}</span></figcaption>
    </figure>
@endif
{{--<input type="hidden" id="lightbox-gallery-content" value="{{ $lightbox }}">--}}
