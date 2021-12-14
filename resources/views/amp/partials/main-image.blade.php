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
            <figcaption>{{ $noticia['main_image']['caption'] }} <span> ({{ $noticia['main_image']['credit'] }})</span></figcaption>
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
                    <figcaption>{{ $img['caption'] }}<span> Foto: {{ $img['credit'] }}</span></figcaption>
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
        <figcaption>{{ $noticia['main_image']['caption'] }}<span> Foto: {{ $noticia['main_image']['credit'] }}</span></figcaption>
    </figure>
@endif