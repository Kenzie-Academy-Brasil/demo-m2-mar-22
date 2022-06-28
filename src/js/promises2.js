/**
 * ASYNC / AWAIT
 * 
 */
// const pegarLivros = async () => {}
async function pegarLivros() {
    const url = "https://api-kenzie-livros.herokuapp.com/livros"

    // Fazer requisição para API Livros demora: 150 milisegundos ~ 850 milisegundos
    const resultado = await fetch(url); //fazer e esperar os dados chegarem
    const resultadoJSON = await resultado.json(); //esperar e transformar dados em JSON
}

function pegarLivrosPromise() {
    const url = "https://api-kenzie-livros.herokuapp.com/livros"

    return fetch(url)
        .then((dados) => {
            return dados.json()
        }).then((dados) => {
            return dados.filter((dado) => {
                return dado.id % 2 === 0
            })
        }).catch((err) => {
            console.log("Houve esse erro:" + err)
        })
}

async function editarLivros() {
    const todosLivros = await pegarLivrosPromise();
    console.log(todosLivros)

    todosLivros.forEach((elem) => {
        //codigo edicao de livros
        //fetch()
    })
}

editarLivros();

/**
 * Criando Promises
 */
function criarPromise() {
    const nome = "Jardel";

    return new Promise((resolve, reject) => {
        if (nome === "Victor") {
            resolve("Sim, o nome está correto!")
        } else {
            reject("Não, o nome está incorreto!")
        }
    })
}

/**
 * Resolvendo Promessas
 */
async function resolverPromessa() {
    const resultado = await criarPromise()
        .then((dado) => {
            return dado.toUpperCase();
        }).then((dado)=> {
            console.log(dado.split(" "))
        }).catch((err) => {
            alert("Opa, houve um erro: " + err)
        })
}