const params =
new URLSearchParams(window.location.search);

const animeNome =
params.get("anime");

const dados = animes.find(
    anime => anime.id === animeNome
);

const estaNaPastaPages =
window.location.pathname.includes("/pages/");

const caminhoBanner = estaNaPastaPages
? "../" + dados.banner
: dados.banner;

document.getElementById("anime-titulo").textContent =
dados.titulo;

document.getElementById("anime-generos").textContent =
dados.generos;

document.getElementById("anime-descricao").textContent =
dados.descricao;

document.querySelector(".anime-detalhes").style.backgroundImage =
`linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${caminhoBanner})`;