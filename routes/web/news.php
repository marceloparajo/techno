<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 4/8/18
 * Time: 19:12
 */

$newsRoutes = function () {

    Route::get('{slug}.phtml', 'NewsController@show');

    Route::get('{slug}', 'NewsController@show');

    Route::get('{channel_slug}/{slug}.phtml', [
        'as' => 'news.show',
        'uses' => 'NewsController@show'
    ]);

};

Route::group(['prefix' => __('path news')], $newsRoutes);
//Route::group(['prefix' => 'noticias'], $newsRoutes);