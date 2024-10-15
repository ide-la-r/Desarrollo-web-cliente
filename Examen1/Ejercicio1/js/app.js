let unidad;
do {
    unidad = Number(prompt("Introduce un numero, 1 para cambio a pesetas y 2 para cambio a dólares"));
} while ((unidad < 0 || unidad > 2) || isNaN(unidad));


let cantidad;
do {
    cantidad = Number(prompt("Introduce el numero de euros a convertir:"));
} while (cantidad < 0 || isNaN(cantidad));



if (unidad == 1) cantidad = (cantidad * 166);
else if (unidad == 2) cantidad = (cantidad * 1.09);

alert(`La conversion es: ${cantidad}`);