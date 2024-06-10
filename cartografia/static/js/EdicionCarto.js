document.addEventListener("DOMContentLoaded", function() {
    const txtprogc = document.getElementById('progcarto');
    const txtclaverac = document.getElementById('claveracarto');
    const txtnombrec = document.getElementById('nombrecarto');
    const txtcurpc = document.getElementById('curpcarto');
    const txtmanzanac = document.getElementById('manzanacarto');
    const txtlotec = document.getElementById('lotecarto');
    const txtcallec = document.getElementById('callecarto');
    const txtbarrioc = document.getElementById('barriocarto');
    const txtentidadc = document.getElementById('entidadcarto'); 
    const txtmunicipioc = document.getElementById('municipiocarto');
    const txtcertc = document.getElementById('certcarto');
    const txtplanomzc = document.getElementById('planomzcarto');
    const txttopoc = document.getElementById('topocarto');
    const txtlinderosc = document.getElementById('linderoscarto');
    const txtidentc = document.getElementById('identcarto');
    const txtccvcc = document.getElementById('ccvccarto');
    const txtfechac = document.getElementById('fechacarto');
    const txtfolioc = document.getElementById('foliocarto');
    const txtreciboc = document.getElementById('recibocarto');
    const txtimportec = document.getElementById('importecarto');
    const txtrevisoc = document.getElementById('revisocarto');
    const txtmotivoc = document.getElementById('motivocarto');
    const txtsoliservic = document.getElementById('soliservicarto');
    const txtterrrenoc = document.getElementById('terrenocarto');
    const txtconstrucc = document.getElementById('construccarto');
    const txtelaboracionc = document.getElementById('elaboracioncarto');
    const txtatencionc = document.getElementById('atencioncarto');
    const txthorac = document.getElementById('horacarto');
    const txtpagoc = document.getElementById('pagocarto');
    const txtextrasc = document.getElementById('extrascarto');
    
  
    // Agregar evento limpiarEspacioFinal al presionar una tecla en los campos 
    txtprogc.addEventListener("blur", limpiarEspacioFinal);
    txtclaverac .addEventListener("blur", limpiarEspacioFinal);
    txtnombrec.addEventListener("blur", limpiarEspacioFinal);
    txtcurpc.addEventListener("blur", limpiarEspacioFinal);
    txtmanzanac.addEventListener("blur", limpiarEspacioFinal);
    txtlotec.addEventListener("blur", limpiarEspacioFinal);
    txtcallec.addEventListener("blur", limpiarEspacioFinal);
    txtbarrioc.addEventListener("blur", limpiarEspacioFinal);
    txtentidadc.addEventListener("blur", limpiarEspacioFinal);
    txtmunicipioc.addEventListener("blur", limpiarEspacioFinal);
    txtcertc.addEventListener("blur", limpiarEspacioFinal);
    txtplanomzc.addEventListener("blur", limpiarEspacioFinal);
    txttopoc.addEventListener("blur", limpiarEspacioFinal);
    txtlinderosc.addEventListener("blur", limpiarEspacioFinal);
    txtidentc.addEventListener("blur", limpiarEspacioFinal);
    txtccvcc.addEventListener("blur", limpiarEspacioFinal);
    txtfechac.addEventListener("blur", limpiarEspacioFinal);
    txtfolioc.addEventListener("blur", limpiarEspacioFinal);
    txtreciboc.addEventListener("blur", limpiarEspacioFinal);
    txtimportec.addEventListener("blur", limpiarEspacioFinal);
    txtrevisoc.addEventListener("blur", limpiarEspacioFinal);
    txtmotivoc.addEventListener("blur", limpiarEspacioFinal);
    txtsoliservic.addEventListener("blur", limpiarEspacioFinal);
    txtterrrenoc.addEventListener("blur", limpiarEspacioFinal);
    txtconstrucc.addEventListener("blur", limpiarEspacioFinal);
    txtelaboracionc.addEventListener("blur", limpiarEspacioFinal);
    txtatencionc.addEventListener("blur", limpiarEspacioFinal);
    txthorac.addEventListener("blur", limpiarEspacioFinal);
    txtpagoc.addEventListener("blur", limpiarEspacioFinal);
    txtextrasc.addEventListener("blur", limpiarEspacioFinal);
  
  
    // Agregar evento validarCampo al presionar una tecla en los campos
    txtclaverac.addEventListener("keyup", validarCampo);
    txtmanzanac.addEventListener("keyup", validarCampo);
    txtlotec.addEventListener("keyup", validarCampo);
    txtcallec.addEventListener("keyup", validarCampo);
    txtbarrioc.addEventListener("keyup", validarCampo);
    txtentidadc.addEventListener("keyup", validarCampo);
    txtcertc.addEventListener("keyup", validarCampo);
    txtplanomzc.addEventListener("keyup", validarCampo);
    txttopoc.addEventListener("keyup", validarCampo);
    txtlinderosc.addEventListener("keyup", validarCampo);
    txtidentc.addEventListener("keyup", validarCampo);
    txtccvcc.addEventListener("keyup", validarCampo);
    txtfolioc.addEventListener("keyup", validarCampo);
    txtreciboc.addEventListener("keyup", validarCampo);
    txtrevisoc.addEventListener("keyup", validarCampo);
    txtmotivoc.addEventListener("keyup", validarCampo);
    txtsoliservic.addEventListener("keyup", validarCampo);
    txtterrrenoc.addEventListener("keyup", validarCampo);
    txtconstrucc.addEventListener("keyup", validarCampo);
    txtextrasc.addEventListener("keyup", validarCampo);
    
    // Agregar evento validarCampo2 al presionar una tecla en los campos
    txtprogc.addEventListener("keyup", validarCampo2);
    txtnombrec.addEventListener("keyup", validarCampo2);
    txtcurpc.addEventListener("keyup", validarCampo2);
    txtmunicipioc.addEventListener("keyup", validarCampo2);
    txtfechac.addEventListener("keyup", validarCampo2);
    txtimportec.addEventListener("keyup", validarCampo2);
    txtelaboracionc.addEventListener("keyup", validarCampo2);
    txtatencionc.addEventListener("keyup", validarCampo2);
    txthorac.addEventListener("keyup", validarCampo2);
    txtpagoc.addEventListener("keyup", validarCampo2);
  
    
    // Agregar evento  al presionar una tecla en los campos 
    txtprogc.addEventListener("blur", convertirMayusculas);
    txtclaverac .addEventListener("blur", convertirMayusculas);
    txtnombrec.addEventListener("blur", convertirMayusculas);
    txtcurpc.addEventListener("blur", convertirMayusculas);
    txtmanzanac.addEventListener("blur", convertirMayusculas);
    txtlotec.addEventListener("blur", convertirMayusculas);
    txtcallec.addEventListener("blur", convertirMayusculas);
    txtbarrioc.addEventListener("blur", convertirMayusculas);
    txtentidadc.addEventListener("blur", convertirMayusculas);
    txtmunicipioc.addEventListener("blur", convertirMayusculas);
    txtcertc.addEventListener("blur", convertirMayusculas);
    txtplanomzc.addEventListener("blur", convertirMayusculas);
    txttopoc.addEventListener("blur", convertirMayusculas);
    txtlinderosc.addEventListener("blur", convertirMayusculas);
    txtidentc.addEventListener("blur", convertirMayusculas);
    txtccvcc.addEventListener("blur", convertirMayusculas);
    txtfechac.addEventListener("blur", convertirMayusculas);
    txtfolioc.addEventListener("blur", convertirMayusculas);
    txtreciboc.addEventListener("blur", convertirMayusculas);
    txtimportec.addEventListener("blur", convertirMayusculas);
    txtrevisoc.addEventListener("blur", convertirMayusculas);
    txtmotivoc.addEventListener("blur", convertirMayusculas);
    txtsoliservic.addEventListener("blur", convertirMayusculas);
    txtterrrenoc.addEventListener("blur", convertirMayusculas);
    txtconstrucc.addEventListener("blur", convertirMayusculas);
    txtelaboracionc.addEventListener("blur", convertirMayusculas);
    txtatencionc.addEventListener("blur", convertirMayusculas);
    txthorac.addEventListener("blur", convertirMayusculas);
    txtpagoc.addEventListener("blur", convertirMayusculas);
    txtextrasc.addEventListener("blur", convertirMayusculas);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
    txtnombrec.addEventListener("keyup", validarCampo3);
  
    // Agregar evento validarCampo3 al presionar una tecla en los campos
  
    txtfechac.addEventListener("keyup", validarCampo4);
  
  
  
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
  window.location.href = '/cartografia/editarcar/';
}
