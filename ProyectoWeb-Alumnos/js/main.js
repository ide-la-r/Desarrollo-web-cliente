console.log("javascript");

let crearAnuncio = document.getElementById("incluyeAnuncio");

crearAnuncio.addEventListener("click", incluirAnuncio)

function incluirAnuncio(){
    //pedir al usuario la direccion de la imagen y el enlace
    let pathImg = prompt("Direccion de la imagen", "./img/foto1.jpg");
    let urlEnlace = prompt("Direccion de la imagen", "https://www.marca.es");

    //Crear un div al que le vamos añadiendo nuestros child
    let nuevoHijo = document.createElement("div");

    //creo el enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto del enlace");

    //crea la imagen
    let imagen = document.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Dime el alt de la imagen";
    imagen.style.width = "100px";
    imagen.style.height = "100px";

    //agregar a nuestro hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);

    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoHijo);
}