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
								<p class="headline">{{ $new['headline'] }}</p>
								@endif
								@if ($new['has_video']) 
									<div class="galeria-video">
										<img src="/images/glyph/hasvideo.svg" class="hasvideo">
									</div>
								@elseif ($new['has_gallery'])
									<div class="galeria-video">
										<img src="/images/glyph/hasgallery.svg" class="hasgallery">
									</div>
								@endif
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
							<div class="firma-home">
								<a href="/autores/{{$new['author']['username']}}">
									{{ __('by') }} {{ $new['author']['fullname'] }}
								</a>
							</div>
							@elseif ($new['credit'] != '')
								<div class="firma-home">{{ $new['credit'] }}</div>
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