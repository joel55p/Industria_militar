// Definir las credenciales válidas (puedes cambiarlas según tus necesidades)
const usuarioValido = "ejercitogt";
const contraseñaValida = "industria2023";

// Obtener elementos del DOM
const formulario = document.getElementById("login-form");
const usuarioInput = document.getElementById("usu");
const contraseñaInput = document.getElementById("cla");
const mensajeError = document.getElementById("mensaje");

// Agregar un evento de envío al formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores ingresados por el usuario
    const usuarioIngresado = usuarioInput.value;
    const contraseñaIngresada = contraseñaInput.value;

    // Verificar si las credenciales son correctas
    if (usuarioIngresado === usuarioValido && contraseñaIngresada === contraseñaValida) {
        // Redirigir al usuario a la página deseada (cambia la URL)
        window.location.href = "https://joel55p.github.io/prueba2/#inicio";
    } else {
        // Mostrar un mensaje de error
        mensajeError.style.display = "block";
    }
}); 
