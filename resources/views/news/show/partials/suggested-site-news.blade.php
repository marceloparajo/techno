@inject('suggestedSiteNews', "App\Http\Helpers\SuggestedSiteNewsHelper")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

@php $siteNews = $suggestedSiteNews->getSitesInfo();@endphp
@if( count($siteNews) > 0 )
<div class="row mas-en-perfil mx-0 mb-2"> 
	<div class="col-12 titulo pb-1 mb-0 align-items-center d-flex justify-content-between flex-column flex-sm-row">
		<a href="//www.perfil.com" class="ml-2 d-inline-flex">{{ __('more in') }}  <img src="https://www.perfil.com/static/css/img/logo_perfil.svg" class="img-mas-en-perfil"></a> <span class="in-other-lang mr-3"> ({{ __('in spanish') }}) </span>
	</div>
</div>
<div class="row mas-en-perfil-notas mx-0"> 
	@foreach ($siteNews as $site => $noticia)
	<div class="col-12 col-sm-6 col-xl-3 mb-2 d-flex">
		<article class="sitio-externo {{ $site }} align-self-stretch">
			<a href="{{ $suggestedSiteNews->addSiteDomain('', $site) }}"><div class="logo-revista"></div></a>
			<a href="{{ $noticia['pagePath'] }}" title="{{ $noticia['pageTitle'] }}">
			<figure>
				{!! $imageHelper->getLazyImages( $noticia['imgSrc'], 540, $noticia['pageTitle'],'img-fluid loaded') !!}
			</figure>
			<h2>{{ $noticia['pageTitle'] }}</h2>
			</a>
		</article>
	</div>
	@endforeach
</div><!-- mas-en-perfil -->
@endif
