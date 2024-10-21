function inicioDOM() {
    console.log("DOM cargado");
    document.body.style.background = 'red';

    //document.getElementById
    let titulo = document.getElementById("title");

    //el innerHTML, lo que hace es ver el contenido de title pero te lo coje como objeto
    console.log(titulo.innerHTML);
    //Lo que hace es sacarte la etiqueta entera del HTML
    console.log(titulo);
    //te saca solo el contenido
    console.log(titulo.textContent);
    //nos da lo que mide el contenido
    console.log(titulo.textContent.length);
}