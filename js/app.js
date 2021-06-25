import { mostrarMensaje } from './util.js';

const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener('click', () => {
   container.classList.add('sign-up-mode');
})
signInBtn.addEventListener('click', () => {
   container.classList.remove('sign-up-mode');
})

const btnRegistrarse = document.querySelector(".sign-up-form");
const btnIniciar = document.querySelector(".sign-in-form");

window.onload = () => {
   llenarFormulario();
   btnRegistrarse.addEventListener('submit', registrarUsuario);
   btnIniciar.addEventListener('submit', iniciarSesion);
}

const inputs = document.querySelectorAll(".input");
const info = {}


const llenarFormulario = () => {
   inputs.forEach(input => {
      input.addEventListener('input', (e) => {
         info[e.target.name] = e.target.value;
      })
   });
}

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const registrarUsuario = (e) => {
   e.preventDefault();

   $.post('../bitacora/php/registrar-usuario.php', info, (r) => {

      if(r == 1){
         mostrarMensaje('Todos los campos son obligatorios', 'error', btnRegistrarse);
         return;
      }

      if(r == 4){
         mostrarMensaje('El email no es valido', 'error', btnRegistrarse);
         return;
      }

      if(r == 5){
         mostrarMensaje('La contraseña debe ser mayor a 6 caracteres', 'error', btnRegistrarse);
         return;
      }

      if(r == 2){
         mostrarMensaje('El correo ya esta en uso', 'error' ,btnRegistrarse);
         return;
      }
      
      if(r == 3){
         mostrarMensaje('Registro exitoso', 'exito' ,btnRegistrarse);
         setTimeout(() => {
            window.location.reload();
         }, 1500);
         return;
      }
      
   })
}


const iniciarSesion = (e) => {
   e.preventDefault();
   
   $.post('../bitacora/php/iniciar-sesion.php', info, (r) => {

      if(r === 'Todos los campos son obligatorios'){
         mostrarMensaje('Todos los campos son obligatorios', 'error', btnIniciar);
         return;
      }
      
      if(!regex.test(info.email)){
         mostrarMensaje('El email no es valido', 'error' ,btnIniciar);
         return;
      }
      else if(info.password.length <= 6){
         mostrarMensaje('La contraseña debe tener mas de seis caracteres', 'error' ,btnIniciar);
         return;
      }
      else{
         if(r === 'Sesion iniciada'){
            window.location.href = '../bitacora/view/inicio.php';
            return;
         }
      }
      
      if(r === 'Contraseña incorrecta'){
         mostrarMensaje('Contraseña incorrecta', 'error', btnIniciar);
         return;
      }

      if(r === 'El correo no esta registrado'){
         mostrarMensaje('El correo no esta registrado', 'error', btnIniciar);
         return;
      }

   })
}

