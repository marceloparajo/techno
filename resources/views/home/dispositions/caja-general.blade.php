@inject('imageHelper', "App\Http\Helpers\ImageHelper")
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
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
								@else
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
								@endif
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
						@endforeach
					</div>

					<div class="footer-cajageneral">
						<span class="mira"><a href="#"><i class="fas fa-video"></i>Mirá<br>en&nbsp;vivo</a></span>
						<span class="escucha"><a href="#"><i class="fas fa-play"></i>Escuchá&nbsp;on&nbsp;line<br>FM 101.9</a></span>
					</div>

				</div><!-- notas-cajageneral -->

			</div>

			<div class="caja-right">

				sidebarismo

			</div>

		</div>
	@endif

@endif