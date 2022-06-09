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
        this.orgaosDoados.push(orgao)

        this.adicionarHistoricoDoacao(orgao, "kenzinho");
    }

    /**
     * To-do Código de avaliação para saber se o Donatário 
     *          bate com o tipo sanguineo do orgão doado 
     */
    removerOrgaoDoBanco(orgao) {
        const orgaoEncontrado = this.orgaosDoados.find((elem) => {
            return elem === orgao
        })

        if (orgaoEncontrado) {
            //Código de avaliação
            const indexOrgao = this.orgaosDoados.indexOf(orgaoEncontrado);

            this.orgaosDoados.splice(indexOrgao, 1);

            this.adicionarHistoricoRecepcao(orgao, "kenzinho")
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