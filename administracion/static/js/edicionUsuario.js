const nombress = document.getElementById("txtNombres");
const apellidos = document.getElementById("txtApelli");
const usuariedi = document.getElementById("txtUser");
const contrasenaedi = document.getElementById("txtContra");
const conficontraedi = document.getElementById("txtConfir");
const togglePasswordButtons = document.querySelectorAll(".togglePassword");


  // Agregar evento de validación al presionar una tecla en los campos de nombres y apellidos
  nombress.addEventListener("keyup", validarCampo);
  nombress.addEventListener("blur", limpiarEspacioFinal);
  apellidos.addEventListener("keyup", validarCampo);
  apellidos.addEventListener("blur", limpiarEspacioFinal);
  usuariedi.addEventListener("keyup", limpiarEspacioFinal);
  usuariedi.addEventListener("blur", validarSinEspacios);
  contrasenaedi.addEventListener("keyup", limpiarEspacioFinal);
  contrasenaedi.addEventListener("blur", validarSinEspacios);
  conficontraedi.addEventListener("keyup", limpiarEspacioFinal);
  conficontraedi.addEventListener("blur", validarSinEspacios);


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
  
    // Función para eliminar todos los espacios en los campos de usuario y contraseña
    function validarSinEspacios(event) {
      const input = event.target;
      let valor = input.value;
  
      // Eliminar todos los espacios
      valor = valor.replace(/\s/g, '');
  
      // Actualizar el valor del campo
      input.value = valor;
    }
  

  togglePasswordButtons.forEach(button => {
    button.addEventListener("click", function() {
      const targetId = this.dataset.target;
      const targetField = document.getElementById(targetId);
      const iconElement = this; // Capturamos el elemento del ícono

      if (targetField.type === "password") {
        targetField.type = "text";
        iconElement.src = "{% static 'images/eye-open.png' %}"; // Ruta de la imagen para mostrar la contraseña
      } else {
        targetField.type = "password";
        iconElement.src = "{% static 'images/eye-closed.png' %}"; // Ruta de la imagen para ocultar la contraseña

        // Restauramos el tipo de elemento del ícono (asumiendo que era una imagen originalmente)
        iconElement.type = "button";
      }
    });
  });

  function goToCance() {
    window.location.href = '/administracion/editar/';
  }
  