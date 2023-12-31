@if (isset($news) && count($news) > 0)
	<!-- Opinión  -->
	
	<div class="opinion">

		<div class="opinion__title news__aside-title">
			Opinión<a href="/seccion/opinion" class="news__aside-title-mas">Ver más <span> &#10140;</span></a>
		</div>

		<div class="opinion__container bg-economy">

			@foreach(array_slice($news, 0, 8) as $new)



			<article class="opinion__news opinion__news--{{ $loop->index }}">
				
				<a href="{{ $new['permalink'] }}">
					<div class="opinion__media">
						<img src="{{ $new['author']['image'] }}" alt="{{ $new['author']['fullname'] }}" />
					</div>
					<div class="opinion__author">
						{{ $new['author']['fullname'] }}
					</div>
					<h2 class="opinion__subject">
						{{ $new['home_title'] }}
					</h2>
				</a>

			</article>

			@endforeach

		</div>

	</div>


@endif