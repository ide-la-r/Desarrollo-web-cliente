function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

function getRandomIntNotInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function creaMatrizRandom(fila,columna) {

    //Inicializar la matriz
    let matriz = new Array(fila);
    for (let i = 0; i < fila; i++) {
        matriz[i] = new Array(columna);//otra manera de crear la matriz
    }
    //relleno valores
    let resultado = "";
    for(let i = 0; i < fila; i++) {
        for (let j = 0; j < columna; j++) {
            matriz [i][j] = getRandomIntNotInclusive(0,100);
            if(matriz[i][j] < 10) resultado += ` 0${matriz[i][j]} `;
            else resultado += ` ${matriz[i][j]} `;
        }
        resultado += "\n";    
    }
    console.log(resultado);
}


let fila = recogerNum("Dime un tamaño para la fila:");
let colum = recogerNum("Dime un tamaño para la columna:");

creaMatrizRandom(fila,colum);