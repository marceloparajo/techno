<?php

Route::group(['prefix' => 'reperfilar'], function () {

    Route::get('{channel?}', 'ChannelsController@showCustomizable');

});


