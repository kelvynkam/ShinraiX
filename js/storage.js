const ShinraiXStorage = {

    salvarContinuarAssistindo(anime, episodio, tempoAtual){

        const dados = {
            animeId: anime.id,
            animeTitulo: anime.titulo,
            episodioNumero: episodio.numero,
            episodioTitulo: episodio.titulo,
            capa: anime.imagem,
            tempoAtual: tempoAtual
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