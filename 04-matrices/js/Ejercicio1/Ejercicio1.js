function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a) && ((a > 9) || a < 0)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

function creaMatrizMultiplos(fila,columna) {

    //Inicializar la matriz
    let matriz = new Array(fila);
    for (let i = 0; i < fila; i++) {
        matriz[i] = new Array(columna);//otra manera de crear la matriz
    }
    //relleno valores
    let valor = 0;
    let valorSumar = 0;
    let resultado = "";
    for(let i = 0; i < fila; i++) {
        valor = Number(recogerNum("Dime el numero para la fila: " + (i+1)));
        valorSumar = parseInt(valor);
        for (let j = 0; j < columna; j++) {
            matriz [i][j] = valor;
            valor = valor + valorSumar;
            if(matriz[i][j] < 10) resultado += ` 0${matriz[i][j]} `;
            else resultado += ` ${matriz[i][j]} `;
        }
        resultado += "\n";    
    }
    console.log(resultado);
}


let fila = recogerNum("Dime un tamaño para la fila:");
let colum = recogerNum("Dime un tamaño para la columna:");

creaMatrizMultiplos(fila,colum);