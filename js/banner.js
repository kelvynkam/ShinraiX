const banner = document.querySelector(".banner");

const bannerConteudo =
document.querySelector(".banner-conteudo");

const bannerTitulo =
document.querySelector(".banner-conteudo h1");

const bannerSinopse =
document.querySelector(".banner-conteudo p");

const bannerLink =
document.querySelector(".banner-conteudo a");

const bannerIndicadores =
document.querySelector(".banner-indicadores");

let bannerAtual = 0;
let bannerTimer;
let bannerAnimacao;

function atualizarIndicadores(indiceAtivo){

    const indicadores =
    document.querySelectorAll(".banner-indicador");

    indicadores.forEach((indicador, indice) => {
        indicador.classList.toggle("ativo", indice === indiceAtivo);
        indicador.setAttribute("aria-pressed", indice === indiceAtivo);
    });
}

function atualizarBanner(indice = bannerAtual){

    clearTimeout(bannerAnimacao);

    banner.classList.add("fade-out");
    bannerConteudo.classList.add("fade-out");

    bannerAnimacao = setTimeout(() => {

        const anime = animes[indice];

        bannerTitulo.textContent = anime.titulo;
        bannerSinopse.textContent = anime.sinopse;
        bannerLink.href = `pages/anime.html?anime=${anime.id}`;

        banner.style.backgroundImage =
        `linear-gradient(
            to right,
            rgba(0,0,0,0.9),
            rgba(0,0,0,0.3)
        ),
        url(${anime.banner})`;

        banner.classList.remove("fade-out");
        bannerConteudo.classList.remove("fade-out");

        atualizarIndicadores(indice);

        bannerAtual = indice + 1;

        if(bannerAtual === animes.length){
            bannerAtual = 0;
        }

    }, 400);
}

function criarIndicadores(){

    animes.forEach((anime, indice) => {

        const indicador = document.createElement("button");
        indicador.classList.add("banner-indicador");
        indicador.type = "button";
        indicador.setAttribute("aria-label", `Mostrar banner de ${anime.titulo}`);
        indicador.setAttribute("aria-pressed", "false");

        indicador.addEventListener("click", () => {
            clearInterval(bannerTimer);
            atualizarBanner(indice);
            bannerTimer = setInterval(atualizarBanner, 5000);
        });

        bannerIndicadores.appendChild(indicador);
    });
}

criarIndicadores();
atualizarBanner();

bannerTimer = setInterval(atualizarBanner, 5000);
