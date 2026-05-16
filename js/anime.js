const params = new URLSearchParams(window.location.search);

const animeNome = params.get("anime");

const animes = {

    hxh: {
        titulo: "Hunter X Hunter",
        generos: "Aventura • Ação • Shounen",
        descricao: "Gon busca encontrar seu pai e se tornar Hunter.",
        banner: "../assets/img/banners/hxh-banner.jpg"
    },

    bleach: {
        titulo: "Bleach",
        generos: "Aventura • Ação • Shounen",
        descricao: "Ichigo ganha poderes de Shinigami.",
        banner: "../assets/img/banners/bleach-banner.jpg"
    }
};

const dados = animes[animeNome];

document.getElementById("anime-titulo").textContent = dados.titulo;

document.getElementById("anime-generos").textContent = dados.generos;

document.getElementById("anime-descricao").textContent = dados.descricao;

document.querySelector(".anime-detalhes").style.backgroundImage =
`linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${dados.banner})`;

