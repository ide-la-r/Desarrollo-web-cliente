var formu = document.forms[0];
var opcion1=formu.querySelector("#opcion1");
var opcion2=formu.querySelector("#opcion2");
var opcion3=formu.querySelector("#opcion3");
var area = document.getElementById("area");

document.getElementById("boton").onclick=function(event){
    event.preventDefault();
    let selecionado=[];
    if(opcion1.checked){
        var label1 = document.querySelector('label[for="opcion1"]').textContent;//esta opcion coge el valor del label si su checkbox esta seleccionado
        selecionado.push(label1);
    }
    if(opcion2.checked){
        selecionado.push(opcion2.value);
    }
    if(opcion3.checked){
        selecionado.push(opcion3.value);
    }
    area.textContent=selecionado.join(", ");
}