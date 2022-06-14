class ValidarDoacao {
    static validarTipoSanguineo(orgao, donatario) {
        let transplanteValidado = false;

        if (orgao.tipoSanguineo === donatario.tipoSanguineo) {
            transplanteValidado = true;
        }

        return transplanteValidado;
    }

    static validarDoador(doador, donatario) {
        const validacao = doador.cpf !== donatario.cpf

        return validacao;
    }

    static validarIdade(doador) {
        return doador.idade >= 18
    }
}

export default ValidarDoacao