@if (env('PERFORM_ENABLE', false))
    <div class="article card article-middle mb-2">
        <div class="card-body">
            <div id="perform-video">
                <script type="text/javascript">
                    if(navigator.userAgent.search("Firefox") === -1){
                        var s = document.createElement("script");
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = "//player.performgroup.com/eplayer.js#47b3f29670c0b844c32971e284.15c1379yp89d01tb3mar0jq831";
                        document.getElementById("perform-video").appendChild(s);
                    }
                </script>
            </div>
        </div>
    </div>
@endif
