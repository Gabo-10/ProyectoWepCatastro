const inputBusqueda = document.querySelector('.buscador input[type="search"]'); // Seleccionar el campo de entrada con el tipo "search" dentro del elemento `.buscador`
const tablaBitaco = document.querySelector('.tabla-contenedor table'); // Seleccionar el elemento de la tabla dentro del elemento `.tabla-contenedor`
const filasBita = tablaBitaco.querySelectorAll('tbody tr');  // Obtener todas las filas de la tabla (<tr>) dentro del cuerpo de la tabla

// Añade el listener al input de búsqueda
inputBusqueda.addEventListener('input', function() {
  // Obtener el término de búsqueda actual del campo de entrada y convertirlo a minúsculas
  const terminoBusqueda = this.value.trim().toLowerCase();

  for (const fila of filasBita) {
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
    for (const fila of filasBita) {
      fila.classList.remove('selected-row');
    }

    // Agregar la clase 'selected-row' a la fila seleccionada
    var row = event.target.parentNode;
    row.classList.add('selected-row');

  }
  
});

document.addEventListener('DOMContentLoaded', function() {
  let id, estado; // Variables para guardar el id y estado temporalmente

  document.querySelectorAll('.btnaprobarbita').forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          id = this.closest('tr').querySelector('td:nth-child(3)').innerText.trim();
          estado = 'Aprobado';
          mostrarModalConfirmacion(`¿Estás seguro de que deseas aprobar el registro con ID ${id}?`);
      });
  });

  document.querySelectorAll('.btndenebita').forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          id = this.closest('tr').querySelector('td:nth-child(3)').innerText.trim();
          estado = 'Desaprobado';
          mostrarModalConfirmacion(`¿Estás seguro de que deseas desaprobar el registro con el ID ${id}?`);
      });
  });

  function mostrarModalConfirmacion(mensaje) {
      const modal = document.getElementById('confirmacionModal');
      const modalMensaje = document.getElementById('modalMensaje');
      const closeBtn = document.getElementsByClassName('close')[0];
      const confirmarBtn = document.getElementById('confirmarBtn');
      const cancelarBtn = document.getElementById('cancelarBtn');

      modalMensaje.textContent = mensaje;
      modal.style.display = 'block';

      closeBtn.onclick = function() {
          modal.style.display = 'none';
          location.reload(); // Recargar la página al cerrar
      };

      cancelarBtn.onclick = function() {
          modal.style.display = 'none';
          location.reload(); // Recargar la página al cerrar
      };

      confirmarBtn.onclick = function() {
          modal.style.display = 'none';
          actualizarEstado(id, estado);
      };

      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = 'none';
              location.reload(); // Recargar la página al hacer clic fuera del modal
          }
      };
  }

  function mostrarModalMensaje(mensaje) {
      const modal = document.getElementById('mensajeModal');
      const mensajeTexto = document.getElementById('mensajeTexto');
      const closeBtn = document.getElementsByClassName('close')[1];
      const cerrarBtn = document.getElementById('cerrarMensaje');

      mensajeTexto.textContent = mensaje;
      modal.style.display = 'block';

      closeBtn.onclick = function() {
          modal.style.display = 'none';
          location.reload(); // Recargar la página al cerrar
      };

      cerrarBtn.onclick = function() {
          modal.style.display = 'none';
          location.reload(); // Recargar la página al cerrar
      };

      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = 'none';
              location.reload(); // Recargar la página al hacer clic fuera del modal
          }
      };
  }

  function actualizarEstado(id, estado) {
      const baseUrl = window.location.origin; // Obtener la URL base del servidor
      fetch(`${baseUrl}/administracion/actualizar_estado_vitacora/${id}/${estado}/`, {
          method: 'POST',
          headers: {
              'X-CSRFToken': getCookie('csrftoken'),
              'Content-Type': 'application/json'
          },
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              mostrarModalMensaje(`Estado actualizado a ${data.estado}`);
          } else {
              mostrarModalMensaje('Error al actualizar el estado.');
          }
      });
  }

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
});
