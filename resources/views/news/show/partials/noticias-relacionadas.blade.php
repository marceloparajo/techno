@inject('imageHelper', "\App\Http\Helpers\ImageHelper")

@php
    switch (count($noticias)) {
        case '1':
            $relacionadasGroupClass = "groupxUno";
            break;
        case '2':
            $relacionadasGroupClass = "groupxDos";
            break;
        case '3':
            $relacionadasGroupClass = "groupxTres";
            break;
        default:
            $relacionadasGroupClass = "group";
    }
@endphp

<div class="noticias-relacionadas">
    <h6>{{ __('related news') }}</h6>
    <div class="related-news">
        @foreach (array_slice($noticias, 0, 4) as $noticia)
            <article class="related-new">
                <figure class="related-img">
                    <a href="{{ $noticia['permalink'] }}" title="Read {{ $noticia['title'] }}">
                    {!! $imageHelper->getLazyImages( $noticia['image']['srcs']['small'], 540, $noticia['image']['caption'],'img-fluid', '540x304') !!}
                    </a>
                </figure>
                <h5><a href="{{ $noticia['permalink'] }}">{{ $noticia['title'] }}</a></h5>
            </article>
        @endforeach
    </div>
</div>
