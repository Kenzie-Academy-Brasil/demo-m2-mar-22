const carro = {
    marca: "ford"
}

const stringJSON = '{"nome":"Victor", "idade": 18}'
// console.log(typeof stringJSON); //string

JSON.parse(stringJSON) // Transforma uma String JSON em objeto JS
// console.log(typeof JSON.parse(stringJSON)) //object

JSON.stringify(carro) // Transforma uma Objeto em uma string JSON
// console.log(JSON.stringify(carro));

// const meuCarroJSON = JSON.stringify(carro)
