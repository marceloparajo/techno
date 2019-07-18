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

<div class="row noticias-relacionadas">
    <div class="col-12 top">
        <h6>{{ __('related news') }}</h6>
    </div>
    <div class="col-12 news">
        @foreach (array_slice($noticias, 0, 4) as $noticia)
            <div class="{{ $relacionadasGroupClass }}">
                <a href="{{ $noticia['permalink'] }}" title="Read {{ $noticia['title'] }}">
                    {!! $imageHelper->getLazyImages( $noticia['image']['srcs']['small'], 540, $noticia['image']['caption'],'img-fluid', '540x304') !!}
                </a>
                <h2><a href="{{ $noticia['permalink'] }}">{{ $noticia['title'] }}</a></h2>
            </div>
        @endforeach
    </div>
</div>
