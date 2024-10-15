function recogerNum(mensaje){
    let a = Number(prompt(mensaje));
   
    while (isNaN(a) || (a < 2 || a > 5)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

function recogerNum2(mensaje){
    let a = Number(prompt(mensaje));
   
    while (isNaN(a) || (a < 0 || a > 1)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

let num = recogerNum("Introduce un valor entre 2 y 5")

let matriz = new Array(num);
for (let i = 0; i < num; i++) {
    matriz[i] = new Array(num);
}

let res = "";
let media = 0;
let contador = 0;
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        matriz[i][j] = Math.floor(Math.random() * (99 - 1 + 1) + 1);
        media += matriz[i][j];
        contador++;
        if(matriz[i][j] < 10) res += ` 0${matriz[i][j]} `;
        else res += ` ${matriz[i][j]} `;
    }
    res += "\n";
}
console.log(res);
let mediaTotal = media / contador;
console.log("La media de los valores es: " + (mediaTotal));


let resultado = [[],[]]
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (matriz[i][j] > mediaTotal) resultado[0].push(matriz[i][j]);
        else resultado[1].push(matriz[i][j]);
    }
}


let res2 = "";
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < resultado[0].length; j++) {
        if(resultado[i][j] < 10) res2 += ` 0${resultado[i][j]} `;
        else res2 += ` ${resultado[i][j]} `;
    }
}
res2 += "\n";
for (let i = 1; i < 2; i++) {
    for (let j = 0; j < resultado[1].length; j++) {
        if(resultado[i][j] < 10) res2 += ` 0${resultado[i][j]} `;
        else res2 += ` ${resultado[i][j]} `;
    }
}

console.log("La matriz resultado es:")
console.log(res2);

let ordenar = recogerNum2("Inserta el numero 0 para ordenar ascendente o 1 para descendente");
if (ordenar == 0) {
    resultado[0].sort();
    resultado[1].sort();
}
else if (ordenar == 1) {
    resultado[0].reverse();
    resultado[1].reverse();
}

res2 = "";
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < resultado[0].length; j++) {
        if(resultado[i][j] < 10) res2 += ` 0${resultado[i][j]} `;
        else res2 += ` ${resultado[i][j]} `;
    }
}
res2 += "\n";
for (let i = 1; i < 2; i++) {
    for (let j = 0; j < resultado[1].length; j++) {
        if(resultado[i][j] < 10) res2 += ` 0${resultado[i][j]} `;
        else res2 += ` ${resultado[i][j]} `;
    }
}

console.log("La matriz resultado ordenada es:")
console.log(res2);