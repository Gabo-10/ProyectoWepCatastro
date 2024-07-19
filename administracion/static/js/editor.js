
const inputBusqueda = document.querySelector('.buscador input[type="search"]'); // Seleccionar el campo de entrada con el tipo "search" dentro del elemento `.buscador`
const tablaUsuarios = document.querySelector('.tabla-contenedor table'); // Seleccionar el elemento de la tabla dentro del elemento `.tabla-contenedor`
const filasUsuarios = tablaUsuarios.querySelectorAll('tbody tr');  // Obtener todas las filas de la tabla (<tr>) dentro del cuerpo de la tabla

// Añade el listener al input de búsqueda
inputBusqueda.addEventListener('input', function() {
  // Obtener el término de búsqueda actual del campo de entrada y convertirlo a minúsculas
  const terminoBusqueda = this.value.trim().toLowerCase();

  for (const fila of filasUsuarios) {
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
    for (const fila of filasUsuarios) {
      fila.classList.remove('selected-row');
    }

    // Agregar la clase 'selected-row' a la fila seleccionada
    var row = event.target.parentNode;
    row.classList.add('selected-row');

  }
  
});

// Mostrar el modal de confirmación
document.querySelectorAll('.btneliminaredi').forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const url = btn.getAttribute('data-url'); // Obtener la URL de eliminación del atributo personalizado
    document.getElementById('confirmacionEliminar').style.display = 'block';

    // Función para confirmar la eliminación de los usuarios 
    document.getElementById('confirmarEliminar').onclick = () => {
      // Enviar una solicitud POST al servidor para eliminar el registro
      fetch(url, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCookie('csrftoken'), // Asegúrate de incluir el token CSRF en la solicitud
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // No necesitas enviar ningún dato en el cuerpo de la solicitud POST
      })
      .then(response => {
        if (response.ok) {
          // Redirigir a la página de edición después de eliminar el usuario
          window.location.href = '/direccion/editar/';
        } else {
          // Manejar errores de eliminación
          console.error('Error al eliminar el usuario');
        }
      })
      .catch(error => {
        console.error('Error al eliminar el usuario:', error);
      });
    };

    // Función para cancelar la eliminación
    document.getElementById('cancelarEliminar').onclick = (event) => {
      event.stopPropagation(); // Detener la propagación del evento al enlace padre
      document.getElementById('confirmacionEliminar').style.display = 'none';
      event.preventDefault(); // Prevenir la solicitud AJAX
    };
  });
});

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

