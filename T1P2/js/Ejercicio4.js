function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

let generar = document.getElementById("btnGenerarTabla");

generar.addEventListener("click", function(){
    let filas = recogerNum("Dime el numero de filas");
    let columnas = recogerNum("Dime el numero de columnas");

    let tabla = document.getElementById("seccionTabla");

    let nuevaTabla = document.createElement('table');
    let tablaBody = document.createElement('tbody');

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            let columna = document.createElement("td");
            columna.style.width = "20px";
            columna.style.height = "20px";
            columna.style.border = "1px solid black";

            columna.addEventListener("click", function(){
                carruselFotos(this);
            });
            fila.appendChild(columna);
        }
        tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    tabla.appendChild(nuevaTabla);
});

function carruselFotos(columna){
    if (columna = "") {
        let fotos = document.createElement("img");
    }
    else{
    fotos.src = "./img/foto1.jpg";
    if (!columna) fotos.src = "./img/foto1.jpg";
    else if (fotos.src = "./img/foto1.jpg") fotos.src = "./img/foto2.jpg";
    else if (fotos.src = "./img/foto2.jpg") fotos.src = "./img/foto3.jpg";
    else if (fotos.src = "./img/foto3.jpg") fotos.src = "./img/foto4.jpg";
    else if (fotos.src = "./img/foto4.jpg") fotos.src = "./img/foto5.jpg";
    else if (fotos.src = "./img/foto5.jpg") fotos.src = "./img/foto1.jpg";
    }
    columna.appendChild(fotos);
}