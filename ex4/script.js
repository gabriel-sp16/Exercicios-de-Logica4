let temperaturaAmbiente = Number(prompt("Insira a temperatura atual em °C:"));
let mensagemClassificacao;

if (temperaturaAmbiente < 0) {
    mensagemClassificacao = "Muito Frio";
} else if (temperaturaAmbiente <= 20) {
    mensagemClassificacao = "Frio";
} else if (temperaturaAmbiente <= 30) {
    mensagemClassificacao = "Agradável";
} else {
    mensagemClassificacao = "Calor";
}

alert("O clima está classificado como: " + mensagemClassificacao);