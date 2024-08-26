const usuariedi = document.getElementById("txtUser");
const contrasenaedi = document.getElementById("txtContra");
const conficontraedi = document.getElementById("txtConfir");
const togglePasswordButtons = document.querySelectorAll(".togglePassword");


  // Agregar evento de validación al presionar una tecla en los campos de nombres y apellidos
  contrasenaedi.addEventListener("keyup", limpiarEspacioFinal);
  contrasenaedi.addEventListener("blur", validarSinEspacios);
  conficontraedi.addEventListener("keyup", limpiarEspacioFinal);
  conficontraedi.addEventListener("blur", validarSinEspacios);


  // Función para limpiar espacio final al cambiar de campo
  function limpiarEspacioFinal(event) {
    const input = event.target;
    let valor = input.value;
  
    // Eliminar espacio final si lo detecta
    valor = valor.trim();
  
    // Actualizar el valor del campo
    input.value = valor;
  }
  
    // Función para eliminar todos los espacios en los campos de restablecer contraseña
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

  

  document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('adminPasswordModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('adminPasswordModal').style.display = 'none';
});

document.getElementById('adminPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes hacer la llamada AJAX para verificar el usuario y contraseña del administrador
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const userId = '{{ usuario.idUsuarios }}';
    
    fetch('/administracion/verificarAdmin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({
            adminUsername: adminUsername,
            adminPassword: adminPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('adminPasswordModal').style.display = 'none';
        if (data.success) {
            // Admin verificado, submit the password form
            document.getElementById('passwordForm').submit();
        } else {
          const message = document.createElement('div');
          message.classList.add('message');
          message.textContent = 'Credenciales del administrador incorrectas.';
          // Append the message to the body
          document.body.appendChild(message);
          // Remove the message after 3 seconds
          setTimeout(() => {
              document.body.removeChild(message);
          }, 3000);
      }
    });
});

function goToEditor() {
  window.location.href = '/administracion/editar/';
}
