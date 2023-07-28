@if ($widget_enable)
    <!-- Google Tag Manager -->
    @if ($format == 'amp')
        <amp-analytics type="googleanalytics" config="https://amp.perfil.com/ga4.json">
            <script type="application/json">
                {
                  "vars": {
                    "GA4_MEASUREMENT_ID": "{{ $ga4_id }}",
                    "GA4_ENDPOINT_HOSTNAME": "www.google-analytics.com",
                    "DEFAULT_PAGEVIEW_ENABLED": true,
                    "GOOGLE_CONSENT_ENABLED": false,
                    "WEBVITALS_TRACKING": false,
                    "PERFORMANCE_TIMING_TRACKING": false,
                    "SEND_DOUBLECLICK_BEACON": false,
                    "documentLocation": "{{ route('news.show', [$info['channel']['slug'], $info['slug']]) }}"
                  },
                  "triggers": {
                    "trackArticleRead": {
                      "on": "visible",
                      "selector": "#article-container",
                      "request": "ga4Event",
                      "vars": {
                        "ga4_event_name": "article_read"
                      },
                      "extraUrlParams": {
                        "event__num_article_id": {{ $info['id'] }},
                        "event__str_article_category": "{{ $info['channel']['slug'] }}",
                        "event__str_article_author_user_name": "{{ $info['author']['username'] ?? '' }}",
                        "event__str_article_publication_date": "{{ $info['date_available']->format('d-m-Y') }}",
                        "event__str_article_signed": "{{ $info['signed'] == 1 }}",
                        "event__str_brand": "{{ env('SITE_CODE', 'perfil') }}",
                        "event__str_page_format": "amp"
                      }
                    }
                  }
                }
            </script>
        </amp-analytics>
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
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ $gtm_id }}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    @endif
    <!-- /Google Tag Manager -->
@endif

