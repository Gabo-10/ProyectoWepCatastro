document.addEventListener("DOMContentLoaded", function() {
  const txtprog = document.getElementById("txtprog");
  const txtclavera = document.getElementById("txtclavera");
  const txtnombre = document.getElementById("txtnombre");
  const txtcurp = document.getElementById("txtcurp");
  const txtmanzana = document.getElementById("txtmanzana");
  const txtlote = document.getElementById("txtlote");
  const txtcalle = document.getElementById("txtcalle");
  const txtbarrio = document.getElementById("txtbarrio");
  const txtentidad = document.getElementById("txtentidad"); 
  const txtmunicipio = document.getElementById("txtmunicipio");
  const txtfecha = document.getElementById('txtfecha');
  const txtfolio = document.getElementById('txtfolio');
  const txtrecibo = document.getElementById('txtrecibo');
  const txtimporte = document.getElementById('txtimporte');
  const txtatencion = document.getElementById('txtatencion');
  const txthora = document.getElementById('txthora');
  const txtpago = document.getElementById('txtpago');
  const txtextras = document.getElementById('txtextras');
  const selectTramite = document.getElementById('tramite');
  const btnLimpiarven = document.getElementById("limpiarven");

  // Agregar evento limpiarEspacioFinal al presionar una tecla en los campos 
  txtprog.addEventListener("blur", limpiarEspacioFinal);
  txtnombre.addEventListener("blur", limpiarEspacioFinal);
  txtcurp.addEventListener("blur", limpiarEspacioFinal);
  txtmanzana.addEventListener("blur", limpiarEspacioFinal);
  txtlote.addEventListener("blur", limpiarEspacioFinal);
  txtcalle.addEventListener("blur", limpiarEspacioFinal);
  txtbarrio.addEventListener("blur", limpiarEspacioFinal);
  txtentidad.addEventListener("blur", limpiarEspacioFinal);
  txtmunicipio.addEventListener("blur", limpiarEspacioFinal);
  txtfecha.addEventListener("blur", limpiarEspacioFinal);
  txtfolio.addEventListener("blur", limpiarEspacioFinal);
  txtrecibo.addEventListener("blur", limpiarEspacioFinal);
  txtimporte.addEventListener("blur", limpiarEspacioFinal);
  txtatencion.addEventListener("blur", limpiarEspacioFinal);
  txthora.addEventListener("blur", limpiarEspacioFinal);
  txtpago.addEventListener("blur", limpiarEspacioFinal);
  txtextras.addEventListener("blur", limpiarEspacioFinal);


  // Agregar evento validarCampo al presionar una tecla en los campos
  txtclavera.addEventListener("keyup", validarCampo);
  txtmanzana.addEventListener("keyup", validarCampo);
  txtlote.addEventListener("keyup", validarCampo);
  txtcalle.addEventListener("keyup", validarCampo);
  txtbarrio.addEventListener("keyup", validarCampo);
  txtentidad.addEventListener("keyup", validarCampo);
  txtfolio.addEventListener("keyup", validarCampo);
  txtrecibo.addEventListener("keyup", validarCampo);
  txtextras.addEventListener("keyup", validarCampo);
  
  // Agregar evento validarCampo2 al presionar una tecla en los campos
  txtprog.addEventListener("keyup", validarCampo2);
  txtnombre.addEventListener("keyup", validarCampo2);
  txtcurp.addEventListener("keyup", validarCampo2);
  txtmunicipio.addEventListener("keyup", validarCampo2);
  txtfecha.addEventListener("keyup", validarCampo2);
  txtimporte.addEventListener("keyup", validarCampo2);
  txtatencion.addEventListener("keyup", validarCampo2);
  txthora.addEventListener("keyup", validarCampo2);
  txtpago.addEventListener("keyup", validarCampo2);

  
  // Agregar evento  al presionar una tecla en los campos 
  txtprog.addEventListener("blur", convertirMayusculas);
  txtclavera .addEventListener("blur", convertirMayusculas);
  txtnombre.addEventListener("blur", convertirMayusculas);
  txtcurp.addEventListener("blur", convertirMayusculas);
  txtmanzana.addEventListener("blur", convertirMayusculas);
  txtlote.addEventListener("blur", convertirMayusculas);
  txtcalle.addEventListener("blur", convertirMayusculas);
  txtbarrio.addEventListener("blur", convertirMayusculas);
  txtentidad.addEventListener("blur", convertirMayusculas);
  txtmunicipio.addEventListener("blur", convertirMayusculas);
  txtfecha.addEventListener("blur", convertirMayusculas);
  txtfolio.addEventListener("blur", convertirMayusculas);
  txtrecibo.addEventListener("blur", convertirMayusculas);
  txtimporte.addEventListener("blur", convertirMayusculas);
  txtatencion.addEventListener("blur", convertirMayusculas);
  txthora.addEventListener("blur", convertirMayusculas);
  txtpago.addEventListener("blur", convertirMayusculas);
  txtextras.addEventListener("blur", convertirMayusculas);

  // Agregar evento validarCampo3 al presionar una tecla en los campos
  txtnombre.addEventListener("keyup", validarCampo3);

  // Agregar evento validarCampo4 al presionar una tecla en los campos

  txtfecha.addEventListener("keyup", validarCampo4);
  txtclavera.addEventListener("keyup", validarCampo4);

// Agregar evento validarCampo5 al presionar una tecla en los campos
  txtatencion.addEventListener("keyup", validarCampo5);

  





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
  if (valor.length > 24) {
    valor = valor.slice(0, 24);
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


function validarCampo5(event) {
  const input = event.target;
  let valor = input.value;
  // Limitar la longitud máxima del valor a 50 caracteres
  if (valor.length > 125) {
    valor = valor.slice(0, 125);
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
  // Cuando se hace clic en el botón "Limpiar", este bloque de código se ejecuta.
  btnLimpiarven.addEventListener("click", () => {
    txtprog.value = "";
    txtclavera.value = "";
    txtnombre.value = "";
    txtcurp.value = "";
    txtmanzana.value = "";
    txtlote.value = "";
    txtcalle.value = "";
    txtbarrio.value = "";
    txtentidad.value = "";
    txtmunicipio.value = "";
    txtfecha.value = "";
    txtfolio.value = "";
    txtrecibo.value = "";
    txtimporte.value = "";
    txtreviso.value = "";
    txtmotivo.value = "";
    txtsoliservi.value = "";
    txtterrreno.value = "";
    txtconstruc.value = "";
    txtelaboracion.value = "";
    txthora.value = "";
    txtpago.value = "";
    txtextras.value ="";
    txtatencion.value = "";
    selectTramite.value = "";

  });
});

document.getElementById('prepararven').addEventListener('click', function() {
document.getElementById('txtentidad').value = 'ESTADO DE MEXICO';
document.getElementById('txtmunicipio').value = 'CHIMALHUACAN';
//   // Obtener la fecha actual en formato DD-MM-YYYY
const today = new Date();
const formattedDate = ('0' + today.getDate()).slice(-2) + '/' + 
                        ('0' + (today.getMonth() + 1)).slice(-2) + '/' + 
                         today.getFullYear();
document.getElementById('txtfecha').value = formattedDate;
//   // Obtener la hora actual en formato HH:MM:SS AM/PM
let hours = today.getHours();
const minutes = ('0' + today.getMinutes()).slice(-2);
const seconds = ('0' + today.getSeconds()).slice(-2);
   const ampm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12;
   hours = hours ? hours : 12; // La hora 0 debe ser 12
   const formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
   document.getElementById('txthora').value = formattedTime;
});


document.querySelector('.btn-listaven').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = '/ventanilla/editarven/'; 
});


// campo para poner los guiones cada 4 

txtclavera.addEventListener("input", function() {
  formatClave(this);
});

txtclavera.addEventListener("blur", function() {
  formatClave(this); 
});

function formatClave(input) {
  let value = input.value.replace(/\W/g, ''); // Elimina cualquier carácter no alfanumérico
  let formattedValue = '';

  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += '-';
    }
    formattedValue += value[i];
  }

  // Elimina el guion final si existe
  if (formattedValue.endsWith('-')) {
    formattedValue = formattedValue.slice(0, -1);
  }

  input.value = formattedValue;
}


document.addEventListener("DOMContentLoaded", function() {
  const txtimporte = document.getElementById("txtimporte");
  const txtpago = document.getElementById("txtpago");
  const txtextras = document.getElementById("txtextras");

  // Aplicar formato al escribir y al perder el foco
  [txtimporte, txtpago, txtextras].forEach(input => {
    input.addEventListener("input", function() {
      formatCurrency(this);
    });

    input.addEventListener("blur", function() {
      formatCurrency(this); // Aplicar formato también al perder el foco
    });
  });
});

function formatCurrency(input) {
  let value = input.value.replace(/[^0-9.]/g, ''); // Elimina cualquier carácter no numérico ni punto

  // Convertir a número flotante para manejar los centavos
  let numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
    numericValue = 0;
  }

  // Formatear el número con comas y punto decimal
  let formattedValue = numericValue.toLocaleString('es-MX', { // Para pesos mexicanos
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Reemplazar el símbolo de moneda por el símbolo deseado
  formattedValue = formattedValue.replace('$', '');
  formattedValue = `$${formattedValue}`;

  input.value = formattedValue;
}
