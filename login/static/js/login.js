// Estas líneas obtienen referencias a los elementos del formulario, como el campo de usuario, contraseña y los botones de "Ingresar", "Limpiar" y "Recuperar Contraseña".
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const btnIngresar = document.querySelector("button[type='submit']"); // Selecciona el botón de tipo "submit"
const btnLimpiar = document.getElementById("limpiar");
const recuperarcon = document.getElementById("recuperar");
const togglePasswordButtons = document.querySelectorAll(".togglePassword");


// Cuando se hace clic en el botón "Limpiar", este bloque de código se ejecuta.
btnLimpiar.addEventListener("click", () => {
  // Borra los campos de usuario y contraseña.
  usuario.value = "";
  contrasena.value = "";
});

// Cuando se hace clic en el botón "Recuperar Contraseña", este bloque de código se ejecuta.
recuperarcon.addEventListener('click', () => {
  // Muestra un mensaje indicando que el usuario debe contactar al administrador para recuperar su contraseña.
  alert('Para restablecer su contraseña, por favor contacte al administrador.');
});

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

