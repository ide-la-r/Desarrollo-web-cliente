let contador = 0;
let valor;
let salir = false;
let cadenaNumeros = " ";
let media = 0;
while (contador < 10 || valor != ".") {
    valor = prompt("Inserta el numero " + (contador+1) + " o bien '.' para terminar");
    if (isNaN(valor) && valor != ".") {
        do {
            valor = prompt("Inserta el numero " + (contador+1) + " o bien '.' para terminar");
        } while (isNaN(valor) && valor != ".");
    }
    if (valor == ".") {
        contador = 10;
    }
    else{
        cadenaNumeros += valor + ", ";
        media += Number(valor);
    }
    contador++;
}

alert(media)
alert(contador)
alert(cadenaNumeros + ". Media: " + (media/(contador+1)));