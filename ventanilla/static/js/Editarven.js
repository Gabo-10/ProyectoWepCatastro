document.addEventListener("DOMContentLoaded", function() {
    const tetprog = document.getElementById("teteprog");
    const tetclavera = document.getElementById("tetclavera");
    const tetnombre = document.getElementById("tetnombre");
    const tetcurp = document.getElementById("tetcurp");
    const tetmanzana = document.getElementById("tetmanzana");
    const tetlote = document.getElementById("tetlote");
    const tetcalle = document.getElementById("tetcalle");
    const tetbarrio = document.getElementById("tetbarrio");
    const tetentidad = document.getElementById("tetentidad"); 
    const tetmunicipio = document.getElementById("tetmunicipio");
    const tetfecha = document.getElementById('tetfecha');
    const tetfolio = document.getElementById('tetfolio');
    const tetrecibo = document.getElementById('tetrecibo');
    const tetimporte = document.getElementById('tetimporte');
    const tetreviso = document.getElementById('tetreviso');
    const tetmotivo = document.getElementById('tetmotivo');
    const tetsoliservi = document.getElementById('tetsoliservi');
    const tetterrreno = document.getElementById('tetterrreno');
    const tetconstruc = document.getElementById('tetconstruc');
    const tetelaboracion = document.getElementById('tetelaboracion');
    const tetatencion = document.getElementById('tetatencion');
    const tethora = document.getElementById('tethora');
    const tetpago = document.getElementById('tetpago');
    const tetextras = document.getElementById('tetextras');
    const tettramite = document.getElementById("tettramite");

 

  
    // Agregar evento limpiarEspacioFinal al presionar una tecla en los campos 
    tetprog.addEventListener("blur", limpiarEspacioFinal);
    tetclavera .addEventListener("blur", limpiarEspacioFinal);
    tetnombre.addEventListener("blur", limpiarEspacioFinal);
    tetcurp.addEventListener("blur", limpiarEspacioFinal);
    tetmanzana.addEventListener("blur", limpiarEspacioFinal);
    tetlote.addEventListener("blur", limpiarEspacioFinal);
    tetcalle.addEventListener("blur", limpiarEspacioFinal);
    tetbarrio.addEventListener("blur", limpiarEspacioFinal);
    tetentidad.addEventListener("blur", limpiarEspacioFinal);
    tetmunicipio.addEventListener("blur", limpiarEspacioFinal);
    tetfecha.addEventListener("blur", limpiarEspacioFinal);
    tetfolio.addEventListener("blur", limpiarEspacioFinal);
    tetrecibo.addEventListener("blur", limpiarEspacioFinal);
    tetimporte.addEventListener("blur", limpiarEspacioFinal);
    tetreviso.addEventListener("blur", limpiarEspacioFinal);
    tetmotivo.addEventListener("blur", limpiarEspacioFinal);
    tetsoliservi.addEventListener("blur", limpiarEspacioFinal);
    tetterrreno.addEventListener("blur", limpiarEspacioFinal);
    tetconstruc.addEventListener("blur", limpiarEspacioFinal);
    tetelaboracion.addEventListener("blur", limpiarEspacioFinal);
    tetatencion.addEventListener("blur", limpiarEspacioFinal);
    tethora.addEventListener("blur", limpiarEspacioFinal);
    tetpago.addEventListener("blur", limpiarEspacioFinal);
    tetextras.addEventListener("blur", limpiarEspacioFinal);
    tettramite.addEventListener("blur", limpiarEspacioFinal);
  
  
    // Agregar evento validarCampo al presionar una tecla en los campos
    tetclavera.addEventListener("keyup", validarCampo);
    tetmanzana.addEventListener("keyup", validarCampo);
    tetlote.addEventListener("keyup", validarCampo);
    tetcalle.addEventListener("keyup", validarCampo);
    tetbarrio.addEventListener("keyup", validarCampo);
    tetentidad.addEventListener("keyup", validarCampo);
    tetfolio.addEventListener("keyup", validarCampo);
    tetrecibo.addEventListener("keyup", validarCampo);
    tetmotivo.addEventListener("keyup", validarCampo);
    tetsoliservi.addEventListener("keyup", validarCampo);
    tetterrreno.addEventListener("keyup", validarCampo);
    tetconstruc.addEventListener("keyup", validarCampo);
    tetextras.addEventListener("keyup", validarCampo);
    
    // Agregar evento validarCampo2 al presionar una tecla en los campos
    tetprog.addEventListener("keyup", validarCampo2);
    tetnombre.addEventListener("keyup", validarCampo2);
    tetcurp.addEventListener("keyup", validarCampo2);
    tetmunicipio.addEventListener("keyup", validarCampo2);
    tetfecha.addEventListener("keyup", validarCampo2);
    tetimporte.addEventListener("keyup", validarCampo2);
    tetelaboracion.addEventListener("keyup", validarCampo2);
    tetatencion.addEventListener("keyup", validarCampo2);
    tethora.addEventListener("keyup", validarCampo2);
    tetpago.addEventListener("keyup", validarCampo2);
    tetreviso.addEventListener("keyup", validarCampo2);
    
    // Agregar evento  al presionar una tecla en los campos 
    tetprog.addEventListener("blur", convertirMayusculas);
    tetclavera .addEventListener("blur", convertirMayusculas);
    tetnombre.addEventListener("blur", convertirMayusculas);
    tetcurp.addEventListener("blur", convertirMayusculas);
    tetmanzana.addEventListener("blur", convertirMayusculas);
    tetlote.addEventListener("blur", convertirMayusculas);
    tetcalle.addEventListener("blur", convertirMayusculas);
    tetbarrio.addEventListener("blur", convertirMayusculas);
    tetentidad.addEventListener("blur", convertirMayusculas);
    tetmunicipio.addEventListener("blur", convertirMayusculas);
    tetfecha.addEventListener("blur", convertirMayusculas);
    tetfolio.addEventListener("blur", convertirMayusculas);
    tetrecibo.addEventListener("blur", convertirMayusculas);
    tetimporte.addEventListener("blur", convertirMayusculas);
    tetreviso.addEventListener("blur", convertirMayusculas);
    tetmotivo.addEventListener("blur", convertirMayusculas);
    tetsoliservi.addEventListener("blur", convertirMayusculas);
    tetterrreno.addEventListener("blur", convertirMayusculas);
    tetconstruc.addEventListener("blur", convertirMayusculas);
    tetelaboracion.addEventListener("blur", convertirMayusculas);
    tetatencion.addEventListener("blur", convertirMayusculas);
    tethora.addEventListener("blur", convertirMayusculas);
    tetpago.addEventListener("blur", convertirMayusculas);
    tetextras.addEventListener("blur", convertirMayusculas);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
    tetnombre.addEventListener("keyup", validarCampo3);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
  
    tetfecha.addEventListener("keyup", validarCampo4);
  
  
  
    // Función para limpiar espacio final al cambiar de campo
    function limpiarEspacioFinal(event) {
    const input = event.target;
    let valor = input.value;
    valor = valor.trim();
    input.value = valor;
  }
  
    // Función para validar el contenido del campo y limitar la cantidad máxima de caracteres
    function validarCampo(event) {
    const input = event.target;
    let valor = input.value;
    // Limitar la longitud máxima del valor a 150 caracteres
    if (valor.length > 25) {
      valor = valor.slice(0, 25);
    }
    // Eliminar espacio al final si no hay más texto después de un espacio
    if (valor.endsWith(' ')) {
      valor = valor.trim() + ' ';
    }
    // Eliminar espacio al principio
    if (valor.startsWith(' ')) {
      valor = valor.trimStart();
    }
    // Permitir solo un espacio entre nombres
    valor = valor.replace(/\s{2,}/g, ' ');
    // Actualizar el valor del campo
    input.value = valor;
  }
  
  
  function validarCampo2(event) {
    const input = event.target;
    let valor = input.value;
    // Limitar la longitud máxima del valor a 50 caracteres
    if (valor.length > 150) {
      valor = valor.slice(0, 150);
    }
    // Eliminar espacio al final si no hay más texto después de un espacio
    if (valor.endsWith(' ')) {
      valor = valor.trim() + ' ';
    }
    // Eliminar espacio al principio
    if (valor.startsWith(' ')) {
      valor = valor.trimStart();
    }
    // Permitir solo un espacio entre nombrs
    valor = valor.replace(/\s{2,}/g, ' ');
    input.value = valor;
  }
  
  function validarCampo3(event) {
    const input = event.target;
    let valor = input.value;
    // Verificar si el valor contiene caracteres no permitidos (solo letras y espacios permitidos)
    valor = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    // Actualizar el valor del campo
    input.value = valor;
  }
  
  function validarCampo4(event) {
    const input = event.target;
    let valor = input.value;
    // Verificar si el valor contiene caracteres no permitidos (solo números y símbolos permitidos)
    valor = valor.replace(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    // Actualizar el valor del campo
    input.value = valor;
  }
  function convertirMayusculas(event) {
    const input = event.target;
    let valor = input.value;
    // Convertir el valor a mayúsculas
    valor = valor.toUpperCase();
    // Actualizar el valor del campo
    input.value = valor;
  }
});
  function goToEditor() {
    window.location.href = '/ventanilla/editarven/';
  }


