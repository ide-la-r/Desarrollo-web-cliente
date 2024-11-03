let tabla = document.getElementById('tabla');

let boton1 = document.getElementById('enseñarDimensiones');
boton1.addEventListener("click", enseñarDimensiones);

function enseñarDimensiones(){
    alert("La anchura de la tabla es: " + tabla.offsetWidth + "px y la altura es: " + tabla.offsetHeight +  "px");
    
    tabla.style.width = prompt("Inserta nuevos valores para la anchura de la tabla:") + "px";
    tabla.style.height = prompt("Inserta nuevos valores para la altura de la tabla:") + "px";
}

let boton2 = document.getElementById('cambiarBordeTabla');
boton2.addEventListener("click", cambiarBordeTabla);

function cambiarBordeTabla(){
    alert("El valor actual de el borde de la tabla es: " + tabla.style.border);
    tabla.style.border = prompt("Inserta nuevo valor para el borde de la tabla:");
}

let boton3 = document.getElementById('cambiarAlineacion');
boton3.addEventListener("click", cambiarAlineacion);

let alineacionActual = "center";

function cambiarAlineacion() {
    if (alineacionActual === "center") {
        tabla.style.textAlign = "right";
        alineacionActual = "right";
        alert("La tabla está alineada a la derecha");
    } else if (alineacionActual === "right") {
        tabla.style.textAlign = "left";
        alineacionActual = "left";
        alert("La tabla está alineada a la izquierda");
    } else {
        tabla.style.textAlign = "center";
        alineacionActual = "center";
        alert("La tabla está alineada al centro");
    }
}


//lo de offsetWidth y eso es porque el estilo lo he hecho en un style y no dentro de las etiquetas del HTML