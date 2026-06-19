let idadeCidadao = Number(prompt("Insira a sua idade atual:"));

let statusVoto = (idadeCidadao >= 18 && idadeCidadao <= 70)
    ? "Você é obrigado a votar!"
    : "Você não é obrigado a votar (Voto opcional ou não permitido).";

alert(statusVoto);