function posiciones(numerosPares){
    const item = [];
    for(let i = 0; i < numerosPares.length; i++){
      if(numerosPares[i] % 2 === 0){
      item.push(i)
      }
      
    }

    return item
}
    
const numerosPares = [1,2,3,4,5,6];


const resultado = posiciones(numerosPares)
console.log(" las posiciociones de los numeros pares son : ", resultado)

