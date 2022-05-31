/**
 * DONE - FOREACH & MAP
 * DONE - FILTER & FIND
 * DONE - EVERY & SOME
 * DONE - REDUCE
 * DONE - SORT
 */
const meuConjuntoDados = [
    10,
    20,
    "Churros",
    "Victor Augusto",
    [
        1,2,3
    ]
];

//Executa uma função para cada item do array
meuConjuntoDados.forEach((elem, index, array) => {
    // console.log({
    //     elem, index, array
    // })
})

//Executa uma função para cada item do array e retorna um novo array
const novoArrayConjunto = meuConjuntoDados.map((elem, index, array) => {
    const validacao = {
        item: elem,
        posicao: index,
        numerico: typeof elem === "number"
    }

    if (validacao.numerico) {
        return "é numérico";
    } else {
        return "não é numérico";
    }
})

//Executar uma função de teste e retornar em um novo array os itens que passaram no teste
const dadosNumericos = meuConjuntoDados.filter((elem, index, array) => {
    return typeof elem === "number"
})

//Executar uma função de teste e retornar em uma variável O PRIMEIRO ITEM que passar no teste
const dadoNumerico = meuConjuntoDados.find((elem, index, array) => {
    return typeof elem === "number"
})

//Executar uma função de teste e retorna true se TODOS OS ITENS passarem no teste
const validacaoString = meuConjuntoDados.every((elem, index, array) => {
    return typeof elem === "string"
})

//Executar uma função de teste e retorna true se AO MENOS 1 ITEM passar no teste
const aoMenos1String = meuConjuntoDados.some((elem, index, array) => {
    return typeof elem === "string"
})

const valores = [
    30, 40, 10, 20,50
];

//Reduzir a o array em um único valor, baseado em uma função de callback
const resultado = valores.reduce((acumulador, atual, index, array) => {
    // console.log({
    //     acumulador,
    //     atual,
    //     resultado: acumulador < atual
    // })

    return acumulador + atual
})



const valores2 = [
    {valor1: 10, valor2: 20 },
    {valor1: 20, valor2: 30 },
    {valor1: 40, valor2: 50 },
]

function somarValores(listaValores) {

    const resultadoSoma = listaValores.reduce((acc, atual) => {
        acc.valor1 += atual.valor1
        acc.valor2 += atual.valor2

        return acc 
    }, {valor1: 0, valor2: 0});

    console.log(resultadoSoma)
}

somarValores(valores);

valores.sort((primeiro, segundo) => {
    return primeiro - segundo
})

// console.log(valores)


const nomes = [
    {nome: "Jardel"},
    {nome: "Victor"},
    {nome: "Maria"},
    {nome: "Heric"}
]

nomes.sort((a, b) => {
    if (a.nome < b.nome) {
        return -1
    } else {
        return 1
    }
})

// const numeros = [10,20,30,20,15,321,654,8,9,7,5,1,8,9,5,4,9,5];

// const numeroRepetido = numeros.sort().filter((elem, index, array) => {
//     return elem === array[index + 1]
// })

// console.log(numeroRepetido)