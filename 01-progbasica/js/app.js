//alert("Hola mundo");

// Para definir las variables vamos a usar var(globales), let(en bloque) o const(constante para no ser modificadas)
// puedo poner que una variable sea de varios tipos a lo largo de el programa, incluso hace solo el casteo

//'use strict';
// Es para avisar de que no cambie la variable de tipo.

var ok;

console.log("Hola mundo");

nombre = "Ismael";
console.log(nombre)

var nombre = null;
let a = 2;
let b = 'hola';
let c = a + b;
console.log(c)

console.log(typeof a);

console.log( a + ok);// no da nada porque no esta inicializada

let hola = false;

console.log(typeof hola);

if (a > b)
    console.log("Hola me llamo ismael")
else
    console.log("Hola no me llamo ismael")

//quokka cntrl + shift + p
let objeto = Symbol("id1"); /*esto es un objeto que se llama objeto de tipo simbol y
                              su valor es id1, lo que hace es que aunque dos simbolos
                              tengan el mismo valor son diferentes porque internamente
                              son distintos, como cuando dos personas se llaman igual
                              pero no son la misma persona.*/
console.log(typeof objeto);

let horaDia = 0;
let mensaje = "";

if (horaDia >= 6 && horaDia <= 12)
    console.log("Buenos dias son las " + horaDia);
else if(horaDia > 12 && horaDia <= 18)
    console.log("Buenas tardes so las " + horaDia);
else if(horaDia > 18 && horaDia < 24 || horaDia >= 0 && horaDia <= 5)
    console.log("Buenas noches son las " + horaDia);
else
    console.log("Ese numero es incorrecto");

let z = 2;
let y = '2';

y = y * 1;;
if (z === y) //Si ponemos dos = dice que son iguales, porque son iguales pero no identicos.
    console.log("Son iguales");
else
    console.log("No son iguales");

// El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
// Se usa para tomar una decisión basada en una // expresión que se evalúa como true o false
// Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
// y rápido de escribir.

let resultado = (z>y) ? "verdadero" : "Falso"; //tambien puedes poner por ejemplo 0 : 1
console.log(resultado);


let miNumero = "18";
console.log(miNumero);

if(isNaN(miNumero)) // if is Not a Number
    console.log("No es un numero")

miNumero = Number(miNumero); //castearlo a numero
console.log(miNumero);

let miString = String(miNumero); //castearlo a un string
console.log(miString);

let contador = 0;
while (contador < 3){
    console.log(contador);
    contador++;
}

contador = 0;
do{
    console.log(contador++);
} while (contador < 4)

for (let conta = 0; conta < 5; conta++){
    console.log(conta);
}


let mes = 12;
let estacion = "desconocida";
switch(mes){
    case 1: case 2: case 12:
        estacion = "invierno";
        break;
    case 3: case 4: case 5:
        estacion = "primavera";
        break;
    case 6: case 7: case 8:
        estacion = "verano";
        break;
    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    default:
        estacion = "valor incorrecto";  
}
console.log(estacion);

for (let i=0; i<=5; i++){
    for (let j=0; j<=5; j++){
        console.log("c1 " + i + " c2 " + j)
        if (j == 2){
            //break;
            //continue;
        }
    }
}

let objeto3 ={
    nombre: "Ismael",
    apellido: "de la Rosa",
    edad: 47
}

console.log(typeof objeto3);
console.log(objeto3);

let marcaCoches = ["ford", "audi", "pagani", "ferrari"];
for (let i=0; i<=marcaCoches.length; i++){
    console.log(marcaCoches[i])
}
console.log(marcaCoches);

//definir clase
class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    toString(){
        return `El nombre es: ${this.nombre} el apellido: ${this.apellido} y la edad: ${this.edad}`;
    }
}

console.log(typeof Persona)
console.log(Persona);

let persona1 = new Persona('Juan', "Perez", 42);
console.log(persona1.toString());

let persona2 = new Persona(objeto3.nombre, objeto3.apellido, objeto3.edad);
console.log(persona2.toString());

var aa = 4;
var bb = 5;

function miFuncion(xx,yy){
    let aa = 10; 
    let bb = 8;//Prevalece las variables locales antes que las de fuera de la funcion
    console.log("Suma: " + (xx + yy));
    console.log("Suma: " + (aa + bb));
    return (xx + yy);
}

let result = miFuncion(10, 12);
console.log(result);

// function Sumar(){
//     let a = prompt("Dime numero A: "); //es lo mismo con el window que sin el, sin el mas corto
//     let b = window.prompt("Dime numero B:");
//     while(isNaN(a) || isNaN(b)){
//         alert(`Has introducido valores no aceptados`)
//         a = prompt("Dime numero A: ");
//         b = window.prompt("Dime numero B:"); 
//     }
//     let c = Number(a) + Number(b);
//     alert(`La suma es: ${Number(c)}`);
// }
// Sumar();