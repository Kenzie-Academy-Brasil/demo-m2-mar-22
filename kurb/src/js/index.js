function criarCard(viagem) {
    const listaCards = document.querySelector(".listaCards");
    
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = criarCardHeader(viagem);
    const cardMain = criarCardMain(viagem);

    card.append(cardHeader, cardMain);
    listaCards.append(card);
}

function criarCardHeader(viagem) {
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card__header");
    
    const paragraph = document.createElement("p");
    paragraph.innerText = viagem.city

    cardHeader.append(paragraph);

    return cardHeader;
}

function criarCardMain(viagem) {
    const cardMain = document.createElement("div");
    cardMain.classList.add("card__main");

    const cardImage = criarCardImage(viagem);
    const cardContent = criarCardContent(viagem);

    cardMain.append(cardImage, cardContent);

    return cardMain;
}

function criarCardContent(viagem) {
    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");

    const cardDescription = criarCardDescription(viagem)

    cardContent.append(cardDescription);

    return cardContent

}

function criarCardDescription(viagem) {
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description")

    const titulo = document.createElement("p");
    titulo.innerText = viagem.price;

    const descricao = document.createElement("p");
    descricao.innerText = viagem.description;

    cardDescription.append(titulo, descricao);

    return cardDescription
}

function criarCardImage(viagem) {
    const cardImage = document.createElement("div");
    cardImage.classList.add("card__image");

    const image = document.createElement("img");
    image.src = viagem.image;

    cardImage.append(image);
    return cardImage;
}

function montarDados(listaViagens) {
    const listaCards = document.querySelector(".listaCards");
    listaCards.innerHTML = "";

    for (let contador = 0; contador < listaViagens.length; contador++) {
        const viagem = listaViagens[contador];
        criarCard(viagem);
    }
}

function filtrarPorCategoria(listaViagens, categoria) {
    const viagensFiltradas = listaViagens.filter((viagem) => {
        const viagemCategoria = viagem.category.toUpperCase().trim();
        categoria = categoria.toUpperCase().trim();

        return viagemCategoria.includes(categoria)
    })

    return viagensFiltradas;
}

montarDados(tripData);

function adicionarEventoPesquisa () {
    const btnPesquisa = document.getElementById("btnPesquisa");
    const inputPesquisa = document.getElementById("pesquisa");
    const form = document.querySelector("form");

    form.addEventListener("click", filtrarCards)
    btnPesquisa.addEventListener("click", filtrarCards);   
    inputPesquisa.addEventListener("input", filtrarCards); 
}

adicionarEventoPesquisa();

function filtrarCards(event) {
    const btnPesquisa = document.getElementById("btnPesquisa");
    const form = document.querySelector("form");

    const { value: inputPesquisa} = document.getElementById("pesquisa");

    event.preventDefault();
    const listaFiltrada = filtrarPorCategoria(tripData, inputPesquisa)
    montarDados(listaFiltrada)
}



