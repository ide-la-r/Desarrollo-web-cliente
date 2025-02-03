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

function validarDNI() {
    let dni = document.getElementById("dni").value;

    // Validar DNI (8 números y una letra)
    if (!/^[0-9]{8}[A-Za-z]$/.test(dni)) {
        alert("El DNI debe tener 8 números y una letra.");
        document.getElementById('dni').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('dni').onblur = null;
        setTimeout(() => {
            document.getElementById('dni').onblur = validarDNI;
        }, 500);
        return false;
    }

    // Comprobar que la letra del DNI es correcta
    let dniNumeros = dni.substring(0, 8);
    let dniLetra = dni.charAt(dni.length - 1).toUpperCase();
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraCorrecta = letras.charAt(dniNumeros % 23);
    if (dniLetra !== letraCorrecta) {
        alert("La letra del DNI no es correcta.");
        document.getElementById('dni').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('dni').onblur = null;
        setTimeout(() => {
            document.getElementById('dni').onblur = validarDNI;
        }, 500);
        return false;
    }

    return true;
}

function validarNombre() {
    let nombre = document.getElementById("nombre").value;

    // Validar uno o dos nombres
    if (!/^[A-Za-z]+(\s[A-Za-z]+)?$/.test(nombre)) {
        alert("El campo nombre debe tener uno o dos nombres.");
        document.getElementById('nombre').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('nombre').onblur = null;
        setTimeout(() => {
            document.getElementById('nombre').onblur = validarNombre;
        }, 500);
        return false;
    }

    return true;
}

function validarApellidos() {
    let apellidos = document.getElementById("apellidos").value;

    // Validar uno o dos apellidos
    if (!/^[A-Za-z]+(\s[A-Za-z]+)?$/.test(apellidos)) {
        alert("El campo apellidos debe tener uno o dos apellidos.");
        document.getElementById('apellidos').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('apellidos').onblur = null;
        setTimeout(() => {
            document.getElementById('apellidos').onblur = validarApellidos;
        }, 500);
        return false;
    }

    return true;
}

function validarFecha() {
    let fecha = document.getElementById("fecha").value;

    // Validar fecha de nacimiento (formato dd/mm/yyyy)
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
        alert("La fecha de nacimiento debe tener el formato dd/mm/yyyy.");
        document.getElementById('fecha').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('fecha').onblur = null;
        setTimeout(() => {
            document.getElementById('fecha').onblur = validarFecha;
        }, 500);
        return false;
    }

    return true;
}

function validarWeb() {
    let web = document.getElementById("web").value;

    // Validar web personal (debe empezar por https://)
    if (!/^https:\/\/.+$/.test(web)) {
        alert("La web personal debe empezar por https://.");
        document.getElementById('web').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('web').onblur = null;
        setTimeout(() => {
            document.getElementById('web').onblur = validarWeb;
        }, 500);
        return false;
    }

    return true;
}

function validarContrasena() {
    let contrasena = document.getElementById("contrasena").value;

    // Validar longitud y contenido de la contraseña (al menos una mayúscula, un símbolo y un número)
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/.test(contrasena)) {
        alert("La contraseña debe tener entre 8 y 12 caracteres, incluyendo al menos una letra mayúscula, un número y un símbolo.");
        document.getElementById('contrasena').focus();
        // Desactivar temporalmente el evento onblur para permitir la corrección sin bucles
        document.getElementById('contrasena').onblur = null;
        setTimeout(() => {
            document.getElementById('contrasena').onblur = validarContrasena;
        }, 500);
        return false;
    }

    return true;
}
