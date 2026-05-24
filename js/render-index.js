const favoritosSalvos =
JSON.parse(localStorage.getItem("favoritos")) || [];

const linhaAnimes =
document.querySelector(".linha-animes");

const estaNaPastaPages =
window.location.pathname.includes("/pages/");

const caminhoAnime = estaNaPastaPages
? "../pages/anime.html"
: "pages/anime.html";

function renderizarAnimes(lista){
    
    linhaAnimes.innerHTML = "";

    if(lista.length === 0){
            
            linhaAnimes.innerHTML = `
            
                <p class="nenhum-anime">
                    Nenhum anime encontrado.
                </p>
            
            `;

            return;

        }

    lista.forEach(anime => {

        const estaFavoritado =
        favoritosSalvos.includes(anime.id);

        linhaAnimes.innerHTML += `
        
        <div class="anime-card">

            <img src="${estaNaPastaPages ? "../" + anime.imagem : anime.imagem}" alt="${anime.titulo}">

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

            <button class="favorito-btn ${estaFavoritado ? "favoritados" : ""}" data-anime="${anime.id}">
                ${estaFavoritado ? "✅ Favoritado" : "❤️ Favoritar"}
            </button>

        </div>

        `;

    });

}

renderizarAnimes(animes);

const campoBusca =
document.getElementById("busca-anime");

if(campoBusca){

    campoBusca.addEventListener("input", () =>{

        const textoDigitado =
        campoBusca.value.toLowerCase();

        const animesFiltrados =
        animes.filter(anime =>

            anime.titulo
            .toLowerCase()
            .includes(textoDigitado)

            ||

            anime.generos
            .toLowerCase()
            .includes(textoDigitado)

        );

        renderizarAnimes(animesFiltrados);

    });

}