/**
 * Função Declarativa
 * Nomeada
 * Faz Hoisting
 */
function funcaoSoma(valor1, valor2) {
    return valor1 + valor2;
}

/**
 * Função como Valor
 * Anônima
 * Não faz Hoisting
 */
const funcaoSoma2 = function (valor1, valor2) {
    return valor1 + valor2;
}

/**
 * Arrow Function
 * Anônima
 * Não faz Hoisting
 */
const funcaoSoma3 = (valor1, valor2) => {
    return valor1 + valor2
}

function mostrarNome() {
    const nome = "Victor Augusto";

    return nome;
}

function transformaNomeUpperCase() {
    return mostrarNome().toUpperCase();
}

function transformaNomeLowerCase() {
    return mostrarNome().toLowerCase();
}

