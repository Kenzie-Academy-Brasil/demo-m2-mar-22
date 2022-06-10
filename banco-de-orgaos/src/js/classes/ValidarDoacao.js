class ValidarDoacao {
    static protocoloAtendimento = "Uma string"

    static validarTipoSanguineo(orgao, donatario) {
        let transplanteValidado = false;

        if (orgao.tipoSanguineo === donatario.tipoSanguineo) {
            transplanteValidado = true;
        }

        return transplanteValidado;
    }
}