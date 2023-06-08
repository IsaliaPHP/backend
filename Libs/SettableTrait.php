<?php 

trait SettableTrait
{
    private $_attributes = [];
    
    public function __set($key, $value) {
        $this->_attributes[$key] = $value;
    }
    
    public function __get($key)
    {
        return $this->_attributes[$key] ?? null;
    }
}