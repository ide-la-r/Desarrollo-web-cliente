document.getElementById("formulario").onsubmit = function (e) {
    e.preventDefault();


    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("#pellidos").value;
    let fecha = document.getElementById("fecha").value;
    let web = document.getElementById("web").value;
    let contrasena = document.getElementById("contrasena").value;
    let contrasena2 = document.getElementById("contrasena2").value;


    if (!dni && !nombre && !apellidos && !fecha && !web && !contrasena && !contrasena2) {
        alert("Debes de rellenar correctamente todos los campos");
        return;
    }

    if (!validarDni() && !validarNombre() && !validarApellidos() && !validarFecha() && !validarWeb()
        && !validarContrasena() && !validarContrasena2()) {
        return;
    }

    alert("Formulario enviado correctamente");
    document.getElementById("formulario").submit();
}

document.getElementById('dni').focus();//hacer focus al cargar la pagina al DNI


document.getElementById("dni").onblur = validarDni;//validar dni al sacar el cursor del campo DNI
document.getElementById("nombre").onblur = validarNombre;//validar nombre al sacar el cursor del campo nombre
document.getElementById("apellidos").onblur = validarApellidos;//validar nombre al sacar el cursor del campo nombre



function validarDni() {
    let dni = document.getElementById("dni").value;
    let mensaje = document.getElementById("dni-mensaje");

    /* if(dni == ""){
        mensaje.className = "mensaje-validacion incorrecto";
        mensaje.textContent = "Debes rellenar el campo";
        document.getElementById('dni').focus();
        return false;
    } */

    let patron = /^[0-9]{8}[A-Za-z]$/;
    if (!patron.test(dni)) {
        mensaje.className = "mensaje-validacion incorrecto";
        mensaje.textContent = "Formato incorrecto.";
        document.getElementById('dni').focus();
        return false;
        
    }

    // Comprobar que la letra del DNI es correcta
    let dniNumeros = dni.substring(0, 8);
    let dniLetra = dni.charAt(dni.length - 1).toUpperCase();
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letraCorrecta = letras.charAt(dniNumeros % 23);

    if (dniLetra != letraCorrecta) {
        mensaje.className = "mensaje-validacion incorrecto";
        mensaje.textContent = "La letra del dni no es correcta";
        document.getElementById("dni").focus();
        return false;
    }

    mensaje.textContent = "Formato correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;
}

function validarNombre(){
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("nombre-mensaje");

   /*  if(nombre == ""){
        mensaje.textContent="Debes completar este campo";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById("nombre").focus();
        return false;
    } */
    let patron = /^[A-Za-z]+(\s[A-Za-z]+)?$/;
    if(!patron.test(nombre)){
        mensaje.textContent = "Campo incorrecto";
        mensaje.className = "mensaje-validacion incorrecto";
        document.getElementById("nombre").focus();
        return false;
    }

    mensaje.textContent = "Formato correcto.";
    mensaje.className = "mensaje-validacion correcto";
    return true;

}


function validarApellidos(){
    let apellidos = document.getElementById("apellidos").value;
    let mensaje = document.getElementById("apellidos-mensaje");

    /* if(apellidos == ""){
        mensaje.textContent = "El campo de los apellidos no puede estar vacio";
        mensaje.className ="mensaje-validacion incorrecto";
        document.getElementById("apellidos").focus();
        return false;
    } */

    let patron= /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
    if(!patron.test(apellidos)){
        mensaje.textContent = "El nombre solo puede contener letras y espacio";
        mensaje.className="mensaje-validacion incorrecto";
        document.getElementById("apellidos").focus();
        return false;
    }

    mensaje.textContent = "Formato correcto.";
    mensaje.className="mensaje-validacion correcto";
    return true;
    
}