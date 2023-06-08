<?php

/**
 * 
 * @author nelson
 *
 */
class PerfilesController extends ScaffoldController
{
    protected $_model = "Perfil";

    public function initialize()
    {
        Load::setTemplate('default');
    }

    public function asignar_recursos(int $perfil_id)
    {
        $this->recursos = (new Recurso)->findAll("ORDER BY controlador, accion");
        $this->perfil = (new Perfil)->findById($perfil_id);
        $this->recursos = (new Recurso)->getListaRecursos($perfil_id);

        if (Request::hasPost("recurso")) {
            //actualizar la lista de recursos del perfil
            Perfil::actualizarListaDeRecursos($perfil_id, Request::post('recurso'));
            Router::to("Perfiles");
        }

        Load::view("Perfiles/asignar_recursos", $this->getProperties());
    }

}