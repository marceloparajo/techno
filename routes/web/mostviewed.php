<?php
/**
 * Created by PhpStorm.
 * User: edgarsand
 * Date: 20/12/2018
 * Time: 9:40
 */

Route::get( __('path most viewed'), [
        'as' => 'mostviewed.show',
        'uses' => 'MostViewedController@show'
    ]);

Route::get('whatshot', [
        'uses' => 'MostViewedController@show'
    ]);
