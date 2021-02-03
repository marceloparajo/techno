<div class="container revistas">
    <span class="titulo-revista {{ $id_revista }}">{{ $title() }}</span>

    <div class="notas-revistas">
        <article class="articulo derevistas">
            <figure>
                <a href="{{ $news[0]['permalink'] }}" rel="noreferrer">
                    <x-lazy-image :src="$news[0]['main_image']['srcs']['original']" :alt="$news[0]['main_image']['caption']" class="img-fluid" max-width="500" />
                </a>
            </figure>

            <div class="meta-content">
                <a href="{{ $news[0]['permalink'] }}" rel="noreferrer">
                    <h2>
                        {{ $news[0]['home_title'] }}
                    </h2>
                </a>
                @if ($news[0]['signed'])
                    <span class="firma-home">
							<a href="{{ route('authors.show', $news[0]['author']['username']) }}">
                                @lang('by :AUTHOR', ['AUTHOR' => $news[0]['author']['fullname']])
							</a>
						</span>
                @elseif ($news[0]['credit'] != '')
                    <span class="firma-home">{{ $news[0]['credit'] }}</span>
                @endif
            </div>
        </article>
        <div class="grupotres">
            @foreach (array_slice($news, 1, 3) as $new)
                <article class="articulo derevistas">
                    <figure>
                        <a href="{{ $new['permalink'] }}" rel="noreferrer">
                            <x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
                        </a>
                    </figure>

                    <div class="meta-content">
                        <a href="{{ $new['permalink'] }}" rel="noreferrer">
                            <h2>
                                {{ $new['home_title'] }}
                            </h2>
                        </a>
                        @if ($new['signed'])
                            <span class="firma-home">
							<a href="{{ route('authors.show', $new['author']['username']) }}">
                                @lang('by :AUTHOR', ['AUTHOR' => $new['author']['fullname']])
							</a>
						</span>
                        @elseif ($new['credit'] != '')
                            <span class="firma-home">{{ $new['credit'] }}</span>
                        @endif
                    </div>
                </article>
            @endforeach
        </div>
    </div>
</div>
