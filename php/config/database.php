<?php
   function conectarDB(): mysqli{
      $db = mysqli_connect('localhost', 'root', '', 'bitacora');

      if(!$db){
         echo 'Error al conectarse a la base de datos';
         exit;
      }
      return $db;
   }
?>