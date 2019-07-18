@if (count($noticia['gallery']) > 0)
    <amp-carousel lightbox width="480"
                  height="270"
                  layout="responsive"
                  type="slides"
                  class="main-image">
        <figure>
            <amp-img
                    src="{{ $noticia['main_image']['srcs']['medium-wide'] }}"
                    alt="{{ $noticia['main_image']['caption'] }}"
                    height="513"
                    width="912"
                    layout="responsive"
                    role="button"
                    tabindex="0">
            </amp-img>
            <figcaption><h4>{{ $noticia['main_image']['caption'] }} ({{ $noticia['main_image']['credit'] }})</h4></figcaption>
        </figure>
        @foreach ($noticia['gallery'] as $img)
            @if ($img['id'] != $noticia['main_image']['id'])
                <figure>
                    <amp-img
                            src="{{ $img['srcs']['medium-wide'] }}"
                            alt="{{ $img['caption'] }}"
                            height="513"
                            width="912"
                            layout="responsive"
                            role="button"
                            tabindex="0">
                    </amp-img>
                    <figcaption><h4>{{ $img['caption'] }}<b> Foto: {{ $img['credit'] }}</b></h4></figcaption>
                </figure>
            @endif
        @endforeach
    </amp-carousel>
@else
    <figure>
        <amp-img
                src="{{ $noticia['main_image']['srcs']['medium-wide'] }}"
                alt="{{ $noticia['main_image']['caption'] }}"
                height="513"
                width="912"
                layout="responsive"
                on="tap:lightbox-image"
                role="button"
                tabindex="0">
        </amp-img>
        <figcaption><h4>{{ $noticia['main_image']['caption'] }}<b> Foto: {{ $noticia['main_image']['credit'] }}</b></h4></figcaption>
    </figure>
@endif