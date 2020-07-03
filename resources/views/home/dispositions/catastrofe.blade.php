@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@if (isset($news) && count($news) > 0)
	<div class="container catastrofe">
		<div class="catastrofe-todas">
			@foreach (array_slice($news, 0, 1) as $new)
		
			<article class="articulo catastrofe-grande">
				<figure>
					<a href="{{ $new['permalink'] }}">
						{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-big-wide'], 1140, $new['main_image']['caption'],'img-fluid','1140x540') !!}
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
						<h4 class="headline">{{ $new['headline'] }}</h4>
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

			<div class="catastrofe-tres">

				@foreach (array_slice($news, 1, 3) as $new)
					<article class="articulo catastrofe-chica">
						<figure>
							<a href="{{ $new['permalink'] }}">
								{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid','270x152') !!}
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
								<h4 class="headline">{{ $new['headline'] }}</h4>
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
			
		</div>

	</div>
@endif