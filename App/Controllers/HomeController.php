<?php

/**
 * 
 * @author nelson
 *
 */
class HomeController extends AppController
{

    public function initialize()
    {
        Load::setTemplate('default');
    }

    public function index()
    {
        Load::view("Home/index", $this->getProperties());
    }

}
