function sumaParcial(a) {
    for (let i = 0; i < a.length - 1; i++) {
        a[i + 1] = a[i] + a[i + 1];
    }
    return (a);
}

let a = [1, 2, 3, 4, 5];

console.log(sumaParcial(a));