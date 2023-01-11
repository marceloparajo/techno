@if (isset($news) && count($news) > 0)

<div class="poster full-bg-dark">
	<div class="max-width">

		@foreach(array_slice($news, 0, 1) as $new)


				@include('partials.articulo', array('clase' => 'news--tipo-especial news--tipo-especial-main news--tipo-especial-poster news--hat-inverted', 'width_mobile' => '382', 'height_mobile' => '215', 'width_tablet' => '735', 'height_tablet' => '414', 'width_laptop' => '987', 'height_laptop' => '556', 'width_desktop' => '1300', 'height_desktop' => '540'))

		@endforeach

	</div>
</div>
@endif
