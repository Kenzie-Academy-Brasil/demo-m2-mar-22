class ValidarDoacao {
    constructor() {
        this.protocoloProprioAtendimento = "dadadasdas"
    }

    static protocoloAtendimento = "Uma string"

    static validarTipoSanguineo(orgao, donatario) {
        let transplanteValidado = false;

        if (orgao.tipoSanguineo === donatario.tipoSanguineo) {
            transplanteValidado = true;
        }

        return transplanteValidado;
    }
}