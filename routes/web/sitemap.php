<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 09/10/2018
 * Time: 15:40
 */

Route::group(['prefix' => 'sitemap'], function () {

    Route::get('', [
        'as' => 'sitemaps.index',
        'uses' => 'SitemapsController@index'
    ]);

    Route::get('lastposts', [
        'as' => 'sitemaps.lastposts',
        'uses' => 'SitemapsController@showLastPosts'
    ]);

    Route::get('google-news-lastposts', [
        'as' => 'sitemaps.googlenews.lastposts',
        'uses' => 'SitemapsController@showGoogleNewsLastPosts'
    ]);

    Route::get('channels', [
        'as' => 'sitemaps.channels',
        'uses' => 'SitemapsController@showChannels'
    ]);

    Route::get('authors', [
        'as' => 'sitemaps.authors',
        'uses' => 'SitemapsController@showAuthors'
    ]);

    Route::get('videos', [
        'as' => 'sitemaps.videos',
        'uses' => 'SitemapsController@showVideos'
    ]);

    Route::get('archive', [
        'as' => 'sitemaps.archive.index',
        'uses' => 'SitemapsController@indexArchive'
    ]);

    Route::get('archive/{year}/{month}', [
        'as' => 'sitemaps.archive.period',
        'uses' => 'SitemapsController@showArchivePeriod'
    ]);

});
