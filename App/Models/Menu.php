<?php

class Menu extends Model
{
    public function beforeCreate()
    {
        $this->activo = 1;
        $this->ult_actualizacion = date('Y-m-d H:i:s');
    }

    public function beforeUpdate()
    {
        $this->ult_actualizacion = date('Y-m-d H:i:s');
    }
}