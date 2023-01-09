@inject('menuHelper', "App\Http\Helpers\MenuHelper")

<amp-sidebar id="sidebar" class="sidebar" layout="nodisplay" side="left">

    <ul>
        @foreach ($menuHelper->getMenuItems('principal') as $item)
            {{--
                @if (isset($item['children']) && count($item['children']) > 0)
                    @foreach ($item['children'] as $children)
                        <li class="link"><a class="{{ $item['class'] }}" href="{{ $children['href'] }}" target="{{ $children['target'] }}">{{ $children['text'] }}</a></li>
                    @endforeach
                @else
            --}}
            <li class="link"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
            {{-- @endif --}}
        @endforeach
    </ul>
    @if (count( $menuHelper->getMenuItems('temas') ) > 1)
    <ul id="temas-del-dia">
        <li class="link-without-padding">Temas del día</li>
        @foreach (array_slice($menuHelper->getMenuItems('temas'),1) as $item)
            <li class="link"><a href="{{ $item['href'] }}" target="{{ $item['target'] }}" class="{{ $item['class'] }}" title="{{ $item['title'] }}">{{ $item['text'] }}</a></li>
         @endforeach
    </ul>
    @endif
</amp-sidebar>

<header class="nav-down nav-transparent">

    <div class="hamburger_wrapper">
        <div id="hamburger" tabindex="1" role="button" on="tap:sidebar.toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="logo">
        <a href="{{ route('home.index') }}">
            <amp-img src="{{ asset('img/logo-parabrisas.svg') }}"
                     alt="Parabrisas"
                     height="43"
                     width="200"
                     layout="fixed">
            </amp-img>
        </a>
    </div>
</header>