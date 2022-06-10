class Orgao {
    constructor(nome, tipoSanguineo, doador) {
        this._nome = nome.toUpperCase();
        this.tipoSanguineo = tipoSanguineo.toUpperCase();
        this.doador = doador;
    }
}