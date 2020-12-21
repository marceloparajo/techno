@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)
	<section class="container-fluid especial">

		@if ( count($news) < 3 ) 
			
			<div class="container d-flex px-0"> 
				@foreach ($news as $key => $new)
					<article class="col-12 col-md-6 mb-0 mb-lg-0 px-0 px-md-3 pordos">
						<a href="{{ $new['permalink'] }}">
							<figure>
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['large-wide'], 960, $new['main_image']['caption'],'img-fluid','960x540') !!}
							</figure>
							<div class="meta-contenido">
								@if ($new['hat'] != '')
									<h3>{{ $new['hat'] }}</h3>
								@else
									<h3>{{ strtoupper($new['channel']['name']) }}</h3>
								@endif
								<h2>{{ $new['home_title'] }}</h2>
								<!-- <h4 class="headline">{{ $new['headline'] }}</h4> -->
							</div>
						</a>
					</article>
				@endforeach
			</div>

		@else	

			<div class="container d-flex px-0">
				@foreach (array_slice($news, 0, 3) as $key => $new)
					@if ($key < 1)
						<article class="col-12 col-lg-4 mb-0 mb-lg-0 px-0 px-md-3 portres">
					@else
						<article class="col-12 col-md-6 col-lg-4 mb-0 mb-lg-0 px-1 px-md-3 portres">
					@endif
							<a href="{{ $new['permalink'] }}">
								<figure>
									{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['large-wide'], 960, $new['main_image']['caption'],'img-fluid','960x540') !!}
								</figure>
								<div class="meta-contenido">
									@if ($new['hat'] != '')
										<h3>{{ $new['hat'] }}</h3>
									@else
										<h3>{{ strtoupper($new['channel']['name']) }}</h3>
									@endif
									<h2>{{ $new['home_title'] }}</h2>
									<!-- <h4 class="headline">{{ $new['headline'] }}</h4> -->
								</div>
							</a>
						</article>
				@endforeach
			</div>

		@endif

	</section>
@endif