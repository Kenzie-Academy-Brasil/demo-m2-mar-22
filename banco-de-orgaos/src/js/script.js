function testarCodigo() {
    const dadosKenzie = {
        cnpj: "69.952.590/0001-59",
        endereco: "Praça Coronel Reis, s/n",
        razaoSocial: "Banco Kenzie de Orgãos"
    };

    const bancoKenzieOrgaos = new BancoOrgaos(...Object.values(dadosKenzie))
    bancoKenzieOrgaos.adicionarOrgaoAoBanco("Rim");
    bancoKenzieOrgaos.adicionarOrgaoAoBanco("sangue");

    bancoKenzieOrgaos.removerOrgaoDoBanco("Rim")
    bancoKenzieOrgaos.removerOrgaoDoBanco("sangue")

    console.log(bancoKenzieOrgaos)
}

testarCodigo();