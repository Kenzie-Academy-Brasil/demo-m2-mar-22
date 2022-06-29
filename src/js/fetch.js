function exemploFetchGET() {
    const url = "https://api-kenzie-livros.herokuapp.com/livros";
    const options = {
        method: "GET"
    };

    return fetch(url, options).then(response => response.json())
}

function exemploFetchPostUsuario(name, email, password) {
    const url = "https://api-kenzie-livros.herokuapp.com/auth/register"

    const usuario = {
        name: "VitaoJS da Kenzie Silva",
        email: "victorJSKenzie@kenzie.com.br",
        password: "kenzie123"
        // name, email, password
    }

    const options = {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(url, options).then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response)
    })
}

async function fazerRequisicoes() {
    const resultado = await exemploFetchGET();
    console.log(resultado)
}


exemploFetchPostUsuario();
// fazerRequisicoes();



button.addEventListener("click", async () => {
    // const livros = [
    //     {titulo: "Harry Potter", paginas: 10}
    // ]

    const livros = await exemploFetchGET()
    livros.forEach((livro) => {
        criarCard(livro)
    })


})