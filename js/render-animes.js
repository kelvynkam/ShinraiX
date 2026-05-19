const estaNaPastaPages =
window.location.pathname.includes("/pages/");

const caminhoAnime = estaNaPastaPages
? "../pages/anime.html"
: "pages/anime.html";

const linhaAnimes =
document.querySelector(".linha-animes");

animes.forEach(anime => {

    const caminhoImagem = estaNaPastaPages
    ? "../" + anime.imagem
    : anime.imagem;

    linhaAnimes.innerHTML += `

    <div class="anime-card">

        <img src="${caminhoImagem}" alt="${anime.titulo}">

        <h2>${anime.titulo}</h2>

        <p class="generos">
            ${anime.generos}
        </p>

        <p class="descricao">
            ${anime.descricao}
        </p>

        <a href="${caminhoAnime}?anime=${anime.id}">
            <button>Assistir agora</button>
        </a>

        <button class="favorito-btn" data-anime="${anime.id}">
            ❤️ Favoritar
        </button>

    </div>

    `;

});