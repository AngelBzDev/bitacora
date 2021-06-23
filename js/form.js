import { mostrarMensaje } from './util.js';

const infoRegistro = {}
const inputsBitacora = document.querySelectorAll('.controls');
const formBitacora = document.querySelector("#bitacora");

window.onload = () => {
   llenarFormulario();
   formBitacora.addEventListener('submit', guardarRegistro);
}

const llenarFormulario = () => {
   inputsBitacora.forEach(input => {
      input.addEventListener('input', e => {
         infoRegistro[e.target.name] = e.target.value;
      })
   })
}

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const guardarRegistro = (e) => {
   e.preventDefault();
   
   inputsBitacora.forEach(i => {
      if(i.value === ''){
         mostrarMensaje('Todos los campos son obligatorios', 'error', formBitacora);
         return;
      }
   })

   if(!regex.test(infoRegistro.correo)){
      mostrarMensaje('El email no es valido', 'error' ,formBitacora);
      return;
   }

   $.post('../php/guardar-registro.php', infoRegistro, (r) => {
      if(r === 'Registro guardado'){
         mostrarMensaje(r, 'exito', formBitacora);
         formBitacora.reset()
      }
   })
}