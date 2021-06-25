<?php
   require './config/database.php';
   function buscarRegistro(){
      $conn = conectarDB();

      $id = $_POST['id'];

      $query = "SELECT * FROM solicitudes WHERE id = '$id'";
      $resultado = mysqli_query($conn, $query);

      $json = [];
      while($row = mysqli_fetch_array($resultado)){
         $json[] = [
         'id' => $row['id'],
         'atendio' => $row['atendio'],
         'fecha' => $row['fecha'],
         'correo' => $row['correo'],
         'docente' => $row['docente'],
         'asunto' => $row['asunto']
         ];
      }
      $jsonString = json_encode($json);
      return $jsonString;
   }
   echo buscarRegistro();
?>