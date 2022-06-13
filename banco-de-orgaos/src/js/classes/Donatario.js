class Donatario extends Pessoa{
    constructor(nome, idade, cpf, email, tipoSanguineo, listaEspera) {
        super(nome, idade, cpf, email, tipoSanguineo);

        this.listaEspera = listaEspera;
        this.orgaosEmEspera = [];
        this.historicoOrgaosRecebidos = [];
    }

    subirListaEspera(){

    }
    adicionarOrgaoListaEspera(nomeOrgao) {
        const novoOrgao = new Orgao(nomeOrgao, this.tipoSanguineo)

        this.orgaosEmEspera.push(novoOrgao)
    }
    removerOrgaoListaEspera(orgao) {
        const indexOrgao = this.orgaosEmEspera.findIndex((elem) => {
            return elem.nome === orgao.nome;
        })

        this.orgaosEmEspera.splice(indexOrgao, 1);

        return this.adicionarHistorico(orgao);
    }
    adicionarHistorico(orgaoRecebido) {
        const novoHistorico = {
            orgaoRecebido,
            data: new Date()
        }

        this.historicoOrgaosRecebidos.push(novoHistorico)

        return novoHistorico
    }
}