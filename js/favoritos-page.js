const listaFavoritos =
document.getElementById("lista-favoritos");

function renderizarFavoritos(){

    const favoritos =
    ShinraiXStorage.carregarFavoritos();

    const animesFavoritos =
    animes.filter(anime => favoritos.includes(anime.id));

    listaFavoritos.innerHTML = "";

    if(animesFavoritos.length === 0){

        listaFavoritos.innerHTML = `
            <p class="nenhum-anime">
                Nenhum anime favoritado ainda.
            </p>
        `;

        return;

    }

    animesFavoritos.forEach(anime => {

        listaFavoritos.innerHTML += `
            <div class="anime-card">

                <img src="../${anime.imagem}" alt="${anime.titulo}">

                <h2>${anime.titulo}</h2>

                <p class="generos">
                    ${anime.generos}
                </p>

                <p class="descricao">
                    ${anime.descricao}
                </p>

                <a href="anime.html?anime=${anime.id}">
                    <button>Assistir agora</button>
                </a>

                <button class="remover-favorito-btn" data-anime="${anime.id}">
                    Remover dos favoritos
                </button>

            </div>
        `;

    });

}

document.addEventListener("click", (evento) => {

    const botaoRemover =
    evento.target.closest(".remover-favorito-btn");

    if(!botaoRemover){
        return;
    }

    const animeId =
    botaoRemover.dataset.anime;

    ShinraiXStorage.removerFavorito(animeId);

    renderizarFavoritos();

});

renderizarFavoritos();