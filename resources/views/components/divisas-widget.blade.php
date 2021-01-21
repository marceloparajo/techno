@if ($content != '')
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
            <div class="eo">Dólar Solidario</div>
            <div class="eoventa">{{ $dolar_solidario }}</div>
            <div class="eb">Euro blue</div>
            <div class="ebventa">171.33</div>
            <div class="ebcompra">165.59</div>
        </div>
    </div>
@endif
