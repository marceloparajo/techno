@inject('imageHelper', "App\Http\Helpers\ImageHelper")
@if (isset($news) && count($news) > 3)

		<div class="container secciones">

			<div class="caja-contenido">

				<div class="seccionfija {{ $news[0]['channel']['slug'] }}">

					<h6></h6>

					<div class="contenedor-notas">

						@foreach(array_slice($news, 0, 7) as $key => $new)

							<article class="articulo seccion">

								<figure>
									<a href="{{ $new['permalink'] }}" target="_blank">
										@if ($key == 0)
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 540, $new['main_image']['caption'],'img-fluid', '540x304') !!}
										@else
										{!! $imageHelper->getLazyImages( $new['main_image']['srcs']['extra-small-wide'], 270, $new['main_image']['caption'],'img-fluid', '270x152') !!}
										@endif

										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
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
									<a href="{{ $new['permalink'] }}" target="_blank">
										@if ($new['hat'] != '')
											<span class="hat">{{ $new['hat'] }} </span>
										@endif
										<h2>
											{{ $new['home_title'] }}
										</h2>
										<h4 class="headline">
											{{ $new['headline'] }}
										</h4>
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

			</div><!-- caja-contenido -->

			<div class="caja-right">


{{--
######################################
######################################

CONTENIDO HARDCODEADO DESDE ACA

######################################
######################################
--}}

<section id="masLeidasSidebar" class="widget-mas-leidas-de-perfil">
	<header class="masleidas-titulo">
		<a href="/mas-leidas">Lo más visto</a>
	</header>
		<div id="rankPerfilcom">
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/marcelo-tinelli-lobo-con-piel-de-cordero.phtml">
					<figure>
						<img class="lazy" src="https://fotos.perfil.com/2020/06/21/trim/300/200/marcelo-tinelli-974731.jpg">
					</figure>
					<h3>
						<span class="rankOrder">1</span>Marcelo Tinelli, un lobo en piel de cordero
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/jorge-lanata-los-chorros-estan-sueltos-y-estaiclen-yendo-por-la-venganza.phtml">
					<h3>
					<span class="rankOrder">2</span>Jorge Lanata: "El costo político de detenerme a mí, a Majul, o quien sea es muy alto"
				</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/apartan-al-juez-federico-villena-de-la-causa-por-espionaje-ilegal.phtml">
					<h3>
					<span class="rankOrder">3</span>
					Apartan al juez Federico Villena de la causa por espionaje ilegal
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/sabina-frederic-repondio-a-horacio-verbitsky-dijo-es-injusto-compararme-con-patricia-bullrich.phtml">
					<h3>
					<span class="rankOrder">4</span>
					Sabina Frederic le respondió a Horacio Verbitsky: "Es injusto compararme con Patricia Bullrich"
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/gabriel-solano-presento-a-su-bebe-y-lo-criticaron-porque-nacio-hospital-aleman.phtml">
					<h3>
					<span class="rankOrder">5</span>
					Gabriel Solano presentó a su bebé y lo criticaron porque nació en un sanatorio privado
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/marcelo-longobardi-pueden-detener-periodistas-y-alberto-fernandez-se-pareceria-nicolas-maduro.phtml">
					<h3><span class="rankOrder">6</span>
					Longobardi: "Pueden detener a periodistas y Alberto Fernández se parecería a Maduro"
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/bloomberg/bc-nueva-mutacion-podria-acelerar-propagacion-de-covid-19-experto.phtml">
					<h3>
					<span class="rankOrder">7</span>Una nueva mutación podría acelerar la propagación de Covid-19
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/politica/fernando-iglesias-redobla-la-apuesta-tras-su-ataque-a-perfil-no-me-voy-a-disculpar.phtml">
					<h3>
					<span class="rankOrder">8</span>
					Fernando Iglesias redobla la apuesta tras su ataque a Perfil: "No me voy a disculpar"
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/actualidad/horacio-verbitsky-estoy-preocupado-por-el-regreso-de-bullrich-al-mininisterio-de-seguridad.phtml">
					<h3>
					<span class="rankOrder">9</span>
					Verbitsky y la doctrina Frederic: "Estoy preocupado por el regreso de Bullrich a Seguridad"
					</h3>
				</a>
			</article>
			<article class="masleidas">
				<a href="//www.perfil.com/noticias/coronavirus/18-nuevas-muertes-coronavirus-sube-tasa-mortalidad.phtml">
					<h3>
					<span class="rankOrder">10</span>Con 18 nuevas muertes sube la tasa de mortalidad por coronavirus
					</h3>
				</a>
			</article>
		</div>
		<footer>
			<a href="/mas-leidas">Mirá más</a>
    </footer>
	</section>


{{--
######################################
######################################

CONTENIDO HARDCODEADO HASTA ACA

######################################
######################################
--}}


			</div>


		</div>

@endif