let crear = document.getElementById("crear")
let modificar = document.getElementById("modificar")
let consultar = document.getElementById("consultar")
let eliminar = document.getElementById("eliminar")

/*FORMA SESION */

/*
    function crear2(){
        sessionStorage.setItem("usuario","mario")
    }

    function modificar2(){
        sessionStorage.setItem("usuario","Mario 123")
    }

    function consultar2(){
        let valor = sessionStorage.getItem("usuario")
        document.getElementById("resultado").innerText="La variable usuario tiene almacenado: " + valor
    }

    function eliminar2(){
        sessionStorage.removeItem("usuario")
    }
*/

/*FORMA LOCAL */

/*
    function crear2(){
        localStorage.setItem("usuario","mario")
    }

    function modificar2(){
        localStorage.setItem("usuario","Mario 123")
    }

    function consultar2(){
        let valor = localStorage.getItem("usuario")
        document.getElementById("resultado").innerText="La variable usuario tiene almacenado: " + valor
    }

    function eliminar2(){
        localStorage.removeItem("usuario")
    }
*/

/*COOCKIES */

function crear2(){
    document.cookie = "usuario=Juan; expires=Fri, 3 Feb 2025 12:00:00 UTC; path=/";
}

function modificar2(){
    document.cookie = "usuario=Juan; expires=Fri, 6 Feb 2026 12:00:00 UTC; path=/";
}

function consultar2(){
    console.log(document.cookie);
}

function eliminar2(){
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

crear.addEventListener("click", crear2)
consultar.addEventListener("click", consultar2)
modificar.addEventListener("click", modificar2)
eliminar.addEventListener("click", eliminar2)