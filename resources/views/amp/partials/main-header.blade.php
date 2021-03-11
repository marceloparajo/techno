@inject('menuHelper', "App\Http\Helpers\MenuHelper")

<amp-sidebar id="sidebar" class="sidebar" layout="nodisplay" side="left">
    <nav toolbar="(max-width: 767px)" toolbar-target="target-element">
        <ul>
          <li>
            <form method="get" target="_top" action="{{ route('search.index') }}" class="buscador">
            <input style="display: inline-block;" name="q" type="text" placeholder="{{ __('search') }}" aria-label="Buscar" value="">
            <button style="display: inline-block; padding: 0; height: 20px;" type="submit">
                <amp-img
                        width="20"
                        height="15"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMzQ0LjUsMjk4YzE1LTIzLjYsMjMuOC01MS42LDIzLjgtODEuN2MwLTg0LjEtNjguMS0xNTIuMy0xNTIuMS0xNTIuM0MxMzIuMSw2NCw2NCwxMzIuMiw2NCwyMTYuMyAgYzAsODQuMSw2OC4xLDE1Mi4zLDE1Mi4xLDE1Mi4zYzMwLjUsMCw1OC45LTksODIuNy0yNC40bDYuOS00LjhMNDE0LjMsNDQ4bDMzLjctMzQuM0wzMzkuNSwzMDUuMUwzNDQuNSwyOTh6IE0zMDEuNCwxMzEuMiAgYzIyLjcsMjIuNywzNS4yLDUyLjksMzUuMiw4NWMwLDMyLjEtMTIuNSw2Mi4zLTM1LjIsODVjLTIyLjcsMjIuNy01Mi45LDM1LjItODUsMzUuMmMtMzIuMSwwLTYyLjMtMTIuNS04NS0zNS4yICBjLTIyLjctMjIuNy0zNS4yLTUyLjktMzUuMi04NWMwLTMyLjEsMTIuNS02Mi4zLDM1LjItODVjMjIuNy0yMi43LDUyLjktMzUuMiw4NS0zNS4yQzI0OC41LDk2LDI3OC43LDEwOC41LDMwMS40LDEzMS4yeiIvPjwvc3ZnPg==" />
            </button>
            </form>
          </li>
        </ul>
    </nav>
    <ul>
        <li class="link-without-padding">
            <a class="main-link" href="{{ route('home.index') }}">home</a>
        </li>
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
    <button class="hamburger" on='tap:sidebar.toggle'>
        <amp-img
                width="30"
                height="29"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGlkPSJFZGl0YWJsZS1saW5lIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmUgZmlsbD0ibm9uZSIgaWQ9IlhNTElEXzEwM18iIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgeDE9IjciIHgyPSIyNSIgeTE9IjE2IiB5Mj0iMTYiLz48bGluZSBmaWxsPSJub25lIiBpZD0iWE1MSURfMTAyXyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiB4MT0iNyIgeDI9IjI1IiB5MT0iMjUiIHkyPSIyNSIvPjxsaW5lIGZpbGw9Im5vbmUiIGlkPSJYTUxJRF8xMDFfIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHgxPSI3IiB4Mj0iMjUiIHkxPSI3IiB5Mj0iNyIvPjwvc3ZnPg==" />
    </button>
    <div class="logo">
        <a href="{{ route('home.index') }}">
            <amp-img src="{{ asset('img/logo_perfil.svg') }}"
                     alt="Perfil"
                     height="20"
                     width="100"
                     layout="fixed">
            </amp-img>
        </a>
    </div>
</header>
