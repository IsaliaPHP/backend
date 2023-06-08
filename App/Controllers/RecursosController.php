<?php

/**
 * 
 * @author nelson
 *
 */
class RecursosController extends ScaffoldController
{
    protected $_model = "Recurso";
    
    public function initialize()
    {
        Load::setTemplate('default');
    }

    public function cambiar_estado(int $id)
    {
        $datos_recurso = (new Recurso)->findById($id);
        $recurso = new Recurso();
        $recurso->id = $id;
        $recurso->activo = $datos_recurso['activo'] == '1' ? "0" : "1";
        $recurso->save();
        Router::to("Recursos");
    }

}