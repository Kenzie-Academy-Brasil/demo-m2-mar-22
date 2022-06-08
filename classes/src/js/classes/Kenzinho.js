class Kenzinho extends Pessoa {
    constructor(novoNome, novaIdade, novoPeso, novoGenero, novaCpf, doaOrgaos, novoTipoSanguineo, novasEntregas, novosAtendimentos) {
        super(novoNome, novaIdade, novoPeso, novoGenero, novaCpf, doaOrgaos, novoTipoSanguineo);

        this.entregas = novasEntregas
        this.atendimentos = novosAtendimentos
    }

    fazerPergunta() {
        //codigo de fazer pergunta
    }
}

const kenzinho = new Kenzinho("Kenzinho", 18, 7, "", "12345678909", false, "O-", [], [])
const pedro = new Kenzinho("Pedro", 18, 7, "", "12345678909", false, "O-", [], [])
const jose = new Kenzinho("Jose", "Teste", null, null, "12345678909");


const resultado = sid.matricularDev(kenzinho)
                        .matricularDev(pedro)
                        // .apresentar();
