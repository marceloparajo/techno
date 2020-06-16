@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 0)

	@if (isset($news[2]))

		<section class="container-fluid seccionfija py-2 mb-4">

			<div class="container px-0">

				<h5>{{ $news[0]['hat'] ?? '' }}</h5>

				<div class="row">

					<div class="container px-0">
						<div class="contenedor-notas">
							<article class="cobertura-nota">
								<a href="{{ $news[2]['permalink'] }}">
									<figure>
										{!! $imageHelper->getLazyImages( $news[2]['main_image']['srcs']['medium-wide'], 720, $news[2]['main_image']['caption'],'img-fluid','720x405') !!}
									</figure>
									<div class="meta-content">
										<h2>{{ $news[2]['home_title'] }}</h2>
										<h4><span>{{ $news[2]['date_available_human']}}</span> {{ $news[2]['headline'] }}</h4>
										@if ($news[2]['signed'])
											<h4 class="firma-home">{{ __('by') }} {{ $news[2]['author']['fullname'] }}</h4>
										@endif
									</div>
								</a>
							</article>
						</div>

						<div id="" class="ads-space text-center d-block" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="true" ></div>

					</div>

				</div>

			</div>



		</section>

	@endif

@endif