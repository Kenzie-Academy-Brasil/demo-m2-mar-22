function testarCodigo() {
    const dadosKenzie = {
        cnpj: "69.952.590/0001-59",
        endereco: "Praça Coronel Reis, s/n",
        razaoSocial: "Banco Kenzie de Orgãos"
    };

    const bancoKenzieOrgaos = new BancoOrgaos(...Object.values(dadosKenzie))

    const rim = new Orgao("Rim", "AB" ,"Kenzinho")
    const coracao = new Orgao("Coração", "O" ,"Angelo")

    bancoKenzieOrgaos.adicionarOrgaoAoBanco(rim);
    bancoKenzieOrgaos.adicionarOrgaoAoBanco(coracao);

}

testarCodigo();