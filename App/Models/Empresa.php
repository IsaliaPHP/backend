<?php

class Empresa extends Model
{
    public function beforeCreate()
    {
        $this->activa = 1;
        $this->ult_actualizacion = date('Y-m-d H:i:s');
    }

    public function beforeUpdate()
    {
        $this->ult_actualizacion = date('Y-m-d H:i:s');
    }

    public static function getNombre(int $id)
    {
        return Db::getScalar("SELECT razon_social FROM empresa WHERE id = $id");
    }
}