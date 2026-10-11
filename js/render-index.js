const favoritosSalvos =
JSON.parse(localStorage.getItem("favoritos")) || [];

const linhaAnimes =
document.querySelector(".linha-animes");

const carrosselBtnEsquerda =
document.querySelector(".carrossel-btn-esquerda");

const carrosselBtnDireita =
document.querySelector(".carrossel-btn-direita");

const estaNaPastaPages =
window.location.pathname.includes("/pages/");

const caminhoAnime = estaNaPastaPages
? "../pages/anime.html"
: "pages/anime.html";

function renderizarAnimes(lista){
    
    linhaAnimes.innerHTML = "";
    linhaAnimes.scrollLeft = 0;

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

function rolarCarrossel(direcao){

    const distancia =
    linhaAnimes.clientWidth * direcao;

    linhaAnimes.scrollBy({
        left: distancia,
        behavior: "smooth"
    });
}

if(carrosselBtnEsquerda && carrosselBtnDireita){

    carrosselBtnEsquerda.addEventListener("click", () => {
        rolarCarrossel(-1);
    });

    carrosselBtnDireita.addEventListener("click", () => {
        rolarCarrossel(1);
    });

}

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

function formatarTempo(segundos){

    if(!segundos){
        return "00:00";
    }

    const minutos =
    Math.floor(segundos / 60);

    const segundosRestantes =
    Math.floor(segundos % 60);

    const minutosFormatados = 
    String(minutos).padStart(2, "0");

    const segundosFormatados =
    String(segundosRestantes).padStart(2, "0");

    return `${minutosFormatados}:${segundosFormatados}`;
}

function renderizarContinuarAssistindo(){

    const dados =
    ShinraiXStorage.carregarContinuarAssistindo();

    if(!dados){
        return;
    }

    const tempoFormatado =
    formatarTempo(dados.tempoAtual);

    const secao =
    document.getElementById("continuar-assistindo");

    const card =
    document.getElementById("continuar-card");

    if (!secao || !card){
        return;
    }

    secao.classList.remove("oculto");

    card.innerHTML = `
        <img src="${dados.capa}" alt="${dados.animeTitulo}">

        <div>
            <h3>${dados.animeTitulo}</h3>
            <p>
                EP ${dados.episodioNumero} - ${dados.episodioTitulo}
            </p>

            <p class="tempo-continuar">
                Parou em ${tempoFormatado}
            </p>

            <a href="pages/player.html?anime=${dados.animeId}&ep=${dados.episodioNumero}">
                Continuar
            </a>
        </div>
    `;

}

renderizarContinuarAssistindo();
