class CNH {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    definirMultaInicial(multas) {
        this.multas = multas
    }

    resetarMultas() {
        delete this.multas
    }
}

const carteiraVictor = new CNH("Victor Augusto", "12345678909");
// carteiraVictor.definirMultaInicial([10,20,30])
carteiraVictor.resetarMultas()

// console.log(carteiraVictor)



const stringJoin = ["Victor", "Augusto", "da", "Silva", "Lima"]

function joinSimples(array, caracter) {
    let resultado = array[0]
    for (let contador = 1; contador < array.length; contador++) {
        resultado += caracter + array[contador]
    }

    return resultado
}

// console.log(joinSimples(stringJoin, "-"))

const listaTr = document.querySelectorAll("tbody tr")

const teste = [...listaTr].filter((elem) => {
    // elem.dataset.nome="Victor"
    return elem.dataset.categoria === "saudavel"
})

const listaBotao = document.querySelectorAll("button");
[...listaBotao].forEach((elem) => {
    elem.addEventListener("click", function(event) {
        const alvo = event.target;
        const categoria = alvo.closest("tr").dataset.categoria

        console.log({alvo, categoria})
    })
})

