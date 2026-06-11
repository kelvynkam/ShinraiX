function iniciarPlayer(){

    const params = new URLSearchParams(window.location.search);

    const animeId = params.get("anime");
    const episodioNumero = Number(params.get("ep"));

    const anime = animes.find(item => item.id === animeId);

    if (!anime) {
        window.location.href = "../index.html";
        return;
    }

    const episodio = anime.episodios.find(ep => ep.numero === episodioNumero);

    if (!episodio) {
        window.location.href = `anime.html?anime=${anime.id}`;
        return;
    }

    const btnAnterior = document.getElementById("btn-anterior");
    const btnProximo = document.getElementById("btn-proximo");

    const tituloAnime =
    document.getElementById("anime-titulo");

    const tituloEpisodio =
    document.getElementById("episodio-titulo");

    const video =
    document.querySelector("video");

    tituloAnime.textContent =
    anime.titulo;

    tituloEpisodio.textContent =
    `EP ${episodio.numero} - ${episodio.titulo}`;

    video.src = "../" + episodio.video;

    const existeProximo = 
    anime.episodios.some(
        ep => ep.numero === episodio.numero + 1
    );

    const existeAnterior =
    anime.episodios.some(
        ep => ep.numero === episodio.numero - 1
    );

    if(existeAnterior){

        btnAnterior.addEventListener("click", () => {

            const anteriorNumero = episodio.numero - 1;

            window.location.href = 
            `player.html?anime=${anime.id}&ep=${anteriorNumero}`;
        });

    } else {

        btnAnterior.disabled = true;

    }

    if(existeProximo){

        btnProximo.addEventListener("click", () => {
        
            const proximoNumero = episodio.numero + 1;

            window.location.href = 
            `player.html?anime=${anime.id}&ep=${proximoNumero}`;
        });

    } else {

        btnProximo.disabled = true;

    }

    const voltarAnime =
    document.getElementById("voltar-anime");

    voltarAnime.href =
    `anime.html?anime=${anime.id}`;

    voltarAnime.textContent =
    `← Voltar para ${anime.titulo}`;

}

iniciarPlayer();