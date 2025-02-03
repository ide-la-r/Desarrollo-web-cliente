let incrementar = document.getElementById("incrementar")
let decrementar = document.getElementById("decrementar")

if (localStorage.getItem("contador")) {
    localStorage.setItem("contador",localStorage.getItem("contador"))
} else{
    localStorage.setItem("contador","0")
}


function aumentarContador(){
    localStorage.setItem("contador",Number(localStorage.getItem("contador"))+1)
}

function disminuirContador(){
    localStorage.setItem("contador",Number(localStorage.getItem("contador"))-1)
}

incrementar.addEventListener("click", aumentarContador)
decrementar.addEventListener("click", disminuirContador)