@if($is_enable())
    @if ($format == 'web')
        <script>
          var _comscore = _comscore || [];
          _comscore.push({ c1: "2", c2: "{{ $client_id }}" });
          (function() {
            var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.defer = true;
            s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
            el.parentNode.insertBefore(s, el);
          })();
        </script>
        <noscript>
            <img src="https://b.scorecardresearch.com/p?c1=2&c2={{ $client_id }}&cv=2.0&cj=1" />
        </noscript>
    @endif

    @if ($format == 'amp')
        <amp-analytics type="comscore" id="comscore">
            <script type="application/json">
                {
                    "vars": {
                        "c2": "{{ $client_id }}"
                    },
                    "extraUrlParams": {
                        "comscorekw": "amp"
                    }
                }
            </script>
        </amp-analytics>
    @endif

@endif