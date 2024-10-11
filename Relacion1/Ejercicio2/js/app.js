function countBy(x,y){
    let c = [];
    if (x <= 0 || y <= 0) {
        return (c);
    }
    
    for (let i = 1; i <= x; i++) {
        c.push(y * i);
    }
    return (c);
}

let x = 2;
let y = 16;
console.log(countBy(x,y));