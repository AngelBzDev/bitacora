<?php
   require './config/database.php';

   function iniciarSesion(){

      $conn = conectarDB();

      $email = strtolower($_POST['email']);
      $password = $_POST['password'];

      if(empty($email) || empty($password)){
         return 'Todos los campos son obligatorios';
         exit;
      }

      $query = "SELECT * FROM users WHERE email = '${email}'";
      $consulta = mysqli_query($conn, $query);
   
      //Verificar si el correo ya esta registrado
      if($consulta->num_rows){
         
         $usuario = mysqli_fetch_assoc($consulta);
         $auth = password_verify($password, $usuario['password']);

         if($auth){
            session_start();
   
            $_SESSION['usuario'] = $usuario['email'];
            $_SESSION['login'] = true;
            $_SESSION['rol'] = $usuario['rol'];

            return 'Sesion iniciada';
         }
         else{
            return 'Contraseña incorrecta';
         }
      }
      else{
         return 'El correo no esta registrado';
      }
   }

   echo iniciarSesion();
?>