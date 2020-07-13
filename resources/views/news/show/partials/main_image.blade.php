@inject('shortCodeConverter', "App\Http\Helpers\shortCodeConverter")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")
    @if ($main_content == 'embed_code')
        {!! $shortCodeConverter->convert($embed_code) !!}
    @else
        <figure class="figure btn-open-gallery" itemscope itemprop="image" itemtype="https://schema.org/ImageObject">
            <a href="#" role="button" class="btn-open-gallery fotogaleria" title="{{ __('show fotogallery') }}"><i class="fas fa-expand-arrows-alt"></i></a>

            {!! $imageHelper->getLazyImages( $gallery[0]['srcs']['medium-wide'], 1140, $gallery[0]['caption'],'figure-img img-fluid', '1140x641') !!}
            <noscript>
                <img src="{{ $gallery[0]['srcs']['big-wide'] }}" alt="{{ $gallery[0]['caption'] }}" itemprop="url">
            </noscript>
            <figcaption class="figure-caption pb-1 pt-1 pl-2">{{ $gallery[0]['caption'] }} | {{ $gallery[0]['credit']}}</figcaption>
        </figure>
    @endif
<input type="hidden" id="lightbox-gallery-content" value="{{ $lightbox }}">
