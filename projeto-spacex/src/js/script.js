chamarAPI().then(data => {
    // console.log(data)
    const dadosLimpos = limparDados(data);
    const dadosOrdenados = ordenarDados(dadosLimpos);
    const foguetesAtivos = filtrar(dadosOrdenados, true);
    const foguetesInativos = filtrar(dadosOrdenados, false);

});

function limparDados(dadosFoguetes) {

    return dadosFoguetes.map((elem, index, array) => {
        const { 
            id,
            active,
            cost_per_launch,
            description,
            first_flight,
            rocket_name,
            success_rate_pct,
            wikipedia,
            stages
        } = elem;

        const resultado = {
            id,
            active,
            cost_per_launch,
            description,
            first_flight,
            rocket_name,
            success_rate_pct,
            wikipedia,
            stages
        }

        return resultado;
    });
}

function ordenarDados(dadosFoguetes) {
    return dadosFoguetes.sort((foguete1, foguete2) => foguete1.cost_per_launch - foguete2.cost_per_launch);
}

function filtrar(dadosFoguetes, ativo) {
    // return dadosFoguetes.filter(({ active }) => active === ativo);
    return dadosFoguetes.filter(foguete => foguete.active === ativo);
}