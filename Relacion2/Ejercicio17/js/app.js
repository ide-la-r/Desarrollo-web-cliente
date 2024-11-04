let btnCorrer = document.getElementById('correr');
btnCorrer.addEventListener('click', iniciarCarrera);
function calcularVelocidades(){
let velocidades = [];
for (let i=1; i<=4; i++){
velocidades.push(parseInt(Math.random()*5 +1));
}
console.log(velocidades);
return velocidades;
}
function iniciarCarrera(){
    console.log("Estoy aquí");
    let corredores = document.querySelectorAll("div");
    let timer;

    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];

    let velocidades = calcularVelocidades();
    let final = false;

    let estilo1 = window.getComputedStyle(div1);
    let estilo2 = window.getComputedStyle(div2);
    let estilo3 = window.getComputedStyle(div3);
    let estilo4 = window.getComputedStyle(div4);

    timer = setInterval(function(){
        let velocidad1 = parseInt(estilo1.getPropertyValue("left")) + velocidades[0];
        console.log(velocidad1);
        if (!final){
            // console.log("Estoy aquí 2");
            // div1.style.setProperty("left", velocidad1 + "px")
            // opción 2
            div1.style.left = velocidad1 + "px";
            if (div1.style.getPropertyValue("left")>=1080){
                final = true;
                alert("ha ganado div 1");
            }
        }
        else{
            clearInterval(timer);
        }
    }, 500);
}




div1.style.setProperty("left", div1.style.getPropertyValue("left") + velocidades[0] + "px");
// esto es lo mismo que lo de arriba: div1.style.left = div1.style.left + velocidades[0] + "px";