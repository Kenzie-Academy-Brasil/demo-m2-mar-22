const conjuntoDados = [
    "12",
    "Victor Augusto",
    16,
    "Jardel"
];

function newForEach(callbackFn, thisArg, arrayIterado) {
    for (let contador = 0; contador < arrayIterado.length; contador++){
        const elem = arrayIterado[contador];
        const index = contador;

        callbackFn(elem, index, arrayIterado)
    }
}

newForEach((elem, index, array) => {
    console.log(elem)
}, null, conjuntoDados)