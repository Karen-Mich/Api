<?php
class crudS{
    public static function SeleccionarEstudiantes(){
        include_once('conexion.php');
        $objeto = new conexion();
        $conexion = $objeto->conectar();
        $sqlSelect = "Select * from estudiante";
        $resultado = $conexion->prepare($sqlSelect);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        echo (json_encode($data)) ;
    }
}

?>