<?php
/**
 * Created by PhpStorm.
 * User: edgarsand
 * Date: 20/12/2018
 * Time: 9:40
 */

Route::group(['prefix' => __('path search')], function () {

    Route::get('', [
        'as' => 'search.index',
        'uses' => 'SearchController@index'
    ]);

});