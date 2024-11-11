let agregarImagen = document.getElementById("btnAgregarDivImagen");

let contenedor = document.getElementById("seccionDinamica");

agregarImagen.addEventListener("click", function(){
    let div = document.createElement("div");
    div.classList = "caja";

    let titulo = document.createElement("h2");
    titulo.textContent = prompt("Inserta el titulo:");
    div.appendChild(titulo);

    let imagen = document.createElement("img");
    imagen.src = prompt("Inserta el enlace de la imagen:", "./img/foto1.jpg");
    div.appendChild(imagen);

    let enlace = document.createElement("a");
    enlace.href = prompt("Inserta el enlace:");
    enlace.textContent = "Ver mas";
    div.appendChild(enlace);

    contenedor.appendChild(div);
});

let resetear = document.getElementById("btnResetearSeccion");

resetear.addEventListener("click", function(){
    let divs = contenedor.querySelectorAll("div");
    for (let i = 0; i < divs.length; i++) {
        contenedor.removeChild(divs[i]);
    }
});