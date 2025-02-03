document.getElementById("formulario").onsubmit = function(event) {
    event.preventDefault(); // Previene el envío del formulario hasta que se valide correctamente
    
    // Obtener los valores de todos los campos del formulario
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fecha = document.getElementById("fecha").value;
    let web = document.getElementById("web").value;
    let contrasena = document.getElementById("contrasena").value;

    if (!dni || !nombre || !apellidos || !fecha || !web || !contrasena) {
        alert("Debes rellenar todos los campos del formulario");
        return;
    }

    // Validar todos los campos
    if (!validarDNI() || !validarNombre() || !validarApellidos() || !validarFecha() || !validarWeb() || !validarContrasena()) {
        return; // Detener la validación si algún campo es incorrecto
    }

    // Si todas las validaciones son correctas, enviar el formulario
    alert("Formulario enviado correctamente.");
    document.getElementById('formulario').submit();
};

// Asignar la función de validación a cada campo del formulario
document.getElementById("dni").onblur = validarDNI;
document.getElementById("nombre").onblur = validarNombre;
document.getElementById("apellidos").onblur = validarApellidos;
document.getElementById("fecha").onblur = validarFecha;
document.getElementById("web").onblur = validarWeb;
document.getElementById("contrasena").onblur = validarContrasena;

//Hacer focus nava mas empzar en DNI
document.getElementById('dni').focus();

// Asignar el evento de reset al formulario
document.getElementById("formulario").onreset = function() {
    // Limpiar todos los mensajes de validación
    
    //El parámetro mensaje dentro de la función se utiliza para representar 
    // cada uno de los elementos seleccionados con la clase mensaje-validacion
    document.querySelectorAll('.mensaje-validacion').forEach(function(mensaje) {
        mensaje.textContent = "";
    });
    // Establecer el foco en el primer campo del formulario después del reset
    document.getElementById('dni').focus();
};

function validarDNI() {
    let dni = document.getElementById("dni").value;
    let mensaje = document.getElementById("dni-mensaje");

    // Validar DNI (8 números y una letra)
    if (!/^[0-9]{8}[A-Za-z]$/.test(dni)) {
        mensaje.textContent = "Formato incorrecto.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('dni').focus();
        return false;
    }

    // Comprobar que la letra del DNI es correcta
    let dniNumeros = dni.substring(0, 8);
    let dniLetra = dni.charAt(dni.length - 1).toUpperCase();
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraCorrecta = letras.charAt(dniNumeros % 23);
    if (dniLetra !== letraCorrecta) {
        mensaje.textContent = "Letra incorrecta.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('dni').focus();
        return false;
    }

    mensaje.textContent = "Correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}

function validarNombre() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("nombre-mensaje");

    // Validar uno o dos nombres
    if (!/^[A-Za-z]+(\s[A-Za-z]+)?$/.test(nombre)) {
        mensaje.textContent = "Formato incorrecto.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('nombre').focus();
        return false;
    }

    mensaje.textContent = "Correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}

function validarApellidos() {
    let apellidos = document.getElementById("apellidos").value;
    let mensaje = document.getElementById("apellidos-mensaje");

    // Validar uno o dos apellidos
    if (!/^[A-Za-z]+(\s[A-Za-z]+)?$/.test(apellidos)) {
        mensaje.textContent = "Formato incorrecto.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('apellidos').focus();
        return false;
    }

    mensaje.textContent = "Correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}

function validarFecha() {
    let fecha = document.getElementById("fecha").value;
    let mensaje = document.getElementById("fecha-mensaje");

    // Validar fecha de nacimiento (formato dd/mm/yyyy)
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
        mensaje.textContent = "Formato incorrecto.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('fecha').focus();
        return false;
    }

    mensaje.textContent = "Correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}

function validarWeb() {
    let web = document.getElementById("web").value;
    let mensaje = document.getElementById("web-mensaje");

    // Validar web personal (debe empezar por https://)
    if (!/^https:\/\/.+$/.test(web)) {
        mensaje.textContent = "Formato incorrecto.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('web').focus();
        return false;
    }

    mensaje.textContent = "Correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}

function validarContrasena() {
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("contrasena-mensaje");

    // Validar longitud y contenido de la contraseña (al menos una mayúscula, un símbolo y un número)
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/.test(contrasena)) {
        mensaje.textContent = "Formato incorrecto.";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById('contrasena').focus();
        return false;
    }

    mensaje.textContent = "Correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}
