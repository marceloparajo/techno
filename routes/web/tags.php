<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 10/10/2018
 * Time: 01:34
 */

    Route::get('tags/{tag}', [
        'as' => 'tags.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get('tag/{tag}', [
        'as' => 'tags.tag.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag personalities').'/{tag}', [
        'as' => 'tags.personalities.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag celebrities').'/{tag}', [
        'as' => 'tags.celebrities.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag series').'/{tag}', [
        'as' => 'tags.series.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag movies').'/{tag}', [
        'as' => 'tags.movies.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag events').'/{tag}', [
        'as' => 'tags.events.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag locations').'/{tag}', [
        'as' => 'tags.locations.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag themes').'/{tag}', [
        'as' => 'tags.themes.show',
        'uses' => 'TagsController@show'
    ]);

    Route::get( __('tag topics').'/{tag}', [
        'as' => 'tags.topics.show',
        'uses' => 'TagsController@show'
    ]);