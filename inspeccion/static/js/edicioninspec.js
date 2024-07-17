const nombressin = document.getElementById("txtnombre");


  // Agregar evento de validación al presionar una tecla en los campos de nombres y apellidos
  nombressin.addEventListener("keyup", validarCampo);
  nombressin.addEventListener("blur", limpiarEspacioFinal);
 


  // Función para validar el contenido del campo y limitar la cantidad máxima de caracteres
  function validarCampo(event) {
    const input = event.target;
    let valor = input.value;
  
    // Limitar la longitud máxima del valor
    if (valor.length > 45) {
      valor = valor.slice(0, 45);
    }
  
    // Verificar si el valor contiene caracteres no permitidos
    valor = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
  
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
  // Función para limpiar espacio final al cambiar de campo
  function limpiarEspacioFinal(event) {
    const input = event.target;
    let valor = input.value;
  
    // Eliminar espacio final si lo detecta
    valor = valor.trim();
  
    // Actualizar el valor del campo
    input.value = valor;
  }
  
  
  function goToediinspec() {
    window.location.href = '/inspeccion/crearinspec/';
  }
  