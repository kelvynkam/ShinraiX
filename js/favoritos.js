document.addEventListener("click", (evento) => {

    const botaoFavorito =
    evento.target.closest(".favorito-btn");

    if(!botaoFavorito){
        return;
    }

    const animeId =
    botaoFavorito.dataset.anime;

    const ficouFavoritado =
    ShinraiXStorage.alternarFavorito(animeId);

    if(ficouFavoritado){

        botaoFavorito.classList.add("favoritados");
        botaoFavorito.textContent =
        "✅ Favoritado";

    }else {

        botaoFavorito.classList.remove("favoritados");
        botaoFavorito.textContent =
        "❤️ Favoritar";

    }

});