class CNH {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    definirMultaInicial(multas) {
        this.multas = multas
    }

    resetarMultas() {
        delete this.multas
    }
}

const carteiraVictor = new CNH("Victor Augusto", "12345678909");
// carteiraVictor.definirMultaInicial([10,20,30])
carteiraVictor.resetarMultas()

// console.log(carteiraVictor)