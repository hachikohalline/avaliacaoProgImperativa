const microondas = {
    opcoesDecomida: {"pipoca": 10,
        "macarrão": 8,
        "carne": 15,
        "feijão": 12,
        "brigadeiro": 8},

    preparo: function(comida, tempo){

        let tempoPratoEscolhido = this.opcoesDecomida[comida];
        
        if (comida != "pipoca" && comida != "macarrão" && comida != "carne" && comida != "feijão" && comida != "brigadeiro") {
            console.log("Prato Inexistente");

        } else {
                
            if (tempo >= tempoPratoEscolhido && tempo <= tempoPratoEscolhido * 2) {
                console.log("Prato pronto, bom apetite!!!");
            } else {
                if (tempo > tempoPratoEscolhido * 2 && tempo < tempoPratoEscolhido *3) {
                    console.log("Seu prato queimou.");
                }
                if (tempo > tempoPratoEscolhido * 3) {
                    console.log("kabumm");

                }
                if (tempo < tempoPratoEscolhido) {
                    console.log("Tempo insuficiente");
                }
            }

        }
    }
}

//testando as respostas para os valores
microondas.preparo("pipoca", 10);
microondas.preparo("pipoca", 5);
microondas.preparo("pipoca", 25);
microondas.preparo("pipoca", 50);
console.log("\n");
microondas.preparo("macarrão", 8);
microondas.preparo("macarrão", 5);
microondas.preparo("macarrão", 20);
microondas.preparo("macarrão", 50);
console.log("\n");
microondas.preparo("carne", 15);
microondas.preparo("carne", 5);
microondas.preparo("carne", 35);
microondas.preparo("carne", 50);
console.log("\n");
microondas.preparo("feijão", 12);
microondas.preparo("feijão", 5);
microondas.preparo("feijão", 25);
microondas.preparo("feijão", 50);
console.log("\n");
microondas.preparo("brigadeiro", 8);
microondas.preparo("brigadeiro", 3);
microondas.preparo("brigadeiro", 18);
microondas.preparo("brigadeiro", 50);


