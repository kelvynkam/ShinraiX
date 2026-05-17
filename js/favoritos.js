const botoesFavorito = document.querySelectorAll(".favorito-btn");

botoesFavorito.forEach(botao => {

    botao.addEventListener("click", () => {

        const anime = botao.dataset.anime;

        let favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];

        if(!favoritos.includes(anime)){

            favoritos.push(anime);

            localStorage.setItem(
                "favoritos",
                JSON.stringify(favoritos)
            );
            
            alert("Anime adicionado aos favoritos!");

        } else {

            alert("Esse anime ja esta nos favoritos!");
        }
    });
});