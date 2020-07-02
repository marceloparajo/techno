@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)


<div class="container impresa mb-4">

	<div class="caja-contenido">

		<h6><span class="diarioperfil">Diario Perfil</span><span class="fechaedicion"> Edición del {{ $news[0]['date_available'] }}</span></h6>


		<div class="notas-impresa">
			@foreach(array_slice($news, 0, 11) as $key => $new)

				@if($key==1)
				<div class="caja-notas">
				@endif

				@if($key == 7)
				</div>
				<div class="caja-notas-amarillas">
				@endif

					<article class="articulo deimpresa">
						
						<figure>
							<a href="{{ $new['permalink'] }}">
								@if($key == 0) 
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 270, $new['main_image']['caption'],'figure-img img-fluid') !!}
								@elseif($key < 7)
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 270, $new['main_image']['caption'],'img-fluid','270x152') !!}
								@endif
							</a>
						</figure>


						@if($key != 0)
							<div class="meta-content">
								<a href="{{ $new['permalink'] }}">
									{{--
										@if ($new['hat'] != '')
											<h3 class="hat">{{ $new['hat'] }} </h3>
										@endif
									--}}
									<h2>
										{{ $new['home_title'] }}
									</h2>
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
						@endif

					</article>
			@endforeach

			</div><!--caja-notas -->

		</div>

	</div>

	<div class="caja-right">
		SIDEBAR
	</div>


</div><!-- container impresa -->

@endif