function Cambiar(numero){
    const letras = [ " ", "uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"]
    const nuevo = numero.map(letra => letras[letra])
    return nuevo
   

}



const numero = [1,2,3,4,5,6,7,8,9];
const resultado = Cambiar(numero)
console.log(numero)
console.log("nueva lista con numeros en letra", resultado);