function restar(a, b){
    let c = Number(a) - Number(b);
    alert(`La resta es: ${Number(c)}`);
}

function sumar(a, b){
    let c = Number(a) + Number(b);
    alert(`La suma es: ${Number(c)}`);
}

function multiplicar(a, b){
    let c = Number(a) * Number(b);
    alert(`La multiplicacion es: ${Number(c)}`);
}

function dividir(a, b){
    let c = Number(a) / Number(b);
    alert(`La division es: ${Number(c)}`);
}

function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a)){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

function Calc(){ 
    let a = recogerNum("Dime numero A:"); //es lo mismo con el window que sin el, sin el mas corto
    let b = recogerNum("Dime numero B:");
    let sign = prompt("Dime el calculo que quieres hacer:");
    var i = 0;
    while(i == 0){
        switch (sign) {
            case "*":  
                multiplicar(a, b);
                i = 1;
                break;
            case "+":
                sumar(a, b);
                i = 1;
                break;
            case "-":
                restar(a, b);
                i = 1;
                break;
            case "/":
                dividir(a, b);
                i = 1;
                break;
            default:
                alert(`Has introducido valores no aceptados`);
                sign = prompt("Dime el calculo que quieres hacer:")
                break;
        }
    } 
}