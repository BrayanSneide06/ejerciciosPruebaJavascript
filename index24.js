function empienzaconA(palabras){
    for(let i = 0 ; i < palabras.length; i++){
        console.log(palabras[i])
        if(palabras[i][0] === "a" || palabras[i][0] === "A"){
            palabrasA.push(palabras[i])
        }

        console.log("palabras que inician con a", palabrasA)
    }
}

const palabrasA = [];
const palabras = ["brayan", " carlos","andres","mauricio","alvaro"]
empienzaconA(palabras)