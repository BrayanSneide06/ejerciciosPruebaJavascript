function functionpares(numerosPares){
    const pares = numerosPares.filter(numeros => numeros % 2 == 0)
    return pares
}

const numerosPares = [1,2,3,4,5,6];
const pares = (functionpares(numerosPares))
console.log(numerosPares)
console.log("estos son los numeros pares", pares)



