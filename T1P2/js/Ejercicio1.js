let contenedor = document.getElementById("listaDinamica");
let botonAgregar = document.getElementById("btnAgregar");
let botonBorrar = document.getElementById("btnBorrar");

botonAgregar.addEventListener("click", function(){
    let nuevoElemento = document.createElement("li");
    let nombre = prompt("Dime le nombre de el elemento:")
    let nuevoEnlace = prompt("Inserta el enlace que deseas añadir a la lista:");
    let a = document.createElement("a");
    a.href = nuevoEnlace;
    a.textContent = nombre;
    nuevoElemento.appendChild(a);
    contenedor.appendChild(nuevoElemento);
});

botonBorrar.addEventListener("click", function(){
    let elementos = contenedor.querySelectorAll("li");
    for (let i = 0; i < elementos.length; i++) {
        contenedor.removeChild(elementos[i]);
    }
});