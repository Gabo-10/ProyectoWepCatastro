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

