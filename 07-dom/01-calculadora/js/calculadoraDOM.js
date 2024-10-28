console.log("Aplicacion calculadora");

let botonSumar = document.getElementById('btn_sumar');
botonSumar.addEventListener('click', sumar);

function sumar(){
    let formu = document.getElementById('formulario');
    console.log(formu);

    let opA = formu['opA'];
    let opB = formu['opB'];
    console.log(opA);
    console.log(opB);
    console.log('operando A: ' + opA.value);
    console.log('operando B: ' + opB.value);

    let resultado = Number(opA.value) + Number(opB.value);
    let elemento = document.getElementById('resultado');//esto es lo del resultado de la operacion 1
    if (isNaN(resultado) || resultado == '') {
        elemento.innerHTML = `Datos introducidos incorrectos`;

        //Opciones para modificar y tener esa informacion de colores
        
        //Opcion 1
        //elemento.style.background = 'red';
        //elemento.style.color = 'white';

        //Opcion 2
        //Eliminar la clase normal y le añadimos la clase de alerta
        if (elemento.classList.contains('normal')) {
            elemento.classList.remove('normal');
        }
        elemento.classList.add('alerta')
    } else{
        elemento.innerHTML = `El resultado de la suma es: ${resultado}.`;

        //Opcion 1
        //elemento.style.background = 'green';
        //elemento.style.color = 'white';

        //Opcion 2
        if (elemento.classList.contains('alerta')) {
            elemento.classList.replace('alerta', 'normal');
        }
        else{
            elemento.classList.add('normal');
        }
    }
    //opcion 2 - recorro el array
    console.log("Recorro el array del formulario. Opcion 1");
    for (let i = 0; i < formu.length; i++) {
        console.log(formu[i]);
        console.log(formu[i].value);
    }


    //Opcion 3 para recorrer el array
    console.log("Recorro el array del formulario. Opcion 2");
    let formulario = document.forms["formulario"];
    console.log(formulario);
    let texto = "";
    for (let elemento of formulario) {
        console.log("Elemento: " + elemento);
        texto += elemento.value + "<br>";
    }
    console.log(texto);
    document.getElementById('resultado2').innerHTML = texto;
}