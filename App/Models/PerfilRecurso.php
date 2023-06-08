<?php

class PerfilRecurso extends Model
{
    public function actualizarConfiguracion(int $perfil_id, int $recurso_id, int $estado)
    {
        $registro_actual = $this->findFirst("WHERE perfil_id = :pid AND recurso_id = :rid", 
        [":pid" => $perfil_id, ":rid" => $recurso_id]);

        $id_actual = null;

        if (isset($registro_actual) && is_array($registro_actual)) {
            $id_actual = $registro_actual['id'];
        }

        return $this->crearActualizarPerfilRegistro($perfil_id, $recurso_id, $estado, $id_actual);
    }

    private function crearActualizarPerfilRegistro(int $perfil_id, int $recurso_id, int $estado, int $id = null)
    {
        $this->id = $id;
        $this->perfil_id = $perfil_id;
        $this->recurso_id = $recurso_id;
        $this->activo = $estado;
        $this->save();
        return ['result' => 'ok'];
    } 
}