<?php

class Recurso extends Model
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

    public function getListaRecursos(int $perfil_id)
    {
        $sql = "SELECT r.*, "
             . "(   SELECT count(*) " 
             . "    FROM perfil_recurso " 
             . "    WHERE perfil_id = :perfil_id " 
             . "    AND recurso_id = r.id) as cuenta "
             . "FROM recurso r "
             . "WHERE activo = 1";
        return Db::findAll($sql, [":perfil_id" => $perfil_id]);
    }


}