<?php 
session_start();
$auth = $_SESSION['login'];
if(!$auth){
   echo "<script>window.location.href = '../index.html'</script>";
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/form.css">
  <title>Formulario Registro</title>
</head>

<body>

  <div class="container">
    <div class="navbar">
      <img src="../img/utn_256.png" class="logo" alt="Main Logo">

      <ul>
        <li><a href="../view/inicio.php">Inicio</a></li>
        <li><a href="../php/cerrarSesion.php">Cerrar Sesión</a></li>
      </ul>
      <img src="../img/edomex_vertical.png" class="logo" alt="Main Logo">
    </div>

  </div>

  <section class="form-register">
    <h1>Formulario Registro</h1>
    <hr><br>

    <form id="bitacora-edit">
      <h3>Nombre del que atendio </h3>
      <input class="controls" type="text" name="atendio" id="atendio" placeholder="Ingrese su Nombre">
      <h3>Fecha en que se atendio </h3>
      <input class="controls" type="date" name="fecha" id="fecha" placeholder="Ingrese la Fecha">
      <h3>Correo atendido </h3>
      <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese el correo del docente">
      <h3>Nombre del Docente </h3>
      <input class="controls" type="text" name="nombreDocente" id="nombreDocente" placeholder="Ingrese el nombre del docente ">
      <h3>Asunto </h3>
      <input class="controls" type="text" name="asunto" id="asunto" placeholder="Ingrese el asunto">    
      <input class="botons" type="submit" value="Editar Registro">
    </form>
  </section>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="../js/form.js" type="module"></script>
</body>

</html>