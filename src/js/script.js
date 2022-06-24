/**
 * sessionStorage => Armazenar dados temporariamente
    no seu navegador, para que seja possível, carregar
    dados mais fácilmente.

    Armazena dados, mas exclui depois de fechar a página.
 **/
const sessionStorage = window.sessionStorage;

sessionStorage.setItem("Facilitador", "Victor Augusto")
sessionStorage.setItem("linguagens", "JS,HTML,CSS")
const facilitador = sessionStorage.getItem("Facilitador")

// console.log(facilitador)

// window.sessionStorage.removeItem("Facilitador")
sessionStorage.clear();


function soma(valor1, valor2) {
    const resultado = valor1 + valor2;

    sessionStorage.setItem("resultadoSoma", resultado)

    return resultado
}

function mostrarResultadoSoma() {
    const resultado = sessionStorage.getItem("resultadoSoma")

    console.log(resultado)
}

// soma(5,5)
// mostrarResultadoSoma()


/**
 * ARMAZENANDO OBJETOS NA SESSION STORAGE
 */
const churros = {
    "nome": "Victor",
    "sobrenome": "Augusto"
}

// sessionStorage.setItem("sobrenome", churros.sobrenome)

const churrosJSON = JSON.stringify(churros)

sessionStorage.setItem("churros", churrosJSON)

const churrosSession = sessionStorage.getItem("churros")
const churrosSessionSoQueObjeto = JSON.parse(churrosSession)
// console.log(churrosSessionSoQueObjeto)




/**
 * ARMAZENANDO FUNÇÕES NO SESSION STORAGE - TO-DO
 */
// function teste() {
//     console.log("Eu sou um teste")
// }

// sessionStorage.setItem("funcaoTeste", teste.toString())
// const minhaNovaFuncao = sessionStorage.getItem("funcaoTeste");


/**
 * localStorage => Armazenar dados temporariamente
    no seu navegador, para que seja possível, carregar
    dados mais fácilmente.

    Armazena dados, mesmo depois de ter fechado o site.
 **/

window.localStorage.setItem("países", ["Brasil", "Portugal"])



const tarefas = [
    {nome: "tarefa1"},
    {nome: "tarefa2"}
]

window.localStorage.setItem("tarefas", JSON.stringify(tarefas))

let listaTarefas = window.localStorage.getItem("tarefas")
listaTarefas = JSON.parse(listaTarefas)












