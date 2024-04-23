<?php
header('Content_Type: application/json; charset=utf-8');
//json_encode
$objeto = new stdClass();
$objeto-> nombre= "Carlos";
$objeto->apellido="Lara";
$objeto->edad=40;
print_r ($objeto);
$miJson = json_encode($objeto);
echo $miJson;

//array simple de php a json
$colores = array("rojo", "azul","verde");
print_r($colores);
echo "<br>";
$miJson = json_encode($colores);
echo "<br>";
echo $miJson;

//array asociativos de php a json
$arrayAso = array("Nombre"=>"Carlos","Apellido"=>"Laña");
print_r($arrayAso);
var_dump($arrayAso);
$miJson=json_encode($arrayAso, JSON_UNESCAPED_UNICODE);
echo $miJson;
var_dump($miJson);

//json a php json decode
$lista = '{"nombre":"Carlos",
    "apellido":"Nunez",
    "edad":30}'
;
        echo($lista);
$miPhp = json_encode($lista);
print_r($lista);

?>