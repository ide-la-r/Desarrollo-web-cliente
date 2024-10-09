let amigos = ["Luis", "Estela", "Angel", "Angel", "Enya", "Jose antonio"];

function amigosDeVerdad(amigos) {
    let amigosVerdad = [];
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].length == 4) {
            amigosVerdad.push(amigos[i]);
        }
    }
    return (amigosVerdad);
}

console.log(amigosDeVerdad(amigos));