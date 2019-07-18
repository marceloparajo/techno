<?php 
/**
 * Created by Sublime Text 3.
 * User: edgarsand
 * Date: 06/05/2019
 * Time: 9:40
 */

// HOME
Route::get('amp/home', [
    'as' => 'home.amp',
    'uses' => 'HomeController@amp'
]);


// ULTIMO MOMENTO
Route::get('amp/'.__("path last news"), [
    'as' => 'lastnews.amp',
    'uses' => 'LastNewsController@amp'
]);


// MAS LEIDAS
Route::get('amp/'.__("path most viewed"), [
    'as' => 'mostviewed.amp',
    'uses' => 'MostViewedController@amp'
]);


// CANALES/SECCIONES
Route::get( __("path section").'/amp/{channel}', [
    'as' => 'channels.amp',
    'uses' => 'ChannelsController@amp'
]);


// AUTOR
Route::get( __("path authors").'/amp/{username}', [
    'as' => 'authors.amp',
    'uses' => 'AuthorsController@amp'
]);


// NOTICIAS
Route::get( __('path news').'/amp/{channel_slug}/{slug}.phtml', [
    'as' => 'news.amp.show',
    'uses' => 'NewsController@amp'
]);


// TAGS
Route::get('tags/amp/{tag}', [
    'as' => 'tags.amp',
    'uses' => 'TagsController@amp'
]);

Route::get('tag/amp/{tag}', [
    'as' => 'tags.tag.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag personalities').'/amp/{tag}', [
    'as' => 'tags.personalities.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag celebrities').'/amp/{tag}', [
    'as' => 'tags.celebrities.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag series').'/amp/{tag}', [
    'as' => 'tags.series.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag movies').'/amp/{tag}', [
    'as' => 'tags.movies.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag events').'/amp/{tag}', [
    'as' => 'tags.events.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag locations').'/amp/{tag}', [
    'as' => 'tags.locations.amp',
    'uses' => 'TagsController@amp'
]);

Route::get( __('tag themes').'/amp/{tag}', [
    'as' => 'tags.themes.amp',
    'uses' => 'TagsController@amp'
]); 

Route::get( __('tag topics').'/amp/{tag}', [
    'as' => 'tags.topics.amp',
    'uses' => 'TagsController@amp'
]);