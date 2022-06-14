function testarCodigo() {
    const dadosKenzie = {
        cnpj: "69.952.590/0001-59",
        endereco: "Praça Coronel Reis, s/n",
        razaoSocial: "Banco Kenzie de Orgãos"
    };

    const bancoKenzieOrgaos = new BancoOrgaos(...Object.values(dadosKenzie));
    // const listaInstanciaDoadores = doadores.map(doador => new DoadorOrgaos(...Object.values(doador)))

    listaDoadoresOrgaos = doadores.map((doador) => {
        const { nome, idade, cpf, email, tipoSanguineo } = doador;

        const novoDoador = new DoadorOrgaos(nome, idade, cpf, email, tipoSanguineo);

        return novoDoador
    });

    const orgaoDoado = listaDoadoresOrgaos[0].doarOrgao("Rim");
    
    console.log(orgaoDoado);

    bancoKenzieOrgaos.adicionarOrgaoAoBanco(orgaoDoado);

    const donatario = new Donatario("Kenzinho", 18, "12345678908", "kenzinho@kenzie.com.br", "O-")

    bancoKenzieOrgaos.removerOrgaoDoBanco(orgaoDoado, donatario)    

    console.log(bancoKenzieOrgaos);
}

testarCodigo();