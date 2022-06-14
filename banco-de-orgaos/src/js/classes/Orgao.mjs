class Orgao {
    constructor(nome, tipoSanguineo, doador) {
        this.nome = nome.toUpperCase();
        this.tipoSanguineo = tipoSanguineo.toUpperCase();
        this.doador = doador;
        this.dataDoacao = null;
    }
}

export default Orgao;