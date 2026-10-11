const params =
new URLSearchParams(window.location.search);

const animeNome =
params.get("anime");

const dados =
animes.find(anime => anime.id === animeNome);

if(!dados){

    window.location.href =
    "../index.html";

}

const estaNaPastaPages =
window.location.pathname.includes("/pages/");

const caminhoBanner = estaNaPastaPages
? "../" + dados.banner
: dados.banner;

const caminhoImagem = estaNaPastaPages
? "../" + dados.imagem
: dados.imagem;

const listaEpisodios =
document.querySelector(".episodios-lista");

const tituloAnime =
document.getElementById("anime-titulo");

const generosAnime =
document.getElementById("anime-generos");

const descricaoAnime =
document.getElementById("anime-descricao");

const sinopseCompleta =
document.getElementById("anime-sinopse-completa");

const totalEpisodios =
document.getElementById("anime-total-episodios");

const botaoAssistir =
document.getElementById("anime-assistir");

tituloAnime.textContent =
dados.titulo;

generosAnime.textContent =
dados.generos;

descricaoAnime.textContent =
dados.descricao;

sinopseCompleta.textContent =
dados.sinopse;

totalEpisodios.textContent =
`${dados.episodios.length} episódios disponíveis`;

botaoAssistir.href =
`player.html?anime=${dados.id}&ep=${dados.episodios[0].numero}`;

document.querySelector(".anime-detalhes").style.backgroundImage =
`linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.35)), url(${caminhoBanner})`;

listaEpisodios.innerHTML = "";

dados.episodios.forEach(episodio => {

    listaEpisodios.innerHTML += `
        <article class="episodio-card">

            <img 
                src="${caminhoImagem}" 
                alt="${dados.titulo}"
                class="episodio-thumb"
            >

            <div class="episodio-info">

                <span class="episodio-numero">
                    EP ${episodio.numero}
                </span>

                <h3>
                    ${episodio.titulo}
                </h3>

                <p>
                    ${dados.generos}
                </p>

            </div>

            <a href="player.html?anime=${animeNome}&ep=${episodio.numero}">
                <button>Assistir</button>
            </a>

        </article>
    `;

});