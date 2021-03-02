@if ($content->count() > 0)
    <div class="divisas">
        <header class="title-divisas">
            Divisas
        </header>
        <div class="content-divisas">
            <div class="venta">Venta</div>
            <div class="compra">Compra</div>
            <div class="do">Dólar Oficial</div>
            <div class="doventa">{{ $format_number($content['oficial']['value_sell']) }}</div>
            <div class="docompra">{{ $format_number($content['oficial']['value_buy']) }}</div>
            <div class="db">Dólar blue</div>
            <div class="dbventa">{{ $format_number($content['blue']['value_sell']) }}</div>
            <div class="dbcompra">{{ $format_number($content['blue']['value_buy']) }}</div>
            <div class="ds">Dólar Solidario</div>
            <div class="dsventa">{{ $dolar_solidario }}</div>
            <div class="dscompra"></div>
            <div class="eo">Euro oficial</div>
            <div class="eoventa">{{ $format_number($content['oficial_euro']['value_sell']) }}</div>
            <div class="eocompra">{{ $format_number($content['oficial_euro']['value_buy']) }}</div>
            <div class="eb">Euro blue</div>
            <div class="ebventa">{{ $format_number($content['blue_euro']['value_sell']) }}</div>
            <div class="ebcompra">{{ $format_number($content['blue_euro']['value_buy']) }}</div>
        </div>
    </div>
@endif
