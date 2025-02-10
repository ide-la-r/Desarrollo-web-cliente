let mensaje:string = "Hola mundo";
console.log(mensaje);

let numero:number = 120;
console.log(numero);

let esViernes:boolean = false;
console.log(esViernes);

//se pueden hacer operaciones con cualquier tipo de numeros
let real:number = 1.43;
let binario:number = 0b101;
console.log(binario);

let cadena1:string = "hola";
let cadena2:string = "hola2";
let cadena3:string = `el numero es:${numero}`;
let unionCadenas:string = cadena1 + cadena2;

//array
let array1:number[]=[1,2,3,4];
let array2:Array<number>= [5,6,7,8];

let arregloCadena: string[] = ["ts", "js", "php"];
arregloCadena.push("CSS")
console.log(arregloCadena);

//tupla
let tupla:[string, number, boolean];
tupla = ["Ismael", 19, true];
console.log(tupla[1]);
console.log(tupla);

//enumerados
enum semaforo{"Rojo"=3, "Naranja", "Verde"};
semaforo.Naranja;
let valor = semaforo.Rojo;
console.log(valor);
//para que se usa
// switch(semaforo){
//     case 3:
//         console.log("No pases");
//         break;
//     case 4:
//         console.log("Ten precaucion")
//         break;
//     case 5:
//         console.log("Adelante");
//         break;
// }

//tipo any
let nose:any;
nose = "hola";
nose = 30;

//tipo y interfaces es lo mismo
interface persona{
    nombre:string,
    apellido:string,
    edad:number,
    estado:boolean
}
let personaIsmael:persona = {
    nombre: "ismael",
    apellido: "de la Rosa",
    edad: 19,
    estado:true 
};
console.log(personaIsmael);