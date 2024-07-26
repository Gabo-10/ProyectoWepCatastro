document.addEventListener("DOMContentLoaded", function() {
  const nombres = document.getElementById("nombres");
  const apelli = document.getElementById("apelli");
  const usuariore = document.getElementById("usuariore");
  const contrasenare = document.getElementById("contrasenare");
  const conficontra = document.getElementById("conficontra");
  const togglePasswordButtons = document.querySelectorAll(".togglePassword");
  const btnLimpiarre = document.getElementById("limpiarre");

  // Agregar evento de validación al presionar una tecla en los campos de nombres y apellidos
  nombres.addEventListener("keyup", validarCampo);
  nombres.addEventListener("blur", limpiarEspacioFinal);
  apelli.addEventListener("keyup", validarCampo);
  apelli.addEventListener("blur", limpiarEspacioFinal);
  usuariore.addEventListener("keyup", limpiarEspacioFinal);
  usuariore.addEventListener("blur", validarSinEspacios);
  contrasenare.addEventListener("keyup", limpiarEspacioFinal);
  contrasenare.addEventListener("blur", validarSinEspacios);
  conficontra.addEventListener("keyup", limpiarEspacioFinal);
  conficontra.addEventListener("blur", validarSinEspacios);

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

  // Cuando se hace clic en el botón "Limpiar", este bloque de código se ejecuta.
  btnLimpiarre.addEventListener("click", () => {
    // Borra todos los campos del formulario.
    nombres.value = "";
    apelli.value = "";
    usuariore.value = "";
    contrasenare.value = "";
    conficontra.value = "";
  });
});
