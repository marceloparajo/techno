@inject('suggestedSiteNews', "App\Http\Helpers\SuggestedSiteNewsHelper")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@php $siteNews = $suggestedSiteNews->getSitesInfo();@endphp
@if( count($siteNews) > 0 )
<div class="mas-en-perfil"> 
	<div class="mas-en-perfil-titulo">
		{{ __('more in') }} <a href="//www.perfil.com"><img src="https://www.perfil.com/static/css/img/logo_perfil.svg" class="img-mas-en-perfil"></a>
	</div>

	@foreach ($siteNews as $site => $noticia)
	<article class="sitio-externo {{ $site }}">
		<a href="{{ $suggestedSiteNews->addSiteDomain('', $site) }}"><div class="logo-revista"></div></a>
		<a href="{{ $noticia['pagePath'] }}" title="{{ $noticia['pageTitle'] }}">
		<figure>
			{!! $imageHelper->getLazyImages( $noticia['imgSrc'], 540, $noticia['pageTitle'],'img-fluid loaded') !!}
		</figure>
		<h2>{{ $noticia['pageTitle'] }}</h2>
		</a>
	</article>
	@endforeach
</div><!-- mas-en-perfil -->
@endif
