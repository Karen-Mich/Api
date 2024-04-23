<?php
class crudG{
    public static function GuardarEstudiantes(){
        include_once ('conexion.php');
        $cedula = $_POST["cedula"];
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $direccion = $_POST["direccion"];
        $telefono = $_POST["telefono"];
        $objeto = new conexion();
        $conectar = $objeto -> conectar();
        $insertSql="INSERT INTO estudiante (cedula, nombre, apellido, direccion, telefono) VALUES ('$cedula','$nombre','$apellido','$direccion','$telefono')";
        $resultado = $conectar->prepare($insertSql);
        $resultado->execute();
        echo json_encode($resultado);
        $conectar->commit();
    }
}

?>