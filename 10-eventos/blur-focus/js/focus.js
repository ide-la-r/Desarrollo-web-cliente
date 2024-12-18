let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let apellido = document.getElementById("apellido");
let apellido2 = document.getElementById("apellido2");
let apellido3 = document.getElementById("apellido3");
let apellidoCopia = document.getElementById("apellidoCopia");

//funcion blur
nombre.addEventListener("blur", function() {
    nombre.style.background = "red";
});

//funcion focus
nombre.addEventListener("focus", function() {
    nombre.style.background = "none";
});


edad.addEventListener("blur", function() {
    edad.style.background = "red";
});

edad.addEventListener("focus", function() {
    edad.style.background = "none";
});


//funcion change
let contador = 0;
apellido.addEventListener("change", function(){
    if (contador % 2 == 0) {
        apellido.style.background = "green";
    }
    else{
        apellido.style.background = "purple";
    }
    contador++;
});


//funcion copy
apellido2.addEventListener("copy", function() {
    navigator.clipboard.writeText("");//portapapeles lo vacio escribiendo nada
    apellido2.style.backgroundColor = "red";
    alert("No se puede copiar en el campo primer apellido.");
});


//funcion cut
apellido3.addEventListener("cut", function() {
    navigator.clipboard.writeText("");//portapapeles lo vacio escribiendo nada
    alert("No se puede cortar en el campo segundo apellido.");
});


//funcion paste
apellido3.addEventListener("paste", function() {
    navigator.clipboard.writeText("");
    alert("No se puede pegar en el campo segundo apellido.");
});