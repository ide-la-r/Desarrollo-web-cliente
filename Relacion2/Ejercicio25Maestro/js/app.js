// Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM. -->

// <!-- Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento.

console.log("Estoy");

let btnAgregarAntes = document.getElementById('btnAgregarAntes');
btnAgregarAntes.addEventListener('click', agregarAntes);

function agregarAntes(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea detras del 1er elemento";

    primerElem.before(nuevoElem);
}

let btnAgregarDespues = document.getElementById('btnAgregarDespues');
btnAgregarDespues.addEventListener('click', agregarDespues);

function agregarDespues(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea delante del 1er elemento";

    primerElem.after(nuevoElem);
}

let btnAgregarPrimero = document.getElementById('btnAgregarPrimero');
btnAgregarPrimero.addEventListener('click', agregarPrimero);

function agregarPrimero(){
    let primerElem = document.getElementById('listaTareas');//ataca al ul

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea detras de todos los elementos";

    primerElem.prepend(nuevoElem);
}

let btnAgregarUltimo = document.getElementById('btnAgregarUltimo');
btnAgregarUltimo.addEventListener('click', agregarUltimo);

function agregarUltimo(){
    let primerElem = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea delante de todos los elementos";

    primerElem.append(nuevoElem);
}

let btnReemplazarTodos = document.getElementById('btnReemplazarTodos');
btnReemplazarTodos.addEventListener('click', reemplazarTodos);

function reemplazarTodos(){
    let primerElem = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Reemplazo todos los hijos por mi";
    nuevoElem.id = "primerElemento";

    primerElem.replaceChildren(nuevoElem);
}

let btnReemplazarHijo = document.getElementById('btnReemplazarHijo');
btnReemplazarHijo.addEventListener('click', reemplazarHijo);

function reemplazarHijo(){
    let primerElem = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Reemplazo el elemento seleccionado por mii";

    primerElem.replaceWith(nuevoElem);
}

let btnBorrarElemento = document.getElementById('btnBorrarElemento');
btnBorrarElemento.addEventListener('click', borrarElemento);

function borrarElemento(){
    let primerElem = document.querySelector('li');//me da el primero de todos el querySelector

    primerElem.remove();
}