export const mostrarMensaje = (msj, tipo , append) => {
   const p = document.createElement('div');
   p.innerText = msj;
   p.classList.add('mensaje');
   tipo === 'error' ? p.classList.add('error') : p.classList.add('exito');
   
   if(!document.querySelector('.mensaje')){
      append.appendChild(p);
   }

   setTimeout(() => {
      p.remove();
   }, 2000);
}