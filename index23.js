function duplicados(numeros){
    for(let i = 1; i <= numeros.length; i++){
        const item = [i] * 2
        numerosDuplicados.push(item);
    }
    console.log("primer array", numeros)
    console.log("numeros duplicados",numerosDuplicados)
}


const numerosDuplicados = [];
const numeros = [1,2,3,4,5,6]
duplicados(numeros)