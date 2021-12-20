<?php

include "Connect1.php";  
include "Connect2.php";  
include "Pessoa.php";  
include "Programador.php";

$programador = new Programador("Diego", "PHP");

echo $programador->getNome();

echo $programador::ESPECIE;

ConectarSite\conectar();