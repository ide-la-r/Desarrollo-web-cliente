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

    // Validar DNI (8 números y una letra)
    // ^[0-9]{8}[A-Za-z]$:
    // ^ -> Inicio de la cadena
    // [0-9]{8} -> Ocho dígitos (0-9)
    // [A-Za-z] -> Una letra mayúscula o minúscula
    // $ -> Fin de la cadena
    if (!/^[0-9]{8}[A-Za-z]$/.test(dni)) {
        alert("El DNI debe tener 8 números y una letra.");
        document.getElementById('dni').focus();
        return;
    }

    // Comprobar que la letra del DNI es correcta
    let dniNumeros = dni.substring(0, 8);
    let dniLetra = dni.charAt(dni.length - 1).toUpperCase();
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraCorrecta = letras.charAt(dniNumeros % 23);
    if (dniLetra !== letraCorrecta) {
        alert("La letra del DNI no es correcta.");
        document.getElementById('dni').focus();
        return;
    }

    // Validar fecha de nacimiento (formato dd/mm/yyyy)
    // ^\d{2}\/\d{2}\/\d{4}$:
    // ^ -> Inicio de la cadena
    // \d{2} -> Dos dígitos (0-9)
    // \/ -> Carácter de barra (/) escapado
    // \d{2} -> Dos dígitos (0-9)
    // \/ -> Carácter de barra (/) escapado
    // \d{4} -> Cuatro dígitos (0-9)
    // $ -> Fin de la cadena
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
        alert("La fecha de nacimiento debe tener el formato dd/mm/yyyy.");
        document.getElementById('fecha').focus();
        return;
    }

    // Validar uno o dos nombres
    // ^[A-Za-z]+(\s[A-Za-z]+)?$:
    // ^ -> Inicio de la cadena
    // [A-Za-z]+ -> Una o más letras
    // (\s[A-Za-z]+)? -> Un espacio seguido de una o más letras (opcional)
    // $ -> Fin de la cadena
    if (!/^[A-Za-z]+(\s[A-Za-z]+)?$/.test(nombre)) {
        alert("El campo nombre debe tener uno o dos nombres.");
        document.getElementById('nombre').focus();
        return;
    }

    // Validar uno o dos apellidos
    // ^[A-Za-z]+(\s[A-Za-z]+)?$:
    // ^ -> Inicio de la cadena
    // [A-Za-z]+ -> Una o más letras
    // (\s[A-Za-z]+)? -> Un espacio seguido de una o más letras (opcional)
    // $ -> Fin de la cadena
    if (!/^[A-Za-z]+(\s[A-Za-z]+)?$/.test(apellidos)) {
        alert("El campo apellidos debe tener uno o dos apellidos.");
        document.getElementById('apellidos').focus();
        return;
    }

    // Validar web personal (debe empezar por https://)
    // ^http:\/\/.+$:
    // ^ -> Inicio de la cadena
    // https:\/\/ -> Cadena literal "http://" con las barras escapadas
    // .+ -> Uno o más caracteres
    // $ -> Fin de la cadena
    if (!/^http:\/\/.+$/.test(web)) {
        alert("La web personal debe empezar por http://.");
        document.getElementById('web').focus();
        return;
    }

    // Validar longitud de la contraseña (entre 8 y 12 caracteres)
    // ^.{8,12}$:
    // ^ -> Inicio de la cadena
    // .{8,12} -> Cualquier carácter entre 8 y 12 veces
    // $ -> Fin de la cadena
    if (!/^.{8,12}$/.test(contrasena)) {
        alert("La contraseña debe tener entre 8 y 12 caracteres.");
        document.getElementById('contrasena').focus();
        return;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    alert("Formulario enviado correctamente.");
    document.getElementById('formulario').submit();
};

/* 
// Validar longitud y contenido de la contraseña (al menos una mayúscula, un símbolo y un número)
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/.test(contrasena)) {
        alert("La contraseña debe tener entre 8 y 12 caracteres, incluyendo al menos una letra mayúscula, un número y un símbolo.");
        document.getElementById('contrasena').focus();
        return;
    }
*/
