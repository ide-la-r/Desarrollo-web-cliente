let array = [];//meter loa valores aqui

function likes(a) {
    let res = "";
    let contador = 0;
    for (let i = 0; i < a.length; i++) {
        contador++;
    }
    if (contador == 0) res = "No one like this";
    else if (contador == 1) res = a[0] + " likes this";
    else if (contador == 2) res = a[0] + " and " + a[1] + " like this";
    else if (contador == 3) res = a[0] + ", " + a[1] + " and " + a[2] + " like this";
    else res = a[0] + ", " + a[1] + " and " + (contador - 2) + " like this";
    return (res);
}

likes(array);