import ValidarDoacao from "./ValidarDoacao.mjs"

class BancoOrgaos {
    constructor(cnpj, endereco, razaoSocial) {
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;

        this.orgaosDoados = [];
        this.historicoDoacao = [];
        this.historicoRecepcao = [];
    }

    adicionarOrgaoAoBanco(orgao) {

        const doacaoValida = ValidarDoacao.validarIdade(orgao.doador)

        if (doacaoValida) {
            this.orgaosDoados.push(orgao)

            this.adicionarHistoricoDoacao(orgao, orgao.doador);
        }
    }

    removerOrgaoDoBanco(orgao, donatario) {

        const orgaoEncontrado = this.orgaosDoados.find((elem) => {
            return elem.nome === orgao.nome.toUpperCase();
        })

        const transplanteValidado = [
            orgaoEncontrado,
            ValidarDoacao.validarTipoSanguineo(orgaoEncontrado, donatario),
            ValidarDoacao.validarDoador(orgao.doador, donatario)
        ].every((item) => item)

        if (transplanteValidado) {
            const indexOrgao = this.orgaosDoados.indexOf(orgaoEncontrado);

            this.orgaosDoados.splice(indexOrgao, 1);

            this.adicionarHistoricoRecepcao(orgao, donatario)
        }

        return orgaoEncontrado;
    }

    adicionarHistoricoDoacao(orgao, doador) {
        const novoHistorico = {
            doador,
            orgao,
            dataDoacao: new Date()
        }

        this.historicoDoacao.push(novoHistorico)

        return novoHistorico;
    }

    adicionarHistoricoRecepcao(orgao, donatario) {
        const novoHistorico = {
            donatario,
            orgao,
            dataDoacao: new Date()
        }

        this.historicoRecepcao.push(novoHistorico)

        return novoHistorico;
    }
}

export default BancoOrgaos