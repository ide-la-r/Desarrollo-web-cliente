var formu = document.forms[0];
var campo1=formu.elements[0];
var campo2=formu.campo2;


campo1.onkeyup = function(){
    campo2.value = campo1.value;
}
    
