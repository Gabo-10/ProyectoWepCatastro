document.addEventListener("DOMContentLoaded", function() {
    const txtprogv = document.getElementById('progvita');
    const txtclaverav = document.getElementById('claveravita');
    const txtnombrev = document.getElementById('nombrevita');
    const txtcurpv = document.getElementById('curpvita');
    const txtmanzanav = document.getElementById('manzanavita');
    const txtlotev = document.getElementById('lotevita');
    const txtcallev = document.getElementById('callevita');
    const txtbarriov = document.getElementById('barriovita');
    const txtentidadv = document.getElementById('entidadvita'); 
    const txtmunicipiov = document.getElementById('municipiovita');
    const txtcertv = document.getElementById('certvita');
    const txtplanomzv = document.getElementById('planomzvita');
    const txttopov = document.getElementById('topovita');
    const txtlinderosv = document.getElementById('linderosvita');
    const txtidentv = document.getElementById('identvita');
    const txtccvcv = document.getElementById('ccvcvita');
    const txtfechav = document.getElementById('fechavita');
    const txtfoliov = document.getElementById('foliovita');
    const txtrecibov = document.getElementById('recibovita');
    const txtimportev = document.getElementById('importevita');
    const txtrevisov = document.getElementById('revisovita');
    const txtmotivov = document.getElementById('motivovita');
    const txtsoliserviv = document.getElementById('soliservivita');
    const txtterrrenov = document.getElementById('terrenovita');
    const txtconstrucv = document.getElementById('construcvita');
    const txtelaboracionv = document.getElementById('elaboracionvita');
    const txtatencionv = document.getElementById('atencionvita');
    const txthorav = document.getElementById('horavita');
    const txtpagov = document.getElementById('pagovita');
    const txtextrasv = document.getElementById('extrasvita');
    
  
    // Agregar evento limpiarEspacioFinal al presionar una tecla en los campos 
    txtprogv.addEventListener("blur", limpiarEspacioFinal);
    txtclaverav .addEventListener("blur", limpiarEspacioFinal);
    txtnombrev.addEventListener("blur", limpiarEspacioFinal);
    txtcurpv.addEventListener("blur", limpiarEspacioFinal);
    txtmanzanav.addEventListener("blur", limpiarEspacioFinal);
    txtlotev.addEventListener("blur", limpiarEspacioFinal);
    txtcallev.addEventListener("blur", limpiarEspacioFinal);
    txtbarriov.addEventListener("blur", limpiarEspacioFinal);
    txtentidadv.addEventListener("blur", limpiarEspacioFinal);
    txtmunicipiov.addEventListener("blur", limpiarEspacioFinal);
    txtcertv.addEventListener("blur", limpiarEspacioFinal);
    txtplanomzv.addEventListener("blur", limpiarEspacioFinal);
    txttopov.addEventListener("blur", limpiarEspacioFinal);
    txtlinderosv.addEventListener("blur", limpiarEspacioFinal);
    txtidentv.addEventListener("blur", limpiarEspacioFinal);
    txtccvcv.addEventListener("blur", limpiarEspacioFinal);
    txtfechav.addEventListener("blur", limpiarEspacioFinal);
    txtfoliov.addEventListener("blur", limpiarEspacioFinal);
    txtrecibov.addEventListener("blur", limpiarEspacioFinal);
    txtimportev.addEventListener("blur", limpiarEspacioFinal);
    txtrevisov.addEventListener("blur", limpiarEspacioFinal);
    txtmotivov.addEventListener("blur", limpiarEspacioFinal);
    txtsoliserviv.addEventListener("blur", limpiarEspacioFinal);
    txtterrrenov.addEventListener("blur", limpiarEspacioFinal);
    txtconstrucv.addEventListener("blur", limpiarEspacioFinal);
    txtelaboracionv.addEventListener("blur", limpiarEspacioFinal);
    txtatencionv.addEventListener("blur", limpiarEspacioFinal);
    txthorav.addEventListener("blur", limpiarEspacioFinal);
    txtpagov.addEventListener("blur", limpiarEspacioFinal);
    txtextrasv.addEventListener("blur", limpiarEspacioFinal);
  
  
    // Agregar evento validarCampo al presionar una tecla en los campos
    txtclaverav.addEventListener("keyup", validarCampo);
    txtmanzanav.addEventListener("keyup", validarCampo);
    txtlotev.addEventListener("keyup", validarCampo);
    txtcallev.addEventListener("keyup", validarCampo);
    txtbarriov.addEventListener("keyup", validarCampo);
    txtentidadv.addEventListener("keyup", validarCampo);
    txtcertv.addEventListener("keyup", validarCampo);
    txtplanomzv.addEventListener("keyup", validarCampo);
    txttopov.addEventListener("keyup", validarCampo);
    txtlinderosv.addEventListener("keyup", validarCampo);
    txtidentv.addEventListener("keyup", validarCampo);
    txtccvcv.addEventListener("keyup", validarCampo);
    txtfoliov.addEventListener("keyup", validarCampo);
    txtrecibov.addEventListener("keyup", validarCampo);
    txtrevisov.addEventListener("keyup", validarCampo);
    txtmotivov.addEventListener("keyup", validarCampo);
    txtsoliserviv.addEventListener("keyup", validarCampo);
    txtterrrenov.addEventListener("keyup", validarCampo);
    txtconstrucv.addEventListener("keyup", validarCampo);
    txtextrasv.addEventListener("keyup", validarCampo);
    
    // Agregar evento validarCampo2 al presionar una tecla en los campos
    txtprogv.addEventListener("keyup", validarCampo2);
    txtnombrev.addEventListener("keyup", validarCampo2);
    txtcurpv.addEventListener("keyup", validarCampo2);
    txtmunicipiov.addEventListener("keyup", validarCampo2);
    txtfechav.addEventListener("keyup", validarCampo2);
    txtimportev.addEventListener("keyup", validarCampo2);
    txtelaboracionv.addEventListener("keyup", validarCampo2);
    txtatencionv.addEventListener("keyup", validarCampo2);
    txthorav.addEventListener("keyup", validarCampo2);
    txtpagov.addEventListener("keyup", validarCampo2);
  
    
    // Agregar evento  al presionar una tecla en los campos 
    txtprogv.addEventListener("blur", convertirMayusculas);
    txtclaverav .addEventListener("blur", convertirMayusculas);
    txtnombrev.addEventListener("blur", convertirMayusculas);
    txtcurpv.addEventListener("blur", convertirMayusculas);
    txtmanzanav.addEventListener("blur", convertirMayusculas);
    txtlotev.addEventListener("blur", convertirMayusculas);
    txtcallev.addEventListener("blur", convertirMayusculas);
    txtbarriov.addEventListener("blur", convertirMayusculas);
    txtentidadv.addEventListener("blur", convertirMayusculas);
    txtmunicipiov.addEventListener("blur", convertirMayusculas);
    txtcertv.addEventListener("blur", convertirMayusculas);
    txtplanomzv.addEventListener("blur", convertirMayusculas);
    txttopov.addEventListener("blur", convertirMayusculas);
    txtlinderosv.addEventListener("blur", convertirMayusculas);
    txtidentv.addEventListener("blur", convertirMayusculas);
    txtccvcv.addEventListener("blur", convertirMayusculas);
    txtfechav.addEventListener("blur", convertirMayusculas);
    txtfoliov.addEventListener("blur", convertirMayusculas);
    txtrecibov.addEventListener("blur", convertirMayusculas);
    txtimportev.addEventListener("blur", convertirMayusculas);
    txtrevisov.addEventListener("blur", convertirMayusculas);
    txtmotivov.addEventListener("blur", convertirMayusculas);
    txtsoliserviv.addEventListener("blur", convertirMayusculas);
    txtterrrenov.addEventListener("blur", convertirMayusculas);
    txtconstrucv.addEventListener("blur", convertirMayusculas);
    txtelaboracionv.addEventListener("blur", convertirMayusculas);
    txtatencionv.addEventListener("blur", convertirMayusculas);
    txthorav.addEventListener("blur", convertirMayusculas);
    txtpagov.addEventListener("blur", convertirMayusculas);
    txtextrasv.addEventListener("blur", convertirMayusculas);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
    txtnombrev.addEventListener("keyup", validarCampo3);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
  
    txtfechav.addEventListener("keyup", validarCampo4);
  
  
  
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
  window.location.href = '/vitacora/editarvit/';
}