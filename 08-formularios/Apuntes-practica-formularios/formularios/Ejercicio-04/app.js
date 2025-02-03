var formu = document.forms[0];
var opcion1=formu.querySelector("#opcion1");
var opcion2=formu.querySelector("#opcion2");
var opcion3=formu.querySelector("#opcion3");
var area = document.getElementById("area");

function actualizarArea(){
    let contenido=[];
    if(opcion1.checked){
        contenido.push(document.querySelector('label[for="opcion1"]').textContent);

    }
    if(opcion2.checked){
        contenido.push(document.querySelector('label[for="opcion2"]').textContent);

    }
    if(opcion3.checked){
        contenido.push(document.querySelector('label[for="opcion3"]').textContent);
 
    }
    area.textContent = contenido.join(", ");
}
opcion1.onclick= actualizarArea;
opcion2.onclick= actualizarArea;
opcion3.onclick= actualizarArea;