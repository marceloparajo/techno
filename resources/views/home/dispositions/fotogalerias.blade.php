@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<div class="container fotogaleria mb-4">

			<h6>Fotogalerías</h6>

			<div class="notas-fotogaleria">

				@foreach(array_slice($news, 0, 3) as $key => $new)
				@if ($key == 1)
					<div class="secundarias"> 
				@endif

				<article class="articulo defotogaleria">
					<figure>
						<a href="{{ $new['permalink'] }}">
							{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['medium-wide'], 540, $new['main_image']['caption'],'img-fluid','540x304') !!}
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
				@endforeach

					</div><!-- secundarias -->

			</div><!-- notas-fotogaleria -->

		</div><!-- fotogaleria -->


		<div class="row text-center banner-horizontal mx-2 mb-1 mt-5 d-none d-lg-block w-100">
			<div id="" class="ads-space text-center d-none d-lg-block" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
			</div>
		</div>


		<div id="" class="ads-space text-center d-block d-md-none" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>


	
	@endif

@endif