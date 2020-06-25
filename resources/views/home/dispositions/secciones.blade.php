@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 3)

		<div class="container secciones">

			<div class="caja-contenido">

				<div class="seccionfija {{ $news[0]['channel']['slug'] }}">

					<h6></h6>

					<div class="contenedor-notas">

						@foreach(array_slice($news, 0, 7) as $key => $new)

							<article class="articulo seccion">

								<figure>
									<a href="{{ $new['permalink'] }}" target="_blank">
										@if ($key == 0)
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
										@else
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
										@endif

										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
										@if ($new['has_video']) 
											<div class="galeria-video">
												<span><i class="fa fa-play"></i></span>
											</div>
										@endif
										@if ($new['has_gallery'])
											<div class="galeria-video">
												<span><i class="fa fa-camera"></i></span>
											</div>
										@endif
									</a>
								</figure>

								<div class="meta-content">
									<a href="{{ $new['permalink'] }}" target="_blank">
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
									</a>
									@if ($new['signed'])
									<h5 class="firma-home">
										<a href="/autores/{{$new['author']['username']}}">
											{{ __('by') }} {{ $new['author']['fullname'] }}
										</a>
									</h5>
									@elseif ($new['credit'] != '')
										<h5>{{ $new['credit'] }}</h5>
									@endif
								</div>
							</article>

						@endforeach

					</div>

				</div>

			</div><!-- caja-contenido -->

			<div class="caja-right">

			</div>


		</div>

@endif