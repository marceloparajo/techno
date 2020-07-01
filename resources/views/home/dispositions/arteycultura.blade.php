@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<div class="container arteycultura mb-4">

			<h6>Arte y cultura</h6>

			<div class="notas-ayc">

					@foreach(array_slice($news, 0, 4) as $key => $new)
					@if ($key == 1)
						<div class="columna-dosnotas"> 
					@endif

					<article class="articulo ayc">
						<figure
						 @if ($key == 0)
						 style="background-image:url({{ $new['main_image']['srcs']['extra-medium-wide'] }});"
						 @endif
						 >
							<a href="{{ $new['permalink'] }}">
								@if ($key == 0)
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
								@else
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
								@endif
								@if($key != 0)
								<h4>{{ $new['headline'] }}</h4>
								@endif
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
							<a href="{{ $new['permalink'] }}">
								@if ($new['hat'] != '')
									<h3 class="hat">{{ $new['hat'] }} </h3>
								@endif
								<h2>
									{{ $new['home_title'] }}
								</h2>
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
						</a>
					</article>

					@if ($key == 2)
						</div><!-- columna-dosnotas --> 
					@endif
					@endforeach
			</div><!-- notas-cobertura -->

		</div><!-- cobertura -->

	
	@endif

@endif