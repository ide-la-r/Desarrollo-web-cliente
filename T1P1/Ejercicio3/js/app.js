let num = 0;
do {
    num = Number(prompt("Introduce un numero entre 5 y 10"));
} while (isNaN(num) || num < 5 || num > 10);

let a = [];
for (let i = 0; i < num; i++) {
    a[i] = Math.floor(Math.random() * 100);
}

let res = "";
let media = 0;
for (let i = 0; i < a.length; i++) {
    res += a[i] + " ";
    media += a[i];
}
console.log(res);
console.log(media/num);