<?php
include_once "borrar.php";
include_once "consulta.php";
include_once "guardar.php";
include_once "actualizar.php";
$opc = $_SERVER['REQUEST_METHOD'];
switch($opc){
    case "GET":
        crudS::SeleccionarEstudiantes();
        break;
    case "POST":
        crudG::GuardarEstudiantes();
        break;
    case "PUT":
          
            crudA::ActualizarEstudiantes();
            break;
    case "DELETE":
        $cedula=$_GET['cedula'];
        crudB::BorrarEstudiantes($cedula);
        break;

        //HACER EL EDITAR Y 2 FORMAS DEL CLIENTE, SIN JQUERY SOLO UTILIZANDO HTML, ABAJO UNA TABLA CON TODOS LOS DATOS

        //TODO SE DEBE ACCEDER DESDE LA APIREST
        //MVC, modelo (guardar, borrar, consultar, editar), controlador(ApiRest), Vista (cliente)
        //Para el otro cliente podemos usar jquery o bootstrap SOLO PARA EL CLIENTE 
        //Lunes prueba
}
?>