const listaFavoritos =
JSON.parse(localStorage.getItem("favoritos")) || [];

const animes = {

    hxh: {
        titulo: "Hunter X Hunter",
        generos: "Aventura • Ação • Shounen",
        descricao: "Gon busca encontrar seu pai e se tornar Hunter.",
        imagem: "../assets/img/capas/hxh.png"
    },

    bleach: {
        titulo: "Bleach",
        generos: "Aventura • Ação • Shounen",
        descricao: "Ichigo ganha poderes de Shinigami.",
        imagem: "../assets/img/capas/bleach.svg"
    }

};

const linhaAnimes =
document.querySelector(".linha-animes");

listaFavoritos.forEach(id => {

    const anime = animes[id];

    linhaAnimes.innerHTML += `

    <div class="anime-card">

        <img src="${anime.imagem}" alt="${anime.titulo}">

        <h2>${anime.titulo}</h2>

        <p class="generos">
            ${anime.generos}
        </p>

        <p class="descricao">
            ${anime.descricao}
        </p>

        <a href="../pages/anime.html?anime=${id}">
            <button>Assistir agora</button>
        </a>

    </div>

    `;

});