function aniadirElementos(vec,elem,pos) {
    let res = vec.split(',');
    res.splice(pos-1, 0, elem);
    return (res);
}

let vector = prompt("Separados por coma introduce los valores de cada vector:");
let elemento = prompt("Inserta el nuevo elemento que quieres añadir a la lista de vectores:");
let posicion = prompt("Insertar la posicion donde quieres insertar el elemento:");

console.log(aniadirElementos(vector,elemento,posicion));