<?php

/**
 * 
 * @author nelson
 *
 */
class MenusController extends ScaffoldController
{
    protected $_model = "Menu";
    
    public function initialize()
    {
        Load::setTemplate('default');
    }


}