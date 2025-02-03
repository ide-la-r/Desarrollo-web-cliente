var formu = document.forms[0];
var campo1=formu.elements[0];
var campo2=formu.campo2;
var boton =formu.boton;

boton.onclick=function(event){
    event.preventDefault();
    let campo=campo1.value;
    campo2.value = campo;
}
    
