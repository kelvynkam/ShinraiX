const ShinraiXStorage = {

    salvarContinuarAssistindo(anime, episodio, tempoAtual, duracao){

        const dados = {
            animeId: anime.id,
            animeTitulo: anime.titulo,
            episodioNumero: episodio.numero,
            episodioTitulo: episodio.titulo,
            capa: anime.imagem,
            tempoAtual: tempoAtual,
            duracao: duracao
        };

        localStorage.setItem(
            "continuarAssistindo",
            JSON.stringify(dados)
        );

    },

    carregarContinuarAssistindo(){

        const dadosSalvos =
        localStorage.getItem("continuarAssistindo");

        if(!dadosSalvos){
            return null;
        }

        return JSON.parse(dadosSalvos);

    },

    removerContinuarAssistindo(){

        localStorage.removeItem("continuarAssistindo");

    },

    carregarFavoritos(){

        const favoritosSalvos =
        localStorage.getItem("favoritos");

        if(!favoritosSalvos){
            return [];
        }

        return JSON.parse(favoritosSalvos);

    },

    salvarFavoritos(favoritos){

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

    },

    animeEstaFavoritado(animeId){

        const favoritos =
        this.carregarFavoritos();

        return favoritos.includes(animeId);

    },

    adicionarFavorito(animeId){

        const favoritos =
        this.carregarFavoritos();

        if(favoritos.includes(animeId)){
            return favoritos;
        }

        favoritos.push(animeId);

        this.salvarFavoritos(favoritos);

        return favoritos;

    },

    removerFavorito(animeId){

        const favoritos =
        this.carregarFavoritos();

        const favoritosAtualizados =
        favoritos.filter(id => id !== animeId);

        this.salvarFavoritos(favoritosAtualizados);

        return favoritosAtualizados;

    },

    alternarFavorito(animeId){

        if(this.animeEstaFavoritado(animeId)){

            this.removerFavorito(animeId);

            return false;

        }

        this.adicionarFavorito(animeId);

        return true;

    }

};