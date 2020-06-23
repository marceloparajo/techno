@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[4]))

		<div class="container bloomberg px-0">

			<div class="caja-contenido">

				<h6>Negocios</h6>

				<div class="caja-notas">

					@foreach(array_slice($news, 0, 6) as $key => $new)

						@if($key == 3)
							<div class="bloomberg-tres">
						@endif


						<article class="articulo notabloomberg bl-{{ $key }}">
							<figure>
								<a href="{{ $new['permalink'] }}">
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
								</a>
							</figure>
							<div class="meta-content">
								<a href="{{ $new['permalink'] }}">
									<h2>{{ $new['home_title'] }}</h2>
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

					</div><!-- bloomberg-tres -->

				</div><!-- caja-notas -->

			</div><!-- caja-contenido -->

			<div class="caja-right">

				<div id="" class="ads-space text-center d-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

			</div><!-- caja-right -->


		</div><!-- container -->

	@endif

@endif