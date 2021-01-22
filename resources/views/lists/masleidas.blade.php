<div class="box-columnista 
	@if($loop->first)
		main-columnista
	@endif
	">
	<div class="info-columnista">
		<a href="{{ $noticia['permalink'] }}">
			<figure>
				<img src="https://fotos.perfil.com/autores/default/{{ $noticia['author']['username'] }}_80.jpg" />
			</figure>
			<span class="nombre-columnista">
				{{ $noticia['author']['fullname'] }}
			</span>
		</a>
	</div>
	<article class="articulo">
		<a href="{{ $noticia['permalink'] }}">
			@if ($noticia['hat'] != '')
				<span class="hat">Marchas y contramarchas</span>
			@endif
			<h2>{{ $noticia['home_title'] }}</h2>
			<p class="headline">
				{{ $noticia['headline'] }}
			</p>
			@if ( isset($noticia['date_available_human']) && !empty($noticia['date_available_human']) )
			<span class="fechayhora">
				{{ $noticia['date_available_human'] }}
			</span>
			@endif
		</a>
	</article>
</div>
