document.addEventListener('DOMContentLoaded', function() {
    const prepararBtn = document.getElementById('prepararins');
    const urlObtenerSiguienteId = "{% url 'obtener_siguiente_idins' %}";

    prepararBtn.addEventListener('click', function() {
        fetch(urlObtenerSiguienteId)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener el siguiente ID.');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('txtregistro').value = data.siguiente_id;  // Asignar el siguiente ID al campo 'registro'
            })
            .catch(error => {
                console.error('Error al obtener el siguiente ID:', error);
            });
    });
});
