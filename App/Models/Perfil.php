<?php

class Perfil extends Model
{

    public static function getNombre(int $perfil_id)
    {
        return Db::getScalar("SELECT nombre FROM perfil WHERE id = $perfil_id");
    }

    public static function actualizarListaDeRecursos(int $perfil_id, array $recursos)
    {
        Db::delete("perfil_recurso", "WHERE perfil_id = $perfil_id");
        foreach($recursos as $key => $value) {
            Db::insert("perfil_recurso", ["perfil_id" => $perfil_id, "recurso_id" => $value]);
        }
    }

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