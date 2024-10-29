console.log("Manejo elementos DOM");

/*
Crear elementos en el DOM
.createElement(tag, options); // crear y va a devolver un elemento HTML
.createComment(text); // Crear y devuelve un nodo de comentarios HTML <!-- text -->
.createTextNode(text); //Crea y devuelve un nodo HTML con el texto text.
.cloneNode(deep); // Clona el nodo HTML y devuelve una copia. deep se envia false por defecto
.isConnected; //Indica si el nodo HTML ya esta insertado
*/

let elemento = document.getElementById('boton1');
elemento.addEventListener('click', incluyoElemento);
elemento.addEventListener('dblclick', incluyoElemento);//por si hacen doble click

function incluyoElemento(){
    //crear un nuevo div y vamos a añadirle nuevo contenido
    let nuevoDiv = document.createElement("div");
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV")
    nuevoDiv.appendChild(nuevoContenido);

    console.log(nuevoDiv);
    //Añadir este nuevo elemento a la seccion a la que lo queremos añadir
    let seccionActual = document.getElementById('seccionDivsAIncluir');
    
    /*
    // insertBefore(newNode, referenceNode);
    esto es para añadir un elemento por delante del que queramos añadir.
    document.body.insertBefore(nuevoDiv, seccionActual);
    */
     seccionActual.appendChild(nuevoDiv)
}

let elemento2 = document.getElementById('boton2');
elemento2.addEventListener('click', incluyoElemento2);
elemento2.addEventListener('dblclick', incluyoElemento2);

//es lo mismo que lo de arriba pero utilizamos innerHTML
function incluyoElemento2(){
    //crear un nuevo div y añadimos su contenido
    //createElement(tagName);
    let nuevoDiv = document.createElement("div");
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido mediante un DIV-2")
    nuevoDiv.appendChild(nuevoContenido);

    //esto y lo de abajo es lo mismo, preguntar al maestro
    let actualDiv = document.getElementById("divAIncluir");
    actualDiv.innerHTML += nuevoDiv.outerHTML;
}

let elemento3 = document.getElementById('boton3');
elemento3.addEventListener('click', incluyoElemento3);
elemento3.addEventListener('dblclick', incluyoElemento3);

function incluyoElemento3(){
    //crear un nuevo div y añadimos su contenido
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.background = 'blue';
    nuevoDiv.style.color = 'white';
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido mediante un DIV-3")
    nuevoDiv.appendChild(nuevoContenido);

    let actualDiv = document.getElementById("divAIncluir");
    actualDiv.appendChild(nuevoDiv);
}

/*
Quiero asignarle Options
Object.assign(target, source1)

const elem = Object.assign(document.createElement("h1"), {className:"rojo", textContent:"red"});
document.body.appendChild(elem);
*/

let elemento4 = document.getElementById('boton4');
elemento4.addEventListener('click', incluyoElemento4);
elemento4.addEventListener('dblclick', incluyoElemento4);

function incluyoElemento4(){
    //crear un nuevo div y añadimos su contenido
    let nuevoDiv = Object.assign(document.createElement("div"), {className:"rojo", textContent:"Clase roja."});
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido mediante un DIV-4")
    nuevoDiv.appendChild(nuevoContenido);
    //añadimos el elemento que hemos creado y su contenido
    let actualDiv = document.getElementById("divAIncluir");
    actualDiv.appendChild(nuevoDiv);
}

let elemento5 = document.getElementById('reemplazoChild');
elemento5.addEventListener('click', reemplazoChild);
elemento5.addEventListener('dblclick', reemplazoChild);

function reemplazoChild() {
    //tambien se puede hacer con querySelectorAll y coger el ultimo recorriendo el array o con el length
    let listItem = document.querySelector("li:last-child");//con esto cogemos al ultimo hijo
    
    //opcion 2 recupero el Array de elementos de la lista
    /*
    let listItems = document.querySelectorAll("li");
    console.log("Numero de elementos: " + listItems.length);

    let listItem = listItems[listItems.length - 1];
    */

    let nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = '<a href="#">Productos</a>';
    console.log(nuevoItem);
    listItem.parentNode.replaceChild(nuevoItem, listItem);//Con esto me desplazo al nodo padre y cambio el item seleccionado por el nuevo item
}

let elemento6 = document.getElementById("imagenEnlace");
elemento6.addEventListener('click', agregarDivEnlaceEImagen);
elemento6.addEventListener('dblclick', agregarDivEnlaceEImagen);

function agregarDivEnlaceEImagen(){
    //pedir al usuario el URL de la imagen y del enlace
    var urlImagen = prompt("Por favor, introduce la URL de la imagen: ", "./img/foto1.jpg");
    var urlEnlace = prompt("Por favor, introduce la URL del enlace;: ", "https://www.ejemplo.com");

    //crear un nuevo div
    var nuevoDiv = document.createElement("div");

    //Crear un nuevo enlace
    var enlace = document.createElement("a");
    enlace.href = urlEnlace; //URL del anlace introducido por el usuario
    enlace.textContent = "Informacion adicional";//texto del enlace

    //crear una nueva imagen
    var imagen = document.createElement("img");
    imagen.src = urlImagen; //URL de la imagen introducida
    imagen.alt = "Imagen Dinamica"; //texto alternativo de la imagen
    //imagen.style.width = "100px"; Ancho de la imagen
    //imagen.style.heigth = "100px"; Altura de la imagen

    //Agregar el enlace y la imagen al div
    nuevoDiv.appendChild(enlace);
    nuevoDiv.appendChild(imagen);

    //Agregar el nuevo div a la seccion especifica
    var seccion = document.getElementById("seccionDivsAIncluir2");
    seccion.appendChild(nuevoDiv);
}