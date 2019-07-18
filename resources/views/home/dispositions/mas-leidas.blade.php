@inject('sidebarHelper', "App\Http\Helpers\SidebarHelper")
<!-- MAS VISTAS SITE -->
<div class="container-fluid px-0 my-3">
		<div class="container d-flex bg-white py-2">
			<div class="las-mas-leidas flex-grow-1">
				<h5>{{ __('most viewed') }}</h5>
				<ul class="mas-leidas ">
					@foreach ($sidebarHelper->getMostViewed(strtolower(env('APP_NAME', '')), 5) as $key => $article)
					<li>
						<a href="{{ $article['url'] }}">
							<figure>
								<span class="order-num">{{ $key + 1 }}</span>
								<img class="img-fluid lazyload" data-src="{{ $article['image'] }}">
							</figure>
							<h2>{{ $article['title'] }}</h2>
						</a>
					</li>
					@endforeach
				</ul>
			</div><!-- las-mas-leidas -->
			<div class="d-none d-xl-flex banner-masleidas">
				<div id="" class="d-none d-lg-block ads-space text-center" data-id="300x250x-pos-" data-w="300" data-h="250" data-loaded="false" data-reload="false"></div>
			</div>
		</div>
</div>
<!-- /MAS VISTAS SITE -->
