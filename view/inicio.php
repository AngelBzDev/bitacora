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
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="../css/all.css">
   <link rel="stylesheet" href="../css/form.css">
   <title>Inicio</title>
</head>
<body class="bitacora">
      <div class="container">
         <div class="navbar">
           <img src="../img/utn_256.png" class="logo" alt="Main Logo">
     
           <ul>
             <?php echo $_SESSION['rol'] === '1' ? "<li><a id='agregar' href='../view/form.php'>Agregar</a></li>" : null ?>
             
             <li><a href="../php/cerrarSesion.php">Cerrar Sesión</a></li>
           </ul>
           
           <img src="../img/edomex_vertical.png" class="logo" alt="Main Logo">
         
         </div>
      </div>
      <p class="username">Hola <?php echo $_SESSION['username']?></p>
      <div class="contenedor-lista">
         <div class="lista">
            <table>
               <thead>
                  <tr class="tabla">
                     <th>Atendio</th>
                     <th>Fecha</th>
                     <th>Correo del atendido</th>
                     <th>Nombre del atendido</th>
                     <th>Asunto</th>
                  </tr>
               </thead>
               <tbody id="registros">
               </tbody>
            </table>
         </div>
      </div>
      <script src="../js/all.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <script src="../js/lista-registros.js"></script>
   </body>
</html>