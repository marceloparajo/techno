@extends('layout.base')

@section('page-title', 'Canales RSS | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('head-css')
    <link rel="stylesheet" href="{{ mix('css/pages.css') }}">
@endsection

@section('body')
    <div class="container">
        <div class="content">
            <h1>Canales RSS de Perfil.com</h1>

            <p>
                <strong>Perfil.com</strong> se especializa en noticias, por eso, le ofrecemos las mejores opciones para incluir la actualidad argentina e internacional en su weblog; intranet; página personal, barrial o municipal. Los canales RSS de <strong>Perfil.com</strong> le permiten agregar noticias en su sitio del modo que le resulte más conveniente.
                El <strong>RSS ("Really Simple Syndication")</strong> es un formato que permite emitir contenidos desde un sitio para que sean agregados fácilmente en aplicaciones o sitios web. Los contenidos que se publican en este formato incluyen titulares y sumarios. Perfil.com le ofrece en formato RSS todos los títulos de las noticias con link a la nota completa:
            </p>

            <h3>Términos y condiciones de utilización del servicio RSS de Perfil.com</h3>

            <p>
                Mediante la utilización del servicio RSS de Perfil.com (el "Servicio"), Usted está consintiendo quedar alcanzado por los términos y condiciones que regulan la utilización del servicio y que se detallan seguidamente.
                Editorial Perfil S.A. (en adelante "Perfil.com") se reserva el derecho de modificar cualesquiera de los términos y condiciones aquí contenidos, en cualquier momento y a su sola discreción, por el solo hecho de publicar una nueva versión de los mismos en el sitio www.Perfil.com (el "Sitio"). El uso continuado de su parte del Servicio que siga a la publicación de una nueva versión de términos y condiciones, constituirá de su parte la aceptación de la nueva versión.
            </p>

            <ol>
                <li>
                    <p>Conforme a los términos y condiciones detallados seguidamente, Perfil.com le concede una licencia revocable, intransferible, no exclusiva y gratuita, para la exhibición en su propio sitio web (weblog, intranet, página personal, barrial, etc.), de los títulos y/o links de acceso, a ciertos canales de noticias (los "Canales") a ser definidos y publicados por Perfil.com y a ser por Usted a su vez seleccionados. Ello, con la condición que Usted no altere, corrija, ni suprima cualquier porción del contenido que hace al Servicio. Perfil.com podrá restringir, suspender o discontinuar Su acceso a cualquier porción o a todo el contenido del Servicio en cualquier momento sin responsabilidad. Perfil.com se reserva a su vez la facultad de modificar el Servicio en cualquier momento a su solo criterio. Usted reconoce y acepta que el contenido del Servicio resultará discreción única de Perfil.com.</p>
                </li>
                <li>
                    <p>El contenido del Servicio se halla protegido por las leyes de propiedad intelectual de la República Argentina, así como también por los tratados internacionales existentes al respecto. Usted declara expresamente no disputar ni entablar discusión alguna respecto de los derechos de propiedad intelectual que Perfil.com ostenta en relación a los contenidos que hagan al Servicio, como así tampoco respecto de toda y cualquier herramienta tecnológica y/o informática que le sea provista por Perfil.com a fines de permitirle a Usted la utilización del Servicio.</p>
                </li>
                <li>
                    <p>Usted se compromete a: (i) no vender, modificar, traducir, copiar, publicar, transmitir, distribuir, o de algún otro modo diseminar el contenido del Servicio, o a suprimir ciertas porciones del mismo; (ii) de ningún modo ceder derechos de uso sobre el contenido del Servicio y/o el Servicio propiamente dicho; (iii) no desplegar en su propio sitio web el nombre, marca, o logo de una tercera persona de modo tal que pueda permitir asociarse a dicha persona como autor, distribuidor o propietario de los contenidos del Servicio y/o el Servicio propiamente dicho; (iv) aun cuando no guarde relación con el Servicio o los contenidos del Servicio, no desplegar en su propio sitio web contenidos con material obsceno, difamatorio, pornográfico y/o que puedan resultar ofensivos en virtud de motivos religiosos, raciales, políticos, etc.; (v) no desplegar en su propio sitio web contenidos que puedan ser interpretados como instrucción para o incitación a la comisión de actividades ilícitas.
                        Usted reconoce y acepta que el contenido del Servicio deberá ser siempre accedido mediante la asociación de links que permitan el acceso a dicha información en www.Perfil.com . Usted deberá abstenerse de utilizar el Servicio de otro modo que no sea la accesibilidad del mismo a través de www.Perfil.com . Queda expresamente aclarado en consecuencia que el contenido del Servicio es brindado por Perfil.com quien, en tal virtud, resulta propietario de los derechos autorales que derivan del mismo.
                        Perfil.com no asume responsabilidad alguna en lo que hace a la actividad por Usted desplegada o promocionada a través de su propio sitio web. Sin perjuicio de su plena responsabilidad al respecto, y la absoluta indemnidad que Usted garantiza a favor de Perfil.com, cualquier conducta fraudulenta, abusiva, o que de cualquier otro modo pueda resultar ilícita al solo criterio de Perfil.com y que haga al funcionamiento de su propio sitio web, generará a favor de Perfil.com el derecho a dejar sin efecto el Servicio.</p>
                </li>
                <li>
                    <p>Durante todo el período de tiempo durante el cual haga Usted uso del Servicio, podrá acceder a información de acceso restringido de propiedad de Perfil.com. Salvo expresa autorización a serle provista por Perfil.com, y en caso de acceder Usted a la misma, asume el formal compromiso de no divulgar ni permitir la publicación de dicha información salvo que la misma se torne de acceso público sin responsabilidad de su parte. Paralelamente, Usted se compromete a no hacer referencia de modo alguno a Perfil.com ni llevar a cabo acciones comerciales, publicitarias, de marketing, etc., que hagan cualquier referencia expresa o implícita a Perfil.com, sin antes haber sometido tal acción a expresa autorización por parte de Perfil.com.</p>
                </li>
                <li>
                    <p>Usted acepta y autoriza a Perfil.com a utilizar su nombre en nóminas, comunicados, acciones de marketing, etc., en los que se listen o refieran usuarios del Servicio.</p>
                </li>
                <li>
                    <p>Perfil.com declara y garantiza que el contenido del Servicio no infringe, de modo alguno, derechos de propiedad intelectual, marcarios, publicitarios, etc. de terceros. Usted declara y garantiza que el contenido que pueda ser alojado en su propio sitio web, no infrinje derecho alguno de propiedad intelectual, marcario, publicitario, etc. de terceros. Fuera de la garantía asumida precedentemente, Perfil.com no asume garantía alguna respecto de la finalidad que Usted persiga mediante la utilización del Servicio, constituyendo este precepto parte esencial de estos términos y condiciones.</p>
                </li>
                <li>
                    <p>Bajo ninguna circunstancia resultará Perfil.com obligado frente a Usted o a cualquier otra persona por daños indirectos incluyendo, sin limitación, daños por pérdida de beneficios eventuales, lucro cesante, etc., que puedan derivarse de la utilización del Servicio; entre ellos, daños que puedan resultar causados a programas o sistemas de computación.</p>
                </li>
                <li>
                    <p>Estos términos y condiciones y/o los que por decisión de Perfil.com los reemplacen, resultarán de aplicación desde el momento en que Usted comience a utilizar el Servicio, y hasta tanto Usted decida terminarlo, en cualquier momento, destruyendo o quitando todas las copias del contenido de su propio sitio web, de sus redes, y de todo otro medio de almacenamiento a su alcance o de su propiedad. A su vez, podrá Perfil.com restringir, suspender o discontinuar el Servicio, o Su acceso a todo o parte del contenido del Servicio, en cualquier momento, sin necesidad de notificación alguna, y sin que pueda por ello atribuírsele responsabilidad alguna.</p>
                </li>
                <li>
                    <p>Se compromete Usted a mantener indemne a Perfil.com, y reembolsarle los gastos en que incurriere, frente a todo y cualquier reclamo del cual sea Usted objeto en virtud de (i) Su uso del Servicio, o el uso del mismo por cualquier otra persona en su nombre, autorizada por Usted o no; (ii) el contenido de su propio sitio; (iii) el incumplimiento de Su parte a cualquier de sus compromisos y/u obligaciones bajos estos términos y condiciones. En caso de resultar Perfil.com también reclamada en razón de alguna de tales hipótesis, se reserva expresamente el derecho a ejercer su propia defensa, en cuyo caso asume Usted el compromiso de aportar la colaboración que resulte menester a fines del ejercicio de la misma.</p>
                </li>
                <li>
                    <p>Estos términos y condiciones representan el total entendimiento referido al Servicio entre sus usuarios y Perfil.com. Si alguna disposición de los mismos resulta inaplicable por cualquier razón, tal disposición será reformada solamente al grado necesario para tornarla de aplicación. La utilización del Servicio será gobernada e interpretada por las leyes de la República Argentina, y cualquier diferendo atinente al mismo será sometido a la competencia de los tribunales nacionales en lo comercial con asiento en la Ciudad Autónoma de Buenos Aires. Declara Usted resultar total y absolutamente independiente de Perfil.com, y nada en estos términos y condiciones y/o en lo que haga a la utilización del Servicio deberá ser interpretado como tendiente a la creación de asociación, sociedad, agencia, representación o relación de empleo entre Usted y Perfil.com. Le está a Usted expresamente prohibido invocar mecanismo alguno de representación de Perfil.com, como también hacer declaraciones o referencias en su propio sitio web que de modo alguno permitan inferir la existencia de relación de cualquier índole entre Usted y Perfil.com que aquella que exceda la utilización del Servicio.</p>
                </li>
            </ol>

            <h3>Canales RSS disponibles</h3>

            <ul class="feeds">
                <li>XML Último Momento - <a href="{{ route('feeds.channel', '') }}">{{ route('feeds.channel', '') }}</a></li>
                <li>XML Política - <a href="{{ route('feeds.channel', 'politica') }}">{{ route('feeds.channel', 'politica') }}</a></li>
                <li>XML Policía - <a href="{{ route('feeds.channel', 'policia') }}">{{ route('feeds.channel', 'policia') }}</a></li>
                <li>XML Internacionales - <a href="{{ route('feeds.channel', 'internacionales') }}">{{ route('feeds.channel', 'internacionales') }}</a></li>
                <li>XML Economía - <a href="{{ route('feeds.channel', 'economia') }}">{{ route('feeds.channel', 'economia') }}</a></li>
                <li>XML Deportes - <a href="{{ route('feeds.channel', 'deportes') }}">{{ route('feeds.channel', 'deportes') }}</a></li>
                <li>XML Opinión - <a href="{{ route('feeds.channel', 'opinion') }}">{{ route('feeds.channel', 'opinion') }}</a></li>
                <li>XML Sociedad - <a href="{{ route('feeds.channel', 'sociedad') }}">{{ route('feeds.channel', 'sociedad') }}</a></li>
                <li>XML Espectáculos - <a href="{{ route('feeds.channel', 'espectaculos') }}">{{ route('feeds.channel', 'espectaculos') }}</a></li>
                <li>XML Ciencia - <a href="{{ route('feeds.channel', 'ciencia') }}">{{ route('feeds.channel', 'ciencia') }}</a></li>
                <li>XML Salud - <a href="{{ route('feeds.channel', 'salud') }}">{{ route('feeds.channel', 'salud') }}</a></li>
                <li>XML Tecnología - <a href="{{ route('feeds.channel', 'tecnologia') }}">{{ route('feeds.channel', 'tecnologia') }}</a></li>
            </ul>
        </div>
    </div>
@endsection
