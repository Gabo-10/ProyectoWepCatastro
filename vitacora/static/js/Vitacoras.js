const inputBusqueda = document.querySelector('.buscador input[type="search"]'); // Seleccionar el campo de entrada con el tipo "search" dentro del elemento `.buscador`
const tablaInspecciones = document.querySelector('.tabla-contenedor table'); // Seleccionar el elemento de la tabla dentro del elemento `.tabla-contenedor`
const filasInspecciones = tablaInspecciones.querySelectorAll('tbody tr');  // Obtener todas las filas de la tabla (<tr>) dentro del cuerpo de la tabla

// Añade el listener al input de búsqueda
inputBusqueda.addEventListener('input', function() {
  // Obtener el término de búsqueda actual del campo de entrada y convertirlo a minúsculas
  const terminoBusqueda = this.value.trim().toLowerCase();

  for (const fila of filasInspecciones) {
    const celdas = fila.querySelectorAll('td');
    let coincidenciaEncontrada = false;

    if (terminoBusqueda === '') { // Si el término de búsqueda está vacío, mostrar todas las filas
      fila.style.display = 'table-row';
    } else {
      for (const celda of celdas) {
        // Verifica si la celda pertenece a una columna específica
        if (celda.classList.contains('buscarcolumna')) {
          const textoCelda = celda.textContent.trim().toLowerCase();
          if (textoCelda.includes(terminoBusqueda)) {
            coincidenciaEncontrada = true;
            break;
          }
        }
      }
      fila.style.display = coincidenciaEncontrada ? 'table-row' : 'none';
    }
  }
});


// Agregamos un evento de clic a cada fila de la tabla
document.querySelector('.tabla-contenedor table tbody').addEventListener("click", function(event) {
  if (event.target.tagName === "TD") {
    // Eliminar la clase 'selected-row' de todas las filas
    for (const fila of filasInspecciones) {
      fila.classList.remove('selected-row');
    }

    // Agregar la clase 'selected-row' a la fila seleccionada
    var row = event.target.parentNode;
    row.classList.add('selected-row');

  }
  
});

document.querySelector('.btn-generar').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = '/vitacora/editarvit/'; 
});


document.querySelectorAll('.btneliminarvita').forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const url = btn.getAttribute('data-url'); // Obtener la URL de eliminación del atributo personalizado

    // Enviar una solicitud GET para verificar si se puede eliminar
    fetch(url, {
      method: 'GET',
      headers: {
        'X-CSRFToken': getCookie('csrftoken'), // Incluir el token CSRF en la solicitud
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Si no hay registros asociados, mostrar el modal de confirmación
        document.getElementById('confirmacionEliminar').style.display = 'block';

        // Función para confirmar la eliminación
        document.getElementById('confirmarEliminar').onclick = () => {
          // Enviar una solicitud POST para eliminar el registro
          fetch(url, {
            method: 'POST',
            headers: {
              'X-CSRFToken': getCookie('csrftoken'),
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              // Ocultar el modal de confirmación
              document.getElementById('confirmacionEliminar').style.display = 'none';
              // Redirigir a la página de edición
              window.location.href = '/vitacora/vitacora/';
            } else {
              // Mostrar mensaje en el modal de error
              document.getElementById('confirmacionEliminar').style.display = 'none';
              showMessageModal(data.message);
            }
          })
          .catch(error => console.error('Error al eliminar el registro:', error));
        };

        // Función para cancelar la eliminación
        document.getElementById('cancelarEliminar').onclick = (event) => {
          event.stopPropagation(); // Detener la propagación del evento al enlace padre
          document.getElementById('confirmacionEliminar').style.display = 'none';
          event.preventDefault(); // Prevenir la solicitud AJAX
        };
      } else {
        // Mostrar mensaje en el modal de error
        showMessageModal(data.message);
      }
    })
    .catch(error => console.error('Error al verificar la eliminación:', error));
  });
});

// Función para mostrar el modal de mensaje personalizado
function showMessageModal(message) {
  const mensajeModal = document.getElementById('mensajeModal');
  const mensajeTexto = document.getElementById('mensajeTexto');
  mensajeTexto.textContent = message;
  mensajeModal.style.display = 'block';

  // Función para cerrar el modal con el botón Aceptar
  document.getElementById('aceptarMensaje').onclick = () => {
    mensajeModal.style.display = 'none';
  };

  // Función para cerrar el modal con la cruz
  document.querySelector('#mensajeModal .close').onclick = () => {
    mensajeModal.style.display = 'none';
  };

  // Cerrar el modal si se hace clic fuera del contenido
  window.onclick = (event) => {
    if (event.target === mensajeModal) {
      mensajeModal.style.display = 'none';
    }
  };
}

// Función para obtener el token CSRF de las cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;


  
}