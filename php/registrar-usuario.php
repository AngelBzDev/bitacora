<?php
   require './config/database.php';

   function registrar(){

      $conn = conectarDB();

      $username = strtolower($_POST['username2']);
      $email = strtolower($_POST['email2']);
      $pass = $_POST['password2'];
      $password = password_hash($pass, PASSWORD_DEFAULT);
   
      //Verificar que los campos no esten vacios
      if(empty($username) || empty($email) || empty($pass)){
         // Todos los campos son obligatorios
         return 1;
         exit;
      }

      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         // invalid emailaddress
         return 4;
         exit;
     }

      if(strlen($pass) <= 6){
         //La contraseña debe ser mayor a 6 caracteres
         return 5;
         exit;
      }
   
      //Variable que contiene el query para hacer la consulta a la bd
      $query = "SELECT * FROM users WHERE email = '${email}'";
      $consulta = mysqli_query($conn, $query);
   
      //Verificar si el correo ya esta registrado
      if($consulta->num_rows){
         // "El correo ya esta en uso"
         return 2;
         exit;
      }
      else{
         //Hacer el registro del nuevo usuario
         $query2 = "INSERT INTO users (username, email, password, rol) VALUES ('$username', '$email', '$password', 0)";
   
         $insert = mysqli_query($conn, $query2);
         //Registro exitoso
         return 3;
      }
   }

   $registro = registrar();
   echo $registro;
?>