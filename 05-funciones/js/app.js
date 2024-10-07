//Definicion de funciones

//Manera corta para funciones pequeñas.
let func = new Function("a", "b", "return a*b");
let resultado = func(10,10);
console.log(resultado);

//funcion autoinvocadas(solo se ejecuta una vez)
(function(){
    let msg = "Hola!";
    console.log(msg);
})();

//Funcion anonima
resultado = function(a,b){return a*b};
console.log(resultado(10,10));

//notacion flecha -- arrow functions
const ismael = (a,b) => a * b;

console.log(ismael(10,5));