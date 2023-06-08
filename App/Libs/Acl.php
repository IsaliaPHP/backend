<?php

class Acl
{
    public static function check($controller, $action)
    {
        $recursos = Usuario::getRecursosActivos();
        $encontrado = false;
        foreach($recursos as $recurso) {
            if (strtolower($recurso['controlador']) == "*") {
                $encontrado = true;
            }
            elseif (strtolower($recurso['controlador']) == strtolower($controller)) {
                if (strtolower($recurso['accion']) == "*") {
                    $encontrado = true;
                } else {
                    if (strtolower($recurso['accion']) == strtolower($action)) {
                        $encontrado = true;
                    }
                }
            }
        }
        return $encontrado;
    }
}