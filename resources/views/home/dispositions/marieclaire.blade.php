@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[1]))

		<div class="container cajageneral">

			<div class="caja-contenido">

				<div class="notas-cajageneral marieclaire">

					<div class="header-cajageneral">
						<h6>Marie Claire</h6>
					</div>

					<div class="contenido-notas"> 
						@foreach(array_slice($news, 0, 2) as $key => $new)
							<article class="articulo caja-nota">
								<figure>
									<a href="{{ $new['permalink'] }}">
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 270, $new['main_image']['caption'],'img-fluid','270x152') !!}
										<h4>{{ $new['headline'] }}</h4>
									</a>	
								</figure>

								<div class="meta-content">
									<a href="{{ $new['permalink'] }}">
										@if ($new['hat'] != '')
											<span class="hat">{{ $new['hat'] }} </span>
										@endif
										<h2>{{ $new['home_title'] }}</h2>
										<h4>{{ $new['headline'] }}</h4>
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
							@if($key == 0)
								<div class="ad-marieclaire d-none d-xl-block">
									<div id="" class="ads-space text-center d-none d-xl-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
								</div>
							@endif
						@endforeach
					</div>

				</div><!-- notas-cajageneral -->

			</div>

			<div class="caja-right">

				sidebarismo

			</div>		</div>

	@endif

@endif