@extends('layout.base')

@section('page-title', 'Equipo | ' . env('APP_ALTER_NAME', 'Perfil'))

@section('head-css')
    <link rel="stylesheet" href="{{ mix('css/pages.css') }}">
@endsection

@section('body')
    <div class="container">
        <div class="content">
            <h1>Equipo de Editorial Perfil</h1>

            <ul style="margin-top: 10px; font-size: 1.2em;">
                <li>
                    <strong>Fundador</strong><br />
                    <div style="margin-left: 10px;">Jorge Fontevecchia</div>
                </li>
                <li>
                    <strong>Presidente y CEO</strong><br />
                    <div style="margin-left: 10px;">Gustavo González</div>
                </li>
                <li>
                    <strong>Director Ejecutivo</strong><br />
                    <div style="margin-left: 10px;">Agustino Fontevecchia</div>
                </li>
                <li>
                    <strong>Director de Recursos Humanos</strong><br />
                    <div style="margin-left: 10px;">Marcelo Capandeguy</div>
                </li>
                <li>
                    <strong>Director de Operaciones</strong><br />
                    <div style="margin-left: 10px;">Dr. Juan Manuel Cordón</div>
                </li>
                <li>
                    <strong>Director de Ventas Institucionales</strong><br />
                    <div style="margin-left: 10px;">Carlos Escobar</div>
                </li>
                <li>
                    <strong>Director de Auditoría</strong><br />
                    <div style="margin-left: 10px;">Horacio Leone</div>
                </li>
                <li>
                    <strong>Director de Tecnología</strong><br />
                    <div style="margin-left: 10px;">Ing. Héctor Bianchi</div>
                </li>
                <li>
                    <strong>Director Comercial</strong><br />
                    <div style="margin-left: 10px;">José A. Gómez</div>
                </li>
                <li>
                    <strong>Director Perfil Brasil</strong><br />
                    <div style="margin-left: 10px;">Luis Maluf</div>
                </li>
                <li>
                    <strong>Director de Contenidos Digitales</strong><br />
                    <div style="margin-left: 10px;">Edgardo Zunino</div>
                </li>
                <li><h3>Perfil.com</h3></li>
                <li>
                    <strong>Directora Ejecutiva</strong><br />
                    <div style="margin-left: 10px;">María José Bonacifa | <span class="text-link">mbonacifa@perfil.com</span></div>
                </li>
                <li>
                    <strong>Editora de Economía</strong><br />
                    <div style="margin-left: 10px;">Lorena Rodríguez | <span class="text-link">lrodriguez@perfil.com</span></div>
                </li>
                <li><strong>Editores</strong><br />
                    <div style="margin-left: 10px;">
                        Felipe Leibovich | <span class="text-link">fleibovich@perfil.com</span><br />
                        Emiliano G. Arnáez | <span class="text-link">earnaez@perfil.com</span><br />
                        Facundo Falduto | <span class="text-link">ffalduto@perfil.com</span><br />
                        Carlos Piro | <span class="text-link">cpiro@perfil.com</span><br />
                        Hugo Bordoni | <span class="text-link">hbordoni@perfil.com</span><br />
                        Darío Silva D'Andrea | <span class="text-link">dsilva@perfil.com</span><br />
                        Mariano Confalonieri | <span class="text-link">mconfalonieri@perfil.com</span>
                    </div>
                </li>
                <li>
                    <strong>Editor de 442</strong><br />
                    <div style="margin-left: 10px;">Federico Henault | <span class="text-link">fhenault@perfil.com</span></div>
                </li>
                <li>
                    <strong>Editor de Exitoína</strong><br />
                    <div style="margin-left: 10px;">Diego Iljutko | <span class="text-link">diljutko@perfil.com</span></div>
                </li>
                <li>
                    <strong>Redactores</strong><br />
                    <div style="margin-left: 10px;">
                        Ramón Indart | <span class="text-link">rindart@perfil.com</span><br />
                        Julián D'Imperio | <span class="text-link">jdimperio@perfil.com</span><br />
                        Bárbara Defoix Navarro | <span class="text-link">bdefoix@perfil.com</span><br />
                        Florencia De Sousa | <span class="text-link">fdesousa@perfil.com</span><br />
                        Diamela Rodriguez | <span class="text-link">diamelar@perfil.com</span><br />
                        Ayelén Bonino | <span class="text-link">abonino@perfil.com</span><br />
                        Anabella González | <span class="text-link">agonzalez@perfil.com</span><br />
                    </div>
                </li>
                <li>
                    <strong>Producers / Redes Sociales</strong>
                    <div style="margin-left: 10px;">
                        Morena Arredondo | <span class="text-link">marredondo@perfil.com</span><br />
                    </div>
                </li>
                <li>
                    <strong>Gerente de Tecnología Digital</strong>
                    <div style="margin-left: 10px;">
                        Federico Ramato | <span class="text-link">framato@perfil.com</span><br />
                    </div>
                </li>
                <li>
                    <strong>Diseño y Desarrollo</strong>
                    <div style="margin-left: 10px;">
                        Marcelo Parajó<br />
                        Julieta Staheli<br />
                    </div>
                </li>
                <li>
                    <strong>Multimedia</strong>
                    <div style="margin-left: 10px;">
                        Facundo Iglesias | <span class="text-link">figlesias@perfil.com</span><br />
                        Silvia Palumbo | <span class="text-link">spalumbo@perfil.com</span><br />
                        Ángel Gastón Díaz | <span class="text-link">gdiaz@perfil.com</span><br />
                        Nahuel Silvestro | <span class="text-link">nsilvestro@perfil.com</span><br />
                        César Calvo<br />
                    </div>
                </li>
                <li>
                    <h3>Área Comercial</h3>
                    <p>Para publicitar o recibir información acerca de nuestros sitios de internet, escíbanos a <span class="text-link">publicidadweb@perfil.com</span></p>
                </li>
                <li>
                    <strong>Gerente de Ventas de Publicidad Digital</strong>
                    <div style="margin-left: 10px;">María Valeria Oyuela | <span class="text-link">moyuela@perfil.com</span></div>
                </li>
                <li>
                    <strong>Marketing Digital</strong>
                    <div style="margin-left: 10px;">Noelia Henriques Santinho | <span class="text-link">nhenriques@perfil.com</span></div>
                </li>
                <li>
                    <strong>Gerente de Performance</strong>
                    <div style="margin-left: 10px;">Lisandro Conticello | <span class="text-link">lconticello@perfil.com</span></div>
                </li>
                <li>
                    <strong>Jefa de Traffickers</strong>
                    <div style="margin-left: 10px;">Mariela Delamata | <span class="text-link">mdelamata@perfil.com</span></div>
                </li>

            </ul>
        </div>
    </div>
@endsection
