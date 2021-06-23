<?php
   require './config/database.php';
   function mostrarRegistros(){
      $conn = conectarDB();

      $consulta = "SELECT * FROM solicitudes ORDER BY fecha";
      $result = mysqli_query($conn, $consulta);

      if(!$result){
         die("Consulta fallida");
     }
 
     $json = [];
     while($row = mysqli_fetch_array($result)){
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

   echo mostrarRegistros();
?>