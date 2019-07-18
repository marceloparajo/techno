@inject('shortcodeConverter', "App\Http\Helpers\shortCodeConverter")
@inject('widgetHelper', "App\Http\Helpers\WidgetsHelper")

@php $new = $widgetHelper->getMinutoDeNoticiasInfo() @endphp

@if (! is_null($new) && isset($new['video_id']) && $new['video_id'] != '')
    <article class="article card minuto-de-noticias mb-2">
        <div class="card-body">
            <span class="hat">{{ $new['hat'] }}</span>
            {!! $shortcodeConverter->convert($new['embed_code']) !!}
            <div class="article-content">
                <h2><a href="{{ $new['domain'] }}">{{ $new['title'] }}</a></h2>
               {{-- <p>{{ $new['headline'] }}</p> --}}
            </div>
        </div>
    </article>
@endif
