function numeroPalabras(palabras) {
    const elemento = {
        "cero": 0, "uno": 1,"dos": 2, "tres": 3,"cuatro": 4, "cinco": 5,"seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };

    const resultado = []; 

    palabras.forEach(elem => {
        if (elemento[elem] !== undefined) {
            resultado.push(elemento[elem]);
        } else {
            resultado.push(-1);
        }
    });

    return resultado;
}


const palabras = ["cero", "uno", "tres", "what", "cinco"];
const resultadofinal = numeroPalabras(palabras);
console.log(palabras)
console.log(resultadofinal);






