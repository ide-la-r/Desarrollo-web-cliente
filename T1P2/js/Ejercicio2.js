function modificacion(mensaje){
    let boton = document.getElementsByClassName("limpiar");
    boton[0].style.backgroundColor = "rgb(202, 60, 60)";
}

function marcaDeNumeros(){
    let numeros = document.getElementsByClassName("numero");
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].style.backgroundColor = "black";  
    }
}

function marcaDeOperadores(){
    let operadores = document.getElementsByClassName("operador");
    for (let i = 0; i < operadores.length; i++) {
        operadores[i].style.backgroundColor = "#F1FF92";  
    }
}

let reset = document.getElementById("resetear");
reset.addEventListener("click", function(){
    let boton = document.getElementsByClassName("limpiar");
    boton[0].style.backgroundColor = "#FF7C87";

    let numeros = document.getElementsByClassName("numero");
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].style.backgroundColor = "white";  
    }
    
    let operadores = document.getElementsByClassName("operador");
    for (let i = 0; i < operadores.length; i++) {
        operadores[i].style.backgroundColor = "#FFDAB9";  
    }
});