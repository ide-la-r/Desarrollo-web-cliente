let contador = 1;
let fotos = document.getElementById("foto");
let botonRestar = document.getElementById("anterior");
let botonSumar = document.getElementById("siguiente");

function actualizarImagen() {
    switch (contador) {
        case 1:
            fotos.src = "./img/bloodborne.jpg";
            break;
        case 2:
            fotos.src = "./img/dbzk.webp";
            break;
        case 3:
            fotos.src = "./img/doomethernal.avif";
            break;
        case 4:
            fotos.src = "./img/rocketleague.webp";
            break;
    }
}

function incrementarNumero(){
    contador += 1;
    if (contador == 5) contador = 1;
    actualizarImagen();
}

function decrementarNumero(){
    contador -= 1;
    if (contador == 0) contador = 4;
    actualizarImagen();
}

botonSumar.addEventListener("click", incrementarNumero);
botonRestar.addEventListener("click", decrementarNumero);