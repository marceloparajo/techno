<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 10/8/18
 * Time: 20:32
 */

Route::group(['prefix' => __("path authors")], function () {

    Route::get('', [
        'as' => 'authors.index',
        'uses' => 'AuthorsController@index'
    ]);

    Route::get('{username}', [
        'as' => 'authors.show',
        'uses' => 'AuthorsController@show'
    ]);

});
