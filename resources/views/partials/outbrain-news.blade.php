@if (env('APP_ENV', '') != 'local')
<!-- Outbrain News -->
<div class="comments">
    <div class="col-12">
    	<h4></h4>
		<div class="OUTBRAIN" data-src="{{ $noticia['permalink'] }}" data-widget-id="AR_1" data-ob-template="buenosairestimes"></div>
		<script type="text/javascript" async="async" src="https://widgets.outbrain.com/outbrain.js"></script>
	</div>
</div>
<!-- /Outbrain News -->
@endif