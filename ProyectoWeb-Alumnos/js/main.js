console.log("javascript");

let crearAnuncio = document.getElementById("incluyeAnuncio");

crearAnuncio.addEventListener("click", incluirAnuncio)

function incluirAnuncio(){
    //pedir al usuario la direccion de la imagen y el enlace
    let pathImg = prompt("Direccion de la imagen", "./img/foto1.jpg");
    let urlEnlace = prompt("Direccion de la imagen", "https://www.marca.es");

    //Crear un div al que le vamos añadiendo nuestros child
    let nuevoHijo = document.createElement("div");

    //creo el enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto del enlace");

    //crea la imagen
    let imagen = document.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Dime el alt de la imagen";
    imagen.style.width = "100px";
    imagen.style.height = "100px";

    //agregar a nuestro hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);

    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoHijo);
}
    //Añadir un articulo
    // <article class="articles__article">
    //     <div class="article__datos">
    //         <span>Fecha: 01 de agosto</span>
    //         <span>Categoría: Pruebas</span>
    //     </div>
    //     <h4 class="article__subtitle">
    //         <a href="#">Título de artículo 5</a>
    //     </h4>
    //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
    //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
    // </article>

let creaArticulo = document.getElementById("incluyeArticulo");
creaArticulo.addEventListener("click", incluirArticulo2);

function incluirArticulo(){
    //pido al usuario titulo, descripcion, fecha del articulo y categoria
    let titulo = prompt("Dime el titulo del articulo:");
    let descripcion = prompt("Dime la descripcion del articulo:");
    let fechaArticulo = prompt("Dime la fecha del articulo:");
    let catArticulo = prompt("Dime la categoria del articulo:");

    let nuevoArticulo = document.createElement("article");
    nuevoArticulo.classList.add('articles_article');

    //esta es otra forma de añadirlo, se podria poner entero de esta manera
    nuevoArticulo.innerHTML = `<div class="article__datos">
                                    <span>${fechaArticulo}</span>
                                    <span>${catArticulo}</span>
                                </div>`;
    let nuevoSubtitulo = document.createElement("h4");
    nuevoSubtitulo.classList.add('article__subtitle');
    nuevoSubtitulo.innerHTML = `<a href="#">${titulo}</a>`;

    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = descripcion;

    //vamos a añadirle a nuevoarticulo los hijos que nos quedan por agregar
    nuevoArticulo.appendChild(nuevoSubtitulo);
    nuevoArticulo.appendChild(nuevoParrafo);

    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoArticulo);
}

function incluirArticulo2(){
    let titulo = prompt("Dime el titulo del articulo:");
    let descripcion = prompt("Dime la descripcion del articulo:");
    let fechaArticulo = prompt("Dime la fecha del articulo:");
    let catArticulo = prompt("Dime la categoria del articulo:")

    let nuevoArticulo = document.createElement("article");
    nuevoArticulo.classList.add('articles_article');

    nuevoArticulo.innerHTML =  `<div class="article__datos">
                                    <span>Fecha:${fechaArticulo}</span>
                                    <span>Categoría: ${catArticulo}</span>
                                </div>
                                <h4 class="article__subtitle">
                                    <a href="#">${titulo}</a>
                                </h4>
                                <p>${descripcion}</p>
                                <p>${descripcion}</p>`;
    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoArticulo);
}