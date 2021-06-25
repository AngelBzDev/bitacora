<?php
   require './config/database.php';
   function borrarRegistro(){
      $conn = conectarDB();
      if(isset($_POST['id'])){
         $id = $_POST['id'];
         $query = "DELETE FROM solicitudes WHERE id = '$id'";
         $delete = mysqli_query($conn, $query);
         return 'oc';
         exit;
      }
      return 'xc';
   }
   echo borrarRegistro();
?>