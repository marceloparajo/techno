@if ($content->count() > 0)
    <div class="divisas bg-economy">
        <header class="divisas__titulo">
            Divisas
        </header>
        <div class="divisas__content">

            <div class="moneda moneda--0">
                <div class="moneda__nombre"></div>
                <div class="moneda__venta">Venta</div>
                <div class="moneda__compra">Compra</div>
            </div>

            <div class="moneda moneda--1">
                <div class="moneda__nombre">Dólar Oficial</div>
                <div class="moneda__venta">{{ $format_number($content['oficial']['value_sell']) }}</div>
                <div class="moneda__compra">{{ $format_number($content['oficial']['value_buy']) }}</div>
            </div>
            <div class="moneda moneda--2">
                <div class="moneda__nombre">Dólar Blue</div>
                <div class="moneda__venta">{{ $format_number($content['blue']['value_sell']) }}</div>
                <div class="moneda__compra">{{ $format_number($content['blue']['value_buy']) }}</div>
            </div>
            <div class="moneda moneda--3">
                <div class="moneda__nombre">Dólar Ahorro</div>
                <div class="moneda__venta"></div>
                <div class="moneda__compra">{{ $dolar_ahorro() }}</div>
            </div>
            <div class="moneda moneda--4">
                <div class="moneda__nombre">Dólar Turismo</div>            
                <div class="moneda__venta"></div>
                <div class="moneda__compra">{{ $dolar_turismo() }}</div>
            </div>

            <div class="moneda moneda--5">
                <div class="moneda__nombre">Euro oficial</div>    
                <div class="moneda__venta">{{ $format_number($content['oficial_euro']['value_sell']) }}</div>
                <div class="moneda__compra">{{ $format_number($content['oficial_euro']['value_buy']) }}</div>
            </div>
            <div class="moneda moneda--6">
                <div class="moneda__nombre">Euro blue</div>
                <div class="moneda__venta moneda__venta--6">{{ $format_number($content['blue_euro']['value_sell']) }}</div>
                <div class="moneda__compra moneda__compra--6">{{ $format_number($content['blue_euro']['value_buy']) }}</div>
            </div>
        </div>
    </div>
@endif
