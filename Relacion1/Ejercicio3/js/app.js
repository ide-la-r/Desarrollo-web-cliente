let a = prompt("Introduce lo que quieres concatenar en a:");
let b = prompt("Introduce lo que quieres concatenar en b:");

function concatenarArrays(a,b) {
    let c = [];
    let contador = 1
    let j = 0;
    let x = 0;
    let cadena1 = a.split(',');
    let cadena2 = b.split(',');
    for (let i = 0; i < (cadena1.length + cadena2.length); i++) {
        if (contador % 2 == 0){
           c[i] = cadena2[j];
           j++;
        } 
        else{
            c[i] = cadena1[x];
            x++;
        }
        contador++;
    }
    return (c);
}

console.log(concatenarArrays(a,b));