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

        localStorage.removeItem("continuarAssistindo")

    }

};