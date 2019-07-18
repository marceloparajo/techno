@inject('shortcodeConverter', "App\Http\Helpers\shortCodeConverter ")

{{-- Edición Impresa --}}
@if ($new['channel']['slug'] == 'tapas')

    <div href="{{ $new['permalink'] }}" class="article card {{ $class }}">
        <img class="card-img"
             src="{{ $new['main_image']['srcs']['original'] }}"
        >
        <div class="card-body text-center">
            <h2>EDICIÓN IMPRESA</h2>
            <a href="#" class="btn btn-primary">SUSCRIBITE</a>
        </div>
    </div>

{{-- Mapa Pique --}}
@elseif ($new['channel']['slug'] == 'el-pique' && $new['embed_code'] != '')

    <article class="article card map">
        <div class="card-body">
            {!! $shortcodeConverter->convert($new['embed_code']) !!}
            <div class="article-content" style="padding: 1.4rem;">
                <a href="{{ $new['permalink'] }}">
                    <h2>{{ $new['home_title'] }}</h2>
                </a>
            </div>
        </div>
    </article>

{{-- Default --}}
@else
    <a href="{{ $new['permalink'] }}" class="article card {{ $class }}">
        <img class="card-img-top lazyload"
             data-src="{{ $new['main_image']['srcs']['medium-wide'] }}"
        >
        @if ($new['hat'] != '')<p class="pf-hat">{{ $new['hat'] }}</p>@endif
        <div class="card-body">
            <h2>{{ $new['home_title'] }}</h2>
            {{--<p class="headline">{{ $new['headline'] }}</p>--}}
        </div>
    </a>
@endif