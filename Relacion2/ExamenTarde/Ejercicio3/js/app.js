function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a) || a < 0 || a > 10){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

let tabla = document.getElementById("tabla")
let boton = document.getElementById("lanzar");
let x;
let y;

boton.addEventListener("click", function(){
    let filas = recogerNum("Dime el numero de filas que va a tener la tabla:");
    let columnas = recogerNum("Dime el numero de columnas que va a tener la tabla:");

    for (let i = 0; i < filas; i++) {
        
        for (let j = 0; j < columnas; j++) {
            
            
        }
    }

});