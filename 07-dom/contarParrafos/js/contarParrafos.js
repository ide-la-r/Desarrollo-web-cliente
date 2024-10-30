/*
  a) contar número de enlaces de la página
  b) Indicar a qué enlace apunta el penúltimo enlace de la página.
  c) Indicar cuantos enlaces apuntan a la url: http://prueba
  d) Número de enlaces del 3er párrafo. 
*/

//Opcion 1
document.addEventListener("DOMContentLoaded", domCargado);

/* //Esto lo que hace es lo mismo que lo de arriba, es decir solo la podemos usar donde la llamemos no fuera, es autoinvocada 
document.addEventListener("DOMContentLoaded", () =>{
    alert("DOM cargado")
 });*/

function domCargado(){
    alert("DOM cargado");

    let texto;

    if (window.navigator.cookieEnabled) {
        texto = "Cookies aceptadas";
    }
    else{
        texto = "Cookies no aceptadas";
    }
    alert(texto);
    alert(window.location);//te dice la url del navegador
    alert(`Tamaño de la ventana: Altura: ${window.innerHeight}, Anchura: ${window.innerWidth}`)
}

//Opcion 2
window.addEventListener("load", contarEnlaces);
function contarEnlaces(){
    let info = document.getElementById("informacion");

    //a)
    let numEnlaces = document.getElementsByTagName("a");
    console.log(numEnlaces);
    info.innerHTML = "El numero de enlaces es: " + numEnlaces.length;

    //b) coger el penultimo enlace
    info.innerHTML += "<br>" + "La direccion del penultimo enlace es: " + numEnlaces[numEnlaces.length - 2].href;

    //c) numero de enlaces que apuntan
    let contador = 0;
    for (let i = 0; i < numEnlaces.length; i++) {
        if (numEnlaces[i].href = 'http://prueba/') {
            contador++;
        } 
    }
    info.innerHTML += "<br>" + "El numero de enlaces que apunta a http://prueba/ es: " + contador;

    // d) Numero de enlaces del 3er parrafo
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a");
    info.innerHTML += "<br>" + "El numero de enlaces del 3er parrafo es: " + enlaces.length;
    
}