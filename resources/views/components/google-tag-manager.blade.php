<!-- Google Tag Manager -->
@if ($format == 'amp')
    <amp-analytics
            config="https://www.googletagmanager.com/amp.json?id={{ $gtm_amp_id }}&gtm.url={{ $info['canonical'] }}"
            data-credentials="include">
        <script type="application/json">
            {!! json_encode( $content, JSON_FORCE_OBJECT | JSON_PRETTY_PRINT ) !!}
        </script>
    </amp-analytics>
@elseif ($format == 'fbia')
    <iframe>
        <script>
            var dataLayer = [{ {!! json_encode( $content, JSON_FORCE_OBJECT | JSON_PRETTY_PRINT ) !!} }];
            (function (w, d, s, l, i) {w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});var f = d.getElementsByTagName(s)[0];var j = d.createElement(s);var dl = l != 'dataLayer' ? "&amp;l=" + l : '';j.async = true;j.src ='https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', '{{ $gtm_fbia_id }}');
        </script>
    </iframe>
@else
    <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({!! json_encode( $content, JSON_FORCE_OBJECT | JSON_PRETTY_PRINT ) !!});
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','{{ $gtm_id }}');
    </script>
@endif
<!-- /Google Tag Manager -->

