<?php

class Acceso extends Model
{
    public function registrarAcceso()
    {
        $this->usuario_id = Session::get('user_id');
        $this->fecha_acceso = date('Y-m-d H:i:s');
        $this->ip_acceso = $_SERVER['REMOTE_ADDR'];
        $this->save();
    }

    public function obtenerListaDeAccesos()
    {
        $sql = "SELECT a.*, u.nombre as usuario_nombre " 
             . "FROM acceso a INNER JOIN usuario u "
             . "ON a.usuario_id = u.id "
             . "ORDER BY a.id DESC LIMIT 25";
        return Db::findAll($sql);
    }
}