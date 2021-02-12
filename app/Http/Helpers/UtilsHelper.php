<?php


namespace App\Http\Helpers;


use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class UtilsHelper
{
    /**
     * @param string $channel
     * @return bool
     * @throws FileNotFoundException
     */
    public function _channelExists(string $channel)
    {
        $site = strtolower(env('SITE_CODE', 'perfil'));

        if (env('RESOURCES_SOURCE', 'file') == 'file') {
            $diskRsc = Storage::disk('rsc');
            $path_channels = str_replace('-sitecode-', $site, env('CHANNELS_FILE', ''));
            $channels = ($diskRsc->exists($path_channels)) ? json_decode($diskRsc->get($path_channels), true) : [];
        } else {
            $channels = Cache::remember('channels-list', 1, function () use ($site) {
                $path = str_replace('-sitecode-', $site, env('CHANNELS_URL', ''));
                $content = file_get_contents($path);
                return (is_null($content)) ? null : json_decode($content, true);
            });
        }

        return in_array($channel, $channels);
    }
}
