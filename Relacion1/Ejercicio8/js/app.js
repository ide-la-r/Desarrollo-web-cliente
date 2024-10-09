let a = [1,2,3,4,5,6];
let b = [3,2,1,4,7,8,5];

function quitarIguales(a,b) {
    let c = [];
    let maxLength = 0;
    if (a.length > b.length) maxLength = a.length;
    else maxLength = b.length;

    for (let i = 0; i < a.length; i++) {
        let encontrado=false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                encontrado=true;
            }
        }
        if (encontrado == false) {
            c.push(a[i]);
        }
        
    }

    for (let i = 0; i < b.length; i++) {
        let encontrado=false;
        for (let j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                encontrado=true;
            }
        }
        if (encontrado == false) {
            c.push(b[i]);
        }
        
    }
    return(c); 
}

console.log(quitarIguales(a,b));