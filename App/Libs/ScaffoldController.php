<?php

class ScaffoldController extends AppController
{
    protected $_model;

    public function index()
    {
        $this->list_of_items = (new $this->_model)->findAll();
        Load::view($this->_controller . "/index", $this->getProperties());
    }

    public function create()
    {
        $current_model = new $this->_model();
        if (Request::hasPost('data')) {
            $request_data = Request::post('data');
            $current_model->load($request_data);
            if ($current_model->save()) {
                Router::to($this->_controller);
            } else {
                $this->message = "Imposible crear el elemento";
            }
        }
        Load::view($this->_controller . "/create", $this->getProperties());
    }

    public function edit(int $id)
    {
        $current_model = new $this->_model();
        if (Request::hasPost('data')) {
            $request_data = Request::post('data');
            $current_model->load($request_data);
            $current_model->id = $id;
            if ($current_model->save()) {
                Router::to($this->_controller);
            } else {
                $this->message = "Imposible actualizar el elemento";
            }
        }
        $this->current_item = $current_model->findById($id);
        Load::view($this->_controller . "/edit", $this->getProperties());
    }

    public function delete(int $id)
    {
        $current_model = new $this->_model();
        $current_model->id = $id;
        $current_model->delete();
        Router::to($this->_controller);
    }
}