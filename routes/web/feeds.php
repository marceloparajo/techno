<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 2019-01-01
 * Time: 11:52
 */

// Retro-compatibilidad
Route::get('rss/{channel}', function(string $channel) {
    $channel = str_replace('.xml', '', $channel);

    switch ($channel) {
        case 'ultimo-momento':
        case 'ultimomomento.xml':
            return redirect()->route('feeds.channel', '');

        default:
            return redirect()->route('feeds.channel', $channel);

    }
});

Route::group(['prefix' => 'feed'], function () {

    Route::get('msn', 'FeedsController@msn');

    Route::get('googlenews', 'FeedsController@googlenews');

    Route::get('facebook', 'FeedsController@facebook');

    Route::get('partners', 'FeedsController@partners');

    Route::get('{channel?}', [
        'as' => 'feeds.channel',
        'uses' => 'FeedsController@index'
    ]);

});
