

<h1>Acá va video</h1>

@if (isset($news) && count($news) > 0)


		<div class="video">

			<div class="container">
				<h6>Videos</h6>

				<div class="notas-video">

					@foreach(array_slice($news, 0, 5) as $key => $new)

					<article class="articulo devideo">
						<figure>
							<a href="{{ $new['permalink'] }}">
								<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" :play-button="$new['has_video']" :camera_button="$new['has_gallery']" />
							</a>
						</figure>

						<div class="meta-content">
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<span class="hat">{{ $new['hat'] }} </span>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
								<p class="headline">{{ $new['headline'] }}</p>
							</a>
							@if ($new['signed'])
							<span class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</span>
							@elseif ($new['credit'] != '')
								<span class="firma-home">{{ $new['credit'] }}</span>
							@endif
							</div>
						</a>

						@if ($key == 4)
							<div class="miramas">
								<a href="/seccion/video/">Más Videos</a>
							</div>
						@endif


					</article>

					@if($key == 0)
						<div class="grupotres">
					@endif

					@if($key == 3)
						</div>
					@endif

					@endforeach

				</div><!-- notas-video -->

			</div><!-- container -->

		</div><!-- video -->

@endif
