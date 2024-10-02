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