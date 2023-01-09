@extends('layout.base')

@section('page-title', 'Equipo | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('head-css')
    <link rel="stylesheet" href="{{ mix('css/pages.css') }}">
@endsection

@section('body')


<main class="pages main container row max-width margin-auto">

    <div class="pages__container">
            <h1 class="channel__title">Equipo de Editorial Perfil</h1>



            <ul>
                <li>
                    <strong>Fundador</strong><br />
                    <span class="nombres">Jorge Fontevecchia</span>
                </li>
                <li>
                    <strong>Presidente y CEO</strong><br />
                    <span class="nombres">Gustavo González</span>
                </li>
                <li>
                    <strong>Director Ejecutivo</strong><br />
                    <span class="nombres">Agustino Fontevecchia</span>
                </li>
                <li>
                    <strong>Director de Recursos Humanos</strong><br />
                    <span class="nombres">Marcelo Capandeguy</span>
                </li>
                <li>
                    <strong>Director de Operaciones</strong><br />
                    <span class="nombres">Dr. Juan Manuel Cordón</span>
                </li>
                <li>
                    <strong>Director de Ventas Institucionales</strong><br />
                    <span class="nombres">Carlos Escobar</span>
                </li>
                <li>
                    <strong>Director de Auditoría</strong><br />
                    <span class="nombres">Horacio Leone</span>
                </li>
                <li>
                    <strong>Director de Tecnología</strong><br />
                    <span class="nombres">Ing. Héctor Bianchi</span>
                </li>
                <li>
                    <strong>Director Comercial</strong><br />
                    <span class="nombres">José A. Gómez</span>
                </li>
                <li>
                    <strong>Director Perfil Brasil</strong><br />
                    <span class="nombres">Luis Maluf</span>
                </li>
                <li>
                    <strong>Director de Contenidos Digitales</strong><br />
                    <span class="nombres">Edgardo Zunino</span>
                </li>
                <li><h3>Perfil.com</h3></li>
                <li>
                    <strong>Directora Ejecutiva</strong><br />
                    <span class="nombres">María José Bonacifa | <span class="text-link">mbonacifa@perfil.com</span></span>
                </li>
                <li>
                    <strong>Editora de Economía</strong><br />
                    <span class="nombres">Lorena Rodríguez | <span class="text-link">lrodriguez@perfil.com</span></span>
                </li>
                <li><strong>Editores</strong><br />
                    <span class="nombres">
                        Felipe Leibovich | <span class="text-link">fleibovich@perfil.com</span><br />
                        Emiliano G. Arnáez | <span class="text-link">earnaez@perfil.com</span><br />
                        Facundo Falduto | <span class="text-link">ffalduto@perfil.com</span><br />
                        Carlos Piro | <span class="text-link">cpiro@perfil.com</span><br />
                        Hugo Bordoni | <span class="text-link">hbordoni@perfil.com</span><br />
                        Darío Silva D'Andrea | <span class="text-link">dsilva@perfil.com</span><br />
                        Mariano Confalonieri | <span class="text-link">mconfalonieri@perfil.com</span>
                    </span>
                </li>
                <li>
                    <strong>Editor de 442</strong><br />
                    <span class="nombres">Federico Henault | <span class="text-link">fhenault@perfil.com</span></span>
                </li>
                <li>
                    <strong>Editor de Exitoína</strong><br />
                    <span class="nombres">Diego Iljutko | <span class="text-link">diljutko@perfil.com</span></span>
                </li>
                <li>
                    <strong>Redactores</strong><br />
                    <span class="nombres">
                        Ramón Indart | <span class="text-link">rindart@perfil.com</span><br />
                        Julián D'Imperio | <span class="text-link">jdimperio@perfil.com</span><br />
                        Bárbara Defoix Navarro | <span class="text-link">bdefoix@perfil.com</span><br />
                        Florencia De Sousa | <span class="text-link">fdesousa@perfil.com</span><br />
                        Diamela Rodriguez | <span class="text-link">diamelar@perfil.com</span><br />
                        Ayelén Bonino | <span class="text-link">abonino@perfil.com</span><br />
                        Anabella González | <span class="text-link">agonzalez@perfil.com</span><br />
                    </span>
                </li>
                <li>
                    <strong>Producers / Redes Sociales</strong>
                    <span class="nombres">
                        Morena Arredondo | <span class="text-link">marredondo@perfil.com</span><br />
                    </span>
                </li>
                <li>
                    <strong>Gerente de Tecnología Digital</strong>
                    <span class="nombres">
                        Federico Ramato | <span class="text-link">framato@perfil.com</span><br />
                    </span>
                </li>
                <li>
                    <strong>Diseño y Desarrollo</strong>
                    <span class="nombres">
                        Marcelo Parajó<br />
                        Julieta Staheli<br />
                    </span>
                </li>
                <li>
                    <strong>Multimedia</strong>
                    <span class="nombres">
                        Facundo Iglesias | <span class="text-link">figlesias@perfil.com</span><br />
                        Silvia Palumbo | <span class="text-link">spalumbo@perfil.com</span><br />
                        Ángel Gastón Díaz | <span class="text-link">gdiaz@perfil.com</span><br />
                        Nahuel Silvestro | <span class="text-link">nsilvestro@perfil.com</span><br />
                        César Calvo<br />
                    </span>
                </li>
                <li>
                    <h3>Área Comercial</h3>
                    <p>Para publicitar o recibir información acerca de nuestros sitios de internet, escíbanos a <span class="text-link">publicidadweb@perfil.com</span></p>
                </li>
                <li>
                    <strong>Gerente de Ventas de Publicidad Digital</strong>
                    <span class="nombres">María Valeria Oyuela | <span class="text-link">moyuela@perfil.com</span></span>
                </li>
                <li>
                    <strong>Marketing Digital</strong>
                    <span class="nombres">Noelia Henriques Santinho | <span class="text-link">nhenriques@perfil.com</span></span>
                </li>
                <li>
                    <strong>Gerente de Performance</strong>
                    <span class="nombres">Lisandro Conticello | <span class="text-link">lconticello@perfil.com</span></span>
                </li>
                <li>
                    <strong>Jefa de Traffickers</strong>
                    <span class="nombres">Mariela Delamata | <span class="text-link">mdelamata@perfil.com</span></span>
                </li>

            </ul>
        </div>
</main>
@endsection
