let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let apellido1 = document.getElementById("apellido1");
let apellido2 = document.getElementById("apellido2");

apellido1.addEventListener("copy", function() {
    navigator.clipboard.writeText("");//portapapeles lo vacio escribiendo nada
    apellido1.style.backgroundColor = "red";
    alert("No se puede copiar en el campo primer apellido.");
});

apellido2.addEventListener("cut", function() {
    navigator.clipboard.writeText("");//portapapeles lo vacio escribiendo nada
    apellido2.style.backgroundColor = "red";
    alert("No se puede cortar en el campo segundo apellido.");
});

apellido2.addEventListener("paste", function() {
    apellido2.style.backgroundColor = "red";
    alert("No se puede pegar en el campo segundo apellido.");
});