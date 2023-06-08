<?php

/**
 *
 * @author nelson
 *
 */
class AccesosController extends AppController
{

    public function initialize()
    {
        Load::setTemplate('default');
    }

    public function index()
    {
        $this->lista_de_accesos = (new Acceso)->obtenerListaDeAccesos();
        Load::view("Accesos/index", $this->getProperties());
    }
}
