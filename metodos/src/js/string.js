/**
 * DONE - TOUPPERCASE & TOLOWERCASE
 * DONE - INDEXOF
 * DONE - SPLIT
 * DONE - INCLUDES
 * DONE - SLICE
 * DONE - TRIM
 */
const nome = "Victor Augusto";

const nomeUpper = nome.toUpperCase();
const nomeLower = nome.toLowerCase();

//Pega índice de String
const indexAugusto = nome.indexOf("Augusto");

//Separar String baseado no separador
const nomeSeparado = nome.split(" ")

//Verifica se string possui substring
const nomeInclui = nome.includes("Churros")

//Remove uma fatia da string original
const nomeFatiado = nome.slice(4,12);

//Remove espaços no ínicio e fim da string
const nomeTrim = nome.trim();

console.log({
    nome,
    nomeUpper,
    nomeLower,
    indexAugusto,
    nomeSeparado,
    nomeInclui,
    nomeFatiado,
    nomeTrim
});
