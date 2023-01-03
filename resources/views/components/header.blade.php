<div class="container pre-header bg-negro d-xs-none d-md-block">
	<div class="max-width d-md-flex">
		<time class="time-top" datetime="{{ $current_date->isoFormat('YYYY [-] MM [-] DD') }}" >{{ $current_date->isoFormat('dddd DD [de] MMMM [de] YYYY') }}</time>
		<div class="perfil-logo">
			<a href="https://www.perfil.com" target="_blank" title="Ir a Perfil.com" rel="noreferrer">
				<img src="{{ asset('img/perfil.svg') }}" alt="Perfil" width="90" height="20">
			</a>
		</div>
	</div>
</div>
<x-ad-space id="float-header" width="320" height="50" class="ads d-md-none" min-height="50" max-height="50" margin-bottom="20" />

<header class="header container">
    <div class="max-width d-xs-flex">


		<button class="header__nav-toggler" id="burguer" onclick="abreMenu()" title="menu">
			<span class="bar-1"></span>
			<span class="bar-2"></span>
			<span class="bar-3"></span>
		</button>
		<div class="header__logo">
			<a href="{{ asset('') }}" title="Ir a la Home de {{ env('APP_NAME') }}">
				<img src="{{ asset('img/logo-parabrisas.svg') }}" alt="{{ env('APP_NAME') }}" width="230" height="50"> 
			</a>
		</div>

		<nav class="navbar" id="main-menu">
			<div class="max-width navbar__container">

				<form method="get" action="{{ route('search.index') }}" class="search-form">
					<input class="search-form__input" name="q" type="text" placeholder="{{ __('search') }}" aria-label="Buscar" value="{{ Request::get('q') }}">
					<button class="search-form__btn" type="submit"><img src="/images/glyph/search.png" alt="Buscar" width="14" height="14"></button>
				</form>
				
				<ul class="nav main-menu">

					@foreach ($main_menu as $item)
						@if (isset($item['children']) && count($item['children']) > 0)
							<li class="has-children">
							<a role="button" href="#" class="has-children-a {{ $item['class'] }}" data-toggle="dropdown">{{ $item['text'] }}</a>
							<ul>
								@foreach ($item['children'] as $children)
									<li><a href="{{ $children['href'] }}" target="{{ $children['target'] }}" rel="noreferrer">{{ $children['text'] }}</a></li>
								@endforeach
							</ul>
						</li>
						@else
							<li><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">{{ $item['text'] }}</a></li>
						@endif
					@endforeach
				</ul>
				
				<ul class="nav topics">
					@foreach ($topics as $item)
						<li>
							<a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}" rel="noreferrer">
								{{ $item['text'] }}
							</a>
						</li>
					@endforeach
				</ul>

				<div class="social-top">
					<span class="social-top__label">Seguinos</span>
					<a href="https://www.instagram.com/{{ env('INSTAGRAM_PAGE', '') }}/" target="_blank" title="{{  ucfirst(env("APP_NAME")) }} {{ __("in instagram") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/instagram.svg" class="instagram" alt="Instagram" width="30"></a>
					<a href="https://www.facebook.com/{{ env('FACEBOOK_PAGE', '') }}/" target="_blank" title="{{ ucfirst(env("APP_NAME")) }} {{ __("in facebook") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/facebook.svg" class="facebook" alt="Facebook" width="30"></a>
					<a href="https://twitter.com/{{ env('TWITTER_PAGE', '') }}" target="_blank" title="{{ ucfirst(env("APP_NAME")) }} {{ __("in twitter") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/twitter.svg" class="twitter" alt="twitter" width="30"></a>
					<a href="https://www.youtube.com/channel/{{ env('YOUTUBE_CHANNEL', '') }}" target="_blank" title="{{ ucfirst(env("APP_NAME")) }} {{ __("in youtube") }}" rel="noreferrer nofollow"><img src="/images/glyph/share/youtube.svg" class="youtube" alt="Youtube" width="30"></a>
				</div>

			</div>
		</nav>
	</div>
</header>

<script>
	function abreMenu() {
		var b = document.getElementById("burguer");
		var n = document.getElementById("main-menu");
	  	b.classList.toggle("open");
	  	n.classList.toggle("mostrar");
	}
</script>