@if (isset($news) && count($news) > 0)
    <section class="pf-disp-bloque-inferior mt-5">
        <div class="row">
            <div class="col-12 text-center">
                <div id="" class="ads-space text-center mb-2 d-none d-lg-block" data-id="970x90x-pos-" data-w="970" data-h="90" data-loaded="false" data-reload="false"></div>
            </div>
        </div>
        <div class="row p-1">
            <div class="d-none d-lg-block col-lg-2">
                <div id="eplAdDiv" class="ads-space sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
            </div>
            <div class="col-12 col-lg-8">
                <div class="card-columns">
                    @foreach ($news as $key => $new)
                        @if (in_array($key, [1, 12, 18]))
                            <div class="article card bg-ads-space text-center p-0" style="min-height: 600px;">
                                <p class="m-0">{{ __('ads space') }}</p>
                                <div class="card-body p-0">
                                    <div id="" class="ads-space text-center m-auto" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
                                </div>
                            </div>
                        @endif
                    <a href="{{ $new['permalink'] }}" class="article card">
                        <img class="card-img-top lazyload" data-src="{{ $new['main_image']['srcs']['medium-wide'] }}">
                        @if ($new['hat'] != '')<p class="pf-hat">{{ $new['hat'] }}</p>@endif
                        <div class="card-body">
                            <h2>{{ $new['home_title'] }}</h2>
                            {{--<p class="headline">{{ $new['headline'] }}</p>--}}
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>
            <div class="d-none d-lg-block col-lg-2">
                <div id="eplAdDiv" class="ads-space text-right sticky-top" data-id="sticky_160x600x-pos-" data-w="160" data-h="600" data-loaded="false" data-reload="true"></div>
            </div>
        </div>
    </section>
@endif