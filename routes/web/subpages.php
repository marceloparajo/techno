<?php

Route::group(['prefix' => 'reperfilar'], function () {

    Route::get('', 'ChannelsController@showCustomizable');

    Route::get('{channel}', 'ChannelsController@showCustomizable');

});


