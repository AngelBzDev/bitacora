<?php
   require './config/database.php';

   function guardarRegistro(){
      $conn = conectarDB();

      $atendio = strtolower($_POST['atendio']);
      $fecha = strtolower($_POST['fecha']);
      $correo = strtolower($_POST['correo']);
      $docente = strtolower($_POST['nombreDocente']);
      $asunto = strtolower($_POST['asunto']);

      if(empty($atendio) || empty($fecha) || empty($correo) || empty($docente) || empty($asunto)){
         return 'Todos los campos son obligatorios';
         exit;
      }

      if(isset($_POST['id'])){
         $id = $_POST['id'];
         $query = "UPDATE solicitudes SET atendio='$atendio', fecha='$fecha', correo='$correo', docente='$docente', asunto='$asunto' WHERE id = '$id'";
         $update = mysqli_query($conn, $query);
         return 'Registro actualizado';
         exit;
      }

      $query = "INSERT INTO solicitudes (atendio, fecha, correo, docente, asunto) VALUES ('$atendio', '$fecha', '$correo', '$docente', '$asunto')";

      $insert = mysqli_query($conn, $query);

      return 'Registro guardado';
   }

   echo guardarRegistro();
?>