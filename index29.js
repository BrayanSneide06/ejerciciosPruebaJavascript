function arregloAsterisco(astericos){
    let contador = 0;
    const char = "*"
    for( let f of astericos){
        for( let j of f){
            if(j === char){
                contador++;
                
            }
        }

    }

    return contador
}


const astericos = ["*","","*","*"];
const resultado = arregloAsterisco(astericos)
console.log(resultado);

