<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 2019-02-04
 * Time: 12:30
 */

namespace App\Http\Helpers;


use Carbon\Carbon;

class DatesHelper
{
    /**
     * @param Carbon $date
     * @return string
     */
    public function getDateForHuman(Carbon $date)
    {
        if ($date->isToday()) {
            return 'Today ' . $date->format('H:i');
        }

        if ($date->isYesterday())
            return 'Yesterday ' . $date->format('H:i');

        return $date->format('d-m-Y H:i');
    }
}