let autos = ['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos);

let item = new Array(1,6);
console.log(item);
let items = new Array(6);
console.log(items);


//let pets = new Array('perro', 'gato', 'periquito');
let pets = ['perro', 'gato', 'periquito'];
console.log(pets);
console.log(pets.length);
console.log(pets[0]);

//iterar en el array
let len = pets.length;
let i = 0;
for (i = 0; i < len; i++) {
    console.log(pets[i]);
}

pets.push('ranita');
console.log(pets[i]);

pets[8] = 'toro';//te pone undefined en los huecos desde por donde va hasta 
//el que le he dicho que meta el valor
console.log(pets);
pets.push('loro');
console.log(pets);

console.log(pets.pop());
console.log(pets);
console.log(pets.shift());//Esto elimina el primer elemento del array

pets.unshift('perro1');//Añade desde el principio
console.log(pets);

const months = ['jan', 'march', 'april', 'june'];
months.splice(1, 0, 'may');//el 0 es insertar un elemento
console.log(months);

months.splice(1, 1, 'feb');//El 1 reemplaza donde le digas
console.log(months);

//el segundo numero son los numeros a borrar a partir de la posicion que le digas.
months.splice(2, 2, 'july', 'august', 'sept');//
console.log(months);

let eliminados = months.splice(3);
console.log(eliminados);

console.log(months);

console.log(months.reverse());//lo pone alrreves
console.log(months.sort());//ordenacion alfanumerica

//MATRICES
let matriz = [];

// let tam = prompt("Dime el tamaño de columna");

// for (let i = 0; i < tam; i++) {
//     matriz[i] = new Array(i);
// }

//Partes de una palabra, frase, vectores... delimitados por un separador
let cadena = "Javascript es un lenguaje de programacion";
let vector = "12,34,45,6,7,9";

console.log(cadena.replace('Java','JOSE'));//Cambia lo que digas de la cadena por lo otro que le digas

let palabras = cadena.split(' ');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);

//busqueda de una posicion
let posicion = months.indexOf("jan");
console.log(posicion);

//slice te elimina el numero de elementos que le digas empezando por delante
console.log(months.slice(1));
console.log(months.slice(-1));//te coje desde atras y borra todos los demas
console.log(months.slice(0,2));//te coje desde el primero hasta el segundo los demas los borra

