@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@inject('shortcodeConverter', "App\Http\Helpers\ShortCodeConverter")




@if (isset($news) && count($news) > 0)


	<div class="caja-contenido destacada">
		

			@foreach(array_slice($news, 0, 3) as $key => $new)

				<article class="articulo nota-{{ $key }}">
					<figure>
						<a href="{{ $new['permalink'] }}">
							@if($key == 0)
								{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['small-wide'], 540, $news[0]['main_image']['caption'],'img-fluid','540x304') !!}
							@else
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
							@endif
							<p class="headline">
								{{ $new['headline'] }}
							</p>
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
								<span class="hat">{{ $new['hat'] }} </span>
							@else
								<span class="hat">{{ $new['channel']['name'] }}</span>
							@endif
							<h2>
								{{ $new['home_title'] }}
							</h2>
							<p class="headline">
								{{ $new['headline'] }}
							</p>
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
				</article>

				@if($key == 0)
					<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
				@endif


			@endforeach



			<div id="" class="ads-space only-md up-xl" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
				
			</div>

	</div><!-- caja-contenido -->




@endif
