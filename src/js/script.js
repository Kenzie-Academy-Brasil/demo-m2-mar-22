/**
 * Assincronia => Habilidade de rodar vários códigos ao mesmo tempo
 */
// function funcao1() {
//     console.log("Console da funcao 1")
// }

// function funcao2() {
//     setTimeout(() => {
//         console.log("Console da funcao 2")
//     }, 2000)
// }


// function chamarFuncoes() {
//     funcao2();
//     funcao1();
// }

// chamarFuncoes();


async function pegarLivros() {
    const url = "https://api-kenzie-livros.herokuapp.com/livros"
    const options = {}
    
    const resultado = await fetch(url, options)
    //   .then((response) => {
    //     const retorno = {
    //         response,
    //         responseJson: response.json()
    //     }

    //     return retorno //Transforma os dados em JSON
    // })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response.map((elem) => {
                return elem.titulo
            })
        })
        // .then(response => response.map(elem => elem.titulo))

    const resultadoSpaceX = await fetch("https://api.spacexdata.com/v3/rockets")
        .then((response) => {
            return response.json();
        })


    console.log({resultado, resultadoSpaceX})

    console.log("teste")
}

pegarLivros();

function criarCards() {

}

// function criarPromise() {
//     return new Promise((resolve, reject) => {
//         const nome = "Victor"

//         if (nome === "Victor") {
//             resolve({teste: "Victor"});
//         } else {
//             reject("O nome está incorreto")
//         }
//     })
// }

// const promessaCriada = criarPromise();
// promessaCriada.then((churros) => {
//     console.log(churros)
// }).catch((churrosErr) => {
//     console.log("Esse é o meu erro: " + churrosErr)
// })