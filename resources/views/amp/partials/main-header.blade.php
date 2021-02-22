<amp-sidebar id="sidebar" class="sidebar" layout="nodisplay" side="left">
    <nav toolbar="(max-width: 767px)" toolbar-target="target-element">
        <ul>
          <li>
            <form method="get" target="_top" action="{{ route('search.index') }}" class="buscador">
            <input style="display: inline-block;" name="q" type="text" placeholder="{{ __('search') }}" aria-label="Buscar" value="">
            <button style="display: inline-block;" type="submit"><i class="fas fa-search"></i></button>
            </form>
          </li>
        </ul>
    </nav>
    <ul>
        <li class="link-without-padding"><a class="main-link" href="{{ route('home.index') }}"><i class="fas fa-home"></i> home</a></li>
        @foreach ($menuHelper->getMenuItems('principal') as $item)
            @if (isset($item['children']) && count($item['children']) > 0)
                    @foreach ($item['children'] as $children)
                        <li class="link"><a class="{{ $item['class'] }}" href="{{ $children['href'] }}" target="{{ $children['target'] }}">{{ $children['text'] }}</a></li>
                    @endforeach
            @else
            <li class="link"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
            @endif
        @endforeach
    </ul>
    {{--@if (count( $menuHelper->getMenuItems('temas') ) > 1)
    <ul id="temas-del-dia">
        <li class="link-without-padding"><a class="main-link" href="{{ route('lastnews.show') }}"><i class="fas fa-newspaper"></i> {{ __('topics') }}</a></li>
        @foreach (array_slice($menuHelper->getMenuItems('temas'),1) as $item)
            <li class="link"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
         @endforeach
    </ul>
    @endif--}}
</amp-sidebar>

<header class="nav-down nav-transparent">
    <button class="hamburger" on='tap:sidebar.toggle'><span class="fas fa-bars"></span></button>
    <div class="logo">
        <a href="{{ route('home.index') }}">
            <amp-img src="{{ asset('img/logo_perfil.svg') }}"
                     alt="Perfil"
                     height="25"
                     width="230"
                     layout="fixed">
            </amp-img>
        </a>
    </div>
</header>
