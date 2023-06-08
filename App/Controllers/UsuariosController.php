<?php

/**
 * 
 * @author nelson
 *
 */
class UsuariosController extends ScaffoldController
{
    protected $_model = "Usuario";
    
    public function initialize()
    {
        Load::setTemplate('default');
    }

    public function reset_password(int $id)
    {
        if (Request::hasPost("nueva_clave")) {
            $nueva_clave = Request::post("nueva_clave");

            $usuario = new Usuario();
            $usuario->id = $id;
            $usuario->clave = $usuario->generateHash($nueva_clave);
            $usuario->save();
            Router::to("Usuarios");
        }
        $this->usuario = (new Usuario)->findById($id);
        Load::view("Usuarios/reset_password", $this->getProperties());
    }

    public function cambiar_estado(int $id)
    {
        $datos_usuario = (new Usuario)->findById($id);
        $usuario = new Usuario();
        $usuario->id = $id;
        $usuario->activo = $datos_usuario['activo'] == '1' ? "0" : "1";
        $usuario->save();
        Router::to("Usuarios");
    }

}