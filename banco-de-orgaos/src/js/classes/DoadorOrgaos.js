class DoadorOrgaos extends Pessoa {
    constructor(nome, idade, cpf, email, tipoSanguineo) {
        super(nome, idade, cpf, email, tipoSanguineo)
        this.historicoDoacao = [];
    }

    doarOrgao(nomeOrgao) {
        const novoOrgao = new Orgao(nomeOrgao, this.tipoSanguineo, this);
        
        this.adicionarHistorico(novoOrgao);

        return novoOrgao;
    }

    adicionarHistorico(orgaoDoado) {
        const novoHistorico = {
            orgaoDoado,
            data: new Date()
        }

        this.historicoDoacao.push(novoHistorico)

        return novoHistorico;
    }
}