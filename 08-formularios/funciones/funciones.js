//lo que hace es sacar por pantalla un hola cada dos segundos
setInterval(() => {console.log("hola");}, 2000);

clearInterval(B);

//para cuando queremos preguntar si quiere confirar borrar los datos del formu
function confirmarborrado(form){
    let borrar = window.confirm("se van a borrar los datos introducidos en el form");
    (borrar)?form.reset():'return false';
    /**
     * if(borrar){
     *      form.reset();
     * } else{
     *      return false;
     * }
     */
}