function encontrarLetraS(arrayNombres){
    return arrayNombres.filter(nombre => nombre.endsWith("s") || nombre.endsWith("S",))   
}
const arrayNombres = ["brayan","luis","tomas","ramos","tatiana"]
const palabrasEncontradas = encontrarLetraS(arrayNombres)
console.log(arrayNombres)
console.log("estas son las nombres que termina con la letra S", palabrasEncontradas)

// El endsWith método compara el value parámetro con la subcadena al final de esta cadena y devuelve un valor que indica si son iguales.
// El método filter() devolverá un nuevo array con todos los valores que nos hayamos quedado, para los cuales la función haya devuelto true.