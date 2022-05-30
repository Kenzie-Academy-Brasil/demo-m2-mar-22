const carro = {
    qtdPortas: 4,
    cor: "Azul",
    arCondicionado: true,
    nome: "Kenzie Car",
    marca: "Kenzie"
}

const { arCondicionado: novoArCondicionado , qtdPortas } = carro;

const meuConjuntoDados = [
    10,
    "Victor",
    "Churros",
    [
        1,
        2,
        3
    ]
]

const [ primeiroDado, , churros ] = meuConjuntoDados

const [ primeiroP, segundoP ] = Array.from(document.querySelectorAll("p"));