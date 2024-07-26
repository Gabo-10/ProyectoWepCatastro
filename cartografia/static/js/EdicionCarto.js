document.addEventListener("DOMContentLoaded", function() {
    const txtrevisoc = document.getElementById('revisocarto');
    const txtmotivoc = document.getElementById('motivocarto');
    const txtsoliservic = document.getElementById('soliservicarto');
    const txtterrrenoc = document.getElementById('terrenocarto');
    const txtconstrucc = document.getElementById('construccarto');
    const txtelaboracionc = document.getElementById('elaboracioncarto');
 
  
    // Agregar evento limpiarEspacioFinal al presionar una tecla en los campos 

    txtrevisoc.addEventListener("blur", limpiarEspacioFinal);
    txtmotivoc.addEventListener("blur", limpiarEspacioFinal);
    txtsoliservic.addEventListener("blur", limpiarEspacioFinal);
    txtterrrenoc.addEventListener("blur", limpiarEspacioFinal);
    txtconstrucc.addEventListener("blur", limpiarEspacioFinal);
    txtelaboracionc.addEventListener("blur", limpiarEspacioFinal);

  
  
    // Agregar evento validarCampo al presionar una tecla en los campos
   
    txtrevisoc.addEventListener("keyup", validarCampo);
    txtmotivoc.addEventListener("keyup", validarCampo);
    txtsoliservic.addEventListener("keyup", validarCampo);
    txtterrrenoc.addEventListener("keyup", validarCampo);
    txtconstrucc.addEventListener("keyup", validarCampo);
 
    
    // Agregar evento validarCampo2 al presionar una tecla en los campos

    txtelaboracionc.addEventListener("keyup", validarCampo2);

    
    // Agregar evento  al presionar una tecla en los campos 

    txtrevisoc.addEventListener("blur", convertirMayusculas);
    txtmotivoc.addEventListener("blur", convertirMayusculas);
    txtsoliservic.addEventListener("blur", convertirMayusculas);
    txtterrrenoc.addEventListener("blur", convertirMayusculas);
    txtconstrucc.addEventListener("blur", convertirMayusculas);
    txtelaboracionc.addEventListener("blur", convertirMayusculas);

  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
    txtrevisoc.addEventListener("keyup", validarCampo3);
     
  
  
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
  window.location.href = '/cartografia/editarcar/';
}

document.getElementById('elaboracioncarto').addEventListener('input', function () {
  const inputDate = this.value;
  const regex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD

  if (!regex.test(inputDate)) {
      alert('Por favor, ingrese una fecha válida en el formato YYYY-MM-DD.');
      this.value = ''; // Limpiar el campo si la fecha no es válida
  }
});