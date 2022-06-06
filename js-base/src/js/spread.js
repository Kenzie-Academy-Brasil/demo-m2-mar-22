let churros = "Teste"

/**
 * Spread/Espalhar => ...
 */

//Spread Array
const array1 = ["Victor", "Jardel"];
const array2 = [...array1, "Churros", "Maria"];

const array3 = [...array1, ...array2]

// console.log({array1, array2, array3})

const veiculo = {
    qtdPortas: 2,
    cor: "Azul",
    nome: "Kenzie Car",
    marca: "Kenzie"
}

const {cor, nome, marca} = veiculo

const moto = {
    ...veiculo,
    qtdPortas: 0,
    cor: "vermelha",
    rodas: 2
}

delete moto.qtdPortas

// console.log({veiculo, moto})

const array = [20, 01, 10, 5, 4];

// console.log(Math.max(...array))



function minhaFuncao(nome, cpf, ...args) {
    console.log([nome, cpf, ...args])
}

// minhaFuncao("Victor Augusto", "12345678909", 10, 20 , 30)