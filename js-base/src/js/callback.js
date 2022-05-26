const VALORES = [5, 3];

function calculadora(valoresCalculo, callbackFn) {
    return callbackFn(valoresCalculo[0], valoresCalculo[1])
}

function soma(valor1, valor2) {
    return valor1 + valor2;
}

function subtracao(valor1, valor2) {
    return valor1 - valor2
}

const resultadoSoma = calculadora(VALORES, soma);
const resultadoSub = calculadora(VALORES, subtracao);
const resultadoDivisao = calculadora(VALORES, (valor1, valor2) => {
    return valor1 / valor2
})

// console.log({
//     resultadoSoma,
//     resultadoSub,
//     resultadoDivisao
// })