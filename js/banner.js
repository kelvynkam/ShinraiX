const banner = document.querySelector(".banner");

const bannerTitulo =
document.querySelector(".banner-conteudo h1");

const bannerSinopse =
document.querySelector(".banner-conteudo p");

const bannerLink =
document.querySelector(".banner-conteudo a");

let bannerAtual = 0;

function atualizarBanner(){

    const anime = animes[bannerAtual];

    bannerTitulo.textContent =
    anime.titulo;

    bannerSinopse.textContent =
    anime.sinopse;

    bannerLink.href =
    `pages/anime.html?anime=${anime.id}`;

    banner.style.backgroundImage =
    `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(${anime.banner})`;

    bannerAtual++;

    if(bannerAtual === animes.length){
        bannerAtual = 0;
    }

}

atualizarBanner();

setInterval(atualizarBanner, 5000);