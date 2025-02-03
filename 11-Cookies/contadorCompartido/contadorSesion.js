let incrementar = document.getElementById("incrementar")
let decrementar = document.getElementById("decrementar")
let contador = 0

function aumentarContador(){
    ++contador
    sessionStorage.setItem("comtador",contador)
}

function disminuirContador(){
    --contador
    sessionStorage.setItem("comtador",contador)
}

incrementar.addEventListener("click", aumentarContador)
decrementar.addEventListener("click", disminuirContador)