@if (isset($news) && count($news) > 0)

	@if (isset($news[1]))

		<div class="container cajageneral">

			<div class="caja-contenido">

				<div class="notas-cajageneral radio-perfil">

					<div class="header-cajageneral">
						<h6>Radio Perfil</h6>
					</div>

					<div class="contenido-notas">
						@foreach(array_slice($news, 0, 3) as $key => $new)
						<article class="articulo caja-nota">
							<figure>
								<a href="{{ $new['permalink'] }}">
								@if ($key == 0)
									<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="500" />
								@else
									<x-lazy-image :src="$new['main_image']['srcs']['original']" :alt="$new['main_image']['caption']" class="img-fluid" max-width="300" />
								@endif
								</a>
							</figure>

							<div class="meta-content">
								<a href="{{ $new['permalink'] }}">
									@if ($new['hat'] != '')
										<span class="hat">{{ $new['hat'] }} </span>
									@endif
									<h2>{{ $new['home_title'] }}</h2>
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
						</article>
						@endforeach
					</div>

					<div class="footer-cajageneral">
						<span class="mira"><a href="https://radio.perfil.com/en-vivo/video"><img src="/images/glyph/radio/video.svg">Mirá<br>en&nbsp;vivo</a></span>
						<span class="escucha"><a href="https://radio.perfil.com/en-vivo/radio"><img src="/images/glyph/radio/play.svg">Escuchá&nbsp;on&nbsp;line<br>FM 101.9</a></span>
					</div>

				</div><!-- notas-cajageneral -->

			</div>
		</div>
	@endif

@endif
