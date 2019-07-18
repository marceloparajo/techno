<?php
/**
 * Created by PhpStorm.
 * User: federicoramato
 * Date: 25/8/18
 * Time: 00:16
 */

namespace App\Http\Helpers;


class ColumnsHelper
{
    /**
     * @var array
     */
    protected $column;

    /**
     * @param array $news
     * @param Int $cantidad
     */
    public function setColumns(Array $news, Int $cantidad = 2)
    {
        $col = 1;

        for ($i=1; $i <= $cantidad; $i++)
            $this->column[$i] = [];

        foreach ($news as $key => $new) {
            if (! isset($this->column[$col]))
                $this->column[$col] = [];

            array_push($this->column[$col], $new);

            if ($col == $cantidad) $col = 1; else $col++;
        }
    }

    /**
     * @param Int $col
     * @return mixed
     */
    public function getColumn(Int $col)
    {
        return $this->column[$col];
    }
}