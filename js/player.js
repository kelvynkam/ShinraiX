const params = new URLSearchParams(window.location.search);

const animeId = params.get("anime");
const episodioNumero = Number(params.get("ep"));

const anime = animes.find(item => item.id === animeId);

const episodio = anime.episodios.find(ep => ep.numero === episodioNumero);

const tituloEpisodio = document.getElementById("titulo-episodio");
const video = document.querySelector("video");

tituloEpisodio.textContent =
`${anime.titulo} - EP ${episodio.numero}: ${episodio.titulo}`;

video.src = "../" + episodio.video;