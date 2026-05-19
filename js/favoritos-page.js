//Adiciona os favoritos
const listaFavoritos =
JSON.parse(localStorage.getItem("favoritos")) || [];

const linhaAnimes =
document.querySelector(".linha-animes");

listaFavoritos.forEach(id => {

    const anime = animes.find(
        anime => anime.id === id
    );

    if(!anime){
        return;
    }

    linhaAnimes.innerHTML += `

    <div class="anime-card">

        <img src="../${anime.imagem}" alt="${anime.titulo}">

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

        <button class="remover-btn" data-id="${id}">
            ❌ Remover
        </button>

    </div>

    `;

});

// Remoção dos favoritos
document.addEventListener("click", (event) => {

    if(event.target.classList.contains("remover-btn")){

        const id = event.target.dataset.id;

        let favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];

        favoritos = favoritos.filter(
            anime => anime !== id
        );

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

        location.reload();
    }

});