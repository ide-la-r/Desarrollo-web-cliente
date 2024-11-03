let caja = document.getElementById("caja1");

let enlace = document.createElement("a");
enlace.id = "enlaceGoogle";
enlace.href = "https://www.google.com";
enlace.textContent = "Enlace para ir a Google";

let boton1 = document.createElement("button");
boton1.textContent = "Mostrar URL y texto";
boton1.addEventListener("click", mostrarInfo);

function mostrarInfo(){
    alert("URL: " + enlace.href + " Texto: " + enlace.textContent);
}

let boton2 = document.createElement("button");
boton2.textContent = "Cambiar URL y texto";
boton2.addEventListener("click", cambiarUrl);

function cambiarUrl(){
    enlace.textContent = "He cambiado";
    enlace.href = "https://www.jaimeweb.es";
}

caja.appendChild(enlace);
caja.appendChild(boton1);
caja.appendChild(boton2);