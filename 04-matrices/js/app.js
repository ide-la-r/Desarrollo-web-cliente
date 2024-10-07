function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

function creaYPintaMatriz(fila,columna) {

    //Inicializar la matriz
    let matriz = new Array(columna);//genero las columnas
    for(let i=0; i < columna; i++) {
        matriz[i] = new Array(fila);//genero las filas
    }

    //RELLENAR LA MATRIZ
    let valor = 0;
    for (let i = 0; i < columna; i++) {
        for (let j = 0; j < fila; j++) {
            matriz[i][j] = valor;
            valor++;
        }
        console.log(matriz[i]);
        valor = 0;
    }
}
//normalmente se hace alrreves primero filas y luego columnas pero me ha slaido asi :)


function creaYPintaMatriz2(fila,columna) {

    //Inicializar la matriz
    let matriz = new Array(columna);
    for (let i = 0; i < columna; i++) {
        matriz[i] = [];//otra manera de crear la matriz
    }
    //relleno valores
    let valor = 0;
    for(let i=0; i < fila; i++) {
        for (let j = 0; j < columna; j++) {
            matriz[i][j] = valor;
            valor++;
        }
        valor = 0;
        console.log(matriz[i]);
    }
}

let fila = recogerNum("Dime un tamaño para la fila:");
let colum = recogerNum("Dime un tamaño para la columna:");


// creaYPintaMatriz(fila,colum);

creaYPintaMatriz2(fila,colum);

// Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// En otras palabras, 0 <= x < 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
console.log(getRandomInt(3));
// Salida: 0, 1 or 2
  
console.log(getRandomInt(1));
// Salida: 0
  
console.log(Math.random());
// Salida: un número de 0 a <1
// Generar número aleatorio entre mínimo y máximo sin incluir extremos
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}