var mensaje = "Hola mundo";
console.log(mensaje);
var numero = 120;
console.log(numero);
var esViernes = false;
console.log(esViernes);


//se pueden hacer operaciones con cualquier tipo de numeros
var real = 1.43;
var binario = 5;
console.log(binario);
var cadena1 = "hola";
var cadena2 = "hola2";
var cadena3 = "el numero es:".concat(numero);
var unionCadenas = cadena1 + cadena2;


//array
var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];
var arregloCadena = ["ts", "js", "php"];
arregloCadena.push("CSS");
console.log(arregloCadena);
//tupla
var tupla;
tupla = ["Ismael", 19, true];
console.log(tupla[1]);
console.log(tupla);


//enumerados
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 3] = "Rojo";
    semaforo[semaforo["Naranja"] = 4] = "Naranja";
    semaforo[semaforo["Verde"] = 5] = "Verde";
})(semaforo || (semaforo = {}));
;
semaforo.Naranja;
var valor = semaforo.Rojo;
console.log(valor);
//para que se usa
// switch(semaforo){
//     case 3:
//         console.log("No pases");
//         break;
//     case 4:
//         console.log("Ten precaucion")
//         break;
//     case 5:
//         console.log("Adelante");
//         break;
// }


//tipo any
var nose;
nose = "hola";
nose = 30;
var personaIsmael = {
    nombre: "ismael",
    apellido: "de la Rosa",
    edad: 19,
    estado: true
};
console.log(personaIsmael);
