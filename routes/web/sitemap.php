<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 09/10/2018
 * Time: 15:40
 */

Route::group(['prefix' => 'sitemap'], function () {

    Route::get('channels', [
        'as' => 'sitemaps.channels',
        'uses' => 'SitemapsController@showChannels'
    ]);

    Route::get('googlenews', [
        'as' => 'sitemaps.googlenews.index',
        'uses' => 'SitemapsController@showGoogleNewsIndex'
    ]);

    Route::get('googlenews/videos', [
        'as' => 'sitemaps.googlenews.videos',
        'uses' => 'SitemapsController@showGoogleNewsVideos'
    ]);

    Route::get('googlenews/{year}/{month}/{day}', [
        'as' => 'sitemaps.googlenews.day',
        'uses' => 'SitemapsController@showGoogleNewsDay'
    ]);

    Route::get('', [
        'as' => 'sitemaps.index',
        'uses' => 'SitemapsController@showIndex'
    ]);

    Route::get('autores', [
        'as' => 'sitemaps.authors',
        'uses' => 'SitemapsController@showAuthors'
    ]);

    Route::get('{year}/{month}', [
        'as' => 'sitemaps.show.month',
        'uses' => 'SitemapsController@showMonth'
    ]);

});
