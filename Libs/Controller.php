<?php 

/**
 * 
 * @author nelson rojas
 * class Controller
 * @property string _controller
 * @property string _action
 */
class Controller
{
    use SettableTrait;
    //implementa los métodos __set y __get 
    //para permitir guardar atributos como $this->nombre = 'Nombre';
    //y para luego poder recuperarlo como echo $this->nombre;
    
    public function __construct($controller, $action)
    {
        $this->_controller = str_replace("Controller", "", $controller);
        $this->_action = $action;

        // revisa si existe un metodo llamado "initialize"
        // y lo llama. es ideal para configuraciones
        if ((int) method_exists($this, "initialize")) {
            call_user_func(array($this, "initialize"));
        }
        
        // revisa si existe un metodo llamado "beforeFilter"
        // y lo llama. es ideal para autenticacion o autorizacion
        if ((int) method_exists($this, "beforeFilter")) {
            call_user_func(array($this, "beforeFilter"));
        }

    }
    
    /**
     * recupera el contenido desde el arreglo _properties
     */
    public final function getProperties()
    {
        return $this->_attributes;    
    }
    
    
       
}
