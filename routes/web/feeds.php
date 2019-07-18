<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 2019-01-01
 * Time: 11:52
 */

Route::group(['prefix' => 'feed'], function () {

    Route::get('', [
        'as' => 'feeds.lastposts',
        'uses' => 'FeedsController@ultimo_momento'
    ]);

    Route::get('msn', 'FeedsController@msn');

    Route::get('googlenews', 'FeedsController@googlenews');

});