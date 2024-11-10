let celdas = document.getElementsByTagName("td");

for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("click", function(){
        switch (celdas[i].style.background) {
            case "":
                celdas[i].style.background = "yellow";
                break;
            case "yellow":
                celdas[i].style.background = "orange";
                break;
            case "orange":
                celdas[i].style.background = "green";
                break;
            case "green":
                celdas[i].style.background = "pink";
                break;
            case "pink":
                celdas[i].style.background = "";
                break;
        }
    });
}