<?php 

class AppController extends Controller
{
    public function beforeFilter()
    {
        if (!Usuario::hasLoggedIn()) {
            //redirigir a Login/signin
            return Router::to("Login/signin");
        }
        if (!Acl::check($this->_controller, $this->_action)) {
            Load::view("Home/sin_permiso");            
            exit();
        }
    }
}