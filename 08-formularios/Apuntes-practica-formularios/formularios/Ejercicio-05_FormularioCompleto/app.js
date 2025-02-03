document.getElementById("formulario").onsubmit = function(event){
    event.preventDefault();// Previene el envío del formulario hasta que se valide correctamente

    //vamos a obtener los valores de todos los campos del formulario
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fecha = document.getElementById("fecha").value;
    let web = document.getElementById("web").value;
    let contrasena = document.getElementById("contrasena").value;

    if(!dni || !nombre || !apellidos || !fecha || !web || !contrasena){
        alert("Debes de rellenar todos los campos del formulario");
        return;
    }
    // Validar longitud del DNI
    if (dni.length !== 9) {
        alert("El DNI debe tener 8 números y una letra.");
        document.getElementById('dni').focus();
        return;
    }

    // Validar formato de fecha de nacimiento
    var fechaSplit = fecha.split('/');
    if (fechaSplit.length !== 3 || fechaSplit[0].length !== 2 || fechaSplit[1].length !== 2 || fechaSplit[2].length !== 4) {
        alert("La fecha de nacimiento debe tener el formato dd/mm/yyyy.");
        document.getElementById('fechaNacimiento').focus();
        return;
    }

    // Validar uno o dos nombres
    var nombreSplit = nombre.split(' ');
    if (nombreSplit.length < 1 || nombreSplit.length > 2) {
        alert("El campo nombre debe tener uno o dos nombres.");
        document.getElementById('nombre').focus();
        return;
    }

    // Validar uno o dos apellidos
    var apellidosSplit = apellidos.split(' ');
    if (apellidosSplit.length < 1 || apellidosSplit.length > 2) {
        alert("El campo apellidos debe tener uno o dos apellidos.");
        document.getElementById('apellidos').focus();
        return;
    }

    // Validar formato de web personal
    if (!web.startsWith("http://")) {
        alert("La web personal debe empezar por http://.");
        document.getElementById('web').focus();
        return;
    }

    // Validar longitud de la contraseña
    if (contrasena.length < 8 || contrasena.length > 12) {
        alert("La contraseña debe tener entre 8 y 12 caracteres.");
        document.getElementById('contrasena').focus();
        return;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    alert("Formulario enviado correctamente.");
    document.getElementById('miFormulario').submit();
}