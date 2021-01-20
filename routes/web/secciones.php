<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 8/8/18
 * Time: 10:51
 */

Route::get('columnistas', 'ChannelsController@showColumnistas')->name('channels.columnistas.show');

Route::group(['prefix' => __('path section')], function () {

    Route::get('{channel}', [
        'as' => 'channels.show',
        'uses' => 'ChannelsController@show'
    ]);

});
