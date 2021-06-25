import { mostrarMensaje } from './util.js';

const infoRegistro = {}
const inputsBitacora = document.querySelectorAll('.controls');
const formBitacora = document.querySelector("#bitacora");
const formBitacoraEdit = document.querySelector("#bitacora-edit");
const parametros = new URLSearchParams(window.location.search);

window.onload = () => {
   llenarFormulario();
   if(parametros.get('id') === null){
      formBitacora.addEventListener('submit', guardarRegistro);
   }
   else{
      llenarInputs();
      formBitacoraEdit.addEventListener('submit', editarRegistro)
   }
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

const editarRegistro = (e) => {
   e.preventDefault();
   const id = parseInt(parametros.get('id'));
   const datos = {}
   
   inputsBitacora.forEach(i => {
      datos[i.name] = i.value;
      if(i.value === ''){
         mostrarMensaje('Todos los campos son obligatorios', 'error', formBitacoraEdit);
         return;
      }
   })

   if(!regex.test(datos.correo)){
      mostrarMensaje('El email no es valido', 'error' ,formBitacoraEdit);
      return;
   }
   datos['id'] = id;

   $.post('../php/guardar-registro.php', datos, (r) => {
      if(r === 'Registro actualizado'){
         mostrarMensaje(r, 'exito', formBitacoraEdit);
         document.location.href = '../view/inicio.php';
         return;
      }
   })
}

const llenarInputs = () => {
   const id = parseInt(parametros.get('id'));

   $.post('../php/buscar-registro.php', {id}, (r) => {
      const {asunto, atendio, correo, docente, fecha} = JSON.parse(r)[0];

      inputsBitacora[0].value = atendio;
      inputsBitacora[1].value = fecha;
      inputsBitacora[2].value = correo;
      inputsBitacora[3].value = docente;
      inputsBitacora[4].value = asunto;
   })
}

