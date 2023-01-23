@if (isset($news) && count($news) > 0)
	<!-- Destacada -->
	<div class="full-bg bg-gray">
	
		<div class="opinion row max-width">

			@foreach(array_slice($news, 0, 8) as $new)



			<article class="opinion news--{{ $loop->index }}">
				
					<a href="{{ $new['permalink'] }}">
					{{ $new['home_title'] }}


					{{ $new['author']['fullname'] }}
					<img src="{{ $new['author']['image'] }}" alt="{{ $new['author']['fullname'] }}" />
					</a>

			</article>

			@endforeach

		</div>

	</div>

	<x-ad-space id="970x90x-pos-" width="970" height="90" margin-top="0" class="ads d-xs-none d-lg-flex" min-height="90" max-height="280" />
@endif