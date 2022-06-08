/**
 * Abstração
 * Encapsulamento
 * Herança
 * Polimorfismo
 */

/**
 * Sugar Syntax
 */
class Pessoa {
    constructor(novoNome, novaIdade, novoPeso, novoGenero, novaCpf, doaOrgaos, novoTipoSanguineo) {
        this.nome           = novoNome;
        this.idade          = novaIdade;
        this.peso           = novoPeso;
        this.genero         = novoGenero;
        this.cpf            = novaCpf;
        this.doadoOrgao     = doaOrgaos;
        this.tipoSanguineo  = novoTipoSanguineo;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade}`
    }
    
    respirar() {
        return "Estou respirando"
    }

    comerChurros() { console.log("Estou comendo Churros") }
    codar() {}
    andar() {}
    jogar() {}
}


/**
 * Function Syntax
 */
// function Pessoa(novoNome, novaIdade, novoPeso, novoGenero, novaCpf, novaOcupacao, doaOrgaos, novoTipoSanguineo) {
//     this.nome           = novoNome;
//     this.idade          = novaIdade;
//     this.peso           = novoPeso;
//     this.genero         = novoGenero;
//     this.cpf            = novaCpf;
//     this.ocupacao       = novaOcupacao;
//     this.doadoOrgao     = doaOrgaos;
//     this.tipoSanguineo  = novoTipoSanguineo;
// }

// Pessoa.prototype.apresentar = function() {
//     return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade}`
// }

// Pessoa.prototype.respirar = function() {

// }

const grupoPessoas = [];

const maria = new Pessoa("Maria", 18, 7, "", "12345678909", false, "O-");
const jardel = new Pessoa("Jardel", 55, 7, "", "12345678909", false, "O-");