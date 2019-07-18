<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

if (env('APP_FORCE_SCHEME_HTTPS', false)) {
    URL::forceScheme('https');
}

Route::get('', [
    'as' => 'home.index',
    'uses' => 'HomeController@index'
]);

include (__DIR__ . '/web/amp.php');

include (__DIR__ . '/web/authors.php');

include(__DIR__ . '/web/feeds.php');

include (__DIR__ . '/web/lastnews.php');

include (__DIR__ . '/web/mostviewed.php');

include (__DIR__ . '/web/news.php');

include (__DIR__ . '/web/redirects.php');

include (__DIR__ . '/web/secciones.php');

include (__DIR__ . '/web/search.php');

include (__DIR__ . '/web/sitemap.php');

include (__DIR__ . '/web/tags.php');




