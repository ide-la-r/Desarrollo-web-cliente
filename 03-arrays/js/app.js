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