function contarAstericos(matrizasterico){
    let char = '*';
    let contador = 0;
    for(let i of matrizasterico){
        // console.log("hola", i)
        for(let j of i){
           for(let k of j){
                if(k === char){
                    contador++;
                }
           }
            

        }
    }

        return contador

}



const matrizasterico = [
    ['*','','*'],
    ['','*',''],
    ['*','','*']
];

const respuesta = contarAstericos(matrizasterico);
console.log(respuesta);



