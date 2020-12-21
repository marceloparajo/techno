@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@inject('shortcodeConverter', "App\Http\Helpers\ShortCodeConverter")




@if (isset($news) && count($news) > 0)


	<div class="caja-contenido destacada">

		<div class="columna-dostercios">
			<article class="articulo main-destacada">
				<figure>
					<a href="{{ $news[0]['permalink'] }}">
						{!! $imageHelper->getLazyImages( $news[0]['main_image']['srcs']['small-wide'], 540, $news[0]['main_image']['caption'],'img-fluid','540x304') !!}
						@if ($news[0]['has_video']) 
							<div class="galeria-video">
								<span><i class="fa fa-play"></i></span>
							</div>
						@endif
						@if ($news[0]['has_gallery'])
							<div class="galeria-video">
								<span><i class="fa fa-camera"></i></span>
							</div>
						@endif
					</a>
				</figure>			
				<div class="meta-content">
					<a href="{{ $news[0]['permalink'] }}">
						@if ($news[0]['hat'] != '')
							<span class="hat">{{ $news[0]['hat'] }} </span>
						@else
							<span class="hat">{{ $news[0]['channel']['name'] }}</span>
						@endif
						<h2>
							{{ $news[0]['home_title'] }}
						</h2>
						<p class="headline">{{ $news[0]['headline'] }}</p>
					</a>
					@if ($news[0]['signed'])
					<div class="firma-home">
						<a href="/autores/{{$news[0]['author']['username']}}">
							{{ __('by') }} {{ $news[0]['author']['fullname'] }}
						</a>
					</div>
					@elseif ($news[0]['credit'] != '')
						<div class="firma-home">{{ $news[0]['credit'] }}</div>
					@endif
				</div>
			</article>
		</div>		

			<div id="" class="ads-space down-md" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>
		
		<div class="columna-tercio">

			@foreach(array_slice($news, 1, 2) as $key => $new)

				<article class="articulo">
					<figure>
						<a href="{{ $new['permalink'] }}">
							{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
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
			@endforeach

		</div>


			<div id="" class="ads-space only-md up-xl" data-id="728x90x-pos-" data-w="728" data-h="90" data-loaded="false" data-reload="true" >
				
			</div>

	</div><!-- caja-contenido -->




@endif
