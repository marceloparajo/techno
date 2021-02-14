<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 5/8/18
 * Time: 23:46
 */

Route::get('amp/noticias/{channel}/{slug}', function (string $channel, string $slug) {
    $slug = str_replace('.phtml', '', $slug);
    $url = route('news.amp.show', [$channel, $slug]);
    return redirect($url, 301);
});

Route::get('category/{channel}', function ($channel) {
    $route = route('channels.show', $channel);
    return redirect()->to($route, 301);
});

Route::get('wp-content/uploads/{year}/{month}/{width}/{height}/{file}', function ($year, $month, $width, $height, $file) {
    $server = rtrim(env('IMAGE_SERVER', 'http://fotos.perfil.com'), '/');
    $new_url = "$server/$year/$month/01/$width/$height/$file";
    return redirect()->to($new_url, '301');
})->where('width', '[0-9]+')->where('height', '[0-9]+');

Route::get('wp-content/uploads/{year}/{month}/{file}', function ($year, $month, $file) {
    $server = rtrim(env('IMAGE_SERVER', 'http://fotos.perfil.com'), '/');

    // Busco si el file tiene las dimensiones.
    if (preg_match('/-[0-9]+x[0-9]+./', $file, $matches)) {
        $params = explode('x', $matches[0]);
        $width = str_replace('-', '', $params[0]);
        $height = str_replace('.', '', $params[1]);

        $slug = preg_replace('/-[0-9]+x[0-9]+/', '', $file);
        $new_url = "$server/$year/$month/01/trim/$width/$height/$slug";
    } else
        $new_url = "$server/$year/$month/01/$file";

    return redirect()->to($new_url, '301');
});

Route::get('{year}-{month}-{day}-{id}-{slug}/{whatever}', function ($year, $month, $day, $id, $slug) {
    $slug = "$year-$month-$day-$id-$slug";
    return redirect()->route('news.show', ['general', $slug], '301');
})->where('year', '[0-9]+')->where('month', '[0-9]+')->where('day', '[0-9]+')->where('id', '[0-9]+');

Route::get('{year}-{month}-{day}-{id}-{slug}', function ($year, $month, $day, $id, $slug) {
    $slug = "$year-$month-$day-$id-$slug";
    return redirect()->route('news.show', ['general', $slug], '301');
})->where('year', '[0-9]+')->where('month', '[0-9]+')->where('day', '[0-9]+')->where('id', '[0-9]+');
