<?php
/**
 * Created by PhpStorm.
 * User: edgarsand
 * Date: 20/12/2018
 * Time: 9:40
 */

Route::get(__("path last news"), [
        'as' => 'lastnews.show',
        'uses' => 'LastNewsController@show'
    ]);

Route::get( __('path now'), [
        'uses' => 'LastNewsController@show'
    ]);

Route::get('whatsnews', [
        'uses' => 'LastNewsController@show'
    ]);