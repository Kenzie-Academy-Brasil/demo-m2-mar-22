function criarCard(viagem) {
    const main = document.querySelector("main");
    
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = criarCardHeader(viagem);
    const cardMain = criarCardMain(viagem);

    card.append(cardHeader, cardMain);
    main.append(card);
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
    const viagensFiltradas = filtrarPorCategoria(listaViagens, "Pacote Completo");

    for (let contador = 0; contador < viagensFiltradas.length; contador++) {
        const viagem = viagensFiltradas[contador];
        criarCard(viagem);
    }
}

montarDados(tripData);





function filtrarPorCategoria(listaViagens, categoria) {
    // listaViagens.forEach(function(viagem, index, array) {
    //     const mensagem = `Viagem para ${viagem.city} vale ${viagem.price}`
    //     console.log(mensagem)
    // })

    const viagensFiltradas = listaViagens.filter((viagem) => {
        return viagem.category === categoria
    })

    return viagensFiltradas;
}

