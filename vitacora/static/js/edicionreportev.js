document.addEventListener("DOMContentLoaded", function() {
    const idsvi = document.getElementById('txtidre');
    const foliosvi = document.getElementById('txtfoliore');
    const nombressvi = document.getElementById('txtnombrere');
    const carpetasvi = document.getElementById('txtcarpetare');
    const areasvi = document.getElementById('txtareare');
    const foliosmasvi = document.getElementById('txtfoliomare');
    const verisvi = document.getElementById('txtverire');
    const tiposvi = document.getElementById('txttipore');
    const clavesvi = document.getElementById('txtclavere');
    const costosvi = document.getElementById('txtcostore');
    const obssvi = document.getElementById('txtobsre');
    
  
    // Agregar evento limpiarEspacioFinal al presionar una tecla en los campos 
    idsvi.addEventListener("blur", limpiarEspacioFinal);
    foliosvi.addEventListener("blur", limpiarEspacioFinal);
    nombressvi.addEventListener("blur", limpiarEspacioFinal);
    carpetasvi.addEventListener("blur", limpiarEspacioFinal);
    areasvi.addEventListener("blur", limpiarEspacioFinal);
    foliosmasvi.addEventListener("blur", limpiarEspacioFinal);
    verisvi.addEventListener("blur", limpiarEspacioFinal);
    tiposvi.addEventListener("blur", limpiarEspacioFinal);
    clavesvi.addEventListener("blur", limpiarEspacioFinal);
    costosvi.addEventListener("blur", limpiarEspacioFinal);
    obssvi.addEventListener("blur", limpiarEspacioFinal);
    
  
    // Agregar evento validarCampo al presionar una tecla en los campos
    idsvi.addEventListener("keyup", validarCampo);
    foliosvi.addEventListener("keyup", validarCampo);
    clavesvi.addEventListener("keyup", validarCampo);
    costosvi.addEventListener("keyup", validarCampo);
    areasvi.addEventListener("keyup", validarCampo);
    
    // Agregar evento validarCampo2 al presionar una tecla en los campos
    nombressvi.addEventListener("keyup", validarCampo2);
    verisvi.addEventListener("keyup", validarCampo2);
    obssvi.addEventListener("keyup", validarCampo2);

    // Agregar evento validarCampo3 al presionar una tecla en los campos
    carpetasvi.addEventListener("keyup", validarCampo3);
    foliosmasvi.addEventListener("keyup", validarCampo3);
    tiposvi.addEventListener("keyup", validarCampo3);
 
  
    
    // Agregar evento  al presionar una tecla en los campos 
    nombressvi.addEventListener("blur", convertirMayusculas);
    carpetasvi.addEventListener("blur", convertirMayusculas);
    areasvi.addEventListener("blur", convertirMayusculas);
    foliosmasvi.addEventListener("blur", convertirMayusculas);
    verisvi.addEventListener("blur", convertirMayusculas);
    tiposvi.addEventListener("blur", convertirMayusculas);
    clavesvi.addEventListener("blur", convertirMayusculas);
    obssvi.addEventListener("blur", convertirMayusculas);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
    nombressvi.addEventListener("keyup", validarCampo4);

  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
  
    costosvi.addEventListener("keyup", validarCampo5);
  
  
  
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
    // Limitar la longitud máxima del valor a 50 caracteres
    if (valor.length > 50) {
      valor = valor.slice(0, 50);
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



  function validarCampo4(event) {
    const input = event.target;
    let valor = input.value;
    // Verificar si el valor contiene caracteres no permitidos (solo letras y espacios permitidos)
    valor = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    // Actualizar el valor del campo
    input.value = valor;
  }
  
  function validarCampo5(event) {
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

function goToVitacoras() {
  window.location.href = '/vitacora/editarvit/';
}


document.getElementById('txtfechare').addEventListener('input', function () {
  const inputDate = this.value;
  const regex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD

  if (!regex.test(inputDate)) {
      alert('Por favor, ingrese una fecha válida en el formato YYYY-MM-DD.');
      this.value = ''; // Limpiar el campo si la fecha no es válida
  }
});


document.getElementById('txtdiare').addEventListener('input', function () {
  const inputDate = this.value;
  const regex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD

  if (!regex.test(inputDate)) {
      alert('Por favor, ingrese una fecha válida en el formato YYYY-MM-DD.');
      this.value = ''; // Limpiar el campo si la fecha no es válida
  }
});


