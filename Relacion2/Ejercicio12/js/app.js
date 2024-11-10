let imagen = document.getElementsByTagName("img");

let botonIzquierda = document.getElementById("moverIzquierda");
let botonDerecha = document.getElementById("moverDerecha");

let posicionActual = 0;
let desplazamiento = 5;

botonDerecha.addEventListener("click", function(){
    posicionActual += desplazamiento;
    imagen[0].style.marginLeft = `${posicionActual}px`;
});

botonIzquierda.addEventListener("click", function(){
    posicionActual -= desplazamiento;
    if (posicionActual > 0) {
        imagen[0].style.marginLeft = `${posicionActual}px`;    
    }
    else{
        posicionActual = 0;
    }
});