@extends('layout.base')

@section('page-title', 'Canales RSS | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('head-css')
    <link rel="stylesheet" href="{{ mix('css/pages.css') }}">
@endsection

@section('body')



<main class="pages main container row max-width margin-auto">

    <div class="pages__container">
            <h1 class="channel__title">Términos, condiciones y tratamiento de la privacidad</h1>



            <p><strong>Perfil.com</strong> se compromete a adoptar una política de confidencialidad, con el objeto de proteger la privacidad de la información personal obtenida a través de sus servicios online. Las Normas de Confidencialidad que a continuación se detallan pueden tener cambios futuros, con lo cual se aconseja revisarlas periódicamente. Los términos a considerar y su desarrollo son los siguientes:</p>

            <h2>Tipos de información que se obtiene</h2>

            <p>Está bajo las normas de confidencialidad y privacidad toda aquella información personal que el usuario ingresa voluntariamente a nuestra red durante la inscripción al servicio y en otras ocasiones como en los concursos, las compras, etc. ésta incluye, pero no es limitativo, nombre, apellido, dirección, número de teléfono, correo electrónico, sexo, edad, nivel educacional. El usuario puede modificar o actualizar esta información en cualquier momento.</p>

            <h2>Finalidad que se le dará a la información</h2>

            <p>Los datos personales contenidos en la información confidencial, son utilizados para proveerle al usuario un servicio personalizado y acorde a sus necesidades, en su caso, ofreciendo publicidad selectiva o contenidos que puedan llegar a serle de interés, si es que el usuario indicó recibirlos.</p>

            <h2>¿Qué son las cookies?</h2>

            <p>Los Cookies son pequeñas piezas de información transferidas por el sitio Web desde el disco duro de la computadora del usuario, que graban sus datos personales cuando se conecta al servicio de Perfil.com y se modifican al abandonar el servicio. Los cookies son anónimos. El acceso a la información por medio de los cookies, permite ofrecer al usuario un servicio personalizado, ya que almacenan no sólo sus datos personales sino también la frecuencia de utilización del servicio y las secciones de la red visitadas, reflejando así sus hábitos y preferencias. Aceptar los cookies es requisito para poder recibir y/o utilizar nuestro servicio. Las redes publicitarias que insertan avisos en nuestras páginas pueden también utilizar sus propios cookies.</p>

            <h2>Confidencialidad de la Información - Modificación y actualización de la información.</h2>

            <p>Perfil.com no compartirá la información confidencial con ninguno de los socios o co-propietarios excepto que tenga expresa autorización de quienes se suscribieron, o cuando ha sido requerido por orden judicial o legal, o para proteger los derechos de propiedad u otros derechos de Perfil.com. Perfil.com no vende ni alquila la información de los usuarios. Si los datos personales del usuario debieran ser compartidos con socios comerciales o patrocinantes, el usuario será notificado antes que éstos sean recogidos o transferidos. Si no desea que sus datos sean compartidos, puede decidir no utilizar un servicio determinado o no participar en algunas promociones o concursos.</p>

            <h2>Protección de la información personal</h2>

            <p>Los datos personales proporcionados por el usuario formarán parte de un archivo que contendrá su perfil. Accediendo al mismo, el usuario puede modificarlos o actualizarlos en cualquier momento Perfil.com recomienda al usuario que actualice sus datos cada vez que éstos sufran alguna modificación, ya que esto permitirá brindarle un servicio más personalizado. La información proporcionada por el usuario, está asegurada por una clave de acceso a la cual sólo el usuario podrá acceder y de la cual sólo él tiene conocimiento. Perfil.com no intentará por ningún medio obtener esa clave personal. Debido a que ninguna transmisión por Internet puede garantizar su íntegra seguridad, Perfil.com no puede garantizar que la información transmitida utilizando su servicio sea completamente segura, con lo cual el usuario asume este riesgo que declara conocer y aceptar. El usuario es el único responsable de mantener en secreto su clave y la información de su cuenta. Para disminuir los riesgos Perfil.com recomienda al usuario salir de su cuenta y cerrar la ventana de su navegador cuando finalice su actividad, más aún si comparte su computadora con alguien o utiliza una computadora en un lugar público como una biblioteca o un cyber-café.</p>

            <h2>Confidencialidad de los menores</h2>

            <p>La salvaguarda de la información personal infantil es extremadamente importante. Perfil.com recauda el mínimo indispensable de esa información necesaria para brindar su servicios. Perfil.com no solicita información de identificación personal a los menores. Los menores siempre deben solicitar permiso a sus padres antes de enviar información personal a otro usuario online.</p>

            <h2>Contenidos</h2>

            <p>Perfil.com no será responsable por los contenidos y/o la información provista a través del portal de "__________" y de "_________". Perfil.com no será responsable por ningún tipo de reclamo vinculado a la autenticidad y/o veracidad de los datos consignados en los mismos ya que éstos son contratados por terceros para su exhibición en dichos portales.</p>

            <h2>Material de Asociación France Presse (AFP) – Diarios y Noticias (DyN) - Télam.</h2>

            <p>El Material de AFP, DyN y Télam incluido en Perfil.com se encuentra protegido por Derechos de autor. Prohibida su publicación, radiodifusión, reedición para radiodifusión o publicación y su redistribución directa o indirecta por cualquier medio. Prohibido su almacenamiento total o parcial en computadoras, excepto para uso personal y sin fines comerciales. AFP, DyN y Télam no asumen responsabilidad alguna por toda demora, inexactitud, error u omisión en el mismo o en la transmisión o entrega de la totalidad o parte del mismo, ni por los daños emergentes de tales circunstancias.</p>

            <h2>Información bursátil</h2>

            <p>Puente.Net es un servicio de Puente Sociedad de Bolsa SA. Prohibida su retransmisión total o parcial por cualquier medio.</p>

            <h2>Aceptación de Términos y Condiciones</h2>

            <p>Esta declaración de Confidencialidad / Privacidad está sujeta a los términos y condiciones de Perfil.com, con lo cual constituye un acuerdo legal entre el usuario y Perfil.com. Si el usuario utiliza los servicios de Perfil.com, significa que ha leído, entendido y acordado los términos antes expuestos. Si no está de acuerdo con ellos, el usuario no deberá proporcionar ninguna información personal, ni utilizar el servicio porque no está autorizado para hacerlo. Perfil.com podrá dar de baja o modificar los servicios gratuitos que brinda a sus usuarios bajo la denominación "___________" , en cualquier momento, lo que le será preavisado con una antelación de siete (7) días al momento de la realización de la mencionada baja o modificación.</p>
        </div>
</main>
@endsection
