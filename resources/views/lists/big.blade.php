<div class="col-12 mb-3 p-1">
    <a class="article-link" href="{{ $noticia['permalink'] }}">
        <article class="card pf-big-article d-none d-md-block">
            <x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['caption']" class="img-fluid" max-width="700" />
            <div class="card-img-overlay d-flex flex-row-reverse">
                <div class="align-self-center w-50">
                    @if ($noticia['hat'] != '')<p class="hat">{{ $noticia['hat'] }}</p>@endif
                    <h2>{{ $noticia['home_title'] }}</h2>
                    <p class="headline">{{ $noticia['headline'] }}</p>
                    @if ($noticia['signed'] == 'S')
                        <p class="author">{{ __('by') }} @if ($noticia['credit'] != '') {{ $noticia['credit'] }} @else {{ $noticia['author']['fullname'] }} @endif</p>
                    @endif
                    <hr />
                    @if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
                        <p class="date">{{ __('Published on') }}: {{ $noticia['date_available_human'] }}</p>
                    @endif
                </div>
            </div>
        </article>
        <article class="card pf-middle-article d-block d-md-none">
            <x-lazy-image :src="$noticia['main_image']['srcs']['original']" :alt="$noticia['main_image']['caption']" class="img-fluid" max-width="700" />
            <div class="card-body d-flex flex-column">
                @if ($noticia['hat'] != '')<p class="pf-hat">{{ $noticia['hat'] }}</p>@endif
                <div class="align-self-start">
                    <h2>{{ $noticia['home_title'] }}</h2>
                    <p class="headline">{{ $noticia['headline'] }}</p>
                </div>
                @if ($noticia['signed'] == 'S')
                    <div class="align-self-end">
                        <p class="author">{{ __('by') }} @if ($noticia['credit'] != '') {{ $noticia['credit'] }} @else {{ $noticia['author']['fullname'] }} @endif</p>
                    </div>
                @endif
            </div>
            @if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
            <div class="card-footer">
                {{ __('Published on') }}: {{ $noticia['date_available_human'] }}
            </div>
            @endif
        </article>
    </a>
</div>
