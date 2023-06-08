<?php

/**
 * 
 * @author nelson
 *
 */
class EmpresasController extends ScaffoldController
{
    protected $_model = "Empresa";

    public function initialize()
    {
        Load::setTemplate('default');
    }
}