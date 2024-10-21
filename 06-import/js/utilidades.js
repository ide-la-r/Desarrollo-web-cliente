//incluimos y definimos las funciones a exportar

export function saludar(nombre) {
    return (`Hola, ${nombre}`);
}
export function despedida(nombre) {
    return (`Hasta luego, ${nombre}`);
}

function saludos(nombre) {
    return (`Hola, ${nombre}`);
}

//Exporto las funciones de las dos maneras se puede
export {saludos};