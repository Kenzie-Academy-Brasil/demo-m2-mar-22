/**
 * This => Fora de qualquer escopo (global) é igual ao Objeto Window (navegador)
 */
// alert("Olá mundo!")
// this.alert("Olá mundo de novo!")

// var nome = "Victor Augusto";

// function apresentar() {
//     // console.log(this)
//     return `Olá, meu nome é ${this.nome}`
// }

// console.log(apresentar())

/**
 * This => Quando chamado dentro de um objeto, é igual ao próprio objeto
 */

// const facilitadora = {
//     nome: "Maria Ferrari",
//     filme: "Star Wars",
//     apresentar: apresentar,
//     filmeFavorito: function() {
//         return `Meu filme favorito é ${this.filme}`
//     }
// }

// console.log(facilitadora.apresentar())
// console.log(facilitadora.filmeFavorito())




// function apresentar() {
//     return `Olá, meu nome é ${this.nome}`
// }

// const facilitadora = {
//     nome: "Maria Ferrari",
//     conhecimentos: [
//         "JS",
//         "HTML",
//         "CSS",
//         "REACT"
//     ],
//     apresentar: apresentar,
//     listarConhecimentos: function() {
//         this.conhecimentos.forEach((elem) => {
//             console.log(`Eu, ${this.nome} conheço ${elem}`)
//         })
//     },
// }

// facilitadora.listarConhecimentos()







