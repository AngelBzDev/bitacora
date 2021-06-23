window.onload = () => {
   mostrarLista();
}

const contRegistros = document.querySelector('#registros');

const mostrarLista = async () => {
   try{
      const resp = await fetch('../php/mostrar-registros.php');
      const resul = await resp.json();
      await imprimirLista(resul);
   }
   catch(e){
      console.log(e);
   }
   
}

const imprimirLista = (lista) => {
   lista.forEach(e => {
      const {atendio, asunto, correo, docente, fecha} = e;
      const tr = document.createElement('tr');
      tr.innerHTML = `
         <td class="mayus">${atendio}</td>
         <td class="mayus">${fecha}</td>
         <td>${correo}</td>
         <td class="mayus">${docente}</td>
         <td class="mayus">${asunto}</td>`
      contRegistros.appendChild(tr);
   });
}