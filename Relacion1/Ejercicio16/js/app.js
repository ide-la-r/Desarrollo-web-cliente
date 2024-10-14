function iniciarMesas(a,numMesas) {
    for (let i = 0; i < numMesas; i++) {
        a.push(Math.floor(Math.random() * (4 - 0 + 0) + 0));   
    }
}

function comprobarComensales(personas) {
    if (personas > 4) {
        do {
            alert(`Lo siento no admitimos grupos de ${personas} personas,haga grupos de 4 personas como máximo e intente de nuevo`);
            personas = prompt("Cuantas personas son:");
        } while (personas > 4);
    }  
    return (personas); 
}

function solicitarComensales(a) {
    let comensales = prompt("Introduce el numero de comensales:");
    comensales = comprobarComensales(comensales);
    console.log("Estado de las mesas: " + a);
    console.log("El usuario pide una mesa para " + comensales);
    
    let temp = false;
    while (comensales >= 0) {
        for (let i = 0; i < a.length; i++) {
            if ((a[i] + Number(comensales)) < 5) {
                a[i] = a[i] + Number(comensales);
                console.log("Porfavor sientese en la mesa " + (i+1));
                temp = true;
                i = a.length; 
            }
            else{
                temp = false;
            }
        }
        if (temp == false) {
            console.log("Lo siento, no queda sitio en el restaurante.")
        }
        console.log("Estado de las mesas: " + a)
        comensales = prompt("Introduce el numero de comensales:");
        comensales = comprobarComensales(comensales);
    }
    
}

let numMesas = prompt("Introduzca el numero de mesas que quiere que tenga su restaurante:");
let mesas = [];
iniciarMesas(mesas,numMesas);
solicitarComensales(mesas);