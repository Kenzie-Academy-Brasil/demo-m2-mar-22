function testarCodigo() {
    const dadosKenzie = {
        cnpj: "69.952.590/0001-59",
        endereco: "Praça Coronel Reis, s/n",
        razaoSocial: "Banco Kenzie de Orgãos"
    };

    const bancoKenzieOrgaos = new BancoOrgaos(...Object.values(dadosKenzie))
    const victor = new DoadorOrgaos("Victor Augusto", 23, "12345678909", "victor@kenzie.com.br", "O-");
    const orgaoDoado = victor.doarOrgao("Rim");

    const donatario = new Donatario("Parente Victor", 30, "12345678909", "email@email.com.br", "O-")
    donatario.adicionarOrgaoListaEspera("Rim")
    donatario.removerOrgaoListaEspera(orgaoDoado)

    bancoKenzieOrgaos.adicionarOrgaoAoBanco(orgaoDoado);

    console.log(donatario)
    // bancoKenzieOrgaos.adicionarOrgaoAoBanco(coracao);
}

testarCodigo();