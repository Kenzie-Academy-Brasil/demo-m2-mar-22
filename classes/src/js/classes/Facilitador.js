class Facilitador extends Pessoa {
    constructor(novoNome, novaIdade, novoPeso, novoGenero, novaCpf, doaOrgaos, novoTipoSanguineo, novoModulo, novosConhecimentos) {
        super(novoNome, novaIdade, novoPeso, novoGenero, novaCpf, doaOrgaos, novoTipoSanguineo);
        this.modulo = novoModulo;
        this.devs = [];
        this.conhecimentos = novosConhecimentos;

        this.nome = this.nome.toUpperCase();
    }

    apresentar() {
        return `Olá! Meu nome é ${this.nome} e eu sou facilitador do módulo ${this.modulo}`
    }

    corrigirAtividades() {
        console.log("estou corrigindo atividades")
    }

    matricularDev(dev) {
        this.devs.push(dev);

        return this;
    }
}

const sid = new Facilitador("Sid Moreira", 18, 7, "", "12345678909", false, "O-", "M2", ["JS"]);

















