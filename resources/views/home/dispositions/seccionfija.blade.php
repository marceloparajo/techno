@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<div class="container seccion-fija">

			<div class="caja-contenido">

				<div class="container px-0">

					<h5>{{ $news[0]['hat'] ?? '' }}</h5>

					<div class="row">

						<div class="container px-0">
							<div class="contenedor-notas">
								<article class="articulo seccion">
									<figure>
										<a href="{{ $news[2]['permalink'] }}">
											{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid','720x405') !!}
										</a>
									</figure>
									<div class="meta-content">
										<a href="{{ $news[2]['permalink'] }}">
											<h2>{{ $news[2]['home_title'] }}</h2>
											<h4><span>{{ $news[2]['date_available_human']}}</span> {{ $news[2]['headline'] }}</h4>
										</a>
										@if ($news[0]['signed'])
										<h5 class="firma-home">
											<a href="/autores/{{$news[0]['author']['username']}}">
												{{ __('by') }} {{ $news[0]['author']['fullname'] }}
											</a>
										</h5>
										@elseif ($news[0]['credit'] != '')
											<h5>{{ $news[0]['credit'] }}</h5>
										@endif
									</div>
								</article>
							</div>

						</div>

					</div>

				</div>

			</div><!-- caja-contenido -->

			<div class="caja-right">

			</div>


		</section>

	@endif

@endif