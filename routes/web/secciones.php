<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 8/8/18
 * Time: 10:51
 */

/*Route::group(['prefix' => 'seccion'], function () {
	Route::get('{channel}', [
        'as' => 'channels.show',
        'uses' => 'ChannelsController@show'
    ]);
});*/

$channelRoutes = function () {
	Route::get('{channel}', [
        'as' => 'channels.show',
        'uses' => 'ChannelsController@show'
    ]);
};

Route::group(['prefix' => __('path section')], $channelRoutes);
//Route::group(['prefix' => 'seccion'], $channelRoutes);