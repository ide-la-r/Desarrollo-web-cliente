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
for (let i = 0; i < len; i++) {
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

let tam = prompt("Dime el tamaño de columna");

for (let i = 0; i < tam; i++) {
    matriz[i] = new Array(i);
}