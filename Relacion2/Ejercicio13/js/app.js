let pulsar = document.getElementById("mostrarOcultar");
let texto = document.getElementById("spoiler");

pulsar.addEventListener("click", function(){
    if (texto.style.display == "none" || texto.style.display == "") {
        texto.style.display = "block";
        pulsar.textContent = "Ocultar";
    }
    else{
        texto.style.display = "none";
        pulsar.textContent = "Mostrar";
    }
});