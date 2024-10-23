function inicioDOM() {
    console.log("DOM cargado");
    document.body.style.background = 'cyan';

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

    //getElementByName
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    //el tagName sirve para decir es el nombre de la etiqueta
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);

    //getElementByTagName
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    //Dcocument.getElementsByClassName
    parrafos = document.getElementsByClassName("parrafos1");
    console.log(parrafos);

    console.log(`Numero de parrafos que tengo: ${parrafos.length}`);
    for (let i = 0; i < parrafos.length; i++) {
        //accedemos al parrafo 3 y le cambiamos el parrafo
        if (i == 1) {
            parrafos[i].innerHTML = "Parrafo cambiado";
        }
        console.log(`Parrafo ${i + 1}: ${parrafos[i].innerHTML}`);
    }

    //querySelector()
    let parrafo1 = document.querySelector("p.parrafos1");
    console.log(parrafo1);

    //querySelectorAll()
    let elementos = document.querySelectorAll("p.parrafos1");
    for (let i = 0; i < elementos.length; i++) {
        console.log(`Parrafo ${i + 1}: ${elementos[i].innerHTML}`);
    }

    //Selecciono el DOM parcialmente.

    //me quedo con la seccion de proyectos
    let sectionProjects = document.getElementById('proyectos');
    console.log(sectionProjects);

    //igualo elementos a  lo que sea un parrafo con clase parrafos1 de la parte del dom que me ha quedado en el sectionProyects
    elementos = sectionProjects.querySelectorAll('p.parrafos1');
    console.log(`Numero de parrafos que tengo: ${elementos.length}`)
    for (let i = 0; i < elementos.length; i++) {
        console.log(`Parrafo ${i + 1}: ${elementos[i].innerHTML}`);
    }

    
}
//cambiar el color cuando lo clikea el usuario
let estado = true;
function cambioCabecera(cabecera){
    if (estado){
        cabecera.style.color = 'red';
        estado = false;
    } else {
        cabecera.style.color = 'black';
        estado = true;
    }
    //cabecera.style.color = cabecera.style.color === 'red' ? 'black' : 'red';


    //vamos a modificar el titulo 2
    function cambioSubtitulo(elemento){
        elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
    }

    //let elemento = document.getElementById('subtitle');
    //elemento.style.color = 'orange';

    document.getElementById('subtitle').onclick = cambioSubtitulo2;
    function cambioSubtitulo2(){
        let elemento  = document.getElementById('subtitle');
        elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
    }

    //opcion 1 llamada a eventos desde JS
    //Elemento.onclick = cambioSubtitulo(elemento);

    let titleh3 = document.getElementById('h3title');
    titleh3.addEventListener('click',cambioSubtitulo3());

    //lo vemos el siguiente dia
    document.getElementById('h3title').onclick = cambioSubtitulo3;
    function cambioSubtitulo3(){
        let elemento  = document.getElementById('h3title');
        elemento.style.color = (elemento.style.color === 'blue') ? 'red' : 'blue';
    }
}