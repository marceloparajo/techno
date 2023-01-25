@if ($content->count() > 0)
    <div class="divisas">
        <header class="divisas__titulo">
            Divisas
        </header>
        <div class="divisas__content">
            <div></div>
            <div class="venta">Venta</div>
            <div class="compra">Compra</div>
            <div class="moneda moneda--1">Dólar Oficial</div>
            <div class="moneda__venta moneda__venta--1">{{ $format_number($content['oficial']['value_sell']) }}</div>
            <div class="moneda__compra moneda__compra--1">{{ $format_number($content['oficial']['value_buy']) }}</div>
            <div class="moneda moneda--2">Dólar Blue</div>
            <div class="moneda__venta moneda__venta--2">{{ $format_number($content['blue']['value_sell']) }}</div>
            <div class="moneda__compra moneda__compra--2">{{ $format_number($content['blue']['value_buy']) }}</div>
            <div class="moneda moneda--3">Dólar Ahorro</div>
            <div class="moneda__venta moneda__venta--3"></div>
            <div class="moneda__compra moneda__compra--3">{{ $dolar_ahorro() }}</div>
            <div class="moneda moneda--4">Dólar Turismo</div>
            <div class="moneda__venta moneda__venta--4"></div>
            <div class="moneda__compra moneda__compra--4">{{ $dolar_turismo() }}</div>
            <div class="moneda moneda--5">Euro oficial</div>
            <div class="moneda__venta moneda__venta--5">{{ $format_number($content['oficial_euro']['value_sell']) }}</div>
            <div class="moneda__compra moneda__compra--5">{{ $format_number($content['oficial_euro']['value_buy']) }}</div>
            <div class="moneda moneda--6">Euro blue</div>
            <div class="moneda__venta moneda__venta--6">{{ $format_number($content['blue_euro']['value_sell']) }}</div>
            <div class="moneda__compra moneda__compra--6">{{ $format_number($content['blue_euro']['value_buy']) }}</div>
        </div>
    </div>
@endif
