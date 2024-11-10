function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

let tabla = document.getElementById('generaTabla');

tabla.addEventListener('click', creoTabla);

function creoTabla(){
    let tam = recogerNum("Dime el tamaño de la matriz:");

    let seccionTabla = document.getElementById('seccionTabla');

    let nuevaTabla = document.createElement('table');
    let tablaBody = document.createElement('tbody')

    nuevaTabla.style.width = '100%';
    nuevaTabla.setAttribute('border', 1)

    for (let i = 0; i < tam; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < tam; j++) {
            let columna = document.createElement('td');
            //tambien se puede hacer con innerHTML
            let textoColumna = document.createTextNode(`Fila: ${i+1}, Columna: ${j+1}`);

            columna.appendChild(textoColumna);

            //Añadir un manejador de eventos para cambiar el color al hacer click en la celda oportuna
            columna.onclick = function(){
                cambiarColorColumna(this);
            };
            fila.appendChild(columna); //Añadimos la celda que acabamos de crear a la fila que estoy construyendo
        }
        tablaBody.appendChild(fila); //Añadimos las filas en la tabla,, a su vez le estamos añadiendo las columnas que estan dentro de filas.
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
}

function cambiarColorColumna(columna){
    columna.style.backgroundColor = columna.style.backgroundColor === 'blue' ? 'green' : 'blue';
}