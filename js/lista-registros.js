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

   await editarRegistro();
   await borrarRegistro();
}

const imprimirLista = (lista) => {
   lista.forEach(e => {
      const {id, atendio, asunto, correo, docente, fecha} = e;
      const tr = document.createElement('tr');
      tr.classList.add('registro', 'tabla');
      tr.innerHTML = `
         <td class="mayus">${atendio}</td>
         <td class="mayus">${fecha}</td>
         <td>${correo}</td>
         <td class="mayus">${docente}</td>
         <td class="mayus">${asunto}</td>
         ${ document.querySelector('#agregar') ? "<td><button class='btnBorr' data-id="+id+"><i class='fas fa-trash-alt'></i></button></td>" : ''}
         ${ document.querySelector('#agregar') ? "<td><a class='btnEdit' data-id="+id+"><i class='fas fa-pencil-alt'></i></a></td>" : ''}`
      contRegistros.appendChild(tr);
   });
}

const editarRegistro = () => {
   const btnEdit = document.querySelectorAll('.btnEdit');
   //A cada boton le asigno el href con su id del registro
   btnEdit.forEach(btn => {
      const id = parseInt(btn.dataset.id);
      btn.href = `../view/editar.php?id=${id}`; 
   })
}

const borrarRegistro = () => {
   const btnBorr = document.querySelectorAll('.btnBorr');
   let id;
   btnBorr.forEach(btn => {
      btn.addEventListener('click', (e) => {
         id = e.target.dataset.id;
         if(confirm('¿Estas seguro de eliminar?')){            
            $.post('../php/borrar-registro.php', {id}, (resp) => {
               console.log(id)
               window.location.reload();
               
            })
            return;
         }
      })
   })
}